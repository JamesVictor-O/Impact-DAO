import React from "react";
import type { ActivityItem } from "./types";
import {
  ShieldCheck,
  WalletCards,
  Network,
  Fuel,
  CheckCircle2,
  Gavel,
  FileSignature,
} from "lucide-react";

export const ValidatorProfile: React.FC = () => {
  return (
    <div className="bg-surface-highlight/30 rounded-2xl p-5 md:p-6 border border-surface-highlight backdrop-blur-md">
      <div className="flex items-center gap-4 mb-5 md:mb-6">
        <div className="size-14 md:size-16 rounded-full bg-linear-to-br from-primary to-sky-500 p-[2px]">
          <div className="w-full h-full rounded-full bg-surface-dark flex items-center justify-center overflow-hidden">
            <img
              alt="User Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgR30V90dzK7i4VAQGfbKuI9N55oHxuQnBvy7dpYAO9YDHnapUVPC8lqLHqvCChI17CX0PwO_VAjJUjViHxBCZJbLySohgb3q-5WoQB1oh9IldsLJMnX-5drOXHn5DpJ5WaCG-wOAb7R90_296yBwLIzf-kKM1z-xRmSsjPmD9oXWIwqpI4c_hwnfsQFUv2MmixRVPdErPCPACOjD4jAqFh_xGCQ781F2-TJ0ehvFbSTCwNGWMRCWM4jY7XVYBiveC9gijPSau2noo"
            />
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold text-base md:text-lg">
            Alex_Validator
          </h3>
          <div className="flex items-center gap-1.5 text-primary text-xs md:text-sm font-medium">
            <ShieldCheck className="h-4 w-4" />
            <span>Level 3 Validator</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5 md:mb-6">
        <div className="bg-surface-dark p-3 rounded-xl border border-surface-highlight">
          <div className="text-text-secondary text-[11px] mb-1">
            Reputation Score
          </div>
          <div className="text-white font-bold text-lg md:text-xl">98.5</div>
        </div>
        <div className="bg-surface-dark p-3 rounded-xl border border-surface-highlight">
          <div className="text-text-secondary text-[11px] mb-1">
            Pending Rewards
          </div>
          <div className="text-white font-bold text-lg md:text-xl">
            450{" "}
            <span className="text-[10px] font-normal text-text-secondary">
              QFD
            </span>
          </div>
        </div>
      </div>

      <button className="w-full bg-surface-highlight hover:bg-surface-highlight/80 text-white font-bold py-2.5 md:py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
        <WalletCards className="h-4 w-4" />
        Claim Rewards
      </button>
    </div>
  );
};

export const NetworkStatus: React.FC = () => {
  return (
    <div className="bg-surface-dark rounded-2xl p-5 md:p-6 border border-surface-highlight">
      <h3 className="text-white font-bold text-base md:text-lg mb-4 flex items-center gap-2">
        <Network className="h-4 w-4 text-text-secondary" />
        Validator Network
      </h3>
      <div className="flex items-center justify-between mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-bold text-xs md:text-sm">
            Network Healthy
          </span>
        </div>
        <span className="text-[11px] md:text-xs text-text-secondary">
          156 Active Nodes
        </span>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs md:text-sm">
          <span className="text-text-secondary">Multi-Sig Consensus</span>
          <span className="text-white font-medium">5/8 Signed</span>
        </div>
        <div className="w-full bg-surface-highlight rounded-full h-1.5">
          <div
            className="bg-sky-400 h-1.5 rounded-full"
            style={{ width: "62%" }}
          />
        </div>
        <div className="flex justify-between items-center text-xs md:text-sm">
          <span className="text-text-secondary">Current Gas Estimate</span>
          <span className="text-white font-medium flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            12 gwei
          </span>
        </div>
      </div>
    </div>
  );
};

export const ActivityLog: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      id: "1",
      type: "verification",
      title: "Verification Confirmed",
      timeAgo: "2m ago",
      content: (
        <>
          <span className="text-primary">@Sarah_Eth</span> verified milestone
          for <span className="text-white">Project #8821</span>.
        </>
      ),
    },
    {
      id: "2",
      type: "dispute",
      title: "Dispute Raised",
      timeAgo: "15m ago",
      content: (
        <>
          Dispute filed on <span className="text-white">Milestone #4</span> of
          Ocean Cleanup.
        </>
      ),
    },
    {
      id: "3",
      type: "proposal",
      title: "New Proposal",
      timeAgo: "1h ago",
      content: <>Governance proposal #126 is now live for voting.</>,
    },
  ];

  const iconForType = (type: ActivityItem["type"]) => {
    if (type === "verification") return <CheckCircle2 className="h-3 w-3" />;
    if (type === "dispute") return <Gavel className="h-3 w-3" />;
    return <FileSignature className="h-3 w-3" />;
  };

  return (
    <div className="bg-surface-dark rounded-2xl p-5 md:p-6 border border-surface-highlight flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold text-base md:text-lg">
          Recent Activity
        </h3>
        <button className="text-[11px] md:text-xs text-primary hover:underline">
          View All
        </button>
      </div>
      <div className="space-y-5 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-surface-highlight before:to-transparent">
        {activities.map((activity, idx) => (
          <div
            key={activity.id}
            className={`relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group ${
              idx === 0 ? "is-active" : ""
            }`}
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-surface-highlight bg-surface-dark text-slate-400 group-[.is-active]:bg-primary group-[.is-active]:text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              {iconForType(activity.type)}
            </div>
            <div className="w-full ml-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] md:text-xs font-bold text-white">
                  {activity.title}
                </span>
                <span className="text-[10px] text-text-secondary">
                  {activity.timeAgo}
                </span>
              </div>
              <p className="text-[11px] md:text-xs text-text-secondary">
                {activity.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
