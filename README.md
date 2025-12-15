# ImpactProof: Democratizing Local Public Goods Funding

> Connecting Small and Medium Enterprises (SMEs) with their local communities to fund essential public goods through verifiable, community driven impact investment built on the Base Blockchain.

---

## 🎯 Mission
ImpactProof  connects small and medium enterprises (SMEs) with their local communities to fund essential public goods that traditional financing overlooks—from open-source software integration to sustainability initiatives and community projects.

## 💡 The Problem
Small businesses and independent creators face critical barriers when trying to fund non-revenue-generating projects:

* **Traditional loans don't cover public goods:** Banks won't finance open-source software, sustainability audits, or community initiatives because they don't generate direct revenue.
* **Existing blockchain funding is misaligned:** Most Web3 grants target protocols and DApps, not practical, verified local business needs.
* **Impact is unverifiable:** Communities want to support local businesses but lack transparency and proof of how funds are used.
* **SMEs lack access to impact capital:** While corporations attract large scale ESG investment, small businesses with genuine local impact go unfunded.

## 🚀 The Solution
Proof of Impact is a decentralized platform that enables **quadratic funding** for local business public goods, enforced by **milestone-based on-chain verification**.

### How It Works

**Community Members → Fund Proposals → Smart Contract Escrow → Milestone Verification → Fund Release → Verified Impact**

1.  **SMEs Submit Proposals:** Local businesses propose specific public goods projects (e.g., "Install solar panels" or "Integrate open-source inventory system").
2.  **Community Quadratic Funding:** Local residents and impact investors contribute through quadratic funding, ensuring broad community support weighs more than large, singular donations (Sybil resistance is key).
3.  **Smart Contract Escrow:** Funds lock in immutable smart contracts with clear, pre-agreed milestone conditions.
4.  **Verification Layer:** Independent validators (community multi-sig or oracle network) verify milestone completion.
5.  **Automated Release:** Upon successful on-chain verification, smart contracts automatically release funds to the SME.
6.  **Impact Transparency:** All funding transactions and verification events are publicly auditable on-chain.
7.  **Base Blockchain** all countract are deployed on the base blockchain leveraging the base fast transaction and cheap gas fee.
## ✨ Key Features

### For SMEs
* 🏪 No-interest funding for essential public goods projects.
* 📋 Simple proposal process with clear milestone templates.
* 🔓 No equity dilution,keep full ownership.
* 📊 Build on-chain reputation through verified impact history.
* 🌐 Access new customers from engaged community supporters.

### For Community Members
* 🗳️ Democratic funding through quadratic voting.
* 🔍 Full transparency on fund usage and impact.
* 🏆 Verifiable outcomes, see real results in your community.
* 💰 Governance tokens for participation in funding decisions.
* 📈 Local impact dashboard tracking community transformation.

### For Impact Investors
* ✅ Verifiable impact with on-chain proof.
* 📍 Hyper-local targeting by geography or sector.
* 🔄 Portfolio diversification across multiple SMEs.
* 📊 Impact metrics automatically tracked and reported.
* 🤝 Direct SME relationships without intermediaries.

## 🏗️ Technical Architecture

### Smart Contracts (Solidity)
* **Funding Pool Contract:** Manages quadratic funding rounds and contribution aggregation.
* **Escrow Contract:** Holds funds until milestone verification is successful.
* **Verification Contract:** Handles validator consensus logic and milestone attestation.
* **Governance Contract:** Manages community voting on platform parameters.
* **Reputation Contract:** Tracks SME and validator scores for trust and Sybil resistance.

### Verification Mechanisms
* **Multi-sig Validation:** Community-elected validators (e.g., a 3-of-5 consensus model).
* **Oracle Integration:** Chainlink oracles for fetching objective external data (e.g., verified energy production data).
* **Document Upload:** IPFS-stored receipts, photos, and completion certificates.
* **Third-party Audits:** Integration with verified auditors for complex project validation.

### Technology Stack
* **Blockchain:** Ethereum L2 (Optimism/Arbitrum) or compatible EVM chain (for low-cost transactions).
* **Smart Contracts:** Solidity `^0.8.20`.
* **Frontend:** React + Next.js.
* **Storage:** IPFS (Pinata) for documents and media.
* **Oracles:** Chainlink for external data feeds.
* **Identity:** Worldcoin/Proof of Humanity for Sybil resistance in quadratic funding.

## 📊 Tokenomics

### $IMPACT Token
* **Total Supply:** 100,000,000 tokens.
* **Utility:**
    * **Governance:** Vote on funding rounds, validator elections, platform parameters.
    * **Staking:** Validators stake tokens to participate in the verification process.
    * **Rewards:** Community members earn tokens for participation and voting.

### Distribution
| Allocation | Percentage | Vesting/Details |
| :--- | :--- | :--- |
| Community Rewards | 30% | Vested over 4 years to incentivize long-term participation. |
| Ecosystem Development Fund | 25% | Used for partnerships and liquidity bootstrapping. |
| Team & Advisors | 20% | 2-year cliff, 4-year vest (Standard long-term commitment). |
| Initial Liquidity | 15% | For DEX pairing. |
| Strategic Partnerships & Grants | 10% | To secure key organizational and geographical partners. |

## 🎯 Use Cases (MVP Focus)

| Project Type | Example | Funding Breakdown | Verification Milestones |
| :--- | :--- | :--- | :--- |
| **Open-Source Integration** | A local bookstore implements an open-source POS system. | $5,000 for development and training. | (1) System installed, (2) Staff trained, (3) 30-day successful operation. |
| **Sustainability Projects** | A restaurant implements composting and solar energy. | $15,000 for equipment and installation. | (1) Equipment purchased, (2) Installation complete, (3) 3 months of energy data (via Oracle). |
| **Community Initiatives** | A café hosts weekly free coding workshops. | $3,000 for instructor fees and materials. | (1) 8 workshops completed, (2) 50+ participants, (3) Feedback surveys (IPFS upload). |

## 🗺️ Roadmap

### Phase 1: MVP (Hackathon Focus & Q2 2025)
* ✅ Smart contract development and audit (Funding, Escrow, basic Verification).
* ✅ Basic web interface for proposals and funding contribution.
* ✅ Multi-sig verification system pilot.
* ✅ Pilot with 3 SMEs in one city (Test Case).

### Phase 2: Community Launch (Q3 2025)
* 📱 Mobile-responsive interface.
* 🔗 Chainlink oracle integration for objective data.
* 🏛️ DAO governance implementation.
* 🎯 Expand to 50 SMEs across 3 cities.
* 📊 Impact dashboard and analytics.

### Phase 3: Scale & Ecosystem (Q4 2025)
* 🌐 Multi-chain deployment strategy.
* 🤖 AI-powered proposal assistance.
* 🔌 API for third-party integrations (e.g., accounting software).
* 🏆 Validator reputation and rewards system implemented.
* 📈 **Target:** 500 SMEs, 10,000 community members.

### Phase 4: Global Expansion (2026)
* 🌍 International markets penetration.
* 🏦 Fiat on-ramps for non-crypto users.
* 🤝 Partnerships with SME associations.
* 📜 Compliance frameworks for multiple jurisdictions.

## 📈 Success Metrics

| Platform Metrics | Impact Metrics |
| :--- | :--- |
| Number of funded SMEs | $\text{CO}_2$ emissions reduced (verified) |
| Total funding distributed | Open-source projects deployed |
| Number of active community members | Community events hosted |
| Verification success rate | Jobs created/supported |
| Average time from proposal to funding | Local economic impact ($) |

---

## 🤝 Contributing

We welcome contributions from developers, designers, community organizers, and SME owners!

### How to Contribute
1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

### Development Setup
```bash
# Clone the repository
git clone [https://github.com/proofofimpact/platform.git](https://github.com/proofofimpact/platform.git)

# Install dependencies
cd platform
npm install

# Set up environment variables
cp .env.example .env

# Run local development
npm run dev

# Run tests
npm test