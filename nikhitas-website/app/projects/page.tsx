export default function Projects() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] relative">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#FDF8F5]/80 backdrop-blur-sm">
        <a href="/" className="flex gap-1 items-center hover:opacity-70 transition-opacity">
          <div className="w-2 h-2 bg-[#355070] rounded-full"></div>
          <div className="w-2 h-2 bg-[#6D597A] rounded-full"></div>
          <div className="w-2 h-2 bg-[#B56576] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E56B6F] rounded-full"></div>
          <div className="w-2 h-2 bg-[#EAAC8B] rounded-full"></div>
          <span className="ml-2 text-sm font-medium text-[#355070]">Home</span>
        </a>
        <div className="flex gap-8">
          <a href="/about" className="text-sm text-[#355070] hover:text-[#E56B6F] transition-colors font-medium">
            About
          </a>
          <a href="/projects" className="text-sm text-[#E56B6F] font-medium underline underline-offset-4">
            Projects
          </a>
          <a href="/research" className="text-sm text-[#355070] hover:text-[#B56576] transition-colors font-medium">
            Research
          </a>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h1 className="text-7xl font-bold text-[#355070] mb-16">Projects</h1>

        {/* Computer Science Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-[#355070] rotate-45"></div>
            <h2 className="text-3xl font-bold text-[#355070] italic">Computer Science</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Steel Advisory */}
            <div className="bg-white p-8 border-2 border-[#355070] rounded-lg shadow-[6px_6px_0px_0px_rgba(53,80,112,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(53,80,112,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <h3 className="text-2xl font-bold text-[#355070] mb-4 bg-[#355070]/10 inline-block px-3 py-1 rounded">
                Steel Advisory
              </h3>
              <p className="text-[#355070] mb-6 leading-relaxed">
                Created a steel procurement optimization tool that combines ARIMAX time-series forecasting with Monte Carlo simulation. The model factors in economic indicators, production methods (blast furnace vs. electric arc), shipping emissions, and regional grid cleanliness to recommend cost-effective, sustainable suppliers. Built with FastAPI and Next.js.
              </p>
              <a 
                href="https://lnkd.in/gtSchADj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#355070] text-white font-medium border-2 border-[#355070] rounded-lg shadow-[3px_3px_0px_0px_rgba(53,80,112,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(53,80,112,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                Check it out →
              </a>
            </div>

            {/* Fashion Sustainability Calculator */}
            <div className="bg-white p-8 border-2 border-[#6D597A] rounded-lg shadow-[6px_6px_0px_0px_rgba(109,89,122,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(109,89,122,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <h3 className="text-2xl font-bold text-[#355070] mb-4 bg-[#6D597A]/10 inline-block px-3 py-1 rounded">
                Fashion Sustainability Calculator
              </h3>
              <p className="text-[#355070] mb-6 leading-relaxed">
                Built a sustainability calculator that estimates the carbon emissions and water usage of clothing items. Users can input a clothing item and brand to see the environmental impact of their purchase, helping make more informed fashion choices.
              </p>
              <a 
                href="https://sustainfashion.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#6D597A] text-white font-medium border-2 border-[#6D597A] rounded-lg shadow-[3px_3px_0px_0px_rgba(109,89,122,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(109,89,122,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                Check it out →
              </a>
            </div>
          </div>
        </div>

        {/* Consulting Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 12 L16 4 L24 12 L28 8 L28 28 L4 28 L4 8 Z" fill="#E56B6F" stroke="#355070" strokeWidth="2"/>
            </svg>
            <h2 className="text-3xl font-bold text-[#355070] italic">Consulting</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Reset */}
            <div className="bg-white p-8 border-2 border-[#B56576] rounded-lg shadow-[6px_6px_0px_0px_rgba(181,101,118,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(181,101,118,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 border-2 border-[#355070] rounded-full flex items-center justify-center bg-[#B56576] shrink-0">
                  <span className="text-2xl font-bold text-white">R</span>
                </div>
                <h3 className="text-2xl font-bold text-[#355070] mt-2">Reset</h3>
              </div>
              <p className="text-[#355070] leading-relaxed">
                Conducted research on material circularity standards for RESET, a global building sustainability certification. Analyzed partnership opportunities and policy gaps to help inform the organization's strategy for entering the US market.
              </p>
            </div>

            {/* Blusink */}
            <div className="bg-white p-8 border-2 border-[#E56B6F] rounded-lg shadow-[6px_6px_0px_0px_rgba(229,107,111,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(229,107,111,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 border-2 border-[#355070] rounded-full flex items-center justify-center bg-[#E56B6F] shrink-0">
                  <span className="text-2xl font-bold text-white">B</span>
                </div>
                <h3 className="text-2xl font-bold text-[#355070] mt-2">Blusink</h3>
              </div>
              <p className="text-[#355070] leading-relaxed">
                Developing methods to quantify economic benefits of marine ecosystem services, creating valuation frameworks for future investment and pricing strategy for Blusink, a carbon sequestration technology company.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="flex items-center gap-4 mt-20">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#355070] via-[#6D597A] via-[#B56576] via-[#E56B6F] to-[#EAAC8B]"></div>
        </div>
      </div>
    </div>
  );
}