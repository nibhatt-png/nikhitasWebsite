import { Project } from "../data/projects";
import Reveal from "./Reveal";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={i * 80}>
        <div
          className="relative h-full bg-[var(--paper)] p-8 rounded-2xl border-t-4 shadow-paper hover-lift"
          style={{ borderColor: p.color }}
        >
          {p.logo && (
            <div className="absolute top-8 right-8 w-14 h-14 rounded-lg bg-white border border-[var(--line)] p-2.5 flex items-center justify-center">
              <img src={p.logo} alt={p.title} className="w-full h-full object-contain" />
            </div>
          )}
          <h3 className={`font-display font-bold text-2xl text-[var(--paper-ink)] mb-1 ${p.logo ? "pr-16" : ""}`}>
            {p.title}
          </h3>
          {p.subtitle && (
            <p className="text-sm text-[var(--ink-faint)] mb-4">{p.subtitle}</p>
          )}
          {!p.subtitle && <div className="mb-3" />}
          <p className="text-[var(--paper-ink-soft)] mb-6 leading-relaxed">{p.desc}</p>
          <div className="flex gap-2 flex-wrap mb-6">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-bold text-[var(--paper-ink)] bg-note-sage px-3 py-1.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          {p.link && (
            <a
              href={p.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${p.link.variant ?? ""}`.trim()}
            >
              {p.link.label}
            </a>
          )}
        </div>
        </Reveal>
      ))}
    </div>
  );
}
