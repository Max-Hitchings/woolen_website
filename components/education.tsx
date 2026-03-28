"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="bg-off-white px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Why it matters
        </p>

        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          Your head absorbs the most heat in a sauna
        </h2>

        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-7">
          Air temperature at head height can be 20–30°C hotter than at bench
          level. Without protection, this accelerates hair dryness, scalp
          stress, and cuts your session short. A properly made wool hat regulates
          thermal load — so you stay in longer, recover better, and protect what
          matters.
        </p>

        <div className="flex gap-6 pt-7 border-t border-muted-gold/25">
          <div className="flex-1">
            <div className="font-serif text-[28px] font-normal text-charcoal mb-1">
              30°C
            </div>
            <div className="text-xs font-light text-warm-brown leading-[1.45]">
              hotter at head height than bench level
            </div>
          </div>
          <div className="flex-1">
            <div className="font-serif text-[28px] font-normal text-charcoal mb-1">
              2×
            </div>
            <div className="text-xs font-light text-warm-brown leading-[1.45]">
              longer comfortable sessions with head protection
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
