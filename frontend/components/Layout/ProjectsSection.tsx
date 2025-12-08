import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import type { Project } from "../../types";

const projects: Project[] = [
  {
    id: 1,
    title: "Community Solar Grid",
    description:
      "Installing solar micro-grids for 50 local businesses to reduce reliance on diesel generators.",
    location: "Lagos, Nigeria",
    category: "Renewable Energy",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADEZ7b6QxHtFbDVFEuV_3fWKGY8EuvbJ3sPCL92TE1nfngkyP5LnN9aguInjg33ZXnt4IfF31a9NWN3gZMwOoyywY7asp7ap35nvE2WBXCgoPs1azjsaNgShd014pn-RQbqzBUTg8DHMlQneESBYZZUVgYom1G9fXKv-ZyBESLXbHUpu5YqWEjdUP3DFCNQI1SNnqPbHbKEzWn77fRcbHMcVNmIXojJZjJjI2twLOnOW-2Bqyq84b4-kAQT13IAx0jIQ8XKkEYS8p4",
    status: "Verified",
    raised: 12400,
    match: 4200,
    target: 20000,
  },
  {
    id: 2,
    title: "Urban Roots Initiative",
    description:
      "Transforming vacant lots into productive community gardens providing fresh produce.",
    location: "Detroit, USA",
    category: "Urban Farming",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAX3yD1I2LNGMGux2LU6WQDfDdqP4GQtvqDKnH8VFkdOcdJ2E-Xc9pVd4gDgUP12IKoJXI1vMsWGxNsnFTAEVeiEnEyOfpP0_HOwf-ajvb6GOgCHpssFcjLZ8ngOrKS78i0gfYGB-hLK_i7cjMB2oAb3f5hhqfETI9olbE5tWCBoEYVEAVSBoaRDVLdY6N3Xbhuky-7f1aZak78B0Xp73P1Ur2YAdi9iQVCK-qNtkqe1pQRwNaGZVCx3JzASj9Ek7c_JWqtCCtdv7lZ",
    status: "Verified",
    raised: 5100,
    match: 1800,
    target: 15000,
  },
  {
    id: 3,
    title: "NextGen Coders",
    description:
      "Free blockchain development bootcamps for underprivileged youth.",
    location: "Bangalore, India",
    category: "Education",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzVEv_jhQVv5qnFrUq9Dd851ztiFj2yiZfm5nsbOPsVrFPF-Z0P3m0dcHfC9imbcmD1BQLmFNiFSpgZCUCg9I7LJV70cTShaPPqgQTs95d91c9ye8Ak8KjyGENFlYSw0Kh-IcbvSqtCFDmGui3zC1mBucf05kwiaFem8s8hYVhWKVpP0PC-gUxhBWScMrfzvQD33SaBn-8vE5LwHvTFg-6fodYgxnsRW4ZEtjS-K2qAY4t7fUXFsRgV44nSKgyQTGsg4h1wohd7SNk",
    status: "Pending",
    raised: 800,
    match: "pending",
    target: 10000,
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="explore-projects"
      className="py-16 md:py-20 px-6 md:px-20 lg:px-40 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-black mb-2 font-display">
              Trending Impact Projects
            </h2>
            <p className="text-slate-600 dark:text-text-grey text-sm md:text-base">
              Support high-impact initiatives verified by the community.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
          >
            View all <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-card-dark rounded-xl overflow-hidden border border-border-dark hover:shadow-xl transition-shadow flex flex-col group"
            >
              {/* Image Header */}
              <div
                className="h-44 md:h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
              >
                <div className="absolute inset-0 bg-black/40 p-4 flex items-start justify-end">
                  <Badge
                    variant={
                      project.status === "Verified" ? "success" : "neutral"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-xs text-slate-500 dark:text-text-grey">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                  <span aria-hidden="true">•</span>
                  <span>{project.category}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 font-display group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mb-2 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.min(
                          100,
                          (project.raised / project.target) * 100
                        ).toFixed(1)}%`,
                      }}
                    />
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap items-center justify-between text-xs md:text-sm mb-4 gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      ${project.raised.toLocaleString()}{" "}
                      <span className="font-normal text-slate-500">raised</span>
                    </span>
                    <span
                      className={`font-semibold ${
                        project.match === "pending"
                          ? "text-slate-400"
                          : "text-primary"
                      }`}
                    >
                      {typeof project.match === "number"
                        ? `+ $${project.match.toLocaleString()} match`
                        : "Matching pending"}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full text-sm md:text-base"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
          >
            View all projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
