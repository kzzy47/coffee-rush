import Reveal from "@/components/Reveal";
import RushLine from "@/components/RushLine";
import Blob from "@/components/motifs/Blob";
import CoffeeBean from "@/components/motifs/CoffeeBean";

const LADDER = [
  "Team Member",
  "Certified Barista / Station Lead",
  "Shift Leader",
  "Assistant Manager",
  "General Manager",
  "Operator Candidate",
  "Operator Partner",
];

export default function OperatorProgram() {
  return (
    <section id="careers" className="relative overflow-hidden border-b border-border bg-espresso text-sand">
      <Blob
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 text-sand/[0.04] animate-blob-drift"
        aria-hidden
      />
      <CoffeeBean
        className="pointer-events-none absolute right-16 bottom-10 hidden h-14 w-9 text-terracotta/20 animate-bean-float-slow lg:block"
        style={{ "--r": "-12deg" } as React.CSSProperties}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <RushLine className="mb-6" tone="light" />
        <Reveal>
          <p className="font-kicker mb-4 text-[11px] text-terracotta">Careers &amp; Operator Partners</p>
          <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-cream md:text-5xl">
            We don&rsquo;t sell stores. We develop operators.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-2">
          <Reveal delay={0.05}>
            <p className="text-[15px] leading-relaxed text-sand/80">
              Most franchise systems start by asking how much money you have.
              Coffee Rush starts by asking whether you can operate. Our
              Operator Partners work inside the company, learn the system,
              prove they can lead people and earn the opportunity to take
              responsibility for a store.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-sand/80">
              Coffee Rush funds the expansion and protects the brand.
              Operators bring leadership, accountability and a personal
              commitment to the result. Your first shift could become your
              first store.
            </p>
            <a
              id="operator-program"
              href="#contact"
              className="mt-8 inline-block rounded-sm bg-terracotta px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:brightness-110"
            >
              Ask About the Operator Program
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-kicker mb-5 text-[10.5px] text-sand/50">
              Come For The Shift. Build Toward The Store.
            </p>
            <ol className="flex flex-col gap-0 border-t border-sand/15">
              {LADDER.map((role, i) => (
                <li
                  key={role}
                  className="group flex items-baseline gap-4 border-b border-sand/15 py-3.5 transition-colors duration-300 hover:border-sand/30"
                >
                  <span className="w-6 shrink-0 font-display text-xs text-terracotta transition-transform duration-300 group-hover:translate-x-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-sand/90 transition-colors duration-300 group-hover:text-cream">{role}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
