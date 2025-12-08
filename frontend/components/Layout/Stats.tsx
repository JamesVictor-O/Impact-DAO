import React from "react";
import type { Stat } from "../../types";

const stats: Stat[] = [
  { value: "$4.2M+", label: "Public Goods Funded" },
  { value: "1,240", label: "Verified Projects" },
  { value: "85k+", label: "Unique Donors" },
];

export const Stats: React.FC = () => {
  return (
    <section className="border-y border-slate-200 dark:border-border-dark bg-white dark:bg-[#16211b]">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-wrap justify-around gap-6 md:gap-8 text-center md:text-left">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-display">
              {stat.value}
            </p>
            <p className="text-xs md:text-sm text-slate-600 dark:text-text-grey uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
