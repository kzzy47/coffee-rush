const NOTE = { fontFamily: "var(--font-montserrat), sans-serif" };

export default function PhotoSlot({
  label,
  ratio = "aspect-[4/5]",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-dashed border-border-hover bg-surface-elevated ${ratio} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(76,45,29,0.06) 0px, rgba(76,45,29,0.06) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-text-muted">
          <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 16l5-4.5 4 3.5 4-4L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p style={NOTE} className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted">
          Photo needed
        </p>
        <p className="max-w-[16rem] text-xs leading-relaxed text-text-muted">{label}</p>
      </div>
    </div>
  );
}
