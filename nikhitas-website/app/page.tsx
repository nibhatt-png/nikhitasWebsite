export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] relative">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#FDF8F5]/80 backdrop-blur-sm">
        <a href="#home" className="flex gap-1 items-center hover:opacity-70 transition-opacity">
          <div className="w-2 h-2 bg-[#355070] rounded-full"></div>
          <div className="w-2 h-2 bg-[#6D597A] rounded-full"></div>
          <div className="w-2 h-2 bg-[#B56576] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E56B6F] rounded-full"></div>
          <div className="w-2 h-2 bg-[#EAAC8B] rounded-full"></div>
        </a>
        <div className="flex gap-8">
          <a href="#about" className="text-sm text-[#355070] hover:text-[#E56B6F] transition-colors font-medium">
            About
          </a>
          <a href="#projects" className="text-sm text-[#355070] hover:text-[#6D597A] transition-colors font-medium">
            Projects
          </a>
          <a href="#research" className="text-sm text-[#355070] hover:text-[#B56576] transition-colors font-medium">
            Research
          </a>
        </div>
      </nav>

      {/* ==================== HOME SECTION ==================== */}
      <section id="home" className="pt-32 px-8 max-w-[1400px] mx-auto min-h-screen">
        {/* Name Section */}
        <div className="relative mb-20">
          <h1 className="text-[120px] leading-[0.95] tracking-tight mb-4">
            <span className="block text-[#355070] font-bold">Nikhita Bhatt</span>
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          {/* Left Column - Image */}
          <div className="col-span-5">
            <div className="sticky top-32">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#EAAC8B]/40 rounded-tl-[60px] rounded-br-[60px]"></div>
                <div className="relative rounded-tl-[60px] rounded-br-[60px] overflow-hidden border-4 border-[#355070]">
                  <img 
                    src="/headshot.png"
                    alt="Nikhita Bhatt"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
              </div>
              
              {/* Handwritten-style note */}
              <div className="mt-6 bg-[#EAAC8B]/20 p-6 border-2 border-[#355070] rounded-lg rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(53,80,112,1)]">
                <p className="text-sm italic text-[#355070]">
                  "The happiest people in the world are those who make others happy"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-7 space-y-12">
            <div>
              <p className="text-2xl text-[#6D597A] mb-8 italic">
                Currently, I am...
              </p>

              {/* Item 1 - Education */}
              <div className="mb-8 bg-white p-8 border-2 border-[#355070] rounded-lg shadow-[6px_6px_0px_0px_rgba(53,80,112,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(53,80,112,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2 L9.5 6.5 L14 6.5 L10.5 9.5 L12 14 L8 11 L4 14 L5.5 9.5 L2 6.5 L6.5 6.5 Z" fill="#355070"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-[#355070] mb-3">
                      Studying <span className="font-bold bg-[#355070]/10 px-2 py-1 rounded">CS & Econ</span> at Harvey Mudd + Claremont McKenna
                    </p>
                    <a 
                      href="#about" 
                      className="inline-block px-6 py-3 bg-[#355070] text-white font-medium border-2 border-[#355070] rounded-lg shadow-[3px_3px_0px_0px_rgba(53,80,112,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(53,80,112,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                    >
                      get to know me →
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 2 - Projects */}
              <div className="mb-8 bg-white p-8 border-2 border-[#6D597A] rounded-lg shadow-[6px_6px_0px_0px_rgba(109,89,122,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(109,89,122,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2 L9.5 6.5 L14 6.5 L10.5 9.5 L12 14 L8 11 L4 14 L5.5 9.5 L2 6.5 L6.5 6.5 Z" fill="#6D597A"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-[#355070] mb-3">
                      Building <span className="font-bold bg-[#6D597A]/10 px-2 py-1 rounded">tools at the intersection of tech & impact</span>
                    </p>
                    <a 
                      href="#projects" 
                      className="inline-block px-6 py-3 bg-[#6D597A] text-white font-medium border-2 border-[#6D597A] rounded-lg shadow-[3px_3px_0px_0px_rgba(109,89,122,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(109,89,122,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                    >
                      see my projects →
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 3 - Research */}
              <div className="mb-8 bg-white p-8 border-2 border-[#B56576] rounded-lg shadow-[6px_6px_0px_0px_rgba(181,101,118,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(181,101,118,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2 L9.5 6.5 L14 6.5 L10.5 9.5 L12 14 L8 11 L4 14 L5.5 9.5 L2 6.5 L6.5 6.5 Z" fill="#B56576"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-[#355070] mb-3">
                      Chasing <span className="font-bold bg-[#B56576]/10 px-2 py-1 rounded">questions through research</span>
                    </p>
                    <a 
                      href="#research" 
                      className="inline-block px-6 py-3 bg-[#B56576] text-white font-medium border-2 border-[#B56576] rounded-lg shadow-[3px_3px_0px_0px_rgba(181,101,118,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(181,101,118,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                    >
                      read my work →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="flex items-center gap-4 mt-16">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#355070] via-[#6D597A] via-[#B56576] via-[#E56B6F] to-[#EAAC8B]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="py-20 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h2 className="text-7xl font-bold text-[#355070] mb-16">About Me</h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* I love to code */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[4px_4px_0px_0px_rgba(53,80,112,0.3)]">
            <h3 className="text-xl font-bold text-[#355070] mb-4 flex items-center gap-2">
              <span>💻</span> I love to code...
            </h3>
            <p className="text-[#355070] leading-relaxed">
              I love to apply code to scientific issues, including modeling the spread of diseases and exploring the role of AI in healthcare. Right now, I'm developing a course recommendation platform to help students navigate class selection.
            </p>
          </div>

          {/* I'm a policy nerd */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[4px_4px_0px_0px_rgba(109,89,122,0.3)]">
            <h3 className="text-xl font-bold text-[#355070] mb-4 flex items-center gap-2">
              <span>📊</span> I'm a policy nerd...
            </h3>
            <p className="text-[#355070] leading-relaxed">
              I am passionate about using science to inform policy, specifically in issue areas like climate, technology, and healthcare. In the past I've written AI policy recommendations for the Maryland State Legislature, lobbied for climate regulation on Capitol Hill, and worked on making my school system more inclusive.
            </p>
          </div>

          {/* I care deeply about sustainability */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[4px_4px_0px_0px_rgba(181,101,118,0.3)]">
            <h3 className="text-xl font-bold text-[#355070] mb-4 flex items-center gap-2">
              <span>🌱</span> I care deeply about sustainability...
            </h3>
            <p className="text-[#355070] leading-relaxed">
              I work as a consultant at Robert's Environmental Center, where I help clients navigate sustainability challenges and develop actionable strategies. I'm also working in the LILAQ Lab with Professor Medero at Harvey Mudd, creating data visualizations for air quality data to make environmental information more accessible and actionable for communities.
            </p>
          </div>

          {/* I'm an avid musician */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[4px_4px_0px_0px_rgba(229,107,111,0.3)]">
            <h3 className="text-xl font-bold text-[#355070] mb-4 flex items-center gap-2">
              <span>🎵</span> I'm an avid musician...
            </h3>
            <p className="text-[#355070] leading-relaxed">
              I play piano in my band, ChemAfterChem. I love folk music and artists like Noah Kahan, Zach Bryan, and Del Water Gap. When I'm not playing music or going to concerts, you can find me hunting for the best matcha in town or going on hikes.
            </p>
          </div>
        </div>

        {/* Contact Me */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[4px_4px_0px_0px_rgba(234,172,139,0.3)]">
          <h3 className="text-xl font-bold text-[#355070] mb-6 flex items-center gap-2">
            <span>🔗</span> Contact Me
          </h3>
          <div className="flex gap-4">
            <a 
              href="mailto:nibhatt@g.hmc.edu"
              className="px-6 py-3 bg-[#E56B6F] text-white font-medium rounded-full hover:opacity-80 transition-opacity"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/nikhita-b-aba947218/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#6D597A] text-white font-medium rounded-full hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/nibhatt-png"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#355070] text-white font-medium rounded-full hover:opacity-80 transition-opacity"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div className="flex items-center gap-4 mt-16">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#355070] via-[#6D597A] via-[#B56576] via-[#E56B6F] to-[#EAAC8B]"></div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className="py-20 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h2 className="text-7xl font-bold text-[#355070] mb-16">Projects</h2>

        {/* Computer Science Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-[#355070] rotate-45"></div>
            <h3 className="text-3xl font-bold text-[#355070] italic">Computer Science</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Steel Advisory */}
            <div className="bg-white p-8 border-2 border-[#355070] rounded-lg shadow-[6px_6px_0px_0px_rgba(53,80,112,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(53,80,112,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <h4 className="text-2xl font-bold text-[#355070] mb-4 bg-[#355070]/10 inline-block px-3 py-1 rounded">
                Steel Advisory
              </h4>
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
              <h4 className="text-2xl font-bold text-[#355070] mb-4 bg-[#6D597A]/10 inline-block px-3 py-1 rounded">
                Fashion Sustainability Calculator
              </h4>
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
            <h3 className="text-3xl font-bold text-[#355070] italic">Consulting</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Reset */}
            <div className="bg-white p-8 border-2 border-[#B56576] rounded-lg shadow-[6px_6px_0px_0px_rgba(181,101,118,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(181,101,118,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 border-2 border-[#355070] rounded-full flex items-center justify-center bg-[#B56576] shrink-0">
                  <span className="text-2xl font-bold text-white">R</span>
                </div>
                <h4 className="text-2xl font-bold text-[#355070] mt-2">Reset</h4>
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
                <h4 className="text-2xl font-bold text-[#355070] mt-2">Blusink</h4>
              </div>
              <p className="text-[#355070] leading-relaxed">
                Developing methods to quantify economic benefits of marine ecosystem services, creating valuation frameworks for future investment and pricing strategy for Blusink, a carbon sequestration technology company.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="flex items-center gap-4 mt-16">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#355070] via-[#6D597A] via-[#B56576] via-[#E56B6F] to-[#EAAC8B]"></div>
        </div>
      </section>

      {/* ==================== RESEARCH SECTION ==================== */}
      <section id="research" className="py-20 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h2 className="text-7xl font-bold text-[#355070] mb-16">Research</h2>

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
        <div className="flex items-center gap-4 mt-16">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#355070] via-[#6D597A] via-[#B56576] via-[#E56B6F] to-[#EAAC8B]"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 text-center">
        <p className="text-[#6D597A]">© 2025 Nikhita Bhatt</p>
      </footer>
    </div>
  );
}