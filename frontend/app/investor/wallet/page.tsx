"use client";

import React from "react";
import { InvestorLayout } from "../../../components/Investor/Layout";

const InvestorWalletPage = () => {
  return (
    <InvestorLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Wallet & Funding
        </h1>
        <p className="text-sm md:text-base text-slate-400 max-w-xl">
          This section will show your on-chain balances, deposits, and
          withdrawals connected to ImpactDAO. Coming soon.
        </p>
      </div>
    </InvestorLayout>
  );
};

export default InvestorWalletPage;


