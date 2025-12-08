import React from "react";
import { FileEdit, ShieldCheck, Rocket, Flag } from "lucide-react";
import type { Step } from "../../types";

const steps: Step[] = [
  {
    id: 1,
    title: "Submit Proposal",
    description:
      "SMEs create detailed proposals with clear, verifiable milestones on-chain.",
    icon: FileEdit,
  },
  {
    id: 2,
    title: "Community Verify",
    description:
      "Token holders vote to verify the legitimacy of the project and its team.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Quadratic Match",
    description:
      "Individual donations are matched from the pool. More unique donors = higher match.",
    icon: Rocket,
  },
  {
    id: 4,
    title: "Milestone Unlock",
    description:
      "Funds are released only when impact milestones are proven and verified.",
    icon: Flag,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-20 px-6 md:px-20 lg:px-40 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-slate-900 dark:text-white text-2xl md:text-4xl font-black leading-tight tracking-[-0.03em] mb-3 md:mb-4 font-display">
            Transparent Funding Cycle
          </h2>
          <p className="text-slate-600 dark:text-text-grey text-sm md:text-lg max-w-[720px] mx-auto md:mx-0">
            A trustless 4-step process ensuring every dollar creates real-world
            impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-card-dark p-5 md:p-6 rounded-xl border border-border-dark relative overflow-hidden group hover:border-primary/60 transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-5xl md:text-6xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                0{step.id}
              </div>
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <step.icon size={24} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-text-grey text-xs md:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
