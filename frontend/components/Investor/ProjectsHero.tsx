import React from "react";
import { FEATURED_PROJECT } from "./constants";
import { Button } from "../ui/button";
import { PlayCircle, CheckCircle2, Clock } from "lucide-react";

export const ProjectsHero: React.FC = () => {
  const percentage = Math.min(
    (FEATURED_PROJECT.raised / FEATURED_PROJECT.goal) * 100,
    100
  );

  return (
    <section className="relative w-full overflow-hidden bg-background-dark">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(19,236,109,0.2),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-4 py-8 md:px-8 lg:px-16 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 w-fit border border-primary/25">
              <CheckCircle2 className="text-primary h-3.5 w-3.5" />
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.16em]">
                Quadratic Funding Round #12 Active
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
              Fund public goods{" "}
              <br className="hidden lg:block" />
              in your community.
            </h1>

            <p className="text-sm md:text-base text-text-muted max-w-xl">
              Your contributions are matched by the community pool. The more
              people that donate to a project, the larger the matching amount it
              receives.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button size="lg" className="rounded-lg">
                Browse Active Proposals
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 rounded-lg border-surface-border bg-background-dark/40 hover:bg-background-dark/70"
              >
                <PlayCircle className="h-4 w-4 text-primary" />
                <span>How it works</span>
              </Button>
            </div>
          </div>

          {/* Featured Project Mini-Card */}
          <div className="w-full max-w-md rounded-xl bg-background-light/90 dark:bg-background-dark/90 p-4 border border-surface-border shadow-2xl shadow-primary/10 mt-4 lg:mt-0">
            <div
              className="mb-4 h-40 md:h-48 w-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('${FEATURED_PROJECT.imageUrl}')` }}
            />
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.14em]">
                Featured Project
              </span>
              <span className="flex items-center gap-1 text-[11px] text-text-muted">
                <Clock className="h-3.5 w-3.5" />
                Ends in {FEATURED_PROJECT.endsIn}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-bold mb-1">
              {FEATURED_PROJECT.title}
            </h3>
            <p className="text-xs md:text-sm text-text-muted mb-4">
              {FEATURED_PROJECT.description}
            </p>
            <div className="w-full bg-background-dark/40 rounded-full h-2 mb-2 overflow-hidden">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs md:text-sm font-medium">
              <span>${FEATURED_PROJECT.raised.toLocaleString()} raised</span>
              <span className="text-primary">
                + ${FEATURED_PROJECT.matchEstimate.toLocaleString()} match
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


