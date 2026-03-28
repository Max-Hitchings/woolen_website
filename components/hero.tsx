"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      {/* Placeholder gradient — replace with real photography */}
      <div className="w-full h-full bg-gradient-to-br from-warm-brown via-deep-brown to-[#2a1f15]" />

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-10 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif font-light text-[32px] leading-[1.15] text-off-white mb-3 -tracking-[0.01em]"
        >
          Made for
          <br />
          modern rituals
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm font-light text-off-white/75 leading-relaxed mb-6 max-w-[300px]"
        >
          Protect your hair, skin and health. Extend every session.
        </motion.p>

        <motion.a
          href="#waitlist"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="inline-block bg-sand text-deep-brown px-8 py-3.5 font-sans text-[13px] font-medium tracking-[0.06em] uppercase transition-colors hover:bg-off-white"
        >
          Join the waitlist
        </motion.a>
      </div>
    </section>
  );
}
