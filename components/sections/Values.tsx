import Reveal from "@/components/Reveal";
import RushLine from "@/components/RushLine";
import CoffeeBean from "@/components/motifs/CoffeeBean";

const VALUES = [
  { title: "Family Stewardship", body: "Make decisions like the brand needs to matter 30 years from now, not just next quarter." },
  { title: "Earned Trust", body: "Do what was promised. Make the drink right. Fix mistakes quickly. Let consistency build reputation." },
  { title: "Move With Purpose", body: "Work with urgency without creating chaos. Fast is a result of preparation, not panic." },
  { title: "Quietly Excellent", body: "Care deeply about quality without turning coffee into a lecture or performance." },
  { title: "Local Belonging", body: "Every shop should become useful to its immediate community, not simply occupy a retail box." },
  { title: "Owner's Mentality", body: "Leaders take responsibility for the entire result: people, product, cleanliness, costs, culture and guest loyalty." },
];

export default function Values() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <RushLine className="mb-6" />
        <Reveal>
          <p className="font-kicker mb-4 text-[11px] text-terracotta">What We Stand For</p>
          <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-espresso md:text-5xl">
            Familiar enough to know you. Disciplined enough to never let you down.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 0.04}
              className="group relative bg-cream p-7 transition-colors duration-300 hover:bg-surface"
            >
              <CoffeeBean className="h-5 w-3.5 text-terracotta/60 transition-transform duration-300 group-hover:-translate-y-1" />
              <p className="font-display mt-4 text-base text-espresso">{value.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{value.body}</p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-terracotta transition-transform duration-300 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
