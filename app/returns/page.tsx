import type { Metadata } from "next";
import ContentPageShell from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Returns & Exchanges | Woolen",
  description:
    "Our returns and exchange policy. 30-day returns on unused items in original packaging.",
};

export default function ReturnsPage() {
  return (
    <ContentPageShell
      sectionLabel="Help"
      title="Returns & exchanges"
      subtitle="We want you to be completely satisfied with your purchase."
    >
      <section className="bg-off-white px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Returns
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          30-day return policy
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          If you are not satisfied with your purchase, you may return it within
          30 days of delivery for a full refund. Items must be unused, in their
          original condition, and in the original packaging.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          To initiate a return, email us at{" "}
          <a
            href="mailto:hello@woolen.co"
            className="text-charcoal underline underline-offset-2 transition-colors hover:text-warm-brown"
          >
            hello@woolen.co
          </a>{" "}
          with your order number and we will provide return instructions.
          Refunds are processed within 5–7 working days of receiving the
          returned item.
        </p>
      </section>

      <section className="bg-cream px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Exchanges
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          Need a different size?
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          If you would like to exchange your item, email us at{" "}
          <a
            href="mailto:hello@woolen.co"
            className="text-charcoal underline underline-offset-2 transition-colors hover:text-warm-brown"
          >
            hello@woolen.co
          </a>{" "}
          and we will arrange the exchange. We cover return shipping costs on
          all exchanges within the UK. International exchange shipping is
          calculated on a case-by-case basis.
        </p>
      </section>
    </ContentPageShell>
  );
}
