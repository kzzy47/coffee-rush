import RushLine from "@/components/RushLine";

const MENU = ["Coffee", "Cold", "Rush Favorites", "Seasonal", "Food", "Grab & Go"];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-espresso text-sand">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-display text-2xl leading-none">
            COFFEE<span className="text-sand/60">RUSH</span>
          </p>
          <RushLine className="mt-4" tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand/70">
            Family owned since 1994. Growing local, one community and one
            proven operator at a time.
          </p>
        </div>

        <div>
          <p className="font-kicker text-[10.5px] text-sand/50">Menu</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {MENU.map((item) => (
              <li key={item} className="text-sm text-sand/80">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-kicker text-[10.5px] text-sand/50">Company</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-sand/80">
            <li><a href="#story" className="hover:text-cream">Our Story</a></li>
            <li><a href="#careers" className="hover:text-cream">Careers</a></li>
            <li><a href="#operator-program" className="hover:text-cream">Operator Partner Program</a></li>
            <li><a href="#locations" className="hover:text-cream">Locations</a></li>
          </ul>
        </div>

        <div>
          <p className="font-kicker text-[10.5px] text-sand/50">Get In Touch</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-sand/80">
            <li>Pinellas &amp; Hillsborough County, Florida</li>
            <li>Expanding into Sarasota County</li>
            <li className="pt-1">
              <a href="#contact" className="text-cream underline underline-offset-4">
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-sand/50 md:flex-row md:items-center md:justify-between md:px-10">
          <p>&copy; {new Date().getFullYear()} Coffee Rush. All rights reserved.</p>
          <p>Family owned since 1994 &middot; Florida grown</p>
        </div>
      </div>
    </footer>
  );
}
