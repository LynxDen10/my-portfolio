const previewStyles = {
  mobile: {
    accent: "from-emerald-400 to-cyan-500",
    label: "AcciAlert",
    sideLabel: "Live route monitoring",
  },
  dashboard: {
    accent: "from-blue-500 to-indigo-600",
    label: "Barangay Portal",
    sideLabel: "Community dashboard",
  },
  billing: {
    accent: "from-violet-500 to-blue-600",
    label: "Billing Portal",
    sideLabel: "Payment overview",
  },
};

export default function ProjectPreview({ variant }) {
  const preview = previewStyles[variant] ?? previewStyles.dashboard;

  return (
    <div
      aria-hidden="true"
      className="relative h-full min-h-52 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-3 shadow-inner"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${preview.accent}`} />
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-2 text-[9px] font-medium text-slate-400">{preview.label}</span>
      </div>

      {variant === "mobile" ? (
        <div className="mx-auto mt-4 w-24 rounded-[1.35rem] border-4 border-slate-700 bg-slate-900 p-1.5 shadow-2xl">
          <div className={`rounded-xl bg-gradient-to-b ${preview.accent} px-2 py-3`}>
            <div className="mx-auto h-1 w-8 rounded-full bg-slate-900/70" />
            <div className="mt-4 rounded-lg bg-slate-950/70 p-2">
              <div className="h-8 rounded bg-emerald-400/30" />
              <div className="mt-2 h-1.5 w-10 rounded bg-white/70" />
              <div className="mt-1 h-1.5 w-7 rounded bg-white/40" />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1">
              <span className="h-5 rounded bg-white/25" />
              <span className="h-5 rounded bg-white/25" />
              <span className="h-5 rounded bg-white/25" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-[3.5rem_1fr] gap-3">
          <div className="rounded-lg bg-slate-800 p-2">
            <div className="h-2 w-6 rounded bg-slate-600" />
            <div className="mt-4 space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-1.5 rounded bg-slate-700" />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-20 rounded bg-slate-200" />
                <div className="mt-1.5 h-1.5 w-12 rounded bg-slate-600" />
              </div>
              <div className={`h-5 w-11 rounded bg-gradient-to-r ${preview.accent}`} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg bg-slate-800 p-2">
                  <div className="h-1.5 w-7 rounded bg-slate-600" />
                  <div className="mt-2 h-3 w-9 rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-slate-800 p-3">
              <div className="flex h-12 items-end gap-1.5">
                {[30, 55, 38, 76, 50, 88, 65].map((height, index) => (
                  <span
                    key={height}
                    className={`flex-1 rounded-t bg-gradient-to-t ${preview.accent}`}
                    style={{ height: `${height}%`, opacity: 0.45 + index / 14 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <span className="absolute bottom-3 left-3 text-[10px] font-medium text-slate-500">
        {preview.sideLabel}
      </span>
    </div>
  );
}
