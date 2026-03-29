import Image from "next/image";

const specs = [
  "100% merino wool felt",
  "No plastics, no metal — fully sauna-safe",
  "Protects hair, scalp, and skin from heat stress",
  "Naturally temperature-regulating",
];

export default function ProductCard() {
  return (
    <section id="product" className="bg-cream px-6 py-14 scroll-mt-20 md:flex md:justify-center md:px-12 lg:px-20">
      <div className="bg-off-white p-6 pt-8 md:max-w-md md:w-full md:p-5 md:pt-6">
        <div className="relative w-full aspect-square mb-7 md:aspect-[4/3] md:mb-5">
          <Image
            src="/images/product_image.jpeg"
            alt="Woolen merino wool sauna hat — floating product shot showing embossed logo and felt texture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 28rem"
          />
        </div>

        <h3 className="font-serif text-2xl md:text-xl font-normal text-charcoal mb-1">
          The Sauna Hat
        </h3>
        <p className="text-base md:text-sm font-normal text-warm-brown mb-4 md:mb-3">£45</p>

        <div className="flex flex-col gap-2.5 mb-7 pt-4 border-t border-muted-gold/20 md:gap-2 md:mb-5 md:pt-3">
          {specs.map((spec) => (
            <div
              key={spec}
              className="flex items-center gap-2.5 text-[13px] font-light text-charcoal md:text-xs"
            >
              <span className="w-1 h-1 rounded-full bg-muted-gold shrink-0" />
              {spec}
            </div>
          ))}
        </div>

        <a
          href="#waitlist"
          className="block w-full text-center bg-sand text-deep-brown px-8 py-3.5 font-sans text-[13px] font-medium tracking-[0.06em] uppercase transition-colors hover:bg-off-white md:py-3 md:text-xs"
        >
          Join waitlist for restock
        </a>
      </div>
    </section>
  );
}
