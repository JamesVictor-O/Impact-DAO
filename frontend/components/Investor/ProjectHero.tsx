import React from "react";

export const ProjectHero: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-6 mb-6 md:mb-8">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm">
        <a
          className="text-text-muted hover:text-primary font-medium"
          href="#"
        >
          Home
        </a>
        <span className="text-text-muted">/</span>
        <a
          className="text-text-muted hover:text-primary font-medium"
          href="#"
        >
          Environment
        </a>
        <span className="text-text-muted">/</span>
        <span className="text-white font-medium">
          City Park Renewal Initiative
        </span>
      </div>

      {/* Project Hero Image */}
      <div className="w-full h-[260px] md:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden relative group">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpNCc4FQjOJVymRuAYrioEtu_pDE0uEItWWEBIZZuOwpfqmkzbYW95on3h0CfkFS30gLMIa3YtnWaF9hUA47_8FT-JcMh9_L0hA1y33Nk_6_yxEr7jeR5q74akljxg2a2hdgg4HWsTi2-vIAiQ_ikX7KpFgUzHpmmOXxKn5MFlnQPhJVAnSnof2of8SZ5-KehqMD2J-3pd2JXoESeJAtldAXTLxOz3zoslQQ22y4HzNVmPel_SVKqAkaNPNA-9P0CweSRD8-O4dbPm")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/40 to-transparent" />

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full">
          <div className="flex flex-wrap gap-3 mb-3">
            <div className="flex h-7 items-center justify-center gap-x-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 px-3">
              <span className="text-primary text-[11px] font-bold uppercase tracking-[0.14em]">
                Verified SME
              </span>
            </div>
            <div className="flex h-7 items-center justify-center gap-x-2 rounded-full bg-background-dark/70 backdrop-blur-md border border-white/10 px-3">
              <span className="text-white text-[11px] font-medium">
                Urban Planning
              </span>
            </div>
          </div>
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em] mb-2">
            City Park Renewal Initiative
          </h1>
          <p className="text-slate-100 text-sm md:text-base max-w-2xl">
            Revitalizing downtown green space for sustainable community use with
            smart irrigation and solar lighting.
          </p>
        </div>
      </div>
    </div>
  );
};



