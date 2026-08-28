import Reveal from "./Reveal";

export type TimelineItem = {
  date: string;
  color: string;
  title: string;
  meta?: string;
  subtitle?: string;
  desc: string[];
  tags?: string[];
  image?: { src: string; alt: string };
  logo?: { src: string; alt: string };
  link?: { href: string; label: string; variant?: "blue" | "rose" | "" };
  links?: { href: string; label: string; variant?: "blue" | "rose" | "" }[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative bg-[var(--paper)] border border-[var(--line)] rounded-2xl shadow-paper p-8 md:p-14">
      <div className="hidden md:block absolute left-[45px] top-14 bottom-14 w-px bg-[var(--line)]" />

      <div className="space-y-16">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 60} className="relative md:pl-20 group">
            <div
              className="hidden md:block absolute left-[39px] top-1.5 w-3 h-3 rounded-full ring-4 ring-[var(--paper)] transition-transform duration-300 group-hover:scale-125"
              style={{ background: item.color }}
            />

            <div className="flex items-start justify-between gap-6 mb-2">
              <div className="font-mono text-xs tracking-wide text-[var(--ink-faint)] uppercase">
                {item.date}
              </div>

              {(item.links ?? (item.link ? [item.link] : [])).length > 0 && (
                <div className="text-right shrink-0 space-y-1">
                  {(item.links ?? (item.link ? [item.link] : [])).map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-mono text-xs text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              {item.meta && (
                <p
                  className="font-display font-bold text-sm md:text-base tracking-wide uppercase mb-1"
                  style={{ color: item.color }}
                >
                  {item.meta}
                </p>
              )}
              <h3 className="font-display font-black text-2xl md:text-3xl leading-tight text-[var(--paper-ink)]">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-[var(--ink-faint)] mb-4">{item.subtitle}</p>
              )}
              {!item.subtitle && <div className="mb-3" />}

              <div className={item.image || item.logo ? "grid sm:grid-cols-[1fr_180px] gap-6" : ""}>
                <div className={item.image || item.logo ? "sm:order-1" : ""}>
                  {item.desc.length > 1 ? (
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {item.desc.map((p, j) => (
                        <li key={j} className="text-[var(--paper-ink-soft)] leading-relaxed">
                          {p}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    item.desc.map((p, j) => (
                      <p key={j} className="text-[var(--paper-ink-soft)] mb-4 leading-relaxed">
                        {p}
                      </p>
                    ))
                  )}

                  {item.tags && (
                    <p className="text-xs font-semibold text-[var(--ink-faint)] tracking-wide">
                      {item.tags.join("   ·   ")}
                    </p>
                  )}
                </div>

                {(item.image || item.logo) && (
                  <div className="relative -rotate-1 self-start sm:order-2">
                    <div className="tape w-14 h-6 -top-3 left-1/2 -translate-x-1/2 -rotate-3"></div>
                    <div className="relative rounded-lg overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image.src}
                          alt={item.image.alt}
                          className="w-full h-40 object-cover"
                        />
                      ) : (
                        <div className="w-full h-40 bg-white flex items-center justify-center p-6">
                          <img
                            src={item.logo!.src}
                            alt={item.logo!.alt}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
