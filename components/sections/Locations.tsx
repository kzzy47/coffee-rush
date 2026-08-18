import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import CoffeeBean from "@/components/motifs/CoffeeBean";

const AREAS = [
  { name: "Pinellas County", status: "Open now", body: "Our original home. Multiple shops serving the daily routine." },
  { name: "Hillsborough County", status: "Open now", body: "Growing alongside the neighborhoods that got us here." },
  { name: "Sarasota County", status: "In development", body: "The next chapter of Coffee Rush, opening soon." },
];

export default function Locations() {
  return (
    <section id="locations" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 md:px-10 md:py-20">
        <Reveal>
          <p className="font-kicker text-[11px] text-terracotta">Where We Are</p>
          <h2 className="font-display mt-3 max-w-xl text-4xl uppercase leading-[0.95] text-espresso sm:text-5xl">
            Growing local since 1994.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
            Three shops open today, with two more in development. We grow in
            clusters, not dots on a map, so every new store gets the same
            attention as the first.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
          <div className="flex flex-col border-t border-border">
            {AREAS.map((area, i) => (
              <Reveal key={area.name} delay={i * 0.06} className="border-b border-border py-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <CoffeeBean className="mt-1 h-6 w-4 shrink-0 text-terracotta" />
                    <div>
                      <p className="font-display text-lg text-espresso">{area.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{area.body}</p>
                    </div>
                  </div>
                  <span className="font-kicker mt-1 shrink-0 text-[10px] text-palmetto">{area.status}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="relative w-full">
            <PhotoFrame
              src="/photos/delivery.png"
              alt="Coffee Rush delivery and catering vehicle"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              caption="Serving three counties"
              className="relative h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
