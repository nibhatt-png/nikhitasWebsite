export default function Projects() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8e1e6' }}>
      <nav className="flex justify-center gap-24 py-6 text-sm font-semibold tracking-widest" style={{ color: '#4a6fa5' }}>
        <a href="/">HOME</a>
        <a href="/about">ABOUT ME</a>
        <a href="/projects" className="underline">PROJECTS</a>
        <a href="/research">RESEARCH</a>
      </nav>

      <h1 className="text-6xl italic text-center py-12" style={{ color: '#4a6fa5' }}>
        Projects
      </h1>

      <main className="px-12 pb-16 max-w-6xl mx-auto">
        
        {/* Computer Science Section */}
        <h2 className="text-3xl italic mb-8" style={{ color: '#4a6fa5' }}>
          💻 Computer Science
        </h2>
        <div className="grid grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white/50 rounded-3xl p-8">
  <h3 className="text-2xl italic mb-2" style={{ color: '#4a6fa5' }}>Steel Advisory</h3>
  <p className="text-sm mb-4" style={{ color: '#4a6fa5' }}>Month Year</p>
  <p className="mb-4" style={{ color: '#6b7280' }}>
    Created a steel procurement optimization tool that combines ARIMAX time-series forecasting with Monte Carlo simulation. The model factors in economic indicators, production methods (blast furnace vs. electric arc), shipping emissions, and regional grid cleanliness to recommend cost-effective, sustainable suppliers. Built with FastAPI and Next.js.
  </p>
  <a 
    href="https://lnkd.in/gtSchADj" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
    style={{ backgroundColor: '#d0dcea', color: '#4a6fa5' }}
  >
    Check it out <span>→</span>
  </a>
</div>

          <div className="bg-white/50 rounded-3xl p-8 flex items-center justify-center">
            <p className="text-2xl italic" style={{ color: '#4a6fa5' }}>Coming Soon</p>
          </div>

          <div className="bg-white/50 rounded-3xl p-8 flex items-center justify-center">
            <p className="text-2xl italic" style={{ color: '#4a6fa5' }}>Coming Soon</p>
          </div>

        </div>

        {/* Consulting Section */}
        <h2 className="text-3xl italic mb-8" style={{ color: '#4a6fa5' }}>
          🌱 Consulting
        </h2>
        <div className="grid grid-cols-2 gap-8">
          
          <div className="bg-white/50 rounded-3xl p-8 flex gap-6">
            <div className="flex-shrink-0">
              <img 
                src="/reset.png" 
                alt="RESET"
                className="w-24 h-24 object-contain rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl italic mb-2" style={{ color: '#4a6fa5' }}>Reset</h3>
              <p className="text-sm mb-4" style={{ color: '#4a6fa5' }}>Sep 2024 - Present</p>
              <p style={{ color: '#6b7280' }}>
                Conducted research on material circularity standards for RESET, a global building sustainability certification. Analyzed partnership opportunities and policy gaps to help inform the organization's strategy for entering the US market.
              </p>
            </div>
          </div>

          <div className="bg-white/50 rounded-3xl p-8 flex gap-6">
            <div className="flex-shrink-0">
              <img 
                src="/blusink.png" 
                alt="BlueSink"
                className="w-24 h-24 object-contain rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl italic mb-2" style={{ color: '#4a6fa5' }}>BlueSink</h3>
              <p className="text-sm mb-4" style={{ color: '#4a6fa5' }}>Sep 2024 - Present</p>
              <p style={{ color: '#6b7280' }}>
                Developing methods to quantify economic benefits of marine ecosystem services, creating valuation frameworks for future investment and pricing strategy for BlueSink, a carbon sequestration technology company.
              </p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}