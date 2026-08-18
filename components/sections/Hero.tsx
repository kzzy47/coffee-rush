import Image from "next/image";
import SteamCup from "@/components/motifs/SteamCup";
import Blob from "@/components/motifs/Blob";
import CoffeeBean from "@/components/motifs/CoffeeBean";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <Blob
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 text-terracotta/10 animate-blob-drift md:h-96 md:w-96"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-[1fr_0.95fr] md:items-center md:px-10 md:py-24">
        <div className="relative">
          <div className="mb-6 flex items-center gap-3 text-espresso">
            <SteamCup className="h-8 w-8" />
            <span className="h-px w-10 bg-terracotta/60" />
            <p
              className="text-[11px] font-bold uppercase tracking-[0.16em] text-terracotta"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Family Owned Since 1994
            </p>
          </div>
          <h1 className="font-display max-w-lg text-[13vw] uppercase leading-[0.92] text-espresso sm:text-5xl lg:text-6xl">
            Local roots.
            <br />
            Forward motion.
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
            Coffee Rush has been in the family since 1994. Not a chain
            pretending to be local, and not a café too precious to move fast.
            Just the place people build their morning around.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#locations"
              className="rounded-sm bg-espresso px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:brightness-110"
            >
              Find a Location
            </a>
            <a
              href="#careers"
              className="rounded-sm border border-border-hover px-7 py-3.5 text-sm font-medium text-espresso transition-colors hover:border-espresso"
            >
              Join the Crew
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <Blob
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 text-terracotta/25 animate-blob-drift md:h-56 md:w-56"
            aria-hidden
          />
          <Blob
            className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 text-palmetto/15 animate-blob-drift md:h-44 md:w-44"
            aria-hidden
            style={{ animationDelay: "2.5s" }}
          />

          <div
            className="relative aspect-[4/3] overflow-hidden shadow-[0_40px_80px_-30px_rgba(76,45,29,0.45)]"
            style={{ borderRadius: "62% 38% 41% 59% / 55% 45% 55% 45%" }}
          >
            <Image
              src="/photos/coffeerush.png"
              alt="Coffee Rush storefront at dusk, Pinellas County"
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover object-center"
            />
          </div>

          <CoffeeBean
            className="absolute -left-6 top-6 h-10 w-7 text-espresso animate-bean-float"
            style={{ "--r": "-18deg" } as React.CSSProperties}
          />
          <CoffeeBean
            className="absolute -left-2 top-24 h-6 w-4 text-terracotta animate-bean-float-slow"
            style={{ "--r": "10deg" } as React.CSSProperties}
          />
          <CoffeeBean
            className="absolute -bottom-5 right-10 h-8 w-6 text-espresso animate-bean-float-slow"
            style={{ "--r": "24deg" } as React.CSSProperties}
          />

          <div className="absolute -bottom-4 left-6 rounded-sm bg-espresso px-3.5 py-1.5 shadow-[0_10px_24px_-10px_rgba(76,45,29,0.6)]">
            <p className="text-[10.5px] font-medium uppercase leading-snug tracking-[0.08em] text-cream">
              Coffee Rush · Pinellas County
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
