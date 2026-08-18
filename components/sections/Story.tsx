import Reveal from "@/components/Reveal";
import RushLine from "@/components/RushLine";
import PhotoFrame from "@/components/PhotoFrame";
import Blob from "@/components/motifs/Blob";
import CoffeeBean from "@/components/motifs/CoffeeBean";

const TIMELINE = [
  { era: "1994", detail: "Family ownership begins. The heritage is set." },
  { era: "2015", detail: "A second location proves the experience can travel." },
  { era: "Recent growth", detail: "A third shop turns it into a small network, not a single store." },
  { era: "Now", detail: "Two more shops in development, reaching into Sarasota County." },
];

const MANIFESTO = [
  "We believe the best local businesses remember where they came from.",
  "We believe consistency is a form of respect.",
  "We believe fast should never feel careless.",
  "We believe growth is only good when the next shop feels as cared for as the first.",
  "We believe employees should be able to see a future inside the company.",
  "We believe local does not have to mean small.",
  "We believe family ownership means stewardship, not resistance to change.",
  "We believe every cup should help someone get where they are going.",
];

export default function Story() {
  return (
    <section id="story" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <RushLine className="mb-6" />
        <Reveal>
          <p className="font-kicker text-[11px] text-terracotta">Our Story</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl uppercase leading-[0.95] text-espresso sm:text-5xl">
            Rooted on the left. Moving forward on the right.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-stretch">
          <div className="flex flex-col gap-10">
            <Reveal delay={0.05}>
              <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-text-secondary">
                <p>
                  Coffee Rush has been in the family since 1994. What began as
                  a local coffee business grew the way the best neighborhood
                  businesses usually do: slowly, through habit, relationships
                  and trust.
                </p>
                <p>
                  For years, Coffee Rush was defined less by how many stores
                  it had than by how often people came back. It became part
                  of the morning routine, the place people could count on
                  before work, between errands, after school drop-off or on
                  the way to wherever the day was going.
                </p>
                <p>
                  COFFEE is grounded and dark, the foundation. RUSH is
                  lighter, moving forward. The mark tells the story of the
                  company itself: rooted in what the family built, moving
                  confidently toward what comes next.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-auto">
              <ul className="flex flex-col gap-0 border-t border-border">
                {TIMELINE.map((item) => (
                  <li
                    key={item.era}
                    className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-5"
                  >
                    <span className="font-display text-sm uppercase tracking-wide text-terracotta">
                      {item.era}
                    </span>
                    <span className="text-sm leading-relaxed text-text-secondary">
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative w-full">
            <Blob className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 text-terracotta/20 animate-blob-drift" aria-hidden />
            <CoffeeBean
              className="pointer-events-none absolute -left-4 bottom-16 h-9 w-6 text-palmetto/70 animate-bean-float-slow"
              style={{ "--r": "-14deg" } as React.CSSProperties}
            />
            <PhotoFrame
              src="/photos/interior-counter.png"
              alt="Coffee Rush counter, Local Roots. Forward Motion. wall"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              caption="Inside every Coffee Rush"
              className="relative h-full w-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16 rounded-sm border border-border bg-espresso px-6 py-10 sm:px-8 md:mt-20 md:px-14 md:py-16">
          <p className="font-kicker mb-6 text-[11px] text-terracotta">The Manifesto</p>
          <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {MANIFESTO.map((line) => (
              <li key={line} className="flex gap-3 text-[15px] leading-snug text-sand/90">
                <CoffeeBean className="mt-0.5 h-4 w-3 shrink-0 text-terracotta" />
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
