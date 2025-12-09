import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, User as UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import { User } from "../../types";

interface HeaderProps {
  isLoggedIn: boolean;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onNavigateHome: () => void;
}

const NAV_ITEMS = ["How it Works", "Explore Projects"];

export const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  user,
  onLogin,
  onLogout,
  onNavigateHome,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobile = () => setIsMobileMenuOpen((open) => !open);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") return;
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap  dark:border-border-dark bg-background-light/80 dark:bg-[#111814]/80 backdrop-blur-md px-4 py-3 md:px-8 lg:px-10">
      <button
        type="button"
        onClick={onNavigateHome}
        className="flex items-center gap-3 text-slate-900 dark:text-white"
      >
        <div className="w-8 h-8">
          <Image
            src="/Logo.png"
            alt="ImpactDAO logo"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm md:text-base font-bold leading-tight tracking-[-0.02em] font-display">
            ImpactProof
          </span>
          <span className="hidden md:inline text-[11px] text-slate-500 dark:text-text-grey">
            Quadratic Funding
          </span>
        </div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const href =
              item === "Governance" || item === "Docs"
                ? "#"
                : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <a
                key={item}
                href={href}
                onClick={() => handleNavClick(href)}
                className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            );
          })}
        </nav>

        {isLoggedIn && user ? (
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[11px] text-slate-500 dark:text-text-grey">
                Connected
              </span>
              <span className="text-sm font-medium text-slate-900 dark:text-white">
                {user.name}
              </span>
            </div>
            <div className="h-8 w-8 rounded-full bg-linear-to-tr from-primary to-emerald-500 flex items-center justify-center border border-white/20">
              <UserIcon className="h-4 w-4 text-white" />
            </div>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              Disconnect
            </Button>
          </div>
        ) : (
          <Button size="sm" onClick={onLogin}>
            Connect Wallet
          </Button>
        )}
      </div>

      {/* Mobile Toggle + compact actions */}
      <div className="lg:hidden flex items-center gap-3">
        {isLoggedIn ? (
          <div className="flex items-center gap-2 mr-1">
            <div className="h-7 w-7 rounded-full bg-linear-to-tr from-primary to-emerald-500 flex items-center justify-center border border-white/20">
              <UserIcon className="h-3.5 w-3.5 text-white" />
            </div>
          </div>
        ) : null}
        <button
          type="button"
          onClick={handleToggleMobile}
          className="text-slate-900 dark:text-white"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-light dark:bg-[#111814] border-b border-slate-200 dark:border-border-dark px-6 py-5 flex flex-col gap-5 lg:hidden shadow-xl">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const href =
                item === "Governance" || item === "Docs"
                  ? "#"
                  : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <a
                  key={item}
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className="text-slate-700 dark:text-white text-sm font-medium hover:text-primary"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200/70 dark:border-border-dark flex flex-col gap-3">
            {isLoggedIn ? (
              <Button className="w-full" variant="outline" onClick={onLogout}>
                Disconnect
              </Button>
            ) : (
              <Button className="w-full" onClick={onLogin}>
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
