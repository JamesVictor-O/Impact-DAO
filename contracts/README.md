# Smart Contract Architecture for Proof of Impact

This document outlines the core smart contract system for ImpactDAO, a decentralized platform enabling quadratic funding and milestone-based verification for local public goods projects.

## 🎯 Architecture Overview

The system is built around three primary contracts that interact to manage proposals, funds, and verification:

1.  `ImpactFundingPool` (The Gateway & Aggregator)
2.  `ProjectEscrow` (The Fund Keeper & Distributor)
3.  `VerificationRegistry` (The Proof & Consensus Layer)

---

## 1. Governance and Token Contracts

These foundational contracts manage platform parameters and the native token.

### 1.1 `IMPACTToken.sol` (ERC-20 Standard)

* **Role:** The native utility and governance token (`$IMPACT`).
* **Key Functions:**
    * `mint(address to, uint256 amount)`: Used by the **Governance Contract** to distribute rewards to contributors and validators.
    * `transfer()` / `transferFrom()`: Standard ERC-20 functions.

### 1.2 `GovernanceDAO.sol`

* **Role:** Manages platform-wide parameters, upgrades, and large-scale funding decisions (e.g., funding a specific grant round).
* **Dependencies:** Owns the `ImpactFundingPool` and `VerificationRegistry` contracts.
* **Key Functions (Voting on):**
    * `setContributionFee(uint256 newFee)`: Adjusts the fee taken from contributions.
    * `setMinStake(uint256 minStake)`: Sets the minimum $IMPACT stake for a validator.
    * `upgradeContract(address newAddress)`: Handles contract upgrades via proxy (future scope).

---

## 2. Core Operational Contracts

### 2.1 `ImpactFundingPool.sol`

* **Role:** Manages the proposal lifecycle, handles incoming contributions, and calculates quadratic funding matches. This is the **primary user-facing contract for contributions.**
* **Storage:** Stores a mapping of `projectId` to `ProjectData` struct.
* **Key Data Structure:**
    ```solidity
    struct ProjectData {
        address sme;            // The business submitting the proposal
        uint256 fundingGoal;    // Target funding amount
        uint256 totalRaised;    // Total contributions received
        uint256 uniqueContributors; // For quadratic funding calculation
        uint256 fundingDeadline;
        ProjectEscrow escrowAddress; // Address of the linked Escrow Contract
        bool isFunded;
    }
    ```
* **Key Functions:**
    * `submitProposal(uint256 goal, string memory metadataURI)`: Creates a new project entry and deploys a new instance of `ProjectEscrow.sol`.
    * `contribute(uint256 projectId) payable`: Accepts the contribution (in native currency or stablecoin). Updates `totalRaised` and `uniqueContributors`.
    * `calculateQFMatch(uint256 projectId) view`: **(Critical Function)** Calculates the match required from the central development fund based on the quadratic formula: $$ \left( \sum_{i} \sqrt{C_{i}} \right)^{2} $$ where $C_{i}$ is the contribution from unique user $i$.
    * `finalizeFunding(uint256 projectId)`: Called when `totalRaised` hits `fundingGoal`. Transfers matched funds (if any) to the `ProjectEscrow`.

### 2.2 `ProjectEscrow.sol`

* **Role:** A standalone, project-specific vault that holds funds and manages the milestone release logic. **Each project gets a unique instance of this contract.**
* **Storage:** Stores project-specific milestones and the current balance.
* **Dependencies:** The only contract authorized to call `releaseFunds` is the **VerificationRegistry**.
* **Key Data Structure:**
    ```solidity
    struct Milestone {
        uint256 amount;          // Funds to be released upon completion
        string verificationHash; // IPFS hash of required verification docs
        bool isVerified;         // Status set by VerificationRegistry
        address payable recipient;
    }
    ```
* **Key Functions:**
    * `deposit()`: Receives funds from the `ImpactFundingPool`.
    * `requestRelease(uint256 milestoneIndex)`: Called by the SME to signal that a milestone is complete and verification should begin.
    * `releaseFunds(uint256 milestoneIndex)`: **(Controlled Access)** Called only by the `VerificationRegistry` upon successful attestation. Transfers the milestone `amount` to the SME.

### 2.3 `VerificationRegistry.sol`

* **Role:** Manages the validator pool, handles consensus, and serves as the single source of truth for milestone completion.
* **Storage:** Stores the list of staked validators and their reputation scores.
* **Dependencies:** Calls the `releaseFunds` function on the `ProjectEscrow` contract.
* **Key Functions:**
    * `stakeForValidator()`: Allows users to stake $IMPACT$ to join the validator pool.
    * `proposeVerification(uint256 projectId, uint256 milestoneIndex, address escrowAddress)`: Creates a new verification challenge upon an SME's release request. Randomly selects a multi-sig committee of validators.
    * `attestMilestone(uint256 challengeId, bool verified)`: Called by validators to vote on the completion of a milestone.
    * `resolveChallenge(uint256 challengeId)`: **(Consensus Logic)** Called after voting period ends. Checks if the required consensus (e.g., 3 out of 5) is met.
        * **If Consensus YES:** Calls `ProjectEscrow.releaseFunds(milestoneIndex)`. Updates validator reputation.
        * **If Consensus NO:** Penalizes the SME or opens an appeal period. Punishes validators who voted against consensus.

---

## 3. Deployment Flow (Order of Operations)

1.  Deploy `IMPACTToken.sol`.
2.  Deploy `GovernanceDAO.sol` (setting `IMPACTToken` address).
3.  Deploy `VerificationRegistry.sol` (setting `IMPACTToken` and `GovernanceDAO` addresses).
4.  Deploy `ImpactFundingPool.sol` (setting `VerificationRegistry` and `GovernanceDAO` addresses).
5.  Set required roles (e.g., set `ImpactFundingPool` as the only address able to deploy new `ProjectEscrow` instances).

## 4. Key Hackathon Deliverables

For the MVP, focus on these critical interactions:

| Feature | Contract(s) Involved | Priority |
| :--- | :--- | :--- |
| **Quadratic Funding Logic** | `ImpactFundingPool.sol` | HIGH (Core mechanic) |
| **Escrow Deployment & Deposit** | `ImpactFundingPool.sol`, `ProjectEscrow.sol` | HIGH (Fund security) |
| **Multi-sig Verification** | `VerificationRegistry.sol` | HIGH (Proof of Impact) |
| **Fund Release** | `ProjectEscrow.sol`, `VerificationRegistry.sol` | CRITICAL (Goal) |

## 5. Security & Auditing Notes

* **Re-entrancy Protection:** All transfer functions must use OpenZeppelin's ReentrancyGuard or the Checks-Effects-Interactions pattern.
* **Access Control:** Use the OpenZeppelin `Ownable` or `AccessControl` libraries to restrict critical functions (e.g., `releaseFunds` must only be callable by `VerificationRegistry`).
* **Overflows:** Use Solidity `^0.8.0` to benefit from default safe math.
* **Gas Optimization:** Since this is L2, focus on clear, readable logic first, then optimize loops (especially in QF calculation) later.