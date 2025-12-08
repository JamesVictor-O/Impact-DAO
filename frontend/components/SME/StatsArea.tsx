import React from "react";
import {
  DollarSign,
  GitMerge,
  CheckCircle2,
  Users,
  ArrowUp,
} from "lucide-react";
import { STATS_DATA } from "./constants";
import type { StatMetric } from "./types";

export const StatsArea: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {STATS_DATA.map((stat) => (
        <StatCard key={stat.label} metric={stat} />
      ))}
    </div>
  );
};

const StatCard: React.FC<{ metric: StatMetric }> = ({ metric }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "DollarSign":
        return <DollarSign size={20} />;
      case "GitMerge":
        return <GitMerge size={20} />;
      case "CheckCircle2":
        return <CheckCircle2 size={20} />;
      case "Users":
        return <Users size={20} />;
      default:
        return <DollarSign size={20} />;
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl p-5 md:p-6 bg-surface-dark border border-surface-border hover:border-surface-border/80 transition-all">
      <div className="flex items-center justify-between">
        <p className="text-text-muted text-xs md:text-sm font-medium">
          {metric.label}
        </p>
        <span className="text-primary/50">{getIcon(metric.iconName)}</span>
      </div>
      <div className="flex items-end gap-2">
        <p className="text-white text-2xl md:text-3xl font-bold leading-tight font-display tracking-tight">
          {metric.value}
        </p>
        <div className="flex items-center text-primary text-[11px] md:text-xs font-bold bg-primary-soft px-1.5 py-0.5 rounded mb-1 border border-primary/10">
          <ArrowUp size={12} className="mr-0.5" />
          <span>{metric.trend}</span>
        </div>
      </div>
    </div>
  );
};


