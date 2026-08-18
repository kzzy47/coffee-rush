import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import CoffeeBean from "@/components/motifs/CoffeeBean";

const MENU = [
  { title: "Coffee", body: "Brewed coffee, espresso drinks and core hot beverages." },
  { title: "Cold", body: "Iced coffee, cold brew, nitro cold brew and other high-frequency cold formats." },
  { title: "Rush Favorites", body: "Rush Fuel, Cinnamon Rush, Beach Day Latte, Dirty Chai, Morning Rush. Made to Rush." },
  { title: "Non Coffee", body: "Matcha, chai, hot chocolate, smoothies, italian soda, loose leaf tea." },
  { title: "Food", body: "Breakfast and lunch made fresh daily, plus a full case of pastries baked in-house." },
  { title: "Extras", body: "Milk options, extra shots, cold foam. Make it yours." },
];

export default function Menu() {
  return (
    <section id="menu" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 md:px-10 md:py-20">
        <Reveal>
          <p className="font-kicker text-[11px] text-terracotta">On The Menu</p>
          <h2 className="font-display mt-3 max-w-xl text-4xl uppercase leading-[0.95] text-espresso sm:text-5xl">
            Familiar first. Distinctive second.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
            Coffee people can respect. Normal people can order without
            homework. New items only earn a permanent spot if they strengthen
            frequency, speed or a real guest need.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-stretch">
          <Reveal delay={0.05} className="relative w-full">
            <PhotoFrame
              src="/photos/menu.png"
              alt="Coffee Rush menu board and pastry case"
              fill
              objectPosition="object-top"
              sizes="(min-width: 768px) 38vw, 100vw"
              caption="Order without homework"
              className="relative h-full w-full"
            />
          </Reveal>

          <div className="flex flex-col border-t border-border">
            {MENU.map((item, i) => (
              <Reveal key={item.title} delay={0.08 + i * 0.04} className="group flex gap-4 border-b border-border py-6">
                <CoffeeBean className="mt-1 h-6 w-4 shrink-0 text-terracotta transition-transform duration-300 group-hover:-translate-y-1" />
                <div>
                  <p className="font-display text-lg text-espresso">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
