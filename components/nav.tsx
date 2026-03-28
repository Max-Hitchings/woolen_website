"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 transition-all duration-400 ${
        scrolled
          ? "bg-cream/92 backdrop-blur-[12px]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`font-sans font-normal text-lg tracking-[0.08em] transition-colors duration-400 ${
          scrolled ? "text-charcoal" : "text-off-white"
        }`}
      >
        woolen
      </div>

      <div
        className="relative"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-colors duration-400 ${
            scrolled ? "stroke-charcoal" : "stroke-off-white"
          }`}
        >
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        {tooltipVisible && (
          <div className="absolute right-0 top-full mt-2 whitespace-nowrap bg-charcoal text-off-white text-xs tracking-[0.1em] uppercase px-3 py-2">
            Sold out
          </div>
        )}
      </div>
    </nav>
  );
}
