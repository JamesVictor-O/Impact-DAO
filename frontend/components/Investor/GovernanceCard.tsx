import React from "react";
import type { Proposal } from "./types";
import { Button } from "../ui/button";

interface Props {
  proposal: Proposal;
}

export const GovernanceCard: React.FC<Props> = ({ proposal }) => {
  return (
    <div className="p-5 md:p-6 hover:bg-surface-highlight/30 transition-colors rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              {proposal.category}
            </span>
            <span className="text-text-secondary text-[11px] sm:text-xs">
              Prop #{proposal.id} • Ends in {proposal.daysRemaining} days
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white">
            {proposal.title}
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs text-text-secondary">
            Your Power:
          </span>
          <span className="text-sm font-bold text-white">
            {proposal.userPower}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <div className="flex h-3 w-full rounded-full overflow-hidden bg-surface-highlight">
          <div
            className="bg-primary transition-all duration-500"
            style={{ width: `${proposal.votesFor}%` }}
            title={`For: ${proposal.votesFor}%`}
          />
          <div
            className="bg-red-500 transition-all duration-500"
            style={{ width: `${proposal.votesAgainst}%` }}
            title={`Against: ${proposal.votesAgainst}%`}
          />
          <div
            className="bg-slate-500 transition-all duration-500"
            style={{ width: `${proposal.votesAbstain}%` }}
            title={`Abstain: ${proposal.votesAbstain}%`}
          />
        </div>
        <div className="flex justify-between text-[11px] sm:text-xs text-text-secondary">
          <span>For: {proposal.votesFor}%</span>
          <span>Against: {proposal.votesAgainst}%</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Button
          variant="outline"
          className="flex-1 py-2 h-9 sm:h-10 rounded-lg border-primary/30 text-primary hover:bg-primary hover:text-[#111814] text-xs sm:text-sm font-bold"
        >
          Vote For
        </Button>
        <Button
          variant="outline"
          className="flex-1 py-2 h-9 sm:h-10 rounded-lg border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white text-xs sm:text-sm font-bold"
        >
          Vote Against
        </Button>
        <Button
          variant="outline"
          className="flex-1 py-2 h-9 sm:h-10 rounded-lg border-surface-highlight text-text-secondary hover:bg-surface-highlight hover:text-white text-xs sm:text-sm font-bold"
        >
          Abstain
        </Button>
      </div>
    </div>
  );
};
