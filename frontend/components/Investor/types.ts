export interface Investment {
  id: string;
  name: string;
  location: string;
  distance: string;
  thumbnailUrl: string;
  milestoneCurrent: number;
  milestoneTotal: number;
  milestoneStatus: "Verified" | "Pending Review" | "Ready to Release";
  amount: number;
  status: "Verified" | "Reviewing";
}

export interface Recommendation {
  id: string;
  name: string;
  matchPercentage: number;
  description: string;
  imageUrl: string;
  raised: number;
  goal: number;
}

export interface Project {
  id: string;
  title: string;
  author: string;
  isVerified: boolean;
  category: string;
  raised: number;
  goal: number;
  matchEstimate: number;
  contributors: number;
  imageUrl: string;
  status?: "Active" | "Milestone Pending" | "Funded" | "Completed";
  tags?: string[];
  description?: string;
  endsIn?: string;
}

export interface FilterState {
  categories: Set<string>;
  status: string;
  smeVerifiedOnly: boolean;
  sortBy: string;
}

export interface Milestone {
  id: string;
  title: string;
  status: "VERIFIED" | "IN PROGRESS" | "LOCKED";
  description: string;
  evidenceUrl?: string;
  progress?: number;
}

export interface Contributor {
  id: string;
  wallet: string;
  timeAgo: string;
  amount: number;
  avatarGradient: string;
}

export interface Tab {
  id: string;
  label: string;
}

export interface VerificationItem {
  id: string;
  title: string;
  organization: string;
  category: "Infrastructure" | "Education" | "Environment" | "Health";
  categoryColorClass: string;
  impact: string;
  description: string;
  image: string;
  milestone: number;
  totalMilestones: number;
  progress: number;
  status: "pending" | "disputed" | "verified";
  evidenceCount: number;
}

export interface Proposal {
  id: string;
  title: string;
  daysRemaining: number;
  category: "Active" | "Closed";
  votesFor: number;
  votesAgainst: number;
  votesAbstain: number;
  userPower: string;
}

export interface ActivityItem {
  id: string;
  type: "verification" | "dispute" | "proposal";
  title: string;
  timeAgo: string;
  content: React.ReactNode;
}
