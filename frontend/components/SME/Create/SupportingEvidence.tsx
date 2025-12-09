import React, { useRef } from "react";
import type { UploadedFile } from "../types";

interface SupportingEvidenceProps {
  files: UploadedFile[];
  setFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
}

export const SupportingEvidence: React.FC<SupportingEvidenceProps> = ({
  files,
  setFiles,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFile = e.target.files[0];
      setFiles((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name: newFile.name,
          size: `${(newFile.size / 1024 / 1024).toFixed(1)} MB`,
          type: newFile.type || "file",
        },
      ]);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <section className="bg-background-dark p-5 md:p-6 lg:p-8 rounded-xl border border-surface-border shadow-sm">
      <div className="flex items-center gap-3 mb-5 md:mb-6 border-b border-surface-border pb-4">
        <div className="rounded-lg bg-primary/10 text-primary p-2">
          <span className="text-xs md:text-sm font-bold">4</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white">
          Supporting Evidence
        </h3>
      </div>

      <div
        className="flex flex-col items-center justify-center w-full h-44 md:h-48 rounded-lg border-2 border-dashed border-slate-600 bg-surface-dark hover:bg-background-dark hover:border-primary transition-all cursor-pointer group"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="p-4 bg-background-dark rounded-full mb-3 shadow-sm group-hover:shadow-md transition-shadow">
          <span className="text-2xl md:text-3xl text-primary">⛅</span>
        </div>
        <p className="text-xs md:text-sm font-bold text-slate-100 group-hover:text-primary transition-colors">
          Click to upload or drag and drop
        </p>
        <p className="text-[11px] text-slate-400 mt-1">
          PDF, PNG, JPG (max. 10MB)
        </p>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between p-3 bg-surface-dark rounded-lg border border-surface-border hover:border-slate-400 transition-colors shadow-sm"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                {file.type.toUpperCase().slice(0, 3) || "FILE"}
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-medium text-slate-100">
                  {file.name}
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wide">
                  {file.size}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeFile(file.id)}
              className="p-1.5 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};



