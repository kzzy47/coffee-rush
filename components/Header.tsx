"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
  { label: "Careers", href: "#careers" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link href="#top" className="flex items-center gap-2 overflow-hidden rounded-sm">
          <Image
            src="/brand/coffee-rush-logo.png"
            alt="Coffee Rush"
            width={870}
            height={140}
            priority
            className="h-8 w-auto object-contain md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-espresso"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#locations"
          className="hidden rounded-sm bg-espresso px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:brightness-110 md:inline-block"
        >
          Find a Location
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-border text-espresso md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-4 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-px w-4 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-text-secondary transition-colors hover:text-espresso"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#locations"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-espresso px-5 py-3 text-center text-sm font-medium text-cream"
            >
              Find a Location
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
