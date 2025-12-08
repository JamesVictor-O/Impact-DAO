import React from "react";

export const TipsSidebar: React.FC = () => {
  return (
    <aside className="sticky top-24 flex flex-col gap-6">
      {/* Pro Tip Card */}
      <div className="bg-background-dark text-white p-5 md:p-6 rounded-xl relative overflow-hidden shadow-lg border border-surface-border">
        <div className="absolute -right-6 -top-6 w-28 h-28 md:w-32 md:h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3 md:mb-4 text-primary">
            <span className="text-base md:text-lg">💡</span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.18em]">
              Pro Tip
            </span>
          </div>
          <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3">
            Defining Verifiable Milestones
          </h4>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed mb-4 md:mb-5">
            Quadratic funding relies on trust. Ensure your milestones have clear
            &quot;Definition of Done&quot; criteria.
          </p>
          <ul className="text-xs md:text-sm text-slate-200 space-y-2 md:space-y-3 mb-4 md:mb-5">
            {[
              "Upload geo-tagged photos",
              "Provide GitHub commit hashes",
              "Public ledger transaction IDs",
            ].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <span className="text-primary text-sm mt-0.5">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-primary text-xs md:text-sm font-bold hover:gap-2 transition-all"
          >
            Read the full guide <span>→</span>
          </button>
        </div>
      </div>

      {/* QF Explainer */}
      <div className="bg-background-dark border border-surface-border p-5 md:p-6 rounded-xl shadow-sm">
        <h4 className="text-sm md:text-base font-bold text-white mb-3 md:mb-4">
          How Funding Works
        </h4>
        <div className="flex gap-3 md:gap-4">
          <div className="bg-sky-900/40 p-2.5 rounded-lg h-fit shrink-0">
            <span className="text-sky-300 text-lg">↗</span>
          </div>
          <div className="text-xs md:text-sm text-slate-100 space-y-2">
            <p>
              <strong>Quadratic Matching:</strong> the number of contributors
              matters more than the amount contributed.
            </p>
            <p className="text-text-muted">
              Small contributions from many people unlock larger matching pool
              funds.
            </p>
          </div>
        </div>
      </div>

      {/* Help Link */}
      <div className="text-center mt-1">
        <p className="text-xs md:text-sm text-slate-400 mb-2">
          Stuck? Need clarification?
        </p>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-slate-100 hover:text-primary transition-colors"
        >
          <span>💬</span>
          Chat with Support
        </button>
      </div>
    </aside>
  );
};


