import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Education from "@/components/education";
import LifestyleBenefits from "@/components/lifestyle-benefits";
import ProductCard from "@/components/product-card";
import TrustSignals from "@/components/trust-signals";
import FoundersSection from "@/components/founders-section";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Education />
      <LifestyleBenefits />
      <ProductCard />
      <TrustSignals />
      <FoundersSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
