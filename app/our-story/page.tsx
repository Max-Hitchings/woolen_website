import type { Metadata } from "next";
import ContentPageShell from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Our Story | Woolen",
  description:
    "Woolen was founded to bring material quality and design standards to sauna accessories. Health-first, not hype-first.",
};

export default function OurStoryPage() {
  return (
    <ContentPageShell
      sectionLabel="Woolen"
      title="Our story"
      subtitle="Founded from a simple observation: the sauna accessories market deserved better."
    >
      <section className="bg-off-white px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Origin
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          A growing culture, poorly served
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          Sauna culture is expanding rapidly beyond its Nordic and Eastern
          European roots. Cold-water immersion, breathwork, and heat therapy have
          moved from niche practice to mainstream wellness. New sauna spaces are
          opening in cities across the UK and beyond.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          Yet the accessories market has not kept pace. Most sauna hats available
          today are cheaply made novelty items — poorly shaped, loosely felted,
          or made from synthetic materials that have no place in a heated room.
          Woolen was started to close that gap. To bring the same standard of
          material quality and considered design to sauna accessories that brands
          like Aesop brought to personal care.
        </p>
      </section>

      <section className="bg-cream px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Philosophy
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          Health-first, not hype-first
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          We make products backed by material science, not marketing trends.
          Every decision — from fibre sourcing to felt density to the absence of
          any synthetic component — is grounded in what actually performs in a
          sauna environment.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          The result is a product that earns confidence through use, not
          packaging. No exaggerated claims. No wellness jargon. Just a properly
          made tool for people who take their practice seriously.
        </p>
      </section>

      <section className="bg-off-white px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          What&rsquo;s next
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          One product, done properly
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          We are starting with a single product — the sauna hat — because we
          believe in getting one thing right before moving to the next. Our
          roadmap is guided by the same principle: every addition to the range
          must meet the same material and design standard. We will expand
          thoughtfully, not quickly.
        </p>
      </section>
    </ContentPageShell>
  );
}
