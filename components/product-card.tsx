"use client";

import { motion } from "framer-motion";

const specs = [
  "100% merino wool felt",
  "No plastics, no metal — fully sauna-safe",
  "Protects hair, scalp, and skin from heat stress",
  "Naturally temperature-regulating",
];

export default function ProductCard() {
  return (
    <section className="bg-cream px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-50px" }}
        className="bg-off-white p-6 pt-8"
      >
        {/* Product image placeholder */}
        <div className="w-full aspect-square bg-gradient-to-br from-sand to-[#C4B5A3] mb-7 flex items-center justify-center">
          <span className="text-deep-brown/20 text-xs tracking-[0.15em] uppercase">
            Product image
          </span>
        </div>

        <h3 className="font-serif text-2xl font-normal text-charcoal mb-1">
          The Sauna Hat
        </h3>
        <p className="text-base font-normal text-warm-brown mb-4">£45</p>

        <div className="flex flex-col gap-2.5 mb-7 pt-4 border-t border-muted-gold/20">
          {specs.map((spec) => (
            <div
              key={spec}
              className="flex items-center gap-2.5 text-[13px] font-light text-charcoal"
            >
              <span className="w-1 h-1 rounded-full bg-muted-gold shrink-0" />
              {spec}
            </div>
          ))}
        </div>

        <a
          href="#waitlist"
          className="block w-full text-center bg-sand text-deep-brown px-8 py-3.5 font-sans text-[13px] font-medium tracking-[0.06em] uppercase transition-colors hover:bg-off-white"
        >
          Join waitlist for restock
        </a>
      </motion.div>
    </section>
  );
}
