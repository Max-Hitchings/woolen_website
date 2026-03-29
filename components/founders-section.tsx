import Image from "next/image";

export default function FoundersSection() {
  return (
    <section className="bg-cream px-6 py-14">
      <div className="mx-auto max-w-[520px]">
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-sand/15">
          <Image
            src="/images/founders.jpg"
            alt="Founders Max and Jack together for Woolen"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>

        <div className="pt-5">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-warm-brown">
            From the founders
          </p>
          <h2 className="mb-3 font-serif text-[26px] font-normal leading-[1.2] text-charcoal">
            Woolen started with Max and Jack
          </h2>
          <p className="text-sm font-light leading-[1.7] text-warm-brown">
            We started Woolen because sauna accessories felt like an afterthought
            in a ritual we care deeply about. Our aim is simple: to make pieces
            that feel more considered, better made, and more at home in a modern
            practice.
          </p>
        </div>
      </div>
    </section>
  );
}
