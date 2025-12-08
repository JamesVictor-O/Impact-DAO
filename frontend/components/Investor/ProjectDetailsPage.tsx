import React, { useState } from "react";
import { ProjectHero } from "./ProjectHero";
import { ProjectFundingCard } from "./ProjectFundingCard";
import { ProjectMilestones } from "./ProjectMilestones";
import { SMEProfileCard, RecentContributorsCard } from "./ProjectSidebarInfo";
import type { Tab } from "./types";

const TABS: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "milestones", label: "Milestones & Evidence" },
  { id: "updates", label: "Updates (3)" },
  { id: "discussion", label: "Discussion" },
];

export const ProjectDetailsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 pb-10 md:px-8 lg:px-16">
        <ProjectHero />

        {/* Tabs */}
        <div className="mb-6 border-b border-border dark:border-border-dark overflow-x-auto no-scrollbar">
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-2 pt-1 font-medium whitespace-nowrap ${
                    isActive
                      ? "text-primary"
                      : "text-text-muted hover:text-primary"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] rounded bg-primary" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 md:gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* About card (only on overview for now) */}
            {activeTab === "overview" && (
              <div className="bg-surface-dark rounded-xl p-5 md:p-6 lg:p-8 border border-border dark:border-border-dark">
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  About the Project
                </h3>
                <p className="text-xs md:text-sm text-slate-300 dark:text-text-muted leading-relaxed mb-4">
                  The City Park Renewal initiative aims to transform the
                  neglected 2-acre plot in the downtown district into a vibrant,
                  sustainable community hub. Currently, the area suffers from
                  poor lighting, lack of seating, and dying vegetation due to
                  inefficient water usage.
                </p>
                <p className="text-xs md:text-sm text-slate-300 dark:text-text-muted leading-relaxed mb-4">
                  Our proposal introduces{" "}
                  <span className="font-semibold">
                    Smart Irrigation Systems
                  </span>{" "}
                  that reduce water usage by 40%, alongside solar-powered LED
                  pathways to ensure safety after dark. We are partnering with
                  local artists to install functional sculptures that double as
                  seating areas.
                </p>
                <p className="text-xs md:text-sm text-slate-300 dark:text-text-muted leading-relaxed">
                  <span className="font-semibold">Why Quadratic Funding?</span>{" "}
                  This project is a public good. It doesn&apos;t generate
                  profit but creates immense value for residents. By using
                  QuadFund, every small donation from the community is matched
                  by our sponsor pool, amplifying the voice of local residents
                  over large individual donors.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-lg bg-background-dark/60 py-3 px-3 text-center border border-border dark:border-border-dark">
                    <div className="text-lg md:text-xl font-bold text-primary">
                      2.5k
                    </div>
                    <div className="text-[10px] uppercase tracking-wide text-slate-400">
                      Daily Visitors Est.
                    </div>
                  </div>
                  <div className="rounded-lg bg-background-dark/60 py-3 px-3 text-center border border-border dark:border-border-dark">
                    <div className="text-lg md:text-xl font-bold text-primary">
                      40%
                    </div>
                    <div className="text-[10px] uppercase tracking-wide text-slate-400">
                      Water Saved
                    </div>
                  </div>
                  <div className="rounded-lg bg-background-dark/60 py-3 px-3 text-center border border-border dark:border-border-dark">
                    <div className="text-lg md:text-xl font-bold text-primary">
                      0
                    </div>
                    <div className="text-[10px] uppercase tracking-wide text-slate-400">
                      Carbon Emissions
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Milestones tab (also show on overview under about section for now) */}
            {activeTab === "overview" || activeTab === "milestones" ? (
              <ProjectMilestones />
            ) : null}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <ProjectFundingCard />
            <SMEProfileCard />
            <RecentContributorsCard />
          </div>
        </div>
      </div>
    </div>
  );
};


