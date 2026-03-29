import Nav from "@/components/nav";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";

interface ContentPageShellProps {
  sectionLabel: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  showWaitlist?: boolean;
}

export default function ContentPageShell({
  sectionLabel,
  title,
  subtitle,
  children,
  showWaitlist = true,
}: ContentPageShellProps) {
  return (
    <main>
      <Nav solid />
      <section className="bg-cream px-6 pt-28 pb-14">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          {sectionLabel}
        </p>
        <h1 className="font-serif text-[32px] font-normal leading-[1.15] text-charcoal mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm font-light leading-[1.7] text-warm-brown max-w-lg">
            {subtitle}
          </p>
        )}
      </section>
      {children}
      {showWaitlist && <WaitlistSection />}
      <Footer />
    </main>
  );
}
