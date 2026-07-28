import Nav from "../components/Nav";
import Footer from "../components/Footer";

const roles = [
  {
    name: "Code the Change",
    role: "LEADERSHIP",
    color: "var(--jungle)",
    initials: "CTC",
    logo: "/logo-codethechange.png",
    desc: "I help lead the Harvey Mudd Chapter for Code the Change, where I work on philanthropic coding projects. I work on sourcing partnerships, facilitating client communication, and ensuring club members are learning through their projects.",
  },
  {
    name: "Planned Parenthood Generation Action",
    role: "STUDENT DATA MANAGER",
    color: "var(--sand)",
    initials: "PP",
    logo: "/logo-ppga.png",
    desc: "I am working on establishing the first Planned Parenthood Generation Action Chapter at the Claremont Colleges. In my role as Student Data Manager I am working on organizing campaigns, ensuring students stay engaged, and empowering others to fight for reproductive justice on campus.",
  },
  {
    name: "Encode Justice",
    role: "CHAPTER LEAD",
    color: "var(--turf)",
    initials: "EJ",
    logo: "/logo-encodejustice.png",
    desc: "I led the DC-Maryland-Virginia chapter of Encode Justice, where I advocated for technology regulation at the local, state, and national level. In particular I worked with the Montgomery County Board of Education on AI policy in public schools, and met with legislators on Capitol Hill to promote bills that regulate AI.",
  },
  {
    name: "Student Climate Action Council",
    role: "POLICY CHAIR",
    color: "var(--ash-deep)",
    initials: "SCAC",
    logo: null,
    desc: null,
  },
];

export default function Leadership() {
  return (
    <div className="min-h-screen relative">
      <Nav current="leadership" />

      <div className="pt-20 pb-24 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h1
          className="highlight-slab inline-block font-display font-black text-6xl text-[var(--ink)] mb-16"
          style={{ "--tint": "var(--n-rose)" } as React.CSSProperties}
        >
          Leadership
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((r) => (
            <div
              key={r.name}
              className="bg-[var(--paper)] p-6 rounded-2xl border-t-4 shadow-paper flex items-start gap-5"
              style={{ borderColor: r.color }}
            >
              <div className="relative shrink-0">
                <div className="tape w-10 h-5 -top-2 left-1/2 -translate-x-1/2 -rotate-3"></div>
                {r.logo ? (
                  <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-paper p-3">
                    <img src={r.logo} alt={r.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center text-[var(--paper)] font-display font-bold text-lg shadow-paper"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initials}
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-[var(--paper-ink)] mb-2">
                  {r.name}
                </h3>
                <span className="inline-block text-xs font-bold text-[var(--paper-ink)] bg-note-sky px-3 py-1 rounded-full mb-2 tracking-wide">
                  {r.role}
                </span>
                {r.desc ? (
                  <p className="text-[var(--paper-ink-soft)] leading-relaxed">{r.desc}</p>
                ) : (
                  <p className="text-[var(--paper-ink-soft)] italic">description coming soon...</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
