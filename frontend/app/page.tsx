"use client";

import { useState } from "react";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { SmeDashboard } from "../components/SME/Dashboard";
import { LandingPage } from "../components/Layout/Landingpage";
import type { User } from "../types";

type View = "landing" | "portfolio";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState<View>("landing");

  const handleLogin = () => {
    // Temporary mock login – replace with real auth later.
    setUser({
      id: "demo-user",
      name: "Guest",
      balance: 24500,
      portfolioValue: 0,
    });
    setView("portfolio");
  };

  const handleLogout = () => {
    setUser(null);
    setView("landing");
  };

  const handleNavigateHome = () => {
    setView("landing");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-dark">
      <Header
        isLoggedIn={!!user}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onNavigateHome={handleNavigateHome}
      />

      <main className="flex-1">
         <LandingPage onStart={handleLogin} />
      </main>

      <Footer />
    </div>
  );
}
