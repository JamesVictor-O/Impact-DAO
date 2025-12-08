import React from "react";
import {
  ArrowRight,
  Upload,
  AlertTriangle,
  CheckCircle,
  Circle,
  Radio,
} from "lucide-react";
import type { Project, Milestone } from "./types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (project.status === "Draft") {
    return (
      <div className="flex flex-col md:flex-row items-center gap-6 rounded-xl bg-surface-dark/50 p-5 border border-dashed border-surface-border hover:border-surface-border/80 transition-all opacity-80 hover:opacity-100 group">
        <div className="flex flex-[2] flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-gray-700 text-gray-300 text-xs font-bold uppercase tracking-wide">
              Draft
            </span>
          </div>
          <h4 className="text-white text-lg font-bold font-display">
            {project.title}
          </h4>
          <p className="text-text-muted text-sm">{project.editedAt}</p>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-primary text-sm font-bold hover:underline">
            Continue Editing
          </button>
          <button className="text-text-muted hover:text-red-400 text-sm font-medium transition-colors">
            Delete
          </button>
        </div>
      </div>
    );
  }

  const isPending = project.status === "Pending Verification";

  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-6 rounded-xl bg-surface-dark p-5 border border-surface-border hover:border-primary/30 transition-all shadow-lg shadow-black/20 group">
      {/* Left: Info */}
      <div className="flex flex-[2] flex-col justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {isPending ? (
              <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                Pending Verification
              </span>
            ) : (
              <span className="px-2 py-1 rounded bg-primary-soft text-primary text-xs font-bold border border-primary/20">
                Funding Active
              </span>
            )}
            <span className="text-text-muted text-xs">•</span>
            <span className="text-text-muted text-xs">
              {isPending ? project.submittedAt : project.startedAt}
            </span>
          </div>

          <h4 className="text-white text-xl font-bold leading-tight mb-2 font-display">
            {project.title}
          </h4>
          <p className="text-text-muted text-sm leading-relaxed mb-5 max-w-2xl">
            {project.description}
          </p>

          {/* Progress Bar */}
          {project.fundingCurrent !== undefined &&
            project.fundingGoal !== undefined && (
              <div className="mb-5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-white font-medium">
                    Funding Progress
                  </span>
                  <span className="text-primary font-bold">
                    {Math.round(
                      (project.fundingCurrent / project.fundingGoal) * 100
                    )}
                    %
                    <span className="ml-1 text-text-muted font-normal">
                      (${project.fundingCurrent.toLocaleString()} / $
                      {project.fundingGoal.toLocaleString()})
                    </span>
                  </span>
                </div>
                <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${
                        (project.fundingCurrent / project.fundingGoal) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            )}

          {/* Alert Box for Pending */}
          {isPending && project.alertMessage && (
            <div className="flex items-start gap-3 p-3 rounded bg-amber-500/10 border border-amber-500/20 mb-2">
              <AlertTriangle
                className="text-amber-500 shrink-0 mt-0.5"
                size={18}
              />
              <div>
                <p className="text-amber-200 text-sm font-bold">
                  {project.alertTitle}
                </p>
                <p className="text-amber-200/80 text-xs mt-0.5">
                  {project.alertMessage}
                </p>
              </div>
            </div>
          )}

          {/* Milestones for Active */}
          {!isPending && project.milestones && (
            <div className="flex items-center gap-2 text-sm mt-1 flex-wrap">
              {project.milestones.map((milestone, idx) => (
                <React.Fragment key={milestone.name}>
                  {idx > 0 && (
                    <div className="h-px w-6 bg-surface-border hidden sm:block" />
                  )}
                  <MilestoneItem milestone={milestone} />
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-2">
          {isPending ? (
            <button className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 bg-white text-[#111814] text-sm font-bold hover:bg-gray-200 transition-colors shadow-sm">
              Upload Proof
              <Upload size={16} />
            </button>
          ) : (
            <>
              <button className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 bg-primary text-[#111814] text-sm font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/10">
                Manage Project
                <ArrowRight size={16} />
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 bg-transparent border border-surface-border text-white text-sm font-medium hover:bg-white/5 transition-colors">
                View Proposal
              </button>
            </>
          )}
        </div>
      </div>

      {/* Right: Image */}
      {project.imageUrl && (
        <div
          className="w-full lg:w-72 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden shrink-0 border border-surface-border relative h-44 md:h-48 lg:h-auto"
          style={{ backgroundImage: `url("${project.imageUrl}")` }}
          role="img"
          aria-label={project.imageAlt}
        >
          {!isPending && (
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300">
              <p className="text-xs text-white/80">Last update</p>
              <p className="text-sm font-medium text-white">
                Photos uploaded 2h ago
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MilestoneItem: React.FC<{ milestone: Milestone }> = ({ milestone }) => {
  if (milestone.status === "completed") {
    return (
      <div className="flex items-center gap-2 opacity-50">
        <CheckCircle className="text-green-500" size={18} />
        <span className="text-white line-through">{milestone.name}</span>
      </div>
    );
  }

  if (milestone.status === "current") {
    return (
      <div className="flex items-center gap-2">
        <Radio className="text-primary animate-pulse" size={18} />
        <span className="text-white font-bold">{milestone.name}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 opacity-50">
      <Circle className="text-text-muted" size={18} />
      <span className="text-text-muted">{milestone.name}</span>
    </div>
  );
};
