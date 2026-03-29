import type { Metadata } from "next";
import ContentPageShell from "@/components/content-page-shell";

export const metadata: Metadata = {
  title: "Contact | Woolen",
  description:
    "Get in touch with Woolen. We respond within 24 hours on weekdays.",
};

export default function ContactPage() {
  return (
    <ContentPageShell
      sectionLabel="Help"
      title="Get in touch"
      showWaitlist={false}
    >
      <section className="bg-off-white px-6 py-14">
        <p className="text-sm font-light leading-[1.7] text-warm-brown mb-7">
          Whether you have a question about our products, your waitlist
          position, or anything else — we are happy to help.
        </p>

        <div className="mb-7">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-3">
            Email
          </p>
          <a
            href="mailto:hello@woolen.co"
            className="font-serif text-[24px] font-normal text-charcoal transition-colors hover:text-warm-brown"
          >
            hello@woolen.co
          </a>
        </div>

        <p className="text-sm font-light leading-[1.7] text-warm-brown">
          We respond within 24 hours on weekdays.
        </p>
      </section>
    </ContentPageShell>
  );
}
