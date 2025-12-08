import React from "react";
import Image from "next/image";
import { DollarSign, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

const HERO_IMAGE = "/Image1.jpeg";

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
    
  return (
    <section className="relative w-full px-6 py-12 md:px-20 lg:px-40 flex justify-center bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="flex flex-col max-w-[1200px] flex-1">
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10 z-10">
            <div className="flex flex-col gap-4 text-left">
              <span className="text-primary font-semibold tracking-wider uppercase text-xs md:text-sm">
                Decentralized Public Goods
              </span>
              <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] font-display">
                Amplify Local Impact with{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-400">
                  Quadratic Funding
                </span>
              </h1>
              <p className="text-slate-600 dark:text-text-grey text-base md:text-lg leading-relaxed max-w-xl">
                A platform where community donations unlock matching funds for
                verified local impact projects. Transparent, milestone-based
                funding on-chain.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <Button size="lg" onClick={onStart}>
                Start a Project
              </Button>
              <Button size="lg" variant="secondary">
                Fund Public Goods
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="w-full aspect-4/3 md:aspect-video lg:aspect-square relative rounded-2xl overflow-hidden bg-background-dark border border-border-dark shadow-2xl">
              {/* Background image */}
              <Image
                src={HERO_IMAGE}
                alt="Global impact visualization"
                fill
                priority
                className="object-cover"
              />

              {/* Color overlay & glow */}
              <div className="absolute inset-0 bg-linear-to-br from-[#07120d]/70 via-[#07120d]/60 to-[#020605]/80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(19,236,109,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.16),transparent_55%)]" />

              {/* Floating Card 1 */}
              <div className="absolute top-6 left-4 sm:left-10 p-4 bg-card-dark/90 backdrop-blur border border-border-dark rounded-xl shadow-lg w-40 sm:w-48 animate-bounce-slow">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <DollarSign size={16} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-text-grey">
                    Small Donation
                  </div>
                </div>
                <div className="text-white font-bold text-xl">$10</div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-8 right-4 sm:right-10 p-4 bg-card-dark/90 backdrop-blur border border-border-dark rounded-xl shadow-lg w-44 sm:w-52 animate-bounce-slower">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <TrendingUp size={16} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-text-grey">
                    Quadratic Match
                  </div>
                </div>
                <div className="text-white font-bold text-lg sm:text-xl text-blue-400">
                  +$150 Matched
                </div>
              </div>

              {/* Central abstract rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  className="w-3/4 h-3/4 opacity-40"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    fill="none"
                    stroke="#13ec6d"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="#13ec6d"
                    strokeDasharray="4 4"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#13ec6d"
                    strokeOpacity="0.5"
                    strokeWidth="0.8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
