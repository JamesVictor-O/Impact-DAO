import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  ShieldCheck,
  WalletCards,
  BarChart3,
  UserCircle2,
} from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { icon: <FolderOpen size={18} />, label: "Projects", href: "/investor" },
  {
    icon: <LayoutDashboard size={18} />,
    label: "Portfolio",
    href: "/investor/portfolio",
  },
  {
    icon: <ShieldCheck size={18} />,
    label: "Verification",
    href: "/investor/verification",
  },
  {
    icon: <WalletCards size={18} />,
    label: "Wallet",
    href: "/investor/wallet",
  },
  {
    icon: <BarChart3 size={18} />,
    label: "Reports",
    href: "/investor/reports",
  },
];

export const InvestorSidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 hidden md:flex flex-col bg-background-dark border-r border-surface-border shrink-0">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          {/* Brand */}
          <div className="flex gap-3 items-center px-2">
            <div className="aspect-square rounded-full size-10 overflow-hidden bg-background-dark flex items-center justify-center">
              <Image
                src="/Logo.png"
                alt="ImpactDAO logo"
                width={40}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-lg font-bold leading-none tracking-tight">
                ImpactDAO
              </h1>
              <p className="text-text-muted text-xs font-normal mt-1">
                Quadratic Funding
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/investor" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors border ${
                    isActive
                      ? "bg-primary-soft border-primary/10 text-primary"
                      : "border-transparent text-text-muted hover:bg-surface-hover hover:text-white"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span
                    className={`text-sm ${
                      isActive ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Profile Snippet */}
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-surface-dark border border-surface-border">
          <div className="rounded-full bg-cover bg-center size-10 shrink-0 overflow-hidden">
            <UserCircle2 className="h-10 w-10 text-primary/70" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-white text-sm font-bold truncate">Alex Morgan</p>
            <p className="text-text-muted text-xs truncate">Investor Tier 1</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
