import type React from "react";

export interface Market {
  id: string;
  title: string;
  category: "Entertainment" | "Tech" | "Politics" | "Sports";
  endDate: string;
  volume: number;
  yesPrice: number;
  noPrice: number;
  image?: string;
}

export interface User {
  id: string;
  name: string;
  balance: number;
  portfolioValue: number;
}

// Landing page / Impact DAO types

export interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  category: string;
  imageUrl: string;
  status: "Verified" | "Pending";
  raised: number;
  match: number | "pending";
  target: number;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Stat {
  value: string;
  label: string;
}
export interface userData {
  id: string;
  name: string;
  avatar: string;
  tier: string;
  tierColor: "gold" | "teal" | "slate" | "coral"; // Mapped to tailwind colors
  tierIcon: string;
  accuracy: string;
}
export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  isLoading?: boolean;
}
export interface Prediction {
  id: string;
  question: string;
  image: string;
  userPrediction: "YES" | "NO";
  stake: number;
  currentPrice: number;
  livePL: number;
  potentialPayout: number;
}

export interface UserStats {
  name: string;
  avatar: string;
  accuracy: number;
  league: string;
  tier: string;
  balance: number;
  streak: number;
  pendingDuels: number;
}

export interface UserData {
  rank: number;
  name: string;
  avatar: string;
  tier: string;
  tierColor: "gold" | "teal" | "slate" | "coral"; // Mapped to tailwind colors
  tierIcon: string;
  accuracy: string;
  kp: string; // Knowledge Points
  streak: number;
  isCurrentUser?: boolean;
}

export type TabOption = "My League" | "Global Top 100" | "Thematic";
