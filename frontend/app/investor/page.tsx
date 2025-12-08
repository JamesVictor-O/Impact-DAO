"use client";

import React from "react";
import { InvestorLayout } from "../../components/Investor/Layout";
import { InvestorProjectsPage } from "../../components/Investor/ProjectsPage";

const InvestorPage = () => {
  return (
    <InvestorLayout>
      <InvestorProjectsPage />
    </InvestorLayout>
  );
};

export default InvestorPage;
