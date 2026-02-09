export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] relative">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#FDF8F5]/80 backdrop-blur-sm">
        <div className="flex gap-1 items-center">
          <div className="w-2 h-2 bg-[#355070] rounded-full"></div>
          <div className="w-2 h-2 bg-[#6D597A] rounded-full"></div>
          <div className="w-2 h-2 bg-[#B56576] rounded-full"></div>
          <div className="w-2 h-2 bg-[#E56B6F] rounded-full"></div>
          <div className="w-2 h-2 bg-[#EAAC8B] rounded-full"></div>
        </div>
        <div className="flex gap-8">
          <a href="/about" className="text-sm text-[#355070] hover:text-[#E56B6F] transition-colors font-medium">
            About
          </a>
          <a href="/projects" className="text-sm text-[#355070] hover:text-[#6D597A] transition-colors font-medium">
            Projects
          </a>
          <a href="/research" className="text-sm text-[#355070] hover:text-[#B56576] transition-colors font-medium">
            Research
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 px-8 max-w-[1400px] mx-auto">
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
                  "Building at the intersection of tech, policy, and sustainability 🌱"
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
                      href="/about" 
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
                      href="/projects" 
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
                      href="/research" 
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
              <div className="text-sm text-[#6D597A] font-medium">Scroll to explore</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}