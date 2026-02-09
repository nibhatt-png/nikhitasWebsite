export default function Research() {
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
          <a href="/projects" className="text-sm text-[#355070] hover:text-[#6D597A] transition-colors font-medium">
            Projects
          </a>
          <a href="/research" className="text-sm text-[#B56576] font-medium underline underline-offset-4">
            Research
          </a>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h1 className="text-7xl font-bold text-[#355070] mb-16">Research</h1>

        {/* Research Items */}
        <div className="space-y-12">
          {/* Research Item 1 - RAGAS */}
          <div className="bg-white p-8 border-2 border-[#355070] rounded-lg shadow-[6px_6px_0px_0px_rgba(53,80,112,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(53,80,112,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              {/* Image */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-full h-full bg-[#355070]/20 rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden border-2 border-[#355070]">
                  <img 
                    src="/ragas.png"
                    alt="RAGAS Research"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-[#355070] mb-3">
                  <span className="bg-[#355070]/10 px-2 py-1 rounded">
                    Evaluating the Effectiveness of Open-Source Large Language Models in Qualitative Healthcare Research using RAGAS
                  </span>
                </h3>
                <p className="text-[#355070] mb-4 leading-relaxed">
                  Explored how open-source large language models can support qualitative healthcare research, using the RAGAS framework to evaluate their effectiveness in analyzing and synthesizing medical data.
                </p>
                <a 
                  href="https://docs.google.com/document/d/14nVJy20a5DCkkNrmEmGHiRxhjo9Lil9_/edit?usp=sharing&ouid=112966755742932131884&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#355070] text-white font-medium border-2 border-[#355070] rounded-lg shadow-[3px_3px_0px_0px_rgba(53,80,112,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(53,80,112,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  View Paper →
                </a>
              </div>
            </div>
          </div>

          {/* Research Item 2 - Brain/MEC */}
          <div className="bg-white p-8 border-2 border-[#6D597A] rounded-lg shadow-[6px_6px_0px_0px_rgba(109,89,122,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(109,89,122,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              {/* Image */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-full h-full bg-[#6D597A]/20 rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden border-2 border-[#6D597A]">
                  <img 
                    src="/brain.png"
                    alt="Brain Research"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-[#355070] mb-3">
                  <span className="bg-[#6D597A]/10 px-2 py-1 rounded">
                    Using Immunohistology to Investigate Cholinergic Fiber Density across Layers in the Medial Entorhinal Cortex
                  </span>
                </h3>
                <p className="text-[#355070] mb-4 leading-relaxed">
                  Investigated how acetylcholine-releasing neurons connect to different layers of the medial entorhinal cortex—a brain region critical for spatial navigation and memory—using immunohistology and confocal microscopy in mice.
                </p>
                <a 
                  href="https://journals.gmu.edu/jssr/article/view/4201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#6D597A] text-white font-medium border-2 border-[#6D597A] rounded-lg shadow-[3px_3px_0px_0px_rgba(109,89,122,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(109,89,122,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  View Publication →
                </a>
              </div>
            </div>
          </div>

          {/* Research Item 3 - Dengue/Mosquito */}
          <div className="bg-white p-8 border-2 border-[#B56576] rounded-lg shadow-[6px_6px_0px_0px_rgba(181,101,118,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(181,101,118,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              {/* Image */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-full h-full bg-[#B56576]/20 rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden border-2 border-[#B56576]">
                  <img 
                    src="/mosquito.png"
                    alt="Dengue Research"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-[#355070] mb-3">
                  <span className="bg-[#B56576]/10 px-2 py-1 rounded">
                    Using Mathematical Modeling to Analyze the Effectiveness of Sterile Insect Technology and Wolbachia Infection Intervention Techniques on Incidence of Dengue in Mexico
                  </span>
                </h3>
                <p className="text-[#355070] mb-4 leading-relaxed">
                  Built mathematical models to analyze how sterile insect technology and Wolbachia infection could reduce dengue transmission in Mexico, comparing intervention effectiveness across different scenarios.
                </p>
                <a 
                  href="https://docs.google.com/presentation/d/1TY14uBwPyIfIz-AkXWTH-0usNaPJJIzx/edit?usp=sharing&ouid=112966755742932131884&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#B56576] text-white font-medium border-2 border-[#B56576] rounded-lg shadow-[3px_3px_0px_0px_rgba(181,101,118,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(181,101,118,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  View Poster →
                </a>
              </div>
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