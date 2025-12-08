"use client";

import React from "react";
import { InvestorLayout } from "../../../components/Investor/Layout";
import { InvestorDashboard } from "../../../components/Investor/Portfolio";

const InvestorPortfolioPage = () => {
  return (
    <InvestorLayout>
      <InvestorDashboard />
    </InvestorLayout>
  );
};

export default InvestorPortfolioPage;


