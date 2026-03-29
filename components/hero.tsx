"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden">
      <Image
        src="/images/hero.jpeg"
        alt="Woolen merino wool sauna hat on a wooden sauna bench with steam rising in the background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-10 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent">
        <h1 className="font-serif font-light text-[32px] leading-[1.15] text-off-white mb-3 -tracking-[0.01em]">
          Made for
          <br />
          modern rituals
        </h1>

        <p className="text-sm font-light text-off-white/75 leading-relaxed mb-6 max-w-[300px]">
          Protect your hair, skin and health. Extend every session.
        </p>

        <a
          href="#waitlist"
          className="inline-flex items-center gap-2 border border-sand/80 bg-transparent text-off-white rounded-[3px] px-8 py-3.5 font-sans text-[13px] font-medium tracking-[0.12em] uppercase transition-colors hover:bg-sand/20"
        >
          Join the waitlist
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
