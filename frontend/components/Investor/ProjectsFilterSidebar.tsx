import React from "react";
import { PROJECT_CATEGORIES } from "./constants";

interface FilterSidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  statusFilter: string;
  onSelectStatus: (status: string) => void;
  smeVerified: boolean;
  onToggleSmeVerified: () => void;
  onReset: () => void;
}

const STATUS_OPTIONS = ["Active Rounds", "Milestone Pending", "Completed"];

export const ProjectsFilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  statusFilter,
  onSelectStatus,
  smeVerified,
  onToggleSmeVerified,
  onReset,
}) => {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-white">Filters</h3>
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-primary font-medium hover:underline"
          >
            Reset
          </button>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-text-muted mb-3">
            Categories
          </h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="form-checkbox rounded border-surface-border bg-transparent text-primary focus:ring-primary/20"
                checked={selectedCategory === "" || selectedCategory === "All"}
                onChange={() => onSelectCategory("")}
              />
              <span
                className={`text-sm transition-colors ${
                  selectedCategory === "" || selectedCategory === "All"
                    ? "text-primary"
                    : "group-hover:text-primary text-text-muted"
                }`}
              >
                All Categories
              </span>
            </label>
            {PROJECT_CATEGORIES.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="form-checkbox rounded border-surface-border bg-transparent text-primary focus:ring-primary/20"
                  checked={selectedCategory === category}
                  onChange={() =>
                    onSelectCategory(
                      selectedCategory === category ? "" : category
                    )
                  }
                />
                <span
                  className={`text-sm transition-colors ${
                    selectedCategory === category
                      ? "text-primary"
                      : "group-hover:text-primary text-text-muted"
                  }`}
                >
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="mb-6">
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-text-muted mb-3">
            Funding Status
          </h4>
          <div className="flex flex-col gap-2">
            {STATUS_OPTIONS.map((status) => (
              <label
                key={status}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="status"
                  className="form-radio border-surface-border bg-transparent text-primary focus:ring-primary/20"
                  checked={statusFilter === status}
                  onChange={() => onSelectStatus(status)}
                />
                <span
                  className={`text-sm transition-colors ${
                    statusFilter === status
                      ? "text-primary"
                      : "group-hover:text-primary text-text-muted"
                  }`}
                >
                  {status}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Verification */}
        <div>
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-text-muted mb-3">
            Verification
          </h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  className="peer appearance-none w-9 h-5 rounded-full bg-slate-300 dark:bg-slate-700 checked:bg-primary transition-colors cursor-pointer"
                  checked={smeVerified}
                  onChange={onToggleSmeVerified}
                />
                <div className="absolute left-1 w-3 h-3 rounded-full bg-white peer-checked:translate-x-4 transition-transform" />
              </div>
              <span className="text-sm group-hover:text-primary transition-colors text-text-muted">
                SME Verified Only
              </span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};


