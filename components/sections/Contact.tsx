import Reveal from "@/components/Reveal";
import Blob from "@/components/motifs/Blob";
import CoffeeBean from "@/components/motifs/CoffeeBean";

export default function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal className="relative overflow-hidden rounded-sm border border-border bg-cream px-8 py-14 text-center md:px-16 md:py-20">
          <Blob
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 text-terracotta/10 animate-blob-drift"
            aria-hidden
          />
          <Blob
            className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 text-palmetto/10 animate-blob-drift"
            aria-hidden
            style={{ animationDelay: "3s" }}
          />
          <CoffeeBean
            className="pointer-events-none absolute left-10 bottom-8 hidden h-9 w-6 text-terracotta/25 animate-bean-float-slow sm:block"
            style={{ "--r": "-16deg" } as React.CSSProperties}
          />
          <CoffeeBean
            className="pointer-events-none absolute right-12 top-10 hidden h-7 w-5 text-espresso/15 animate-bean-float sm:block"
            style={{ "--r": "22deg" } as React.CSSProperties}
          />

          <p className="font-kicker relative mb-4 text-[11px] text-terracotta">Get In Touch</p>
          <h2 className="font-display mx-auto max-w-2xl text-3xl uppercase leading-tight text-espresso md:text-5xl">
            More stores should make Coffee Rush feel more established,
            not less local.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-text-secondary">
            Questions about a location, a partnership, catering, or joining
            the crew? Reach out and a real person will get back to you.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@coffeerush.com"
              className="rounded-sm bg-espresso px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:brightness-110"
            >
              Email Coffee Rush
            </a>
            <a
              href="#careers"
              className="rounded-sm border border-border-hover px-7 py-3.5 text-sm font-medium text-espresso transition-colors hover:border-espresso"
            >
              Explore Careers
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
