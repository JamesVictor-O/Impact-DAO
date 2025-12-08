import React from "react";
import { Twitter, MessageSquare, Code } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b120f] border-t border-[#1f2b24] py-12 md:py-16 px-6 md:px-20 lg:px-40 text-xs md:text-sm">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 text-white mb-4 md:mb-6">
            <div className="size-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="font-bold text-base md:text-lg font-display">
              ImpactDAO
            </span>
          </div>
          <p className="text-gray-500 mb-4 md:mb-6 max-w-sm text-xs md:text-sm">
            Decentralized quadratic funding for local public goods. Built on
            trust.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MessageSquare size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code size={18} />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">
            Platform
          </h4>
          <ul className="flex flex-col gap-2 md:gap-3 text-gray-400">
            <li>
              <a
                href="#explore-projects"
                className="hover:text-primary transition-colors"
              >
                Explore Projects
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-primary transition-colors"
              >
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Quadratic Funding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Tokenomics
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">
            Governance
          </h4>
          <ul className="flex flex-col gap-2 md:gap-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                DAO Forum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Vote
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Transparency Reports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Audits
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">
            Resources
          </h4>
          <ul className="flex flex-col gap-2 md:gap-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Brand Assets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#1f2b24] text-center text-[11px] md:text-xs text-gray-600">
        © {new Date().getFullYear()} ImpactDAO. All rights reserved.
      </div>
    </footer>
  );
};
