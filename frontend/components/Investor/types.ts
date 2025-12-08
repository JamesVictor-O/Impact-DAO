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
