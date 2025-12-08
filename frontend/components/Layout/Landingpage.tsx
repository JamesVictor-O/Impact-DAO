import React from "react";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { HowItWorks } from "./HowItWorks";
import { ProjectsSection } from "./ProjectsSection";
import { PersonaSection } from "./PersonaSection";

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <Hero onStart={onStart} />
     
      <HowItWorks />
      <ProjectsSection />
      <PersonaSection />
    </div>
  );
};
