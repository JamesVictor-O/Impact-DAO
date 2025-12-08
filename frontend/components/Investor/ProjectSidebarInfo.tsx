import React from "react";
import type { Contributor } from "./types";

const contributors: Contributor[] = [
  {
    id: "1",
    wallet: "0x4a...92b",
    timeAgo: "2 mins ago",
    amount: 50,
    avatarGradient: "from-blue-400 to-purple-500",
  },
  {
    id: "2",
    wallet: "alicia.eth",
    timeAgo: "15 mins ago",
    amount: 120,
    avatarGradient: "from-yellow-400 to-red-500",
  },
  {
    id: "3",
    wallet: "0x88...11c",
    timeAgo: "1 hour ago",
    amount: 10,
    avatarGradient: "from-green-400 to-teal-500",
  },
];

export const SMEProfileCard: React.FC = () => {
  return (
    <div className="bg-surface-dark rounded-xl p-5 md:p-6 border border-border dark:border-border-dark">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-white p-1">
          <img
            alt="EcoUrban Logic"
            className="w-full h-full object-contain rounded-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvAGRw1tjVO-LXaMpSiF8ITsg_8oAslmLc_8iz8iQbOhp_c4BNh3_g5IHmkeaSx9Gghp2n97AnRgQGWo7Ia5b3H0p7HZpiyaT1mv8DgbqW1r76TBfhtIsIilOIxTMw9yFQ6OXiXDOhGFQ4ndYbTStdIQ6_ioj6OgjqKAhNWtRefi2p87C6jTndqVbp50ivWzkCYnRXe9ij51jJ4tGAu1Sqaa4W5ZKb6luupy2SZNTMYlzZLiXNyzt7R55m7KW6Z6vkUJFOqewV_oOm"
          />
        </div>
        <div>
          <h4 className="font-bold text-sm md:text-base text-[#111418] dark:text-white">
            EcoUrban Logic
          </h4>
          <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-text-muted">
            <span>Joined 2021</span>
            <span className="w-1 h-1 bg-slate-500 rounded-full" />
            <span className="text-primary">98% Trust Score</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <div className="flex-1 bg-background-dark py-2 px-3 rounded text-center border border-border dark:border-border-dark">
          <div className="text-base md:text-lg font-bold text-[#111418] dark:text-white">
            4
          </div>
          <div className="text-[10px] uppercase text-slate-500 dark:text-text-muted">
            Projects
          </div>
        </div>
        <div className="flex-1 bg-background-dark py-2 px-3 rounded text-center border border-border dark:border-border-dark">
          <div className="text-base md:text-lg font-bold text-[#111418] dark:text-white">
            $210k
          </div>
          <div className="text-[10px] uppercase text-slate-500 dark:text-text-muted">
            Raised
          </div>
        </div>
      </div>
      <button className="w-full text-xs md:text-sm font-medium text-slate-600 dark:text-text-muted hover:text-white border border-border dark:border-border-dark py-2 rounded-lg hover:bg-background-dark transition-colors">
        View Organization Profile
      </button>
    </div>
  );
};

export const RecentContributorsCard: React.FC = () => {
  return (
    <div className="bg-surface-dark rounded-xl p-5 md:p-6 border border-border dark:border-border-dark">
      <h4 className="font-bold text-sm md:text-base text-[#111418] dark:text-white mb-4">
        Recent Contributors
      </h4>
      <div className="space-y-3 md:space-y-4">
        {contributors.map((c) => (
          <div key={c.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full bg-linear-to-br ${c.avatarGradient}`}
              />
              <div>
                <div className="text-xs md:text-sm font-medium text-[#111418] dark:text-white">
                  {c.wallet}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-text-muted">
                  {c.timeAgo}
                </div>
              </div>
            </div>
            <div className="text-xs md:text-sm font-bold text-primary">
              +{c.amount} DAI
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-xs md:text-sm font-medium text-slate-600 dark:text-text-muted hover:text-white py-2">
        View All Transactions
      </button>
    </div>
  );
};


