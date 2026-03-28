const columns = [
  {
    title: "Shop",
    links: ["The Sauna Hat", "Gift Sets", "Coming Soon"],
  },
  {
    title: "Learn",
    links: ["Why Sauna Hats", "The Science", "Our Materials"],
  },
  {
    title: "Woolen",
    links: ["Our Story", "Journal", "Stockists"],
  },
  {
    title: "Help",
    links: ["Contact", "Shipping", "Returns"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-off-white px-6 pt-12 pb-8">
      <div className="font-sans text-lg font-normal tracking-[0.08em] mb-1.5">
        woolen
      </div>
      <div className="text-[13px] font-light text-muted-gold mb-7">
        Made for modern rituals
      </div>

      {/* Social icons */}
      <div className="flex gap-4 mb-9">
        {["IG", "LI", "X"].map((label) => (
          <div
            key={label}
            className="w-[36px] h-[36px] rounded-full border border-muted-gold/40 flex items-center justify-center"
          >
            <span className="text-[10px] text-muted-gold">{label}</span>
          </div>
        ))}
      </div>

      {/* Link columns */}
      <div className="grid grid-cols-2 gap-8 mb-10">
        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-xs font-medium tracking-[0.1em] uppercase text-off-white mb-3.5">
              {col.title}
            </div>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-[13px] font-light text-muted-gold mb-2.5 transition-colors hover:text-off-white"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-muted-gold/15 text-[11px] font-light text-muted-gold/50">
        &copy; 2026 Woolen. All rights reserved.
      </div>
    </footer>
  );
}
