import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen relative">
      <Nav current="projects" />

      <div className="pt-20 pb-24 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h1
          className="highlight-slab inline-block font-display font-black text-6xl text-[var(--ink)] mb-16"
          style={{ "--tint": "var(--n-peach)" } as React.CSSProperties}
        >
          Projects
        </h1>

        {/* Computer Science Section */}
        <div className="mb-16">
          <div className="relative flex items-center gap-3 mb-8 pb-2 border-b-2 border-[var(--ink)]">
            <div className="tape w-16 h-6 -top-3 left-1/3 -rotate-2"></div>
            <h2 className="font-display font-bold text-3xl text-[var(--ink)]">Computer Science</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Steel Advisory */}
            <div className="bg-[var(--paper)] p-8 rounded-2xl border-t-4 border-[var(--turf)] shadow-paper hover:-translate-y-1 transition-transform">
              <h3 className="font-display font-bold text-2xl text-[var(--paper-ink)] mb-4">
                Steel Advisory
              </h3>
              <p className="text-[var(--paper-ink-soft)] mb-6 leading-relaxed">
                Created a steel procurement optimization tool that combines ARIMAX time-series forecasting with Monte Carlo simulation. The model factors in economic indicators, production methods (blast furnace vs. electric arc), shipping emissions, and regional grid cleanliness to recommend cost-effective, sustainable suppliers. Built with FastAPI and Next.js.
              </p>
              <div className="flex gap-2 flex-wrap mb-6">
                <span className="text-xs font-bold text-[var(--paper-ink)] bg-note-peach px-3 py-1.5 rounded-full">FastAPI</span>
                <span className="text-xs font-bold text-[var(--paper-ink)] bg-note-peach px-3 py-1.5 rounded-full">Next.js</span>
                <span className="text-xs font-bold text-[var(--paper-ink)] bg-note-peach px-3 py-1.5 rounded-full">Monte Carlo</span>
              </div>
              <a
                href="https://lnkd.in/gtSchADj"
                target="_blank"
                rel="noopener noreferrer"
                className="btn blue"
              >
                Check it out →
              </a>
            </div>

            {/* Fashion Sustainability Calculator */}
            <div className="bg-[var(--paper)] p-8 rounded-2xl border-t-4 border-[var(--jungle)] shadow-paper hover:-translate-y-1 transition-transform">
              <h3 className="font-display font-bold text-2xl text-[var(--paper-ink)] mb-4">
                Fashion Sustainability Calculator
              </h3>
              <p className="text-[var(--paper-ink-soft)] mb-6 leading-relaxed">
                Built a sustainability calculator that estimates the carbon emissions and water usage of clothing items. Users can input a clothing item and brand to see the environmental impact of their purchase, helping make more informed fashion choices.
              </p>
              <div className="flex gap-2 flex-wrap mb-6">
                <span className="text-xs font-bold text-[var(--paper-ink)] bg-note-sage px-3 py-1.5 rounded-full">Climate data</span>
                <span className="text-xs font-bold text-[var(--paper-ink)] bg-note-sage px-3 py-1.5 rounded-full">Web app</span>
              </div>
              <a
                href="https://sustainfashion.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Check it out →
              </a>
            </div>
          </div>
        </div>

        {/* Consulting Section */}
        <div>
          <div className="relative flex items-center gap-3 mb-8 pb-2 border-b-2 border-[var(--ink)]">
            <div className="tape w-16 h-6 -top-3 left-1/3 rotate-2"></div>
            <h2 className="font-display font-bold text-3xl text-[var(--ink)]">Consulting</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Reset */}
            <div className="bg-[var(--paper)] p-8 rounded-2xl border-t-4 border-[var(--sand)] shadow-paper hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[var(--sand)] shrink-0">
                  <span className="text-2xl font-bold text-[var(--paper-ink)]">R</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[var(--paper-ink)] mt-2">Reset</h3>
              </div>
              <p className="text-[var(--paper-ink-soft)] leading-relaxed">
                Conducted research on material circularity standards for RESET, a global building sustainability certification. Analyzed partnership opportunities and policy gaps to help inform the organization&apos;s strategy for entering the US market.
              </p>
            </div>

            {/* Blusink */}
            <div className="bg-[var(--paper)] p-8 rounded-2xl border-t-4 border-[var(--ash-deep)] shadow-paper hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[var(--ash-deep)] shrink-0">
                  <span className="text-2xl font-bold text-[var(--paper)]">B</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[var(--paper-ink)] mt-2">Blusink</h3>
              </div>
              <p className="text-[var(--paper-ink-soft)] leading-relaxed">
                Developing methods to quantify economic benefits of marine ecosystem services, creating valuation frameworks for future investment and pricing strategy for Blusink, a carbon sequestration technology company.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
