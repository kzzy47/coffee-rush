export default function SteamCup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path className="animate-steam-1" style={{ transformOrigin: "16px 8px" }} d="M16 12c-3 3-3 5 0 8" opacity="0" />
        <path className="animate-steam-2" style={{ transformOrigin: "24px 6px" }} d="M24 10c-3 3-3 5 0 8" opacity="0" />
        <path className="animate-steam-3" style={{ transformOrigin: "32px 8px" }} d="M32 12c-3 3-3 5 0 8" opacity="0" />
      </g>
      <path
        d="M8 22h26v9c0 6.6-5.4 12-12 12h-2c-6.6 0-12-5.4-12-12v-9Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M34 25h3.5a4.5 4.5 0 0 1 0 9H34"
        stroke="currentColor"
        strokeWidth="2.4"
        fill="none"
      />
      <path d="M6 40h30" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
