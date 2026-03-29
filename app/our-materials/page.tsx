import type { Metadata } from "next";
import ContentPageShell from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Our Materials | Woolen",
  description:
    "100% merino wool felt. No synthetics, no metal, no shortcuts. Every material in a Woolen product is sauna-safe and built to last.",
};

export default function OurMaterialsPage() {
  return (
    <ContentPageShell
      sectionLabel="Woolen"
      title="Our materials"
      subtitle="Every component is chosen for a reason. Nothing synthetic, nothing that compromises in heat."
    >
      <section className="bg-off-white px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          The fibre
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          100% merino wool
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          We use responsibly sourced merino wool with full supply chain
          traceability. Merino is naturally temperature-regulating, antibacterial,
          and moisture-wicking — properties that are impossible to replicate with
          synthetics and essential in a sauna environment.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-7">
          The wool is rated safe well beyond the temperatures any sauna
          produces. It will not melt, deform, or release harmful compounds. It
          simply does what it has evolved to do — regulate temperature.
        </p>

        <div className="flex gap-6 pt-7 border-t border-muted-gold/25">
          <div className="flex-1">
            <div className="font-serif text-[28px] font-normal text-charcoal mb-1">
              100%
            </div>
            <div className="text-xs font-light text-warm-brown leading-[1.45]">
              merino wool — no blends, no synthetics
            </div>
          </div>
          <div className="flex-1">
            <div className="font-serif text-[28px] font-normal text-charcoal mb-1">
              280°C
            </div>
            <div className="text-xs font-light text-warm-brown leading-[1.45]">
              wool ignition point — far above any sauna temperature
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Construction
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          Wet-felted, not woven
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          Our hats are made through wet felting — a process where wool fibres are
          interlocked using heat, moisture, and pressure. The result is a dense,
          seamless material with no weak points. Unlike knitted or woven wool,
          felt holds its shape without stitching and maintains its structure
          through repeated use.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          The density of the felt is calibrated to balance insulation with
          breathability. Too thin and it fails to protect. Too thick and it
          becomes uncomfortable. We tested extensively to arrive at the right
          weight for sustained sauna use.
        </p>
      </section>

      <section className="bg-off-white px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          By design
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          What we leave out
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          No elastic bands. No polyester lining. No metal eyelets or rivets. No
          plastic labels. Every component of a Woolen hat is safe to use in
          extreme heat — because every component is either wool or nothing.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          This is a deliberate constraint. Metal heats up and can burn skin.
          Elastic degrades in heat and loses shape. Synthetics off-gas. We
          removed everything that does not belong in a sauna, and kept
          everything that does.
        </p>
      </section>
    </ContentPageShell>
  );
}
