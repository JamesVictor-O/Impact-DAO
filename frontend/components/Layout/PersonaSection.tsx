import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

type TabKey = "SME" | "INVESTOR";

export const PersonaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("SME");

  const smePoints = [
    "Non-dilutive capital for your public good projects.",
    "Build reputation on-chain with verified milestones.",
    "Automated payouts via smart contracts.",
  ];

  const investorPoints = [
    "Transparent tracking of where your funds go.",
    "Vote on which projects deserve the pool matching.",
    "Earn governance tokens for active participation.",
  ];

  const list = activeTab === "SME" ? smePoints : investorPoints;

  return (
    <section className="py-16 md:py-20 px-6 md:px-20 lg:px-40 bg-slate-100 dark:bg-[#111814]">
      <div className="max-w-[960px] mx-auto flex flex-col items-center">
        <h2 className="text-slate-900 dark:text-white text-2xl md:text-4xl font-black text-center mb-8 md:mb-10 font-display">
          Who is Proof of Impact for?
        </h2>

        {/* Tabs */}
        <div className="w-full mb-10 md:mb-12">
          <div className="flex border-b border-slate-300 dark:border-[#3b5445] px-2 md:px-4 gap-6 md:gap-8 justify-center">
            <button
              type="button"
              onClick={() => setActiveTab("SME")}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-3 md:pt-4 px-2 md:px-4 cursor-pointer text-xs md:text-sm font-bold uppercase tracking-[0.015em] transition-colors ${
                activeTab === "SME"
                  ? "border-b-primary text-slate-900 dark:text-white"
                  : "border-b-transparent text-slate-500 dark:text-[#9db9a8] hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              For SMEs & Creators
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("INVESTOR")}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-3 md:pt-4 px-2 md:px-4 cursor-pointer text-xs md:text-sm font-bold uppercase tracking-[0.015em] transition-colors ${
                activeTab === "INVESTOR"
                  ? "border-b-primary text-slate-900 dark:text-white"
                  : "border-b-transparent text-slate-500 dark:text-[#9db9a8] hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              For Investors & Community
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center w-full">
          <div className="flex flex-col gap-5 md:gap-6">
            {activeTab === "SME" ? (
              <>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display animate-fade-in">
                  Scale your impact without debt
                </h3>
                <p className="text-slate-600 dark:text-text-grey text-sm md:text-base">
                  Traditional loans are heavy. Grants are competitive. Quadratic
                  funding levels the playing field by valuing community support
                  over deep pockets.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display animate-fade-in">
                  Maximize your donation&apos;s power
                </h3>
                <p className="text-slate-600 dark:text-text-grey text-sm md:text-base">
                  Your contribution is mathematically amplified. By supporting
                  popular community projects, you trigger larger matching pools,
                  making small donations huge.
                </p>
              </>
            )}

            <ul className="flex flex-col gap-3 md:gap-4">
              {list.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-primary mt-0.5 md:mt-1 shrink-0"
                    size={20}
                  />
                  <span className="text-slate-700 dark:text-slate-200 text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-2 md:mt-4">
              {activeTab === "SME" ? (
                <Button size="lg">Create a Proposal</Button>
              ) : (
                <Button size="lg" variant="secondary">
                  Explore Projects
                </Button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
            <img
              alt="Team collaborating on project"
              className="relative rounded-xl border border-slate-200 dark:border-[#3b5445] shadow-xl w-full object-cover aspect-4/3"
              src={
                activeTab === "SME"
                  ? "https://lh3.googleusercontent.com/aida-public/AB6AXuBz-Wd8FwRJPvdPHKPxlMzVtHdNilvt36wUcSAL4fAfhfvpyt8ecq3D92DPWM0bSdIL0uXY74q_NVB8IPQ2BTRwS5vKK9P2EELiHq692F3WUUB78ZGGWEPGvlh0ZDCsHMhEFRe7ds4Dyxi08Zkyv06YYzIOz_caF74UBdl0dcNCS1Jawvqmn1nLaMuzXJ2flQOza77DjqzxfkG5cAOmR8NpIPyJPaki_GepEY0la9Ma6G9cD5qUyl-5AFPAx0FhcaViG_AtkU4QIlcA"
                  : "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
