export default function About() {
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
          <a href="/about" className="text-sm text-[#E56B6F] font-medium underline underline-offset-4">
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

      <div className="pt-32 pb-20 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h1 className="text-7xl font-bold text-[#355070] mb-16">About Me</h1>

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
      </div>
    </div>
  );
}