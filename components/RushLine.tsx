export default function RushLine({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const heavy = tone === "dark" ? "bg-espresso" : "bg-sand";
  const light = tone === "dark" ? "bg-terracotta/60" : "bg-terracotta/70";

  return (
    <div className={`flex items-center gap-1.5 ${className}`} aria-hidden>
      <span className={`h-[3px] w-8 ${heavy}`} />
      <span className={`h-px w-4 ${light}`} />
    </div>
  );
}
