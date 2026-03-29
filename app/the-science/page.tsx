import type { Metadata } from "next";
import ContentPageShell from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "The Science Behind Sauna Hats | Woolen",
  description:
    "Why head protection matters in the sauna. The physics of heat, the science of merino wool, and what it means for your body.",
};

export default function TheSciencePage() {
  return (
    <ContentPageShell
      sectionLabel="Learn"
      title="The science behind sauna hats"
      subtitle="Heat behaves predictably. Understanding why your head is the most vulnerable point in a sauna is the first step to a better session."
    >
      <section className="bg-off-white px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Heat physics
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          The thermal gradient problem
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          Hot air rises. In a sauna, this creates a steep temperature gradient
          from floor to ceiling. At bench level your feet might experience 60°C,
          while your head sits in air that is 80–90°C. That 20–30°C difference
          means your head absorbs significantly more thermal energy than the rest
          of your body.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-7">
          Your scalp and hair have no meaningful insulation against this. Unlike
          the rest of your skin, which can regulate through sweating and
          vasodilation, the top of your head is directly exposed to the hottest
          air in the room.
        </p>

        <div className="flex gap-6 pt-7 border-t border-muted-gold/25">
          <div className="flex-1">
            <div className="font-serif text-[28px] font-normal text-charcoal mb-1">
              30°C
            </div>
            <div className="text-xs font-light text-warm-brown leading-[1.45]">
              temperature differential between head and feet
            </div>
          </div>
          <div className="flex-1">
            <div className="font-serif text-[28px] font-normal text-charcoal mb-1">
              90°C
            </div>
            <div className="text-xs font-light text-warm-brown leading-[1.45]">
              typical air temperature at head height
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Material science
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          Why wool insulates
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          Merino wool fibres are naturally hollow. Each fibre contains tiny air
          pockets that trap heat and create a barrier between your head and the
          surrounding air. This is the same principle that makes wool effective
          in cold weather — except in a sauna, it works in reverse, keeping
          excess heat out.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          Wool also absorbs up to 30% of its weight in moisture without feeling
          wet. In a sauna environment, this means it wicks sweat from your scalp
          while maintaining its insulating structure. Synthetic materials
          collapse or become uncomfortable when saturated. Wool continues to
          perform.
        </p>
      </section>

      <section className="bg-off-white px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Physiology
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          What happens when you protect your head
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          When head temperature is regulated, you can stay in the sauna longer
          and more comfortably. The body continues to benefit from the heat —
          increased heart rate, improved circulation, deeper relaxation — without
          the signals of overheating that typically force you to leave early.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-7">
          Research on regular sauna use has shown associations with improved
          cardiovascular health, reduced inflammation, and better recovery after
          exercise. Extending your sessions safely, with proper head protection,
          lets you access more of these benefits.
        </p>

        <div className="flex gap-6 pt-7 border-t border-muted-gold/25">
          <div className="flex-1">
            <div className="font-serif text-[28px] font-normal text-charcoal mb-1">
              2&times;
            </div>
            <div className="text-xs font-light text-warm-brown leading-[1.45]">
              longer comfortable sessions with head protection
            </div>
          </div>
          <div className="flex-1">
            <div className="font-serif text-[28px] font-normal text-charcoal mb-1">
              40%
            </div>
            <div className="text-xs font-light text-warm-brown leading-[1.45]">
              less perceived discomfort during longer sessions
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Comparison
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          Why merino, not something else
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          Cotton absorbs water and becomes heavy, losing all insulating
          properties. Synthetic fabrics can off-gas at high temperatures and feel
          uncomfortable against wet skin. A wrapped towel provides minimal
          insulation and slips constantly.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          Merino wool felt is the material that sauna cultures — Finnish,
          Russian, Estonian — have relied on for generations. It insulates,
          breathes, resists moisture, and holds its shape at temperatures well
          above what any sauna produces. There is no better material for this
          purpose.
        </p>
      </section>
    </ContentPageShell>
  );
}
