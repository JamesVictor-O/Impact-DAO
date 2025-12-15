// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

interface IProjectEscrowInit {
    function initialize(
        address _sme, 
        address _verificationRegistry, 
        uint256 _projectId,
        address _impactFundingPool
    ) external;
}

contract ImpactFundingPool {
 
    address public owner;
    address public matchingFundAddress;
    address public escrowImplementation; 
    address public verificationRegistry;

    uint256 public nextProjectId = 1;

    struct ProjectData {
        string name;
        string description;
        string category;
        uint64 startDate; 
        uint64 endDate;   
        uint256 fundingGoal;
        uint256 totalRaised;
        address sme;
        string metadataURI;
        address escrow; 
        uint256 uniqueContributors;
        bool active;
        bool fundsForwarded; 
    }

    mapping(uint256 => ProjectData) public projects;
    mapping(uint256 => mapping(address => uint256)) public contributions;


    event ProposalSubmitted(uint256 indexed projectId, address indexed sme, address escrow);
    event ContributionReceived(uint256 indexed projectId, address indexed contributor, uint256 amount);
    event FundsForwardedToEscrow(uint256 indexed projectId, address indexed escrow, uint256 amount);
    event EscrowImplementationUpdated(address indexed newImpl);
    event MatchingFundUpdated(address indexed newFund);
    event VerificationRegistryUpdated(address indexed newRegistry);

    error NotOwner();
    error InvalidInput();
    error ProjectInactive();
    error FundingClosed();
    error NoEscrowImplementation();
    error RegistryNotSet();
    error FundingRoundNotEnded();
    error FundsAlreadyForwarded();
    error NoFundsToForward();

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    constructor(address _matchingFund, address _verificationRegistry) {
        owner = msg.sender;
        matchingFundAddress = _matchingFund;
        verificationRegistry = _verificationRegistry;
    }

    function setMatchingFund(address _fund) external onlyOwner {
        matchingFundAddress = _fund;
        emit MatchingFundUpdated(_fund);
    }

    function setEscrowImplementation(address _impl) external onlyOwner {
        escrowImplementation = _impl;
        emit EscrowImplementationUpdated(_impl);
    }

    function setVerificationRegistry(address _registry) external onlyOwner {
        verificationRegistry = _registry;
        emit VerificationRegistryUpdated(_registry);
    }

    function submitProposal(
        string memory _name,
        string memory _description,
        string memory _category,
        uint64 _startDate,
        uint64 _endDate,
        uint256 _fundingGoal,
        string memory _metadataURI
    ) external returns (uint256 projectId) {
        if (_fundingGoal == 0 || _endDate <= block.timestamp || _startDate > _endDate) {
            revert InvalidInput();
        }

        address escrow = _deployEscrow(msg.sender, nextProjectId);

        uint256 currentId = nextProjectId++;
        projects[currentId] = ProjectData({
            name: _name,
            description: _description,
            category: _category,
            startDate: _startDate,
            endDate: _endDate,
            fundingGoal: _fundingGoal,
            totalRaised: 0,
            sme: msg.sender,
            metadataURI: _metadataURI,
            escrow: escrow,
            uniqueContributors: 0,
            active: true,
            fundsForwarded: false
        });

        emit ProposalSubmitted(currentId, msg.sender, escrow);
        return currentId;
    }

    function contribute(uint256 _projectId) external payable {
        ProjectData storage p = projects[_projectId];
        if (!p.active) revert ProjectInactive();
        if (block.timestamp > p.endDate) revert FundingClosed();
        if (msg.value == 0) revert InvalidInput();

        if (contributions[_projectId][msg.sender] == 0) {
            p.uniqueContributors += 1;
        }

        contributions[_projectId][msg.sender] += msg.value;
        p.totalRaised += msg.value;

        emit ContributionReceived(_projectId, msg.sender, msg.value);
    }

  
    function forwardToEscrow(uint256 _projectId) external {
        ProjectData storage p = projects[_projectId];
        if (p.escrow == address(0)) revert NoEscrowImplementation();
        if (!p.active) revert ProjectInactive();
        if (block.timestamp <= p.endDate) revert FundingRoundNotEnded();
        if (p.fundsForwarded) revert FundsAlreadyForwarded();
        
       
        uint256 amount = p.totalRaised;
        if (amount == 0) revert NoFundsToForward();
        if (address(this).balance < amount) revert NoFundsToForward();
        p.fundsForwarded = true;

        (bool ok, ) = p.escrow.call{value: amount}("");
        require(ok, "Escrow transfer failed");
        
        emit FundsForwardedToEscrow(_projectId, p.escrow, amount);
    }

    /**
     * @notice Get project contribution data for escrow refund calculations
     * @param _projectId The project ID
     * @return totalRaised Total amount raised for this project
     * @return active Whether the project is still active
     */
    function getProjectContributionData(uint256 _projectId) external view returns (uint256 totalRaised, bool active) {
        ProjectData storage p = projects[_projectId];
        return (p.totalRaised, p.active);
    }

    function _deployEscrow(address _sme, uint256 _projectId) internal returns (address) {
        if (escrowImplementation == address(0)) revert NoEscrowImplementation();
        if (verificationRegistry == address(0)) revert RegistryNotSet();

        address clone = _clone(escrowImplementation);
        IProjectEscrowInit(clone).initialize(_sme, verificationRegistry, _projectId, address(this));
        return clone;
    }

    function _clone(address impl) internal returns (address instance) {
        assembly {
            let ptr := mload(0x40)
            mstore(ptr, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)
            mstore(add(ptr, 0x14), shl(0x60, impl))
            mstore(add(ptr, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)
            instance := create(0, ptr, 0x37)
        }
        require(instance != address(0), "clone failed");
    }
}