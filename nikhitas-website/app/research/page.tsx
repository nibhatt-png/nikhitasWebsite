import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Research() {
  return (
    <div className="min-h-screen relative">
      <Nav current="research" />

      <div className="pt-20 pb-24 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h1
          className="highlight-slab inline-block font-display font-black text-6xl text-[var(--ink)] mb-16"
          style={{ "--tint": "var(--n-sky)" } as React.CSSProperties}
        >
          Research
        </h1>

        {/* Research Items */}
        <div className="space-y-10">
          {/* Research Item 1 - RAGAS */}
          <div className="bg-[var(--paper)] p-8 rounded-2xl border-l-4 border-[var(--turf)] shadow-paper">
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              {/* Image */}
              <div className="relative -rotate-1">
                <div className="tape w-14 h-6 -top-3 left-1/2 -translate-x-1/2 -rotate-3"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/ragas.png"
                    alt="RAGAS Research"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-2xl text-[var(--paper-ink)] mb-3">
                  Evaluating the Effectiveness of Open-Source Large Language Models in Qualitative Healthcare Research using RAGAS
                </h3>
                <p className="text-[var(--paper-ink-soft)] mb-4 leading-relaxed">
                  Explored how open-source large language models can support qualitative healthcare research, using the RAGAS framework to evaluate their effectiveness in analyzing and synthesizing medical data.
                </p>
                <a
                  href="https://docs.google.com/document/d/14nVJy20a5DCkkNrmEmGHiRxhjo9Lil9_/edit?usp=sharing&ouid=112966755742932131884&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn blue"
                >
                  View Paper →
                </a>
              </div>
            </div>
          </div>

          {/* Research Item 2 - Brain/MEC */}
          <div className="bg-[var(--paper)] p-8 rounded-2xl border-l-4 border-[var(--jungle)] shadow-paper">
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              {/* Image */}
              <div className="relative rotate-1">
                <div className="tape w-14 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-3"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/brain.png"
                    alt="Brain Research"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-2xl text-[var(--paper-ink)] mb-3">
                  Using Immunohistology to Investigate Cholinergic Fiber Density across Layers in the Medial Entorhinal Cortex
                </h3>
                <p className="text-[var(--paper-ink-soft)] mb-4 leading-relaxed">
                  Investigated how acetylcholine-releasing neurons connect to different layers of the medial entorhinal cortex—a brain region critical for spatial navigation and memory—using immunohistology and confocal microscopy in mice.
                </p>
                <a
                  href="https://journals.gmu.edu/jssr/article/view/4201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Publication →
                </a>
              </div>
            </div>
          </div>

          {/* Research Item 3 - Dengue/Mosquito */}
          <div className="bg-[var(--paper)] p-8 rounded-2xl border-l-4 border-[var(--sand)] shadow-paper">
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              {/* Image */}
              <div className="relative -rotate-1">
                <div className="tape w-14 h-6 -top-3 left-1/2 -translate-x-1/2 -rotate-2"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/mosquito.png"
                    alt="Dengue Research"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-2xl text-[var(--paper-ink)] mb-3">
                  Using Mathematical Modeling to Analyze the Effectiveness of Sterile Insect Technology and Wolbachia Infection Intervention Techniques on Incidence of Dengue in Mexico
                </h3>
                <p className="text-[var(--paper-ink-soft)] mb-4 leading-relaxed">
                  Built mathematical models to analyze how sterile insect technology and Wolbachia infection could reduce dengue transmission in Mexico, comparing intervention effectiveness across different scenarios.
                </p>
                <a
                  href="https://docs.google.com/presentation/d/1TY14uBwPyIfIz-AkXWTH-0usNaPJJIzx/edit?usp=sharing&ouid=112966755742932131884&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rose"
                >
                  View Poster →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
