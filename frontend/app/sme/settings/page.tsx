"use client";

import React from "react";
import { SmeSidebar } from "../../../components/SME/Sidebar";
import { SmeHeader } from "../../../components/SME/Header";

const SmeSettingsPage = () => {
  return (
    <div className="flex h-screen w-full bg-background-dark text-white">
      <SmeSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <SmeHeader />
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-sm text-text-muted max-w-xl">
              Manage your organization profile, team permissions, and
              notification preferences here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SmeSettingsPage;


