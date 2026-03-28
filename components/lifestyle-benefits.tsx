"use client";

import { motion } from "framer-motion";

const blocks = [
  {
    gradient: "from-[#7a6347] to-[#5c4a36]",
    placeholder: "Sauna lifestyle image",
    heading: "Stay longer, go deeper",
    body: "Thermal regulation lets you push past the point where most people tap out — where the real cardiovascular and nervous system benefits begin.",
  },
  {
    gradient: "from-[#6B5740] to-[#4a3c2d]",
    placeholder: "Product detail image",
    heading: "Considered, not compromised",
    body: "100% merino wool felt. No synthetics, no metal, no plastics. Every seam and contour shaped for performance in heat — and confidence outside it.",
  },
];

export default function LifestyleBenefits() {
  return (
    <section className="bg-off-white px-6 pb-14">
      {blocks.map((block, i) => (
        <motion.div
          key={block.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 last:mb-0"
        >
          {/* Image placeholder */}
          <div
            className={`w-full aspect-[4/5] bg-gradient-to-br ${block.gradient} flex items-center justify-center`}
          >
            <span className="text-white/20 text-xs tracking-[0.15em] uppercase">
              {block.placeholder}
            </span>
          </div>

          <div className="pt-4">
            <h3 className="font-serif text-xl font-normal text-charcoal mb-1.5">
              {block.heading}
            </h3>
            <p className="text-[13px] font-light text-warm-brown leading-relaxed">
              {block.body}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
