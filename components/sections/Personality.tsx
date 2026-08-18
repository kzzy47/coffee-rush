import Reveal from "@/components/Reveal";
import RushLine from "@/components/RushLine";
import Blob from "@/components/motifs/Blob";
import CoffeeBean from "@/components/motifs/CoffeeBean";

const ROWS = [
  { is: "Warm", isNot: "Overly sentimental" },
  { is: "Energetic", isNot: "Frantic" },
  { is: "Local", isNot: "Provincial" },
  { is: "Confident", isNot: "Arrogant" },
  { is: "Simple", isNot: "Generic" },
  { is: "Disciplined", isNot: "Sterile" },
  { is: "Modern", isNot: "Trend-chasing" },
  { is: "Unpretentious", isNot: "Cheap" },
];

export default function Personality() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <Blob
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 text-palmetto/10 animate-blob-drift"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <RushLine className="mb-6" />
        <Reveal>
          <p className="font-kicker mb-4 text-[11px] text-terracotta">Where We Draw the Line</p>
          <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-espresso md:text-5xl">
            Coffee Rush is. Coffee Rush isn&rsquo;t.
          </h2>
        </Reveal>

        <div className="relative mt-12 overflow-hidden rounded-sm border border-border">
          <CoffeeBean
            className="pointer-events-none absolute -right-3 -top-4 h-9 w-6 text-terracotta/30 animate-bean-float-slow"
            style={{ "--r": "18deg" } as React.CSSProperties}
          />
          <div className="grid grid-cols-2 border-b border-border bg-cream">
            <p className="font-kicker px-6 py-4 text-[10.5px] text-espresso md:px-8">Coffee Rush is</p>
            <p className="font-kicker border-l border-border px-6 py-4 text-[10.5px] text-text-muted md:px-8">Coffee Rush is not</p>
          </div>
          {ROWS.map((row, i) => (
            <Reveal key={row.is} delay={i * 0.03}>
              <div className="group grid grid-cols-2 border-b border-border transition-colors last:border-b-0 hover:bg-cream/60">
                <p className="font-display px-6 py-5 text-base text-espresso transition-transform duration-300 group-hover:translate-x-1 md:px-8 md:text-lg">
                  {row.is}
                </p>
                <p className="border-l border-border px-6 py-5 text-base text-text-muted line-through decoration-terracotta/40 md:px-8 md:text-lg">
                  {row.isNot}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
