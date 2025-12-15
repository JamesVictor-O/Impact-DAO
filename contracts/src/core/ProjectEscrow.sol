// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

interface IImpactFundingPool {
    function contributions(uint256 _projectId, address _contributor) external view returns (uint256);
    function getProjectContributionData(uint256 _projectId) external view returns (uint256 totalRaised, bool active);
}

contract ProjectEscrow {
    address public sme;
    address public verificationRegistry;
    address public impactFundingPool; // Reference to pool to query contribution data
    uint256 public projectId;
    bool public initialized;

    uint256 private _status;
    modifier nonReentrant() {
        require(_status == 0, "ReentrancyGuard");
        _status = 1;
        _;
        _status = 0;
    }

    event FundsReceived(address indexed from, uint256 amount);
    event MilestonePayout(uint256 indexed projectId, uint256 indexed milestoneId, address indexed to, uint256 amount);
    event EmergencyWithdrawal(address indexed to, uint256 amount);
    event RefundIssued(address indexed contributor, uint256 amount);
    event BulkRefundIssued(uint256 totalRefunded, uint256 contributorCount);

    error NotRegistry();
    error NotSme();
    error InvalidAmount();
    error AlreadyInitialized();
    error ZeroAddress();
    error NoRefundableAmount();
    error InvalidContributor();

    function initialize(
        address _sme, 
        address _verificationRegistry, 
        uint256 _projectId,
        address _impactFundingPool
    ) external {
        if (initialized) revert AlreadyInitialized();
        if (_sme == address(0) || _verificationRegistry == address(0) || _impactFundingPool == address(0)) {
            revert ZeroAddress();
        }
        sme = _sme;
        verificationRegistry = _verificationRegistry;
        impactFundingPool = _impactFundingPool;
        projectId = _projectId;
        initialized = true;
        _status = 0;
    }

    modifier onlyRegistry() {
        if (msg.sender != verificationRegistry) revert NotRegistry();
        _;
    }

    modifier onlySme() {
        if (msg.sender != sme) revert NotSme();
        _;
    }

    receive() external payable {
        emit FundsReceived(msg.sender, msg.value);
    }

    function releaseForMilestone(uint256 milestoneId, address to, uint256 amount) external onlyRegistry nonReentrant {
        if (amount == 0 || amount > address(this).balance) revert InvalidAmount();
        (bool ok, ) = to.call{value: amount}("");
        require(ok, "Transfer failed");
        emit MilestonePayout(projectId, milestoneId, to, amount);
    }


    function calculateRefundAmount(address contributor) public view returns (uint256 refundAmount) {
        if (contributor == address(0)) revert InvalidContributor();
        
        // Get contributor's original contribution from the funding pool
        uint256 contributorAmount = IImpactFundingPool(impactFundingPool).contributions(projectId, contributor);
        if (contributorAmount == 0) return 0;
        
        // Get total raised for this project
        (uint256 totalRaised, ) = IImpactFundingPool(impactFundingPool).getProjectContributionData(projectId);
        if (totalRaised == 0) return 0;
        
        // Calculate proportional refund: (contributorAmount / totalRaised) * remainingBalance
        uint256 remainingBalance = address(this).balance;
        refundAmount = (contributorAmount * remainingBalance) / totalRaised;
    }
    function refundContributor(address contributor) external nonReentrant {
        uint256 refundAmount = calculateRefundAmount(contributor);
        if (refundAmount == 0) revert NoRefundableAmount();
        
        (bool ok, ) = contributor.call{value: refundAmount}("");
        require(ok, "Refund transfer failed");
        emit RefundIssued(contributor, refundAmount);
    }


    function refundContributors(address[] calldata contributors) external nonReentrant {
        uint256 totalRefunded = 0;
        uint256 successCount = 0;
        
        for (uint256 i = 0; i < contributors.length; i++) {
            uint256 refundAmount = calculateRefundAmount(contributors[i]);
            if (refundAmount > 0) {
                (bool ok, ) = contributors[i].call{value: refundAmount}("");
                if (ok) {
                    totalRefunded += refundAmount;
                    successCount++;
                    emit RefundIssued(contributors[i], refundAmount);
                }
            }
        }
        
        emit BulkRefundIssued(totalRefunded, successCount);
    }

}
