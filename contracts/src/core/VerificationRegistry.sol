// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

interface IProjectEscrow {
    function releaseForMilestone(uint256 milestoneId, address to, uint256 amount) external;
}


contract VerificationRegistry {
 
    address public owner;

    struct Challenge {
        bool active;
        address escrow;
        address payoutTo;
        uint256 payoutAmount;
        uint256 projectId;
        uint256 milestoneId;
        uint64 deadline; 
        uint256 approvals;
        uint256 rejections;
        uint256 quorum;
        address[] validators;
        mapping(address => bool) voted;
        mapping(address => bool) isValidator;
    }


    mapping(uint256 => mapping(uint256 => Challenge)) private challenges;

   
    event ChallengeStarted(
        uint256 indexed projectId,
        uint256 indexed milestoneId,
        address indexed escrow,
        address payoutTo,
        uint256 payoutAmount,
        uint256 quorum,
        uint64 deadline
    );

    event Attested(
        uint256 indexed projectId,
        uint256 indexed milestoneId,
        address indexed validator,
        bool approved
    );

    event ChallengeResolved(
        uint256 indexed projectId,
        uint256 indexed milestoneId,
        bool approved,
        uint256 approvals,
        uint256 rejections
    );

   
    error NotOwner();
    error ChallengeExists();
    error ChallengeInactive();
    error NotValidator();
    error AlreadyVoted();
    error QuorumTooLow();
    error InvalidInput();
    error VotingClosed();

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "owner=0");
        owner = newOwner;
    }


    function startChallenge(
        uint256 projectId,
        uint256 milestoneId,
        address escrow,
        address payoutTo,
        uint256 payoutAmount,
        address[] calldata validators,
        uint256 quorum,
        uint64 deadline
    ) external onlyOwner {
        if (escrow == address(0) || payoutTo == address(0) || payoutAmount == 0) revert InvalidInput();
        if (validators.length == 0 || quorum == 0 || quorum > validators.length) revert QuorumTooLow();

        Challenge storage c = challenges[projectId][milestoneId];
        if (c.active) revert ChallengeExists();

        c.active = true;
        c.escrow = escrow;
        c.payoutTo = payoutTo;
        c.payoutAmount = payoutAmount;
        c.projectId = projectId;
        c.milestoneId = milestoneId;
        c.quorum = quorum;
        c.deadline = deadline;
        c.validators = validators;
        for (uint256 i = 0; i < validators.length; i++) {
            c.isValidator[validators[i]] = true;
        }

        emit ChallengeStarted(projectId, milestoneId, escrow, payoutTo, payoutAmount, quorum, deadline);
    }
    function attestMilestone(
        uint256 projectId,
        uint256 milestoneId,
        bool approve
    ) external {
        Challenge storage c = challenges[projectId][milestoneId];
        if (!c.active) revert ChallengeInactive();
        if (c.deadline != 0 && block.timestamp > c.deadline) revert VotingClosed();
        if (!c.isValidator[msg.sender]) revert NotValidator();
        if (c.voted[msg.sender]) revert AlreadyVoted();

        c.voted[msg.sender] = true;
        if (approve) {
            c.approvals += 1;
        } else {
            c.rejections += 1;
        }

        emit Attested(projectId, milestoneId, msg.sender, approve);
    }


    function resolveChallenge(uint256 projectId, uint256 milestoneId) external {
        Challenge storage c = challenges[projectId][milestoneId];
        if (!c.active) revert ChallengeInactive();
        if (c.deadline != 0 && block.timestamp <= c.deadline) revert VotingClosed();

        bool approved = c.approvals >= c.quorum;

        c.active = false;

        if (approved) {
            IProjectEscrow(c.escrow).releaseForMilestone(c.milestoneId, c.payoutTo, c.payoutAmount);
        }

        emit ChallengeResolved(projectId, milestoneId, approved, c.approvals, c.rejections);
    }

    
    function getChallenge(
        uint256 projectId,
        uint256 milestoneId
    )
        external
        view
        returns (
            bool active,
            address escrow,
            address payoutTo,
            uint256 payoutAmount,
            uint256 approvals,
            uint256 rejections,
            uint256 quorum,
            uint64 deadline,
            address[] memory validators
        )
    {
        Challenge storage c = challenges[projectId][milestoneId];
        return (
            c.active,
            c.escrow,
            c.payoutTo,
            c.payoutAmount,
            c.approvals,
            c.rejections,
            c.quorum,
            c.deadline,
            c.validators
        );
    }
}

