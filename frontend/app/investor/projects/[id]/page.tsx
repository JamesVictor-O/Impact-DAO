"use client";

import React from "react";
import { useParams } from "next/navigation";
import { InvestorLayout } from "../../../../components/Investor/Layout";
import { ProjectDetailsPage } from "../../../../components/Investor/ProjectDetailsPage";

const InvestorProjectDetailsRoute = () => {
  // For now, we render the same demo project regardless of id.
  // Later we can look up the project by params.id from a data source.
  const _params = useParams();

  return (
    <InvestorLayout>
      <ProjectDetailsPage />
    </InvestorLayout>
  );
};

export default InvestorProjectDetailsRoute;





