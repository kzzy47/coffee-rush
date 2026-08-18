import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";

const MOMENTS = [
  { title: "The 1994 Mark", body: "“Family owned since 1994” lives on walls, cups, packaging or door glass in every store." },
  { title: "The Rush Line", body: "The horizontal motion device from the logo becomes a wayfinding and graphic element in-store." },
  { title: "Neighborhood Wall", body: "A controlled space for local photography, partners, schools and community stories." },
  { title: "Operator Story", body: "A small in-store introduction to the Operator Partner and local leadership team." },
];

export default function StoreEnvironment() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 md:px-10 md:py-20">
        <Reveal>
          <p className="font-kicker text-[11px] text-terracotta">Store Environment</p>
          <h2 className="font-display mt-3 max-w-xl text-4xl uppercase leading-[0.95] text-espresso sm:text-5xl">
            Recognizably Coffee Rush everywhere.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
            85% of every store is standardized: brand, materials, menu
            system, uniforms, service flow. The remaining 15% belongs to the
            neighborhood.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
          <div className="flex flex-col border-t border-border">
            {MOMENTS.map((m, i) => (
              <Reveal key={m.title} delay={0.08 + i * 0.05} className="border-b border-border py-6">
                <span className="font-display text-xs text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display mt-2 text-lg text-espresso">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{m.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.05} className="relative w-full">
            <PhotoFrame
              src="/photos/storefront-day.png"
              alt="Coffee Rush storefront, daytime, Pinellas County"
              fill
              sizes="(min-width: 768px) 34vw, 100vw"
              caption="Pinellas County, daytime"
              className="relative h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
