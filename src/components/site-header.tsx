"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FEATURE_REQUEST_URL, ProductHuntBadge } from "@/components/landing";

const navLinks = [
  { href: "#why", label: "Why Justlog" },
  { href: "#features", label: "Features" },
  { href: "#tabata", label: "Tabata" },
  { href: "#widgets", label: "Widgets" },
  { href: "#switch", label: "Switching" },
  { href: "#faq", label: "FAQ" },
];

/** Pinned header: see-through over the lime hero, cream with a blur once the page scrolls. */
export function SiteHeader({ container }: { container: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none ${
        scrolled ? "bg-jl-bg/85 shadow-[0_1px_0_rgba(17,17,19,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className={`${container} flex h-20 items-center gap-6 lg:h-24 lg:gap-10`}>
        <Link href="/" className="flex items-center gap-3 text-jl-text">
          <Image src="/images/logan/icon-96.webp" alt="Justlog app icon" width={36} height={36} className="block shrink-0 rounded-lg" />
          <span className="text-[22px] font-semibold tracking-[-0.02em]">Justlog</span>
        </Link>
        <nav aria-label="Main" className="hidden flex-1 justify-center gap-6 whitespace-nowrap text-base lg:flex xl:gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-jl-text/70 transition-colors hover:text-jl-text">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href={FEATURE_REQUEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Request a feature"
            title="Request a feature"
            className="flex h-[50px] shrink-0 items-center gap-2 whitespace-nowrap rounded-2xl bg-jl-text px-[14px] text-[15px] font-semibold text-jl-bg transition-opacity hover:opacity-85 md:px-[18px] lg:px-[14px] 2xl:px-[18px]"
          >
            <Image src="/images/userjot.webp" alt="" width={22} height={22} unoptimized className="block shrink-0" />
            <span className="hidden md:inline lg:hidden 2xl:inline">Request a feature</span>
          </a>
          <div className="hidden shrink-0 sm:block lg:hidden xl:block">
            <ProductHuntBadge />
          </div>
          <a
            href="#download"
            className="flex h-[50px] shrink-0 items-center whitespace-nowrap rounded-2xl bg-jl-text px-[22px] text-[15px] font-semibold text-jl-bg transition-opacity hover:opacity-85"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
