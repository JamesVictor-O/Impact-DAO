import React from "react";
import type { Milestone } from "./types";

const milestonesData: Milestone[] = [
  {
    id: "1",
    title: "Site Survey & Cleanup",
    status: "VERIFIED",
    description:
      "Removal of debris and professional topographical survey completed.",
    evidenceUrl: "#",
  },
  {
    id: "2",
    title: "Equipment Procurement",
    status: "IN PROGRESS",
    description:
      "Purchasing smart irrigation sensors and solar lighting units. 30% funds released upfront.",
    progress: 60,
  },
  {
    id: "3",
    title: "Installation & Launch",
    status: "LOCKED",
    description:
      "Installation of all hardware and community opening event.",
  },
];

export const ProjectMilestones: React.FC = () => {
  return (
    <div className="bg-surface-dark rounded-xl p-5 md:p-6 lg:p-8 border border-border dark:border-border-dark">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-[#111418] dark:text-white">
          Milestones Roadmap
        </h3>
        <span className="text-xs md:text-sm text-primary bg-primary/10 px-3 py-1 rounded-full font-medium w-fit">
          Next Payout: Milestone 2
        </span>
      </div>

      <div className="relative pl-4">
        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-border-dark" />

        {milestonesData.map((milestone, idx) => (
          <div
            key={milestone.id}
            className={`relative flex gap-5 md:gap-6 pb-8 md:pb-10 group ${
              idx === milestonesData.length - 1 ? "pb-0" : ""
            }`}
          >
            <div className="z-10 flex flex-col items-center">
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  milestone.status === "VERIFIED"
                    ? "bg-primary/20 border-primary text-primary"
                    : milestone.status === "IN PROGRESS"
                    ? "bg-amber-500/10 border-amber-500 text-amber-500 animate-pulse"
                    : "bg-slate-200 dark:bg-border-dark border-slate-400 dark:border-slate-600 text-slate-400"
                }`}
              >
                <span className="text-base md:text-lg font-semibold">
                  {milestone.status === "VERIFIED"
                    ? "✓"
                    : milestone.status === "IN PROGRESS"
                    ? "⋯"
                    : "🔒"}
                </span>
              </div>
            </div>

            <div
              className={`flex-1 bg-background-dark border p-4 md:p-5 rounded-lg ${
                milestone.status === "VERIFIED"
                  ? "border-primary/30"
                  : milestone.status === "IN PROGRESS"
                  ? "border-amber-500/30"
                  : "border-border dark:border-border-dark opacity-70"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h4 className="font-bold text-base md:text-lg text-[#111418] dark:text-white">
                  {milestone.title}
                </h4>
                <span
                  className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded self-start md:self-auto ${
                    milestone.status === "VERIFIED"
                      ? "bg-primary text-[#111814]"
                      : milestone.status === "IN PROGRESS"
                      ? "bg-amber-500 text-black"
                      : "bg-slate-600 text-white"
                  }`}
                >
                  {milestone.status}
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 dark:text-text-muted mb-3">
                {milestone.description}
              </p>

              {milestone.status === "VERIFIED" && milestone.evidenceUrl && (
                <button className="flex items-center gap-2 text-xs text-primary font-medium hover:underline">
                  <span className="border border-primary/40 rounded-full size-5 flex items-center justify-center text-[11px]">
                    PDF
                  </span>
                  <span>View Evidence</span>
                </button>
              )}

              {milestone.status === "IN PROGRESS" && milestone.progress && (
                <div className="w-full bg-surface-dark/40 h-2 rounded-full overflow-hidden mt-1">
                  <div
                    className="bg-amber-500 h-full transition-all duration-1000 ease-out"
                    style={{ width: `${milestone.progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


