export type Project = {
  title: string;
  color: string;
  subtitle?: string;
  logo?: string;
  desc: string;
  tags: string[];
  link?: { href: string; label: string; variant?: "blue" | "rose" | "" };
};

export const projects: Project[] = [
  {
    title: "PolicyPulse",
    color: "var(--turf)",
    desc: "A RAG-powered chat assistant that answers questions about congressional bills and policy documents, citing primary sources with links back to Congress.gov.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "RAG"],
    link: { href: "https://github.com/nibhatt-png/policyPulse", label: "View on GitHub →", variant: "blue" },
  },
  {
    title: "Steel Advisory",
    color: "var(--jungle)",
    subtitle: "Built at MIT Climate and Energy Hack",
    desc: "Created a steel procurement optimization tool that combines ARIMAX time-series forecasting with Monte Carlo simulation. The model factors in economic indicators, production methods (blast furnace vs. electric arc), shipping emissions, and regional grid cleanliness to recommend cost-effective, sustainable suppliers. Built with FastAPI and Next.js.",
    tags: ["FastAPI", "Next.js", "Monte Carlo"],
    link: { href: "https://lnkd.in/gtSchADj", label: "Check it out →", variant: "blue" },
  },
  {
    title: "Bauer Center Sustainability Recommendations",
    color: "var(--sand-deep)",
    subtitle: "Claremont McKenna College",
    desc: "Determined recommendations for Claremont McKenna's rebuilding of Bauer Center, focused on material circularity and sustainable demolition practices.",
    tags: ["Material circularity", "Sustainability consulting"],
    link: {
      href: "https://docs.google.com/document/d/11Lc1H63XjahqjPOHpo9SN1gJbxC9pH3OJs9iF1fGqXc/edit?tab=t.0#heading=h.27fdmiko9ux3",
      label: "View recommendations →",
    },
  },
  {
    title: "Blusinkie Cobenefit Quantification",
    color: "var(--ash-deep)",
    subtitle: "Blusink",
    desc: "Determined methods of quantifying the economic benefits of marine ecosystem services to develop valuation frameworks for future investment and pricing strategy for Blusink, a carbon sequestration technology company.",
    tags: ["Valuation frameworks", "Climate tech"],
    link: {
      href: "https://docs.google.com/document/d/1Pe-8KJkRhorjCzLrslRj1nxA3Z2gBoIc1gPG5unVlFg/edit?tab=t.0",
      label: "Read my analysis →",
    },
  },
  {
    title: "CAPriCORN Data Validation Tool",
    color: "var(--sand)",
    subtitle: "MRAIA",
    desc: "Built a desktop tool that automates data-quality checks for a multi-site health research network. It reads a study's requirements document and automatically extracts which files and columns each partner site must submit, then validates real CSV submissions against that spec, catching missing files, missing columns, and naming mismatches across 10+ partner health systems.",
    tags: ["Python", "Tkinter", "Ollama (Local LLM)", "PyInstaller", "Google Sheets API"],
  },
];
