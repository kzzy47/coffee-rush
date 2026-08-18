import Reveal from "@/components/Reveal";
import RushLine from "@/components/RushLine";
import Blob from "@/components/motifs/Blob";

const PERSONAS = [
  { name: "The Regular", body: "Lives or works nearby. In several times a week. Wants to be recognized, not just served." },
  { name: "The Commuter", body: "Morning-driven. Predictable execution matters more than anything. Drive-through is the win." },
  { name: "The Family Runner", body: "School, sports, errands, appointments. Needs flexible options and a friendly room." },
  { name: "The Shift Worker", body: "Healthcare, hospitality, trades, public safety. Owns the early and late routine." },
  { name: "The Student / Mobile Worker", body: "Uses the shop as a reset or a work session. Wi-Fi, charging, seating, repeat visits." },
  { name: "The Local Connector", body: "Knows the neighborhood. Becomes word-of-mouth when the store shows up for the community." },
];

export default function Personas() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <Blob
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 text-terracotta/10 animate-blob-drift"
        aria-hidden
        style={{ animationDelay: "3s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <RushLine className="mb-6" />
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-kicker mb-4 text-[11px] text-terracotta">Who We&rsquo;re For</p>
            <h2 className="font-display max-w-xl text-3xl uppercase leading-tight text-espresso md:text-5xl">
              A dependable moment inside a moving day.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            Not selling caffeine. Selling: &ldquo;I know this place, they know
            what they&rsquo;re doing, and I can keep going.&rdquo;
          </p>
        </Reveal>

        <div className="mt-12 grid gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {PERSONAS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.04}
              className="group border-b border-border py-7 pr-6 transition-colors duration-300 hover:bg-cream/50 lg:border-r lg:py-8 lg:pl-6 lg:[&:nth-child(3n)]:border-r-0"
            >
              <span className="block h-[2px] w-6 origin-left scale-x-0 bg-terracotta transition-transform duration-300 group-hover:scale-x-100" />
              <p className="font-display mt-3 text-lg text-espresso">{p.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
