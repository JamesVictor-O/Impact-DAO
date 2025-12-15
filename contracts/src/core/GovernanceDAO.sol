// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract GovernanceDAO {
    IERC20 public immutable impactToken;
    address public impactFundingPool;
    
    uint256 public constant VOTING_PERIOD = 7 days;
    uint256 public constant EXECUTION_DELAY = 1 days;
    uint256 public constant QUORUM_THRESHOLD = 4; // 4% of total supply
    uint256 public constant PROPOSAL_THRESHOLD = 1; // 1% of total supply to propose
    
    struct Proposal {
        uint256 id;
        address proposer;
        string description;
        uint256 forVotes;
        uint256 againstVotes;
        uint256 abstainVotes;
        uint256 startTime;
        uint256 endTime;
        bool executed;
        ProposalType proposalType;
        bytes callData;
        address target;
    }
    
    enum ProposalType {
        PARAMETER_CHANGE,  // Change protocol parameters
        TREASURY_ALLOCATION, // Allocate matching funds
        FEE_UPDATE,        // Update protocol fees
        VALIDATOR_STAKE,   // Update validator staking requirements
        EMERGENCY          // Emergency actions
    }
    
    struct ProtocolParams {
        uint256 protocolFeeBps; // basis points (e.g., 100 = 1%)
        uint256 validatorStakeAmount; // minimum stake for validators
        uint256 matchingFundAllocationBps; // % of treasury for matching
    }
    
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;
    mapping(uint256 => mapping(address => uint256)) public votesCast;
    uint256 public proposalCount;
    
    ProtocolParams public params;
    
    event ProposalCreated(
        uint256 indexed proposalId,
        address indexed proposer,
        ProposalType proposalType,
        string description
    );
    event VoteCast(
        uint256 indexed proposalId,
        address indexed voter,
        uint8 support, // 0=against, 1=for, 2=abstain
        uint256 votes
    );
    event ProposalExecuted(uint256 indexed proposalId);
    event ParametersUpdated(
        uint256 protocolFeeBps,
        uint256 validatorStakeAmount,
        uint256 matchingFundAllocationBps
    );
    event MatchingFundsAllocated(address indexed to, uint256 amount);
    
    error NotEnoughTokens();
    error ProposalNotFound();
    error VotingClosed();
    error ProposalNotExecutable();
    error AlreadyVoted();
    error InvalidProposal();
    error NotAuthorized();
    
    constructor(address _impactToken, address _impactFundingPool) {
        impactToken = IERC20(_impactToken);
        impactFundingPool = _impactFundingPool;
        
        params = ProtocolParams({
            protocolFeeBps: 100, // 1% default
            validatorStakeAmount: 1000e18, // 1000 tokens default
            matchingFundAllocationBps: 5000 // 50% default
        });
    }
    
    function createProposal(
        string memory description,
        ProposalType proposalType,
        address target,
        bytes memory callData
    ) external returns (uint256) {
        uint256 proposerBalance = impactToken.balanceOf(msg.sender);
        uint256 totalSupply = getTotalSupply();
        uint256 threshold = (totalSupply * PROPOSAL_THRESHOLD) / 100;
        
        if (proposerBalance < threshold) revert NotEnoughTokens();
        
        uint256 proposalId = ++proposalCount;
        proposals[proposalId] = Proposal({
            id: proposalId,
            proposer: msg.sender,
            description: description,
            forVotes: 0,
            againstVotes: 0,
            abstainVotes: 0,
            startTime: block.timestamp,
            endTime: block.timestamp + VOTING_PERIOD,
            executed: false,
            proposalType: proposalType,
            callData: callData,
            target: target
        });
        
        emit ProposalCreated(proposalId, msg.sender, proposalType, description);
        return proposalId;
    }
    
    function vote(uint256 proposalId, uint8 support) external {
        Proposal storage proposal = proposals[proposalId];
        if (proposal.id == 0) revert ProposalNotFound();
        if (block.timestamp > proposal.endTime) revert VotingClosed();
        if (hasVoted[proposalId][msg.sender]) revert AlreadyVoted();
        
        uint256 votingPower = impactToken.balanceOf(msg.sender);
        if (votingPower == 0) revert NotEnoughTokens();
        
        hasVoted[proposalId][msg.sender] = true;
        votesCast[proposalId][msg.sender] = votingPower;
        
        if (support == 1) {
            proposal.forVotes += votingPower;
        } else if (support == 0) {
            proposal.againstVotes += votingPower;
        } else if (support == 2) {
            proposal.abstainVotes += votingPower;
        } else {
            revert InvalidProposal();
        }
        
        emit VoteCast(proposalId, msg.sender, support, votingPower);
    }
    
    function executeProposal(uint256 proposalId) external {
        Proposal storage proposal = proposals[proposalId];
        if (proposal.id == 0) revert ProposalNotFound();
        if (proposal.executed) revert ProposalNotExecutable();
        if (block.timestamp < proposal.endTime + EXECUTION_DELAY) revert ProposalNotExecutable();
        
        uint256 totalSupply = getTotalSupply();
        uint256 quorum = (totalSupply * QUORUM_THRESHOLD) / 100;
        uint256 totalVotes = proposal.forVotes + proposal.againstVotes + proposal.abstainVotes;
        
        if (totalVotes < quorum) revert ProposalNotExecutable();
        if (proposal.forVotes <= proposal.againstVotes) revert ProposalNotExecutable();
        
        proposal.executed = true;
        
        if (proposal.proposalType == ProposalType.PARAMETER_CHANGE) {
            _updateParameters(proposal.callData);
        } else if (proposal.proposalType == ProposalType.TREASURY_ALLOCATION) {
            _allocateMatchingFunds(proposal.callData);
        } else if (proposal.proposalType == ProposalType.FEE_UPDATE) {
            _updateFees(proposal.callData);
        } else if (proposal.proposalType == ProposalType.VALIDATOR_STAKE) {
            _updateValidatorStake(proposal.callData);
        } else if (proposal.proposalType == ProposalType.EMERGENCY) {
            _executeEmergency(proposal.target, proposal.callData);
        }
        
        emit ProposalExecuted(proposalId);
    }
    
    function _updateParameters(bytes memory data) internal {
        (uint256 feeBps, uint256 stakeAmount, uint256 allocationBps) = 
            abi.decode(data, (uint256, uint256, uint256));
        
        params.protocolFeeBps = feeBps;
        params.validatorStakeAmount = stakeAmount;
        params.matchingFundAllocationBps = allocationBps;
        
        emit ParametersUpdated(feeBps, stakeAmount, allocationBps);
    }
    
    function _allocateMatchingFunds(bytes memory data) internal {
        (address to, uint256 amount) = abi.decode(data, (address, uint256));
        uint256 balance = impactToken.balanceOf(address(this));
        if (amount > balance) revert InvalidProposal();
        
        require(impactToken.transfer(to, amount), "Transfer failed");
        emit MatchingFundsAllocated(to, amount);
    }
    
    function _updateFees(bytes memory data) internal {
        uint256 newFeeBps = abi.decode(data, (uint256));
        if (newFeeBps > 1000) revert InvalidProposal(); // max 10%
        params.protocolFeeBps = newFeeBps;
        emit ParametersUpdated(newFeeBps, params.validatorStakeAmount, params.matchingFundAllocationBps);
    }
    
    function _updateValidatorStake(bytes memory data) internal {
        uint256 newStake = abi.decode(data, (uint256));
        params.validatorStakeAmount = newStake;
        emit ParametersUpdated(params.protocolFeeBps, newStake, params.matchingFundAllocationBps);
    }
    
    function _executeEmergency(address target, bytes memory data) internal {
        (bool success, ) = target.call(data);
        require(success, "Emergency execution failed");
    }
    
    function allocateMatchingFundsToPool(uint256 amount) external {
        require(msg.sender == impactFundingPool || msg.sender == address(this), "Not authorized");
        uint256 balance = impactToken.balanceOf(address(this));
        if (amount > balance) revert InvalidProposal();
        require(impactToken.transfer(impactFundingPool, amount), "Transfer failed");
        emit MatchingFundsAllocated(impactFundingPool, amount);
    }
    
    function getTotalSupply() public view returns (uint256) {
        return impactToken.totalSupply();
    }
    
    function getProposal(uint256 proposalId) external view returns (Proposal memory) {
        return proposals[proposalId];
    }
    
    function getVotingPower(address voter) external view returns (uint256) {
        return impactToken.balanceOf(voter);
    }
    
    function canExecute(uint256 proposalId) external view returns (bool) {
        Proposal memory proposal = proposals[proposalId];
        if (proposal.id == 0 || proposal.executed) return false;
        if (block.timestamp < proposal.endTime + EXECUTION_DELAY) return false;
        
        uint256 totalSupply = getTotalSupply();
        uint256 quorum = (totalSupply * QUORUM_THRESHOLD) / 100;
        uint256 totalVotes = proposal.forVotes + proposal.againstVotes + proposal.abstainVotes;
        
        return totalVotes >= quorum && proposal.forVotes > proposal.againstVotes;
    }
}

