import Reveal from "@/components/Reveal";
import RushLine from "@/components/RushLine";
import SteamCup from "@/components/motifs/SteamCup";

const MOMENTS = [
  { step: "01", title: "Arrival", body: "The store looks open, clean and easy to understand. Menu anxiety is low." },
  { step: "02", title: "Welcome", body: "A team member acknowledges the guest quickly. Regulars feel recognized, not forced into familiarity." },
  { step: "03", title: "Order", body: "The menu is legible. Staff can answer questions simply. Upselling is useful, not pushy." },
  { step: "04", title: "Hand-off", body: "Names and drinks are clear. Accuracy is checked. A mistake gets fixed immediately, no debate." },
  { step: "05", title: "Exit / Return", body: "The guest leaves with a reason to come back: quality, familiarity, momentum." },
];

export default function GuestExperience() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <RushLine className="mb-6" />
        <Reveal className="flex items-start gap-4">
          <SteamCup className="mt-1 hidden h-9 w-9 shrink-0 text-terracotta/70 sm:block" />
          <div>
            <p className="font-kicker mb-4 text-[11px] text-terracotta">Guest Experience</p>
            <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-espresso md:text-5xl">
              See them. Make it right. Keep it moving.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-0 md:grid-cols-5">
          {MOMENTS.map((m, i) => (
            <Reveal
              key={m.step}
              delay={i * 0.06}
              className="group relative border-t border-border py-6 pr-6 transition-colors duration-300 md:border-t-0 md:border-l md:py-2 md:pl-6 md:pr-4 md:hover:border-l-terracotta"
            >
              <span className="font-display text-3xl text-sand transition-colors duration-300 group-hover:text-terracotta/50">
                {m.step}
              </span>
              <p className="mt-3 font-display text-base text-espresso">{m.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{m.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 border-l-2 border-terracotta bg-cream px-6 py-5 md:px-8">
          <p className="text-sm leading-relaxed text-text-secondary">
            No employee should ever make a guest feel foolish for not knowing
            coffee terminology. Remakes are fast and frictionless. That&rsquo;s
            not a slogan, it&rsquo;s a non-negotiable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
