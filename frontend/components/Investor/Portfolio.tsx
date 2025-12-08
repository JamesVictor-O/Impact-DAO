import React from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  TrendingUp,
  Wallet,
  Users,
  MapPinned,
  MoreHorizontal,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { INVESTMENTS, RECOMMENDATIONS } from "./constants";
import type { Investment, Recommendation } from "./types";
import { Button } from "../ui/button";

const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {/* Total Capital Deployed */}
      <div className="bg-surface-dark border border-surface-border rounded-xl p-5 md:p-6 relative overflow-hidden group">
        <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Wallet className="h-14 w-14 text-white" />
        </div>
        <p className="text-text-muted text-xs md:text-sm font-medium mb-1">
          Total Capital Deployed
        </p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white">$45,200</h3>
          <span className="text-emerald-300 text-xs md:text-sm font-medium bg-emerald-500/10 px-2 py-0.5 rounded flex items-center">
            <TrendingUp className="h-3 w-3 mr-1" />
            +12%
          </span>
        </div>
        <div className="mt-4 w-full bg-background-dark rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full"
            style={{ width: "70%" }}
          />
        </div>
        <p className="text-[11px] md:text-xs text-slate-500 mt-2">
          70% of annual budget deployed
        </p>
      </div>

      {/* Quadratic Match Leverage */}
      <div className="bg-linear-to-br from-surface-dark to-[#122e28] border border-primary/30 rounded-xl p-5 md:p-6 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 size-32 bg-primary/20 blur-3xl rounded-full" />
        <p className="text-primary text-xs md:text-sm font-medium mb-1 flex items-center gap-1">
          <ArrowUpRight className="h-3 w-3" />
          Quadratic Match Leverage
        </p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            $203,400
          </h3>
          <span className="text-amber-200 text-xs md:text-sm font-bold bg-amber-500/10 px-2 py-0.5 rounded">
            4.5x Multiplier
          </span>
        </div>
        <p className="text-slate-400 text-xs md:text-sm mt-3 leading-relaxed">
          Your <span className="text-white font-bold">$1</span> contribution
          generated <span className="text-white font-bold">$4.50</span> in
          matching funds for public goods.
        </p>
      </div>

      {/* Lives Impacted */}
      <div className="bg-surface-dark border border-surface-border rounded-xl p-5 md:p-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 p-4 opacity-5">
          <Users className="h-14 w-14 text-white" />
        </div>
        <p className="text-text-muted text-xs md:text-sm font-medium mb-1">
          Lives Impacted
        </p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white">12,500+</h3>
          <span className="text-emerald-300 text-xs md:text-sm font-medium bg-emerald-500/10 px-2 py-0.5 rounded flex items-center">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            150
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="px-2 py-1 bg-background-dark rounded text-[11px] text-slate-300">
            Clean Water
          </div>
          <div className="px-2 py-1 bg-background-dark rounded text-[11px] text-slate-300">
            Education
          </div>
          <div className="px-2 py-1 bg-background-dark rounded text-[11px] text-slate-300">
            +3 more
          </div>
        </div>
      </div>
    </div>
  );
};

const InvestmentsTable: React.FC = () => {
  const investments: Investment[] = INVESTMENTS;

  return (
    <div className="lg:col-span-2 bg-surface-dark border border-surface-border rounded-xl flex flex-col">
      <div className="p-4 md:p-6 border-b border-surface-border flex flex-wrap gap-3 md:gap-4 justify-between items-center">
        <h3 className="text-base md:text-lg font-bold text-white">
          Active Investments
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 rounded-lg bg-background-dark border-surface-border text-xs md:text-sm"
          >
            SDG: Clean Water
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 rounded-lg bg-background-dark border-surface-border text-xs md:text-sm"
          >
            Status: Verified
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left text-xs md:text-sm text-slate-400 min-w-[640px]">
          <thead className="bg-background-dark text-[10px] md:text-xs uppercase font-semibold text-slate-500">
            <tr>
              <th className="px-4 md:px-6 py-3 md:py-4">Project / SME</th>
              <th className="px-4 md:px-6 py-3 md:py-4">Milestone Progress</th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-right">Amount</th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-center">Status</th>
              <th className="px-4 md:px-6 py-3 md:py-4" />
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border">
            {investments.map((inv) => (
              <tr
                key={inv.id}
                className="hover:bg-surface-hover/40 transition-colors group"
              >
                <td className="px-4 md:px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-9 md:size-10 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url("${inv.thumbnailUrl}")` }}
                    />
                    <div>
                      <p className="text-white text-sm font-medium">
                        {inv.name}
                      </p>
                      <p className="text-[11px] md:text-xs">
                        {inv.location} • {inv.distance}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-4 align-middle">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-[11px] md:text-xs">
                      <span className="text-white">
                        Milestone {inv.milestoneCurrent}/{inv.milestoneTotal}
                      </span>
                      <span
                        className={
                          inv.milestoneStatus === "Pending Review"
                            ? "text-amber-300"
                            : "text-emerald-300"
                        }
                      >
                        {inv.milestoneStatus}
                      </span>
                    </div>
                    <div className="w-full bg-background-dark rounded-full h-2">
                      <div
                        className={`h-2 rounded-full relative ${
                          inv.milestoneStatus === "Pending Review"
                            ? "bg-amber-400"
                            : "bg-emerald-400"
                        }`}
                        style={{
                          width: `${
                            (inv.milestoneCurrent / inv.milestoneTotal) * 100
                          }%`,
                        }}
                      >
                        {inv.milestoneStatus === "Verified" && (
                          <div className="absolute right-0 -top-0.5 size-3 bg-white border-2 border-emerald-400 rounded-full shadow-[0_0_10px_rgba(148,210,189,0.5)]" />
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-4 text-right font-medium text-white">
                  ${inv.amount.toLocaleString()}
                </td>
                <td className="px-4 md:px-6 py-4 text-center">
                  {inv.status === "Reviewing" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <AlertTriangle className="h-3 w-3" />
                      Reviewing
                    </span>
                  ) : inv.milestoneStatus === "Ready to Release" ? (
                    <Button
                      size="sm"
                      className="inline-flex items-center gap-1.5 rounded-full text-[10px] md:text-xs h-7 px-3 bg-primary text-[#111814] shadow-md hover:shadow-lg hover:scale-105 transition-all"
                    >
                      Release Funds
                    </Button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      <CheckCircle2 className="h-3 w-3" />
                      Verified
                    </span>
                  )}
                </td>
                <td className="px-4 md:px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3 md:p-4 border-t border-surface-border flex justify-center">
        <button className="text-xs md:text-sm text-primary font-medium hover:text-white transition-colors">
          View All Investments
        </button>
      </div>
    </div>
  );
};

const ImpactMapCard: React.FC = () => {
  return (
    <div className="bg-surface-dark border border-surface-border rounded-xl overflow-hidden flex flex-col h-60 md:h-64 relative">
      <div className="absolute top-4 left-4 z-10 bg-surface-dark/90 backdrop-blur px-3 py-1 rounded-full border border-surface-border text-[11px] font-bold text-white shadow-lg">
        Local Impact Map
      </div>
      <div className="relative w-full h-full bg-gradient-to-br from-background-dark to-[#0b1310]">
        <MapPinned className="absolute inset-0 m-auto h-10 w-10 text-slate-700 opacity-40" />
        <div className="absolute top-1/2 left-1/3 size-3 bg-primary rounded-full ring-4 ring-primary/30 animate-pulse" />
        <div className="absolute top-1/4 left-2/3 size-3 bg-emerald-300 rounded-full ring-4 ring-emerald-300/30" />
        <div className="absolute bottom-1/3 left-1/2 size-3 bg-amber-400 rounded-full ring-4 ring-amber-400/30" />
      </div>
    </div>
  );
};

const RecommendationsList: React.FC = () => {
  const recommendations: Recommendation[] = RECOMMENDATIONS;

  return (
    <div className="flex-1 bg-surface-dark border border-surface-border rounded-xl p-4 md:p-5 flex flex-col">
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h3 className="text-sm md:text-base font-bold text-white">
          Recommended for You
        </h3>
        <button className="text-[11px] md:text-xs text-primary hover:text-white">
          See All
        </button>
      </div>

      <div className="flex flex-col gap-3 md:gap-4 overflow-y-auto max-h-[380px] pr-1">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="flex gap-3 items-start group cursor-pointer hover:bg-background-dark/60 p-2 -mx-2 rounded-lg transition-colors"
          >
            <div
              className="size-11 md:size-12 rounded-lg bg-cover bg-center shrink-0 mt-1"
              style={{ backgroundImage: `url("${rec.imageUrl}")` }}
            />
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start gap-2">
                <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                  {rec.name}
                </h4>
                <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                  {rec.matchPercentage}% Match
                </span>
              </div>
              <p className="text-[11px] md:text-xs text-slate-400 mt-1 line-clamp-2">
                {rec.description}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-background-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400"
                    style={{
                      width: `${(rec.raised / rec.goal) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-[10px] text-slate-400">
                  ${rec.raised / 1000}k/${rec.goal / 1000}k
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const InvestorDashboard: React.FC = () => {
  return (
    <>
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            Welcome back, Alex
          </h2>
          <p className="text-slate-400 mt-2 text-sm md:text-base max-w-xl">
            Track your impact portfolio and discover new quadratic funding
            opportunities.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 px-3 md:px-4 py-2 bg-surface-dark text-white border border-surface-border rounded-lg hover:bg-surface-hover text-xs md:text-sm font-medium"
          >
            <ArrowDownToLine className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <StatCards />

      {/* Split View: Active Investments & Map / Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 min-h-[420px]">
        {/* Left: Active Investments (2 cols) */}
        <InvestmentsTable />

        {/* Right: Map + Recommendations */}
        <div className="flex flex-col gap-4 md:gap-6">
          <ImpactMapCard />
          <RecommendationsList />
        </div>
      </div>
    </>
  );
};
