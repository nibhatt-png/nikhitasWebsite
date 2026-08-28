import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

type Role = {
  date: string;
  role: string;
  name: string;
  subtitle?: string;
  logo?: string;
  initials?: string;
  color: string;
  bg: string;
  rotate: string;
  desc: string[];
};

const roles: Role[] = [
  {
    date: "Jul 2026",
    role: "FELLOW",
    name: "Public Policy Impact Lab",
    logo: "/logo-cmu-heinz.png",
    color: "var(--sand-deep)",
    bg: "bg-note-butter",
    rotate: "rotate-1",
    desc: [
      "Selected as a Fellow for Carnegie Mellon Heinz College's inaugural Policy Impact Lab, an immersive weekend in Washington, D.C. tackling housing affordability policy. Worked with peers from a range of academic backgrounds and Heinz alumni mentors to develop and present a policy proposal on water-based housing solutions across metropolitan regions to a panel of judges.",
    ],
  },
  {
    date: "May 2026 – Present",
    role: "STUDENT DATA MANAGER",
    name: "Planned Parenthood Generation Action",
    logo: "/logo-ppga.png",
    color: "var(--sand)",
    bg: "bg-note-rose",
    rotate: "-rotate-1",
    desc: [
      "Working on establishing the first Planned Parenthood Generation Action Chapter at the Claremont Colleges. As Student Data Manager, organized campaigns, kept students engaged, and empowered others to fight for reproductive justice on campus.",
    ],
  },
  {
    date: "Apr 2026 – Present",
    role: "EXECUTIVE BOARD",
    name: "Code the Change",
    subtitle: "Claremont, CA",
    logo: "/logo-codethechange.png",
    color: "var(--jungle)",
    bg: "bg-note-sage",
    rotate: "rotate-1",
    desc: [
      "Led operations for a 30+ member philanthropic coding organization, overseeing project execution and coordinating across multiple active community partnerships.",
      "Sourced and established partnerships with MIT, the California Botanic Garden, and the Children's Foundation of America.",
    ],
  },
  {
    date: "May 2023 – May 2025",
    role: "POLICY CHAIR",
    name: "Student Climate Action Council",
    logo: "/logo-scac.png",
    color: "var(--ash-deep)",
    bg: "bg-note-peach",
    rotate: "-rotate-1",
    desc: [
      "Led the policy committee of the SCAC, pushing for sustainable policy in Montgomery County. Led a $75,000 grant program for students creating environmental projects.",
    ],
  },
  {
    date: "May 2022 – May 2025",
    role: "CHAPTER LEAD",
    name: "Encode Justice",
    logo: "/logo-encodejustice.png",
    color: "var(--turf)",
    bg: "bg-note-sky",
    rotate: "rotate-1",
    desc: [
      "Led the DC-Maryland-Virginia chapter of Encode Justice, advocating for technology regulation at the local, state, and national level. Worked with the Montgomery County Board of Education on AI policy in public schools, and met with legislators on Capitol Hill to promote bills that regulate AI.",
    ],
  },
];

export default function Leadership() {
  return (
    <div className="min-h-screen relative">
      <Nav current="leadership" />

      <div className="relative pt-20 pb-24 px-8 max-w-[1400px] mx-auto">
        <p className="font-display font-bold text-xs tracking-[0.2em] text-[var(--ink-faint)] mb-3 uppercase">
          Leadership
        </p>
        <h1 className="font-display font-black text-5xl md:text-6xl leading-[1.05] tracking-tight text-[var(--ink)] mb-14 max-w-3xl">
          Community, advocacy, and organizing.
        </h1>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-14">
          {roles.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
            <div
              className={`relative ${r.rotate} ${r.bg} p-6 rounded-2xl shadow-paper overflow-hidden transition-all duration-300 hover:rotate-0! hover:-translate-y-2 hover:shadow-[0_26px_44px_-20px_rgba(35,53,41,0.45)]`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative shrink-0 -rotate-2">
                  {r.logo ? (
                    <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-paper p-3">
                      <img src={r.logo} alt={r.name} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div
                      className="w-20 h-20 rounded-xl flex items-center justify-center text-[var(--paper)] font-display font-bold text-sm text-center leading-tight p-1 shadow-paper"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.initials}
                    </div>
                  )}
                </div>
                <div className="pt-1">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--paper-ink-soft)]/70 mb-2">
                    {r.date}
                  </p>
                  <span
                    className="inline-block text-xs font-bold text-[var(--paper)] px-3 py-1 rounded-full tracking-wide"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.role}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-black text-2xl text-[var(--paper-ink)] mb-1 leading-tight">
                {r.name}
              </h3>
              {r.subtitle && (
                <p className="text-sm text-[var(--paper-ink-soft)]/70 mb-3">{r.subtitle}</p>
              )}

              {r.desc.length > 1 ? (
                <ul className="list-disc pl-5 space-y-1.5 mt-3">
                  {r.desc.map((p, j) => (
                    <li key={j} className="text-[var(--paper-ink-soft)] text-sm leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[var(--paper-ink-soft)] text-sm leading-relaxed mt-3">{r.desc[0]}</p>
              )}

              <div className="corner-fold"></div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
