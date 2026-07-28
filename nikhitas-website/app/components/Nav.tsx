type NavProps = {
  current: "home" | "about" | "projects" | "research" | "leadership";
};

const links: { href: string; label: string; key: NavProps["current"] }[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  { href: "/projects", label: "Projects", key: "projects" },
  { href: "/research", label: "Research", key: "research" },
  { href: "/leadership", label: "Leadership", key: "leadership" },
];

const dotColors = ["var(--turf)", "var(--jungle)", "var(--mteal)", "var(--sand)", "var(--ash)"];

export default function Nav({ current }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 px-8 py-5 flex justify-between items-center bg-[var(--canvas)]/85 backdrop-blur-sm border-b border-[var(--line)]">
      <a href="/" className="flex gap-1.5 items-center hover:opacity-70 transition-opacity">
        {dotColors.map((c, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }}></div>
        ))}
        <span className="font-display font-extrabold ml-2 text-lg text-[var(--ink)] tracking-tight">
          Nikhita Bhatt
        </span>
      </a>
      <div className="flex gap-8">
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={`nav-link${link.key === current ? " active" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
