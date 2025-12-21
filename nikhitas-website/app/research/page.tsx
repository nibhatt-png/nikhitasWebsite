export default function Research() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8e1e6' }}>
      <nav className="flex justify-center gap-24 py-6 text-sm font-semibold tracking-widest" style={{ color: '#4a6fa5' }}>
        <a href="/">HOME</a>
        <a href="/about">ABOUT ME</a>
        <a href="/projects">PROJECTS</a>
        <a href="/research" className="underline">RESEARCH</a>
      </nav>

      <h1 className="text-6xl italic text-center py-12" style={{ color: '#4a6fa5' }}>
        Research
      </h1>

      <main className="px-12 pb-16 flex flex-col gap-8 max-w-5xl mx-auto">
        
        {/* Research 1 - RAGAS */}
        <div className="bg-white/50 rounded-3xl p-8 flex gap-8">
          <div className="flex-shrink-0">
            <img 
              src="/ragas.png" 
              alt="RAGAS Research"
              className="w-32 h-32 object-contain rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl italic mb-4" style={{ color: '#4a6fa5' }}>
              Evaluating the Effectiveness of Open-Source Large Language Models in Qualitative Healthcare Research using RAGAS
            </h2>
            <p className="mb-6" style={{ color: '#6b7280' }}>
              Explored how open-source large language models can support qualitative healthcare research, using the RAGAS framework to evaluate their effectiveness in analyzing and synthesizing medical data.
            </p>
            <a 
              href="https://docs.google.com/document/d/14nVJy20a5DCkkNrmEmGHiRxhjo9Lil9_/edit?usp=sharing&ouid=112966755742932131884&rtpof=true&sd=true" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#d0dcea', color: '#4a6fa5' }}
            >
              View Paper <span>→</span>
            </a>
          </div>
        </div>

        {/* Research 2 - Brain/MEC */}
        <div className="bg-white/50 rounded-3xl p-8 flex gap-8">
          <div className="flex-shrink-0">
            <img 
              src="/brain.png" 
              alt="Brain Research"
              className="w-32 h-32 object-contain rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl italic mb-4" style={{ color: '#4a6fa5' }}>
              Using Immunohistology to Investigate Cholinergic Fiber Density across Layers in the Medial Entorhinal Cortex
            </h2>
            <p className="mb-6" style={{ color: '#6b7280' }}>
              Investigated how acetylcholine-releasing neurons connect to different layers of the medial entorhinal cortex—a brain region critical for spatial navigation and memory—using immunohistology and confocal microscopy in mice.
            </p>
            <a 
              href="https://journals.gmu.edu/jssr/article/view/4201" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#d0dcea', color: '#4a6fa5' }}
            >
              View Publication <span>→</span>
            </a>
          </div>
        </div>

        {/* Research 3 - Dengue/Mosquito */}
        <div className="bg-white/50 rounded-3xl p-8 flex gap-8">
          <div className="flex-shrink-0">
            <img 
              src="/mosquito.png" 
              alt="Dengue Research"
              className="w-32 h-32 object-contain rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl italic mb-4" style={{ color: '#4a6fa5' }}>
              Using Mathematical Modeling to Analyze the Effectiveness of Sterile Insect Technology and Wolbachia Infection Intervention Techniques on Incidence of Dengue in Mexico
            </h2>
            <p className="mb-6" style={{ color: '#6b7280' }}>
              Built mathematical models to analyze how sterile insect technology and Wolbachia infection could reduce dengue transmission in Mexico, comparing intervention effectiveness across different scenarios.
            </p>
            <a 
              href="https://docs.google.com/presentation/d/1TY14uBwPyIfIz-AkXWTH-0usNaPJJIzx/edit?usp=sharing&ouid=112966755742932131884&rtpof=true&sd=true" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#d0dcea', color: '#4a6fa5' }}
            >
              View Poster <span>→</span>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}