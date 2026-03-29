import Image from "next/image";

const blocks = [
  {
    image: "/images/sauna_steam.jpg",
    alt: "Steam rising in a wood-panelled sauna",
    heading: "Stay longer, go deeper",
    body: "Thermal regulation lets you push past the point where most people tap out — where the real cardiovascular and nervous system benefits begin.",
  },
  {
    image: "/images/wool_felt.jpg",
    alt: "Close-up of merino wool felt texture",
    heading: "Considered, not compromised",
    body: "100% merino wool felt. No synthetics, no metal, no plastics. Every seam and contour shaped for performance in heat — and confidence outside it.",
  },
];

export default function LifestyleBenefits() {
  return (
    <section className="bg-off-white px-6 pb-14">
      {blocks.map((block) => (
        <div
          key={block.heading}
          className="mb-10 last:mb-0"
        >
          <div className="relative w-full aspect-[4/5]">
            <Image
              src={block.image}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="pt-4">
            <h3 className="font-serif text-xl font-normal text-charcoal mb-1.5">
              {block.heading}
            </h3>
            <p className="text-[13px] font-light text-warm-brown leading-relaxed">
              {block.body}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
