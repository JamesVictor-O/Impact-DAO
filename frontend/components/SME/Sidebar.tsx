import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  FolderOpen,
  Wallet,
  ShieldCheck,
  Settings,
  PlusCircle,
} from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/sme" },
  {
    icon: <FolderOpen size={20} />,
    label: "All Projects",
    href: "/sme/projects",
  },
  {
    icon: <Wallet size={20} />,
    label: "Wallet & Funding",
    href: "/sme/wallet",
  },
  {
    icon: <ShieldCheck size={20} />,
    label: "Verification Logs",
    href: "/sme/verification",
  },
  { icon: <Settings size={20} />, label: "Settings", href: "/sme/settings" },
];

export const SmeSidebar: React.FC = () => {
  const pathname = usePathname();
  return (
    <aside className="w-72 hidden lg:flex flex-col bg-surface-dark border-r border-surface-border h-full justify-between p-4 z-20">
      <div className="flex flex-col gap-6">
        {/* Profile / Brand */}
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

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/sme" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group border ${
                  isActive
                    ? "bg-primary-soft border-primary/10"
                    : "border-transparent hover:bg-white/5"
                }`}
              >
                <span
                  className={
                    isActive
                      ? "text-primary"
                      : "text-text-muted group-hover:text-white"
                  }
                >
                  {item.icon}
                </span>
                <p
                  className={`text-sm font-medium ${
                    isActive
                      ? "text-white"
                      : "text-text-muted group-hover:text-white"
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        {/* Mini Widget */}
        <div className="px-3">
          <div className="p-4 rounded-xl bg-linear-to-br from-[#1c2e24] to-[#132019] border border-surface-border relative overflow-hidden">
            <p className="text-xs text-text-muted mb-1 relative z-10">
              Next Verification
            </p>
            <p className="text-sm font-bold text-white mb-2 relative z-10">
              Park Cleanup Ph.3
            </p>
            <div className="w-full bg-white/10 rounded-full h-1.5 mb-2 relative z-10">
              <div
                className="bg-primary h-1.5 rounded-full"
                style={{ width: "75%" }}
              />
            </div>
            <p className="text-[10px] text-right text-primary relative z-10">
              3 days left
            </p>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href="/sme/create"
          className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-primary-hover text-[#111814] text-sm font-bold transition-all shadow-lg shadow-primary/20"
        >
          <PlusCircle size={20} />
          <span className="truncate">Create Proposal</span>
        </Link>
      </div>
    </aside>
  );
};
