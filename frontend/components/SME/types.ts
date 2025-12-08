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
