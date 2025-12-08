import React from "react";
import { Bell, ChevronDown } from "lucide-react";

export const SmeHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-8 py-4 md:py-5 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-10">
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-lg md:text-xl font-bold font-display">
          Welcome back, GreenLeaf
        </h2>
        <p className="text-text-muted text-xs md:text-sm">
          Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <button className="size-9 md:size-10 rounded-full bg-surface-dark border border-surface-border flex items-center justify-center text-white hover:bg-surface-hover transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-surface-dark" />
        </button>

        <button className="flex items-center gap-2 h-9 md:h-10 px-3 md:px-4 rounded-full bg-[#1c2720] border border-primary/30 text-white text-xs md:text-sm font-medium hover:bg-[#233028] transition-colors">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="truncate font-mono text-[10px] md:text-xs">
            0x4a...91B2
          </span>
          <ChevronDown size={16} className="text-text-muted" />
        </button>
      </div>
    </header>
  );
};


