import React from "react";
import Link from "next/link";
import type { Project } from "./types";
import { CheckCircle2, Bolt, AlertTriangle, Info } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const InvestorProjectCard: React.FC<ProjectCardProps> = ({
  project,
}) => {
  const percentage = Math.min((project.raised / project.goal) * 100, 100);
  const isMilestonePending = project.status === "Milestone Pending";

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-background-dark/40 hover:bg-surface-dark transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5">
      <div className="relative h-40 md:h-48 w-full overflow-hidden">
        <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
          <span className="rounded bg-black/60 px-2 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <div
          className={`h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${
            isMilestonePending ? "grayscale" : ""
          }`}
          style={{ backgroundImage: `url('${project.imageUrl}')` }}
        />
        {isMilestonePending && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/45">
            <span className="font-bold text-white text-[11px] md:text-xs uppercase tracking-[0.15em] border border-white px-3 py-1 rounded">
              Milestone 1 Pending
            </span>
          </div>
        )}
      </div>

      <div
        className={`flex flex-1 flex-col p-4 md:p-5 ${
          isMilestonePending
            ? "opacity-75 group-hover:opacity-100 transition-opacity"
            : ""
        }`}
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold text-base md:text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 text-[11px] md:text-xs text-text-muted">
              <span>by {project.author}</span>
              {project.isVerified && (
                <CheckCircle2
                  className="text-primary h-3.5 w-3.5"
                  aria-label="SME Verified"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between mb-1 text-xs md:text-sm">
            <span className="font-bold text-white">
              ${project.raised.toLocaleString()}
            </span>
            <span className="text-text-muted">
              of ${project.goal.toLocaleString()}
            </span>
          </div>
          <div className="relative h-2.5 w-full rounded-full bg-background-dark/60 overflow-hidden">
            <div
              className="absolute h-full rounded-full bg-primary"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] md:text-xs">
            {isMilestonePending ? (
              <div className="flex items-center gap-1 text-amber-400 font-medium">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>Verification needed</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-emerald-300 font-medium">
                <Bolt className="h-3.5 w-3.5" />
                <span>
                  Est. Match: ${project.matchEstimate.toLocaleString()}
                </span>
              </div>
            )}
            <div className="text-text-muted">
              {project.contributors} Contributors
            </div>
          </div>
        </div>

        <div className="mt-auto flex gap-3">
          <Link
            href={`/investor/projects/${project.id}`}
            className="flex-1 rounded-lg bg-background-dark/70 py-2 text-xs md:text-sm font-semibold text-white hover:bg-surface-dark transition-colors flex items-center justify-center gap-1"
          >
            <Info className="h-3.5 w-3.5" />
            {isMilestonePending ? "Review" : "Details"}
          </Link>
          {isMilestonePending ? (
            <button
              className="flex-1 rounded-lg border border-primary text-primary py-2 text-xs md:text-sm font-bold hover:bg-primary/10 transition-colors"
              disabled
            >
              Funded
            </button>
          ) : (
            <button className="flex-1 rounded-lg bg-primary py-2 text-xs md:text-sm font-bold text-[#111814] hover:bg-primary-hover transition-colors">
              Contribute
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
