import React from "react";
import type { FundingMilestone } from "../types";

interface MilestoneSectionProps {
  milestones: FundingMilestone[];
  onChange: (milestones: FundingMilestone[]) => void;
}

export const MilestoneSection: React.FC<MilestoneSectionProps> = ({
  milestones,
  onChange,
}) => {
  const addMilestone = () => {
    const newId = (milestones.length + 1).toString();
    onChange([
      ...milestones,
      {
        id: newId,
        title: "",
        condition: "",
        unlockPercent: 0,
        amount: 0,
      },
    ]);
  };

  const updateMilestone = (
    id: string,
    key: keyof FundingMilestone,
    value: any,
  ) => {
    const updated = milestones.map((m) =>
      m.id === id ? { ...m, [key]: value } : m,
    );
    onChange(updated);
  };

  const removeMilestone = (id: string) => {
    onChange(milestones.filter((m) => m.id !== id));
  };

  return (
    <section className="bg-background-dark p-5 md:p-6 lg:p-8 rounded-xl border border-surface-border shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 md:mb-6 border-b border-surface-border pb-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 text-primary p-2">
            <span className="text-xs md:text-sm font-bold">3</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white">
            Verification Roadmap
          </h3>
        </div>
        <span className="text-[11px] md:text-xs bg-primary/10 text-primary px-3 py-1 rounded font-medium border border-primary/20">
          Funds unlock per milestone
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`group relative flex flex-col md:flex-row gap-4 p-4 rounded-lg border transition-all duration-200 ${
              milestone.title
                ? "bg-surface-dark border-surface-border"
                : "bg-background-dark border-dashed border-surface-border hover:border-primary/50"
            }`}
          >
            {/* Number Badge */}
            <div className="flex flex-col gap-1 min-w-[32px] pt-1.5">
              <div
                className={`size-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  milestone.title
                    ? "bg-primary text-[#111814]"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {index + 1}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wide">
                  Milestone Title
                </label>
                <input
                  className="w-full bg-transparent border-b border-dashed border-slate-600 focus:border-primary outline-none py-1.5 text-sm md:text-base text-slate-100 font-medium placeholder:text-slate-500 transition-colors"
                  placeholder="Enter milestone title..."
                  value={milestone.title}
                  onChange={(e) =>
                    updateMilestone(milestone.id, "title", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wide">
                  Verifiable Condition
                </label>
                <input
                  className="w-full bg-transparent border-b border-dashed border-slate-600 focus:border-primary outline-none py-1.5 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 transition-colors"
                  placeholder="How can this be verified?"
                  value={milestone.condition}
                  onChange={(e) =>
                    updateMilestone(
                      milestone.id,
                      "condition",
                      e.target.value,
                    )
                  }
                />
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="flex-1">
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wide">
                    Unlock %
                  </label>
                  <div className="flex items-center gap-1 group/input">
                    <input
                      type="number"
                      className="w-full bg-transparent border-b border-dashed border-slate-600 focus:border-primary outline-none py-1.5 text-xs md:text-sm text-slate-100 font-medium placeholder:text-slate-500 transition-colors"
                      placeholder="0"
                      value={milestone.unlockPercent || ""}
                      onChange={(e) =>
                        updateMilestone(
                          milestone.id,
                          "unlockPercent",
                          Number(e.target.value),
                        )
                      }
                    />
                    <span className="text-slate-500 text-xs md:text-sm group-focus-within/input:text-primary transition-colors">
                      %
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wide">
                    Amount
                  </label>
                  <p className="py-1.5 text-xs md:text-sm text-slate-200 opacity-80 font-medium">
                    ${milestone.amount.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Delete Action */}
            <button
              type="button"
              onClick={() => removeMilestone(milestone.id)}
              className="absolute top-3 right-3 p-1.5 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded transition-all opacity-0 group-hover:opacity-100"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addMilestone}
          className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-lg border-2 border-dashed border-primary/30 text-primary hover:bg-primary/5 hover:border-primary transition-all font-bold text-xs md:text-sm"
        >
          + Add Next Milestone
        </button>
      </div>
    </section>
  );
};



