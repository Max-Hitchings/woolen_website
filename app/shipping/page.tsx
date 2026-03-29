import type { Metadata } from "next";
import ContentPageShell from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Shipping | Woolen",
  description:
    "Shipping information for Woolen products. UK and international delivery details.",
};

export default function ShippingPage() {
  return (
    <ContentPageShell
      sectionLabel="Help"
      title="Shipping"
      subtitle="Everything you need to know about how your order gets to you."
    >
      <section className="bg-off-white px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          United Kingdom
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          UK delivery
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          Standard delivery across the UK is free on all orders. We dispatch
          within 1–2 working days, with delivery typically arriving within 3–5
          working days via Royal Mail Tracked.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          Express delivery is available at checkout for next-day delivery on
          orders placed before 2pm on weekdays.
        </p>
      </section>

      <section className="bg-cream px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          International
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          Rest of world
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-5">
          We ship to Europe, the US, Canada, and Australia. International
          delivery typically takes 5–10 working days depending on your location.
          Shipping costs are calculated at checkout.
        </p>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          Please note that international orders may be subject to local customs
          duties and taxes, which are the responsibility of the recipient.
        </p>
      </section>

      <section className="bg-off-white px-6 py-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Your order
        </p>
        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-5">
          Tracking
        </h2>
        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          You will receive a confirmation email with tracking details once your
          order has been dispatched. If you have any questions about your
          delivery, contact us at{" "}
          <a
            href="mailto:hello@wearwoolen.com"
            className="text-charcoal underline underline-offset-2 transition-colors hover:text-warm-brown"
          >
            hello@wearwoolen.com
          </a>
          .
        </p>
      </section>
    </ContentPageShell>
  );
}
