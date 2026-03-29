export default function TrustSignals() {
  return (
    <>
      {/* Testimonial */}
      <section className="bg-charcoal px-6 py-14 text-center">
        <div>
          <p className="font-serif text-[22px] font-light italic text-off-white leading-[1.45] mb-5 max-w-[320px] mx-auto">
            &ldquo;The first sauna accessory that actually looks as good as it
            performs.&rdquo;
          </p>
          <p className="text-xs font-normal tracking-[0.12em] uppercase text-muted-gold mb-10">
            Poppy Maguire-Cox - Customer (first batch)
          </p>
          <div className="flex justify-center gap-8 items-center opacity-40">
            <span className="text-xs tracking-[0.1em] uppercase text-off-white font-light">
              Arc
            </span>
            <span className="text-xs tracking-[0.1em] uppercase text-off-white font-light">
              Third Space
            </span>
            <span className="text-xs tracking-[0.1em] uppercase text-off-white font-light">
              Othership
            </span>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-off-white px-6 py-10 text-center">
        <div>
          <p className="text-[11px] font-normal tracking-[0.18em] uppercase text-sand mb-6">
            Trusted by
          </p>
          <div className="flex justify-center gap-7 flex-wrap items-center">
            {["Community Saunas", "Boutique Gyms", "Members' Clubs"].map(
              (name) => (
                <span
                  key={name}
                  className="font-serif text-base font-normal text-warm-brown opacity-60"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
