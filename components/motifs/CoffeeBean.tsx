export default function CoffeeBean({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 64 96" className={className} style={style} fill="none" aria-hidden>
      <path
        d="M32 2C15 2 2 22 2 46c0 26 13 48 30 48s30-22 30-48C62 22 49 2 32 2Z"
        fill="currentColor"
      />
      <path
        d="M32 8C24 20 22 32 26 46c4 14 2 28-6 42"
        stroke="var(--cream)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}
