import React from "react";

interface PitchSectionProps {
  description: string;
  onChange: (value: string) => void;
}

export const PitchSection: React.FC<PitchSectionProps> = ({
  description,
  onChange,
}) => {
  return (
    <section className="bg-background-dark rounded-xl border border-surface-border p-5 md:px-6 md:py-6 shadow-sm">
      <div className="flex items-center gap-3 mb-5 md:mb-6 border-b border-surface-border pb-4">
        <div className="rounded-lg bg-primary/10 text-primary p-2">
          <span className="text-xs md:text-sm font-bold">2</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white">
          The Pitch
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-base font-semibold text-slate-100">
            Detailed Description
          </p>
          <button
            type="button"
            className="text-xs md:text-sm text-primary font-bold hover:underline"
          >
            View formatting guide
          </button>
        </div>
        <div className="rounded-lg border border-surface-border bg-surface-dark overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
          <div className="flex gap-1 p-2 border-b border-surface-border bg-background-dark/60">
            {["B", "I", "•", "↗", "📎"].map((label) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center justify-center w-7 h-7 rounded text-xs text-slate-300 hover:bg-surface-hover hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>
          <textarea
            className="w-full h-48 p-3 md:p-4 bg-transparent text-sm md:text-base text-slate-100 outline-none resize-none placeholder:text-slate-500"
            placeholder="Describe the problem, your solution, and the impact on the community..."
            value={description}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};


