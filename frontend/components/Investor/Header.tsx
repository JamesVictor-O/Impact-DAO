import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  WalletCards,
  Menu,
  X,
  FolderOpen,
  LayoutDashboard,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { Button } from "../ui/button";

export const InvestorHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const MOBILE_NAV = [
    {
      label: "Projects",
      href: "/investor",
      icon: <FolderOpen className="h-4 w-4" />,
    },
    {
      label: "Portfolio",
      href: "/investor/portfolio",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      label: "Verification",
      href: "/investor/verification",
      icon: <ShieldCheck className="h-4 w-4" />,
    },
    {
      label: "Wallet",
      href: "/investor/wallet",
      icon: <WalletCards className="h-4 w-4" />,
    },
    {
      label: "Reports",
      href: "/investor/reports",
      icon: <BarChart3 className="h-4 w-4" />,
    },
  ];

  return (
    <header className="relative h-16 flex items-center justify-between border-b border-surface-border bg-background-dark/95 backdrop-blur px-4 md:px-6 shrink-0 z-10 sticky top-0">
      {/* Search */}
      <div className="flex-1 max-w-md md:max-w-lg">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors h-4 w-4" />
          <input
            className="w-full bg-surface-dark border border-surface-border/60 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:ring-1 focus:ring-primary focus:bg-surface-hover transition-all outline-none"
            placeholder="Search projects, locations, or SDGs..."
            type="text"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:gap-4 ml-3 md:ml-6">
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-surface-hover">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-background-dark" />
        </button>

        <div className="h-6 w-px bg-surface-border mx-1 hidden sm:block" />

        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center gap-2 rounded-lg border-primary/20 bg-primary/10 hover:bg-primary/20 text-primary text-xs md:text-sm font-semibold"
        >
          <WalletCards className="h-4 w-4" />
          <span>0.45 ETH</span>
        </Button>

        <Button
          size="sm"
          className="hidden xs:inline-flex bg-primary hover:bg-primary-hover text-[#111814] font-bold text-xs md:text-sm shadow-lg shadow-primary/20 whitespace-nowrap"
        >
          Connect Wallet
        </Button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-full text-slate-200 hover:bg-surface-hover transition-colors"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-16 md:hidden bg-background-dark border-b border-surface-border px-4 pb-4 pt-3 space-y-2 shadow-xl">
          {MOBILE_NAV.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/investor" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                  isActive
                    ? "bg-primary-soft text-primary font-semibold"
                    : "text-text-muted hover:bg-surface-hover hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
