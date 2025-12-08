import React, { useState } from "react";
import { TrendingUp, Sparkles, WalletCards } from "lucide-react";

export const ProjectFundingCard: React.FC = () => {
  const [amount, setAmount] = useState<string>("");

  const calculateMatch = (val: string) => {
    const num = parseFloat(val);
    if (Number.isNaN(num) || num <= 0) return "0.00";
    // Mock quadratic formula: match = amount * 4.5
    return (num * 4.5).toFixed(2);
  };

  const matchValue = calculateMatch(amount || "10");

  return (
    <div className="bg-surface-dark rounded-xl p-5 md:p-6 border border-border dark:border-border-dark shadow-xl shadow-black/20 space-y-5">
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs md:text-sm font-medium text-slate-500 dark:text-text-muted">
            Total Raised
          </span>
          <span className="text-[11px] md:text-xs font-medium text-primary flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5" />
            12% this week
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl md:text-4xl font-black text-[#111418] dark:text-white">
            $45,200
          </span>
          <span className="text-xs md:text-sm font-medium text-slate-500 dark:text-text-muted">
            of $60,000 Goal
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-slate-200 dark:bg-background-dark rounded-full overflow-hidden mb-5 relative">
          <div className="h-full bg-primary w-[75%] rounded-full relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-background-dark rounded-lg border border-border dark:border-border-dark">
          <div className="text-[11px] text-slate-500 dark:text-text-muted mb-1">
            Contributors
          </div>
          <div className="text-lg md:text-xl font-bold text-[#111418] dark:text-white">
            842
          </div>
        </div>
        <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
          <div className="text-[11px] text-emerald-300 mb-1">
            Est. Match Pool
          </div>
          <div className="text-lg md:text-xl font-bold text-emerald-300">
            +$125k
          </div>
        </div>
      </div>

      {/* Contribution Input */}
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#111418] dark:text-white">
          Contribute Funds
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full bg-background-light dark:bg-background-dark border border-border dark:border-border-dark rounded-lg h-11 md:h-12 pl-3 md:pl-4 pr-24 text-base md:text-lg font-bold text-[#111418] dark:text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all focus:outline-none"
            placeholder="0.00"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-2 top-1.5 bottom-1.5 bg-slate-200 dark:bg-border-dark rounded px-3 flex items-center gap-1 text-xs md:text-sm font-bold text-[#111418] dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            <span>DAI</span>
          </button>
        </div>
      </div>

      {/* Quadratic Calculator Visualization */}
      <div className="bg-linear-to-r from-secondary/20 to-secondary/5 border border-secondary/30 rounded-lg p-3 flex items-start gap-3">
        <Sparkles className="text-secondary h-4 w-4 shrink-0 mt-0.5" />
        <div className="text-xs md:text-sm">
          <p className="text-[#111418] dark:text-white font-medium">
            Quadratic Power
          </p>
          <p className="text-slate-600 dark:text-text-muted text-[11px] md:text-xs mt-1">
            A{" "}
            <span className="text-[#111418] dark:text-white font-bold">
              {amount || "10"} DAI
            </span>{" "}
            contribution results in an estimated{" "}
            <span className="text-secondary font-bold">
              +{matchValue} DAI
            </span>{" "}
            match from the pool!
          </p>
        </div>
      </div>

      <button className="w-full h-11 md:h-12 bg-primary hover:bg-primary-hover text-[#111814] text-sm md:text-base font-bold rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95">
        <span>Fund this Project</span>
        <WalletCards className="h-4 w-4" />
      </button>
      <p className="text-[11px] md:text-xs text-center text-slate-500 dark:text-text-muted">
        Funds are held in a{" "}
        <a className="underline hover:text-primary" href="#">
          smart contract
        </a>{" "}
        until milestones are verified.
      </p>
    </div>
  );
};


