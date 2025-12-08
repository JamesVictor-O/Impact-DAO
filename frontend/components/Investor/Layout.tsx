import React from "react";
import { InvestorSidebar } from "./Sidebar";
import { InvestorHeader } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const InvestorLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-hidden">
      <InvestorSidebar />

      <main className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
        <InvestorHeader />
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
