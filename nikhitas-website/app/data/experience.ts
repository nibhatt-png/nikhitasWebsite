import { TimelineItem } from "../components/Timeline";

export const experienceItems: TimelineItem[] = [
  {
    date: "May 2026 – Aug 2026",
    meta: "DATA INTERN",
    color: "var(--sand)",
    title: "MRAIA",
    subtitle: "The Medical Research Analytics and Informatics Alliance · Chicago, IL",
    logo: { src: "/logo-mraia.avif", alt: "MRAIA" },
    desc: [
      "Diagnosed efficiency problems for organization data validation in the CAPriCORN data network, working cross-functionally with research and clinicians to do so.",
      "Created an AI-assisted tool that automates data validation across 10+ partner health systems, replacing a fully manual review process and giving staff a consistent, repeatable way to catch discrepancies before data reaches researchers.",
    ],
    tags: ["Python", "Tkinter", "Ollama (Local LLM)", "PyInstaller", "Google Sheets API"],
  },
  {
    date: "Apr 2026 – Present",
    meta: "MACHINE LEARNING FELLOW",
    color: "var(--turf)",
    title: "Break Through Tech",
    desc: [
      "Selected for a competitive Cornell-certified ML fellowship and partnered with industry sponsors to scope and solve data-driven business problems, then synthesized model outputs into structured recommendations for corporate stakeholders.",
      "Gained hands-on experience in RAG pipeline development, agentic AI architectures, and supervised learning methods including KNN and decision trees, and applied these techniques to structured and unstructured datasets.",
    ],
  },
  {
    date: "Jan 2026 – Present",
    meta: "DATA SCIENCE RESEARCHER",
    color: "var(--jungle)",
    title: "LILAQ Lab",
    subtitle: "Harvey Mudd College",
    logo: { src: "/logo-harvey-mudd.png", alt: "Harvey Mudd College" },
    desc: [
      "Designed and executed a user research study for a campus-wide data platform, conducted IRB-compliant focus groups and more than 10 HCI-grounded interviews to evaluate visualization prototypes, and translated findings into product improvements.",
      "Built and deployed an end-to-end data pipeline that enabled real-time monitoring across campus locations and delivered accessible, client-facing visualizations to a non-technical audience of more than 1,500 students and staff.",
    ],
  },
  {
    date: "Sep 2025 – Present",
    meta: "GREEN CONSULTING ANALYST",
    color: "var(--ash-deep)",
    title: "Roberts Environmental Center",
    subtitle: "Claremont, CA",
    desc: [
      "Determined methods of quantifying the economic benefits of marine ecosystem services to develop valuation frameworks for future investment and pricing strategy for Blusink, a carbon sequestration technology company, and published the results.",
      "Researched material circularity standards for RESET, a global building sustainability certification, to identify partnership opportunities and policy gaps, and advised on its expansion into the US market.",
      "Determined recommendations for Claremont McKenna's rebuilding of Bauer Center that focused on material circularity and sustainable demolition practices.",
    ],
    logo: { src: "/blusink.png", alt: "Blusink" },
    links: [
      {
        href: "https://docs.google.com/document/d/1Pe-8KJkRhorjCzLrslRj1nxA3Z2gBoIc1gPG5unVlFg/edit?tab=t.0",
        label: "Blusink doc →",
      },
      {
        href: "https://docs.google.com/document/d/11Lc1H63XjahqjPOHpo9SN1gJbxC9pH3OJs9iF1fGqXc/edit?tab=t.0#heading=h.27fdmiko9ux3",
        label: "Claremont McKenna doc →",
      },
    ],
  },
  {
    date: "May 2024 – Aug 2024",
    meta: "BIOMEDICAL ENGINEERING INTERN",
    color: "var(--jungle)",
    title: "George Mason University",
    subtitle: "Using Immunohistology to Investigate Cholinergic Fiber Density across Layers in the Medial Entorhinal Cortex",
    desc: [
      "Investigated how acetylcholine-releasing neurons connect to different layers of the medial entorhinal cortex, a brain region critical for spatial navigation and memory.",
      "Used immunohistology and confocal microscopy to analyze cholinergic fiber density in mice, with results published in the Journal of Student Scientific Research.",
    ],
    image: { src: "/brain.png", alt: "Brain Research" },
    link: { href: "https://journals.gmu.edu/jssr/article/view/4201", label: "View Publication →" },
  },
  {
    date: "Jan 2024 – Mar 2024",
    meta: "MATHEMATICAL MODELING INTERN",
    color: "var(--sand)",
    title: "University of Maryland",
    subtitle: "Using Mathematical Modeling to Analyze the Effectiveness of Sterile Insect Technology and Wolbachia Infection Intervention Techniques on Incidence of Dengue in Mexico",
    desc: [
      "Built mathematical models to analyze how sterile insect technology and Wolbachia infection could reduce dengue transmission in Mexico.",
      "Compared intervention effectiveness across multiple scenarios and presented findings in a research poster.",
    ],
    image: { src: "/mosquito.png", alt: "Dengue Research" },
    link: {
      href: "https://docs.google.com/presentation/d/1TY14uBwPyIfIz-AkXWTH-0usNaPJJIzx/edit?usp=sharing&ouid=112966755742932131884&rtpof=true&sd=true",
      label: "View Poster →",
      variant: "rose",
    },
  },
  {
    date: "May 2023 – Oct 2024",
    meta: "AI IMPLEMENTATION INTERN",
    color: "var(--sand-deep)",
    title: "Catholic University",
    desc: [
      "Collaborated with Dr. Manon Schladen under a Veterans Administration contract to establish standards for caregiving robots.",
      "Analyzed and aggregated 300+ interview transcripts using large language models to define technical requirements.",
      "Created an AI integration pipeline for future lab work and evaluated the efficacy of AI models in analyzing qualitative data using the RAGAS framework.",
    ],
    image: { src: "/ragas.png", alt: "RAGAS Research" },
    link: {
      href: "https://docs.google.com/document/d/14nVJy20a5DCkkNrmEmGHiRxhjo9Lil9_/edit?usp=sharing&ouid=112966755742932131884&rtpof=true&sd=true",
      label: "View Paper →",
      variant: "blue",
    },
  },
];
