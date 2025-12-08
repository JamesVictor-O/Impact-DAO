import React, { useState, useMemo } from "react";
import { ProjectsHero } from "./ProjectsHero";
import { ProjectsStatsStrip } from "./ProjectsStatsStrip";
import { ProjectsFilterSidebar } from "./ProjectsFilterSidebar";
import { InvestorProjectCard } from "./ProjectCard";
import { PROJECTS } from "./constants";
import type { Project } from "./types";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Grid3X3, List } from "lucide-react";

type SortOption = "Most Funded" | "Newest" | "Highest Matching" | "Ending Soon";

export const InvestorProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [statusFilter, setStatusFilter] =
    useState<string>("Active Rounds");
  const [smeVerifiedOnly, setSmeVerifiedOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>("Most Funded");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = useMemo(() => {
    const byFilters = PROJECTS.filter((project) => {
      if (
        selectedCategory &&
        selectedCategory !== "All" &&
        project.category !== selectedCategory
      ) {
        return false;
      }

      if (statusFilter === "Active Rounds" && project.status !== "Active")
        return false;
      if (
        statusFilter === "Milestone Pending" &&
        project.status !== "Milestone Pending"
      )
        return false;
      if (statusFilter === "Completed" && project.status !== "Completed")
        return false;

      if (smeVerifiedOnly && !project.isVerified) return false;

      return true;
    });

    const sorted = [...byFilters].sort((a, b) => {
      if (sortBy === "Most Funded") return b.raised - a.raised;
      if (sortBy === "Newest") return Number(b.id) - Number(a.id);
      if (sortBy === "Highest Matching")
        return b.matchEstimate - a.matchEstimate;
      if (sortBy === "Ending Soon") {
        const parseEnds = (p: Project) =>
          p.endsIn ? parseInt(p.endsIn.replace(/\D/g, ""), 10) || 0 : 999;
        return parseEnds(a) - parseEnds(b);
      }
      return 0;
    });

    return sorted;
  }, [selectedCategory, statusFilter, smeVerifiedOnly, sortBy]);

  const handleReset = () => {
    setSelectedCategory("");
    setStatusFilter("Active Rounds");
    setSmeVerifiedOnly(false);
    setSortBy("Most Funded");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white">
      <ProjectsHero />
      <ProjectsStatsStrip />

      <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 py-8 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProjectsFilterSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            statusFilter={statusFilter}
            onSelectStatus={setStatusFilter}
            smeVerified={smeVerifiedOnly}
            onToggleSmeVerified={() =>
              setSmeVerifiedOnly((current) => !current)
            }
            onReset={handleReset}
          />

          {/* Project Grid */}
          <div className="flex-1 min-w-0">
            {/* Grid Header */}
            <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl md:text-2xl font-bold">
                {filteredProjects.length} Active Proposals
              </h2>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs md:text-sm text-text-muted">
                  Sort by:
                </span>
                <div className="relative">
                  <select
                    className="appearance-none rounded-lg border border-surface-border bg-background-dark py-2 pl-3 pr-8 text-xs md:text-sm font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as SortOption)
                    }
                  >
                    <option>Most Funded</option>
                    <option>Newest</option>
                    <option>Highest Matching</option>
                    <option>Ending Soon</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-muted">
                    <ChevronDownIcon />
                  </div>
                </div>

                <div className="flex rounded-lg border border-surface-border p-1 bg-background-dark">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`rounded p-1 ${
                      viewMode === "grid"
                        ? "text-primary bg-primary/10"
                        : "text-text-muted hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={`rounded p-1 ${
                      viewMode === "list"
                        ? "text-primary bg-primary/10"
                        : "text-text-muted hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Cards */}
            {filteredProjects.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                    : "flex flex-col gap-4"
                }
              >
                {filteredProjects.map((project) => (
                  <InvestorProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-text-muted gap-2">
                <span className="rounded-full bg-background-dark size-12 flex items-center justify-center mb-1">
                  <FolderOffIcon />
                </span>
                <p className="text-sm md:text-base font-medium">
                  No projects found.
                </p>
                <p className="text-xs md:text-sm">
                  Try adjusting your filters.
                </p>
              </div>
            )}

            {/* Pagination – static demo */}
            {filteredProjects.length > 0 && (
              <div className="mt-10 md:mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon-sm"
                    className="rounded-lg border-surface-border"
                    disabled
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </Button>
                  <Button className="rounded-lg bg-primary px-3 h-9 text-xs md:text-sm font-bold">
                    1
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-lg border-surface-border px-3 h-9 text-xs md:text-sm font-bold"
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-lg border-surface-border px-3 h-9 text-xs md:text-sm font-bold"
                  >
                    3
                  </Button>
                  <span className="px-1 text-text-muted text-xs md:text-sm">
                    ...
                  </span>
                  <Button
                    variant="outline"
                    size="icon-sm"
                    className="rounded-lg border-surface-border"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const ChevronDownIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-3.5 w-3.5"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FolderOffIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-text-muted"
  >
    <path
      d="M3 7.5C3 6.39543 3.89543 5.5 5 5.5H9L11 7.5H19C20.1046 7.5 21 8.39543 21 9.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V7.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 4L20 20"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);


