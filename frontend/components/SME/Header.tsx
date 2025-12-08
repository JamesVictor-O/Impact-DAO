import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChevronDown,
  Menu,
  X,
  LayoutDashboard,
  FolderOpen,
  ShieldCheck,
  Wallet,
  Settings,
} from "lucide-react";

export const SmeHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const MOBILE_NAV = [
    { label: "Dashboard", href: "/sme", icon: <LayoutDashboard className="h-4 w-4" /> },
    { label: "Projects", href: "/sme/projects", icon: <FolderOpen className="h-4 w-4" /> },
    { label: "Wallet", href: "/sme/wallet", icon: <Wallet className="h-4 w-4" /> },
    { label: "Verification", href: "/sme/verification", icon: <ShieldCheck className="h-4 w-4" /> },
    { label: "Settings", href: "/sme/settings", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <header className="relative flex items-center justify-between px-4 md:px-8 py-4 md:py-5 border-b border-surface-border bg-background-dark/80 backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center justify-center rounded-full bg-primary/10 size-8 text-primary font-bold">
          GL
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-white text-base md:text-xl font-bold font-display">
            Welcome back, GreenLeaf
          </h2>
          <p className="text-text-muted text-xs md:text-sm">
            Here&apos;s what&apos;s happening with your projects today.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="size-9 md:size-10 rounded-full bg-surface-dark border border-surface-border flex items-center justify-center text-white hover:bg-surface-hover transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-surface-dark" />
        </button>

        <button className="hidden sm:flex items-center gap-2 h-9 md:h-10 px-3 md:px-4 rounded-full bg-[#1c2720] border border-primary/30 text-white text-xs md:text-sm font-medium hover:bg-[#233028] transition-colors">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="truncate font-mono text-[10px] md:text-xs">
            0x4a...91B2
          </span>
          <ChevronDown size={16} className="text-text-muted" />
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="sm:hidden p-2 rounded-full text-slate-200 hover:bg-surface-hover transition-colors"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full sm:hidden bg-background-dark border-b border-surface-border px-4 pb-4 pt-3 space-y-2 shadow-xl">
          {MOBILE_NAV.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/sme" && pathname.startsWith(item.href));
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

