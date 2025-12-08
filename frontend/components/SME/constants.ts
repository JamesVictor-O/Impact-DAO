import type { Project, StatMetric } from "./types";

export const STATS_DATA: StatMetric[] = [
  {
    label: "Total Funds Raised",
    value: "$45,200",
    trend: "12%",
    trendUp: true,
    iconName: "DollarSign",
  },
  {
    label: "QF Matches Received",
    value: "$12,500",
    trend: "5%",
    trendUp: true,
    iconName: "GitMerge",
  },
  {
    label: "Milestones Verified",
    value: "18",
    trend: "+2",
    trendUp: true,
    iconName: "CheckCircle2",
  },
  {
    label: "Community Score",
    value: "98/100",
    trend: "Top 5%",
    trendUp: true,
    iconName: "Users",
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    status: "Active",
    startedAt: "Started 2 months ago",
    title: "Urban Community Garden Phase 2",
    description:
      "Expansion of the downtown green space to include a hydroponic vertical farm and educational center for local schools.",
    fundingCurrent: 15000,
    fundingGoal: 20000,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeY_EuOYYK_D9BXrAEQ37mCxk1KLQd8qi0uo3j2e2xyk2p-NoaryEY9-2JyvLOw8an4qengqAdqM2m5Iz7Vqrq3r7wyHaTB-f_rGnKrkB_kuRPTu3G8EW7PYsDJ1LBb9776RoCYianaeH3DX3OUt55hQDPrGbMKQ9Nr1Xo-JzGBvG6tlNFDiaSGZ3nVRqMivjG5itHvrjHE-Vy48QS66XbGk3Q9n8jS_58JWnvOLKH7CwYn0lOl60j89iJ9Y09CQJyI8jcrDrW_LGl",
    imageAlt: "Community garden with people working",
    milestones: [
      { name: "Site Prep", status: "completed" },
      { name: "Irrigation Install", status: "current" },
      { name: "Launch", status: "upcoming" },
    ],
  },
  {
    id: "2",
    status: "Pending Verification",
    submittedAt: "Submitted yesterday",
    title: "Renewable Energy Workshop Series",
    description:
      "Educational workshops for local businesses to transition to renewable energy sources. Milestone 1 completion proof submitted.",
    fundingCurrent: 5000,
    fundingGoal: 5000,
    alertTitle: "Action Required",
    alertMessage:
      'Community verifiers have requested additional photos for the "Workshop 1" milestone.',
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNY_Hnoh8pOcHfEIbikckqOPmZikIFGQJ5Mp1tRobZZwNsIQgJSPsw7Zm_qihKNWsirTSjNuC3C3sD7wpCUJ8fEb8mSY3JREgk9PW28xIod_IMsDBiPbWgRQ4a-pfXHoHm1Pr2Uwg2k4T0V0BCutS6yohMxNF0bJ5wbPvuLXd9knrccmZtGJczeCk1_BwlFy5LgLk_CAh9JVdyiZ_UJQb3L9-1juZYC7AMIxAX_SXNclQd6UD5St8M8vxZMjskftgzST_qEGZtPd5n",
    imageAlt: "Solar panel workshop",
  },
  {
    id: "3",
    status: "Draft",
    editedAt: "Last edited 3 days ago",
    title: "Public Wifi Installation - North District",
  },
];
