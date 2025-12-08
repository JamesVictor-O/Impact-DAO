import React from "react";
import type { VerificationItem } from "./types";
import { Button } from "../ui/button";
import { CheckCircle2, Gavel, Eye } from "lucide-react";

interface Props {
  item: VerificationItem;
}

export const VerificationCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="group bg-surface-dark border border-surface-highlight rounded-2xl p-5 md:p-6 hover:border-primary/40 transition-all duration-300 shadow-xl shadow-black/20">
      <div className="flex flex-col md:flex-row gap-5 md:gap-6">
        {/* Evidence Thumbnail */}
        <div className="shrink-0 relative w-full md:w-48 h-44 md:h-auto rounded-xl overflow-hidden bg-surface-highlight group-hover:shadow-lg transition-shadow">
          <img
            alt={item.title}
            className="w-full h-full object-cover"
            src={item.image}
          />
          <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur text-white text-[11px] px-2 py-1 rounded flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {item.evidenceCount}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`border text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${item.categoryColorClass}`}
                  >
                    {item.category}
                  </span>
                  <span className="text-text-secondary text-[11px]">
                    • ID: #{item.id}
                  </span>
                </div>
                <h3 className="text-base md:text-xl font-bold text-white hover:text-primary cursor-pointer transition-colors">
                  {item.title}
                </h3>
                <button className="text-[11px] md:text-xs text-primary hover:underline flex items-center gap-1 mt-1">
                  by {item.organization}
                </button>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-[10px] text-text-secondary">
                  QF Match Pool Impact
                </div>
                <div className="text-sm md:text-lg font-bold text-primary">
                  {item.impact}
                </div>
              </div>
            </div>

            <p className="text-text-secondary text-xs md:text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Progress */}
            <div className="bg-surface-highlight rounded-full h-2 w-full mb-2 overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] md:text-xs text-text-secondary mb-2">
              <span>
                Milestone {item.milestone} of {item.totalMilestones}
              </span>
              <span>{item.progress}% Complete</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-surface-highlight">
            <Button className="flex-1 bg-primary hover:bg-emerald-400 text-[#111814] font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-xs md:text-sm">
              <CheckCircle2 className="h-4 w-4" />
              Verify Impact
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-surface-highlight hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 border border-transparent text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-xs md:text-sm transition-all"
            >
              <Gavel className="h-4 w-4" />
              Dispute
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="p-2.5 rounded-lg bg-surface-highlight text-text-secondary hover:text-white transition-colors"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
