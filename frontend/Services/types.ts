export type Category = "All" | "Music" | "Sports" | "Politics" | "Tech" | "Culture";

export type MarketCategory = Exclude<Category, "All">;

export interface Market {
  id: string;
  category: MarketCategory;
  question: string;
  percentage: number;
  currentPrediction: "Yes" | "No";
  closesIn: string;
  imageUrl: string;
}




