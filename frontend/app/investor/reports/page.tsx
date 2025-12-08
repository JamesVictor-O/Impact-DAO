"use client";

import React from "react";
import { InvestorLayout } from "../../../components/Investor/Layout";

const InvestorReportsPage = () => {
  return (
    <InvestorLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Reports</h1>
        <p className="text-sm md:text-base text-slate-400 max-w-xl">
          Analytics, exportable summaries, and impact reports for your quadratic
          funding activity will appear here. Coming soon.
        </p>
      </div>
    </InvestorLayout>
  );
};

export default InvestorReportsPage;


