import React, { useState } from "react";
import { SmeSidebar } from "../Sidebar";
import { SmeHeader } from "../Header";
import type { ProposalFormState, FundingMilestone, UploadedFile } from "../types";
import { ProjectBasics } from "./ProjectBasics";
import { PitchSection } from "./PitchSection";
import { MilestoneSection } from "./MilestoneSection";
import { SupportingEvidence } from "./SupportingEvidence";
import { TipsSidebar } from "./TipsSidebar";
import { Button } from "../../ui/button";

const initialMilestones: FundingMilestone[] = [
  { id: "1", title: "", condition: "", unlockPercent: 40, amount: 0 },
  { id: "2", title: "", condition: "", unlockPercent: 40, amount: 0 },
  { id: "3", title: "", condition: "", unlockPercent: 20, amount: 0 },
];

const initialForm: ProposalFormState = {
  title: "",
  category: "Infrastructure",
  fundingGoal: "",
  startDate: "",
  endDate: "",
  description: "",
  milestones: initialMilestones,
};

export const CreateProjectPage: React.FC = () => {
  const [form, setForm] = useState<ProposalFormState>(initialForm);
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const handleFormChange = (key: keyof ProposalFormState, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleMilestonesChange = (milestones: FundingMilestone[]) => {
    setForm((prev) => ({ ...prev, milestones }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to backend / onchain flow
    // For now we just log the payload.
    // eslint-disable-next-line no-console
    console.log("Submitting proposal", { form, files });
  };

  return (
    <div className="flex h-screen w-full bg-background-dark text-white selection:bg-primary selection:text-background-dark">
      <SmeSidebar />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <SmeHeader />

        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-surface-border scrollbar-track-transparent"
        >
          <div className="max-w-[1200px] mx-auto flex flex-col gap-6 md:gap-8 pb-24">
            {/* Page heading */}
            <div className="flex flex-col gap-2 md:gap-3">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight">
                Create a new public goods proposal
              </h1>
              <p className="text-xs md:text-sm text-text-muted max-w-2xl">
                Define your project, outline clear verification milestones, and
                attach supporting evidence so the community and validators can
                confidently unlock funding.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-6 md:gap-8">
                <ProjectBasics data={form} onChange={handleFormChange} />
                <PitchSection
                  description={form.description}
                  onChange={(value) => handleFormChange("description", value)}
                />
                <MilestoneSection
                  milestones={form.milestones}
                  onChange={handleMilestonesChange}
                />
                <SupportingEvidence files={files} setFiles={setFiles} />

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="sm:w-auto"
                    onClick={() => setForm(initialForm)}
                  >
                    Save Draft
                  </Button>
                  <Button type="submit" className="sm:w-auto">
                    Submit for Review
                  </Button>
                </div>
              </div>

              {/* Right column tips */}
              <TipsSidebar />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};



