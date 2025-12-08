import React, { useState } from "react";
import { SmeSidebar } from "./Sidebar";
import { SmeHeader } from "./Header";
import { StatsArea } from "./StatsArea";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS_DATA } from "./constants";

const TABS = ["Active", "Pending", "Completed", "Drafts"] as const;
type TabKey = (typeof TABS)[number];

export const SmeDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Active");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === "Active") return project.status === "Active";
    if (activeTab === "Pending")
      return project.status === "Pending Verification";
    if (activeTab === "Drafts") return project.status === "Draft";
    if (activeTab === "Completed") return project.status === "Completed";
    return true;
  });

  // To visually match the reference on initial load, show all projects under "Active".
  const displayProjects =
    activeTab === "Active" ? PROJECTS_DATA : filteredProjects;

  return (
    <div className="flex h-screen w-full bg-background-dark text-white selection:bg-primary selection:text-background-dark">
      <SmeSidebar />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <SmeHeader />

        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-thin scrollbar-thumb-surface-border scrollbar-track-transparent">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 pb-20">
            {/* Stats Row */}
            <StatsArea />

            {/* Page Heading + Tabs */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight font-display">
                    Active Projects
                  </h3>
                  <p className="text-text-muted text-xs md:text-sm font-normal mt-1 max-w-xl">
                    Manage ongoing public goods initiatives and track funding
                    milestones.
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex bg-surface-dark p-1 rounded-lg border border-surface-border">
                  {TABS.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium rounded transition-all duration-200 ${
                        activeTab === tab
                          ? "bg-primary-soft text-primary font-bold shadow-sm"
                          : "text-text-muted hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects List */}
            <div className="flex flex-col gap-4">
              {displayProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}

              {displayProjects.length === 0 && (
                <div className="p-10 md:p-12 text-center text-text-muted border border-dashed border-surface-border rounded-xl text-sm">
                  No projects found in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


