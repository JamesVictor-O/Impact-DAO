import React from "react";
import { VerificationCard } from "./VerificationCard";
import { GovernanceCard } from "./GovernanceCard";
import type { VerificationItem, Proposal } from "./types";
import {
  ValidatorProfile,
  NetworkStatus,
  ActivityLog,
} from "./ValidatorPanels";
import { Button } from "../ui/button";

const VERIFICATION_ITEMS: VerificationItem[] = [
  {
    id: "8821",
    title: "Community Solar Array Phase 1",
    organization: "GreenTech Collective",
    category: "Infrastructure",
    categoryColorClass: "border-emerald-500 text-emerald-300 bg-emerald-500/10",
    impact: "+1,250 DAI",
    description:
      "Installation of the first 20 solar panels on the community center roof. Wiring is complete and inspection passed by local authority. View attached certificate.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8JouXt9fzy7YW9-4GhL2EH_uaZDmz9p9tqgBV5-xAyOBCha820NHNwxlM3DekPa3czrDs78H0xwtBYHpHm7Se-eoPd6eclqsKREVxKhTnHSrtgeoTUYTgRkpZhtvWzq-f4CqSXveu9HEpCq-FLTppcMUYbM9TRuE6x2bHcWOIFTDKZV1uWODKDuBy6Yz99kQFSJgRigDyntSRWiEicVRf3WT0kow4p5VjVyv9KLLmAGNAadIXAgId5dRCSSDv7_KvpSB5mqnttuF",
    milestone: 1,
    totalMilestones: 4,
    progress: 25,
    status: "pending",
    evidenceCount: 6,
  },
  {
    id: "9042",
    title: "Plastic Recycling Workshop #3",
    organization: "EcoEducate",
    category: "Education",
    categoryColorClass: "border-violet-500 text-violet-300 bg-violet-500/10",
    impact: "+450 DAI",
    description:
      "Successfully conducted the third workshop on plastic upcycling for 50 local students. Attendance sheet and video summary uploaded.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsJZSRZRBYgkYWJs0ayKHnSaDh54167dFi8OPX9PgLf_qyAaytrK8BZuifF_1ADZrrTmuy5pvJApril9JNTaxome4u92tLvZKVsj9gomBe5-4b0zoS93MHpjezYazQbrhipfgcINhTL2llq1VsucizH7S6vA1bQZg2gy56LODk30tNRmwEZ_pol2YBADEN",
    milestone: 3,
    totalMilestones: 4,
    progress: 75,
    status: "pending",
    evidenceCount: 4,
  },
];

const PROPOSALS: Proposal[] = [
  {
    id: "124",
    title: "Increase Quadratic Matching Cap to 50k",
    daysRemaining: 2,
    category: "Active",
    votesFor: 65,
    votesAgainst: 20,
    votesAbstain: 15,
    userPower: "450 VP",
  },
  {
    id: "126",
    title: "Add “Renewable Energy” as Core Category",
    daysRemaining: 5,
    category: "Active",
    votesFor: 88,
    votesAgainst: 5,
    votesAbstain: 7,
    userPower: "450 VP",
  },
];

export const VerificationPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-10 md:px-8 lg:px-16">
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Verification &amp; Governance
          </h1>
          <p className="mt-1 text-sm md:text-base text-text-muted max-w-2xl">
            Review impact milestones to unlock funding and participate in
            community governance decisions.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Main column */}
          <div className="flex-1 space-y-6">
            {/* Verification Queue */}
            <section className="bg-surface-dark rounded-2xl border border-surface-highlight overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4 md:p-5 border-b border-surface-highlight">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    ✓
                  </span>
                  <h2 className="text-sm md:text-base font-bold text-white">
                    Verification Queue
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 px-2 text-xs border-surface-highlight text-text-secondary hover:text-white"
                  >
                    All
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 px-2 text-xs border-surface-highlight text-text-secondary hover:text-white"
                  >
                    Pending
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 px-2 text-xs border-surface-highlight text-text-secondary hover:text-white"
                  >
                    Disputed
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 px-2 text-xs border-surface-highlight text-text-secondary hover:text-white"
                  >
                    Verified
                  </Button>
                </div>
              </div>
              <div className="divide-y divide-surface-highlight">
                {VERIFICATION_ITEMS.map((item) => (
                  <VerificationCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* Active Governance */}
            <section className="bg-surface-dark rounded-2xl border border-surface-highlight">
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-surface-highlight">
                <h2 className="text-sm md:text-base font-bold text-white">
                  Active Governance
                </h2>
                <button className="text-xs text-primary hover:underline">
                  View All Proposals
                </button>
              </div>
              <div className="divide-y divide-surface-highlight">
                {PROPOSALS.map((proposal) => (
                  <GovernanceCard key={proposal.id} proposal={proposal} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar column */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            <ValidatorProfile />
            <NetworkStatus />
            <ActivityLog />
          </div>
        </div>
      </div>
    </div>
  );
};
