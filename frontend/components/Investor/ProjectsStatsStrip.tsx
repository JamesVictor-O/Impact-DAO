import React from "react";
import { Wallet, GitBranch, Users } from "lucide-react";

export const ProjectsStatsStrip: React.FC = () => {
  const stats = [
    {
      label: "Total Value Locked",
      value: "$4,250,000",
      icon: <Wallet className="h-4 w-4" />,
    },
    {
      label: "Projects Funded",
      value: "350+",
      icon: <GitBranch className="h-4 w-4" />,
    },
    {
      label: "Community Members",
      value: "12,500",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  return (
    <section className="border-y border-surface-border bg-background-dark">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-4 md:flex-row md:items-stretch md:justify-between md:px-8 lg:px-16">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 items-center gap-3 rounded-lg bg-surface-dark/80 border border-surface-border px-4 py-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background-dark text-primary">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] md:text-xs text-text-muted uppercase tracking-wide">
                {stat.label}
              </span>
              <span className="text-sm md:text-base font-bold text-white">
                {stat.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


