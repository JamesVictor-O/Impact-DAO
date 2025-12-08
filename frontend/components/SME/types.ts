export interface StatMetric {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  iconName: string;
}

export interface Milestone {
  name: string;
  status: "completed" | "current" | "upcoming";
}

export type ProjectStatus =
  | "Active"
  | "Pending Verification"
  | "Draft"
  | "Completed";

export interface Project {
  id: string;
  title: string;
  description?: string;
  status: ProjectStatus;
  startedAt?: string;
  submittedAt?: string;
  editedAt?: string;
  fundingCurrent?: number;
  fundingGoal?: number;
  milestones?: Milestone[];
  imageUrl?: string;
  imageAlt?: string;
  alertMessage?: string;
  alertTitle?: string;
}

// Create Project types
export interface FundingMilestone {
  id: string;
  title: string;
  condition: string;
  unlockPercent: number;
  amount: number;
}

export interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
}

export interface ProposalFormState {
  title: string;
  category: string;
  fundingGoal: number | "";
  startDate: string;
  endDate: string;
  description: string;
  milestones: FundingMilestone[];
}
