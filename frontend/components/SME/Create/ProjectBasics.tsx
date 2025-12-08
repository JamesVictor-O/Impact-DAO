import React from "react";
import type { ProposalFormState } from "../types";

interface ProjectBasicsProps {
  data: ProposalFormState;
  onChange: (key: keyof ProposalFormState, value: any) => void;
}

export const ProjectBasics: React.FC<ProjectBasicsProps> = ({
  data,
  onChange,
}) => {
  return (
    <section className="bg-background-dark rounded-xl border border-surface-border p-5 md:p-6 lg:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-5 md:mb-6 border-b border-surface-border pb-4">
        <div className="rounded-lg bg-primary/10 text-primary p-2">
          <span className="text-xs md:text-sm font-bold">1</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white">
          Project Basics
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-xs md:text-sm font-semibold text-slate-100">
            Project Title
          </span>
          <input
            type="text"
            className="w-full rounded-lg border border-surface-border bg-surface-dark text-sm md:text-base text-white h-10 md:h-11 px-3 md:px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-500"
            placeholder="e.g. Community Solar Grid"
            value={data.title}
            onChange={(e) => onChange("title", e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs md:text-sm font-semibold text-slate-100">
            Category
          </span>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-lg border border-surface-border bg-surface-dark text-sm md:text-base text-white h-10 md:h-11 px-3 md:px-4 pr-9 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all cursor-pointer"
              value={data.category}
              onChange={(e) => onChange("category", e.target.value)}
            >
              <option>Infrastructure</option>
              <option>Education</option>
              <option>Environment</option>
              <option>Open Source Software</option>
              <option>Community Arts</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              ▼
            </span>
          </div>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs md:text-sm font-semibold text-slate-100">
            Funding Goal (USDC)
          </span>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
              $
            </span>
            <input
              type="number"
              className="w-full rounded-lg border border-surface-border bg-surface-dark text-sm md:text-base text-white h-10 md:h-11 pl-8 pr-3 md:pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-500"
              placeholder="50,000"
              value={data.fundingGoal}
              onChange={(e) =>
                onChange("fundingGoal", e.target.value ? Number(e.target.value) : "")
              }
            />
          </div>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs md:text-sm font-semibold text-slate-100">
            Estimated Timeline
          </span>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <input
              type="date"
              className="w-full rounded-lg border border-surface-border bg-surface-dark text-xs md:text-sm text-slate-200 h-10 md:h-11 px-3 md:px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              value={data.startDate}
              onChange={(e) => onChange("startDate", e.target.value)}
            />
            <span className="text-slate-500 text-xs font-medium">to</span>
            <input
              type="date"
              className="w-full rounded-lg border border-surface-border bg-surface-dark text-xs md:text-sm text-slate-200 h-10 md:h-11 px-3 md:px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              value={data.endDate}
              onChange={(e) => onChange("endDate", e.target.value)}
            />
          </div>
        </label>
      </div>
    </section>
  );
};


