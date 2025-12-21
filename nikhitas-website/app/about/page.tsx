export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8e1e6' }}>
      <nav className="flex justify-center gap-24 py-6 text-sm font-semibold tracking-widest" style={{ color: '#4a6fa5' }}>
        <a href="/">HOME</a>
        <a href="/about" className="underline">ABOUT ME</a>
        <a href="/projects">PROJECTS</a>
        <a href="/research">RESEARCH</a>
      </nav>

      <h1 className="text-6xl italic text-center py-8" style={{ color: '#4a6fa5' }}>
        About Me
      </h1>
    

      <main className="px-12 pb-16 flex flex-col gap-8 max-w-5xl mx-auto">
        
        {/* Intro Section */}
        <div className="bg-white/50 rounded-3xl p-8">
          <h2 className="text-3xl italic mb-6" style={{ color: '#4a6fa5' }}>
            👋 Hi, I'm Nikhita!
          </h2>
          <p className="mb-4" style={{ color: '#6b7280' }}>
            I'm a computer science and economics student who loves building things and understanding how systems work.
          </p>
          <p className="mb-4" style={{ color: '#6b7280' }}>
            I'm drawn to AI and full-stack development; there's something satisfying about creating things that actually work and solve real problems. I also love applying code to various research questions, including AI in healthcare, mathematical disease modeling, and neuroscience imaging analysis.
          </p>
          <p className="mb-4" style={{ color: '#6b7280' }}>
            Economics and policy fascinate me just as much as tech. I'm interested in how incentives shape behavior, how regulations can accelerate or slow down innovation, and how decisions at the policy level trickle down into everyday life. That curiosity led me to consulting, where I get to help clients navigate complex challenges and turn ideas into action.
          </p>
          <p className="mb-4" style={{ color: '#6b7280' }}>
            Sustainability is the thread that ties a lot of my work together. I care about how tech and policy can push us toward a more sustainable future, and I've been lucky to explore that through environmental consulting and research.
          </p>
          <p style={{ color: '#6b7280' }}>
            When I'm not coding, you'll find me playing piano with my band, hunting for the best matcha cafes, and spending time with my cats.
          </p>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Education */}
          <div className="bg-white/50 rounded-3xl p-8">
            <h2 className="text-3xl italic mb-6" style={{ color: '#4a6fa5' }}>
              🎓 Education
            </h2>
            <div className="bg-white/70 rounded-2xl p-6 mb-4">
              <h3 className="text-xl mb-2" style={{ color: '#4a6fa5' }}>Harvey Mudd College</h3>
              <p style={{ color: '#6b7280' }}>B.S. in Computer Science</p>
              <p style={{ color: '#6b7280' }}>Presidential Scholar</p>
              <p style={{ color: '#9ca3af' }}>2025 - 2029</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-6">
              <h3 className="text-xl mb-2" style={{ color: '#4a6fa5' }}>Claremont McKenna College</h3>
              <p style={{ color: '#6b7280' }}>B.A. in Economics</p>
              <p style={{ color: '#9ca3af' }}>2025 - 2029</p>
            </div>
          </div>

          {/* Contact */}
<div className="bg-white/50 rounded-3xl p-8">
  <h2 className="text-3xl italic mb-6" style={{ color: '#4a6fa5' }}>
    📬 Contact
  </h2>
  <div className="flex flex-col gap-4">
    <a 
      href="mailto:nibhatt@g.hmc.edu" 
      className="flex items-center gap-4 bg-white/70 rounded-2xl p-5 hover:bg-white/90 transition-all group"
    >
      <span className="text-2xl">✉️</span>
      <div>
        <p className="font-medium group-hover:underline" style={{ color: '#4a6fa5' }}>Email</p>
        <p className="text-sm" style={{ color: '#9ca3af' }}>nibhatt@g.hmc.edu</p>
      </div>
      <span className="ml-auto" style={{ color: '#4a6fa5' }}>→</span>
    </a>
    <a 
      href="https://www.linkedin.com/in/nikhita-b-aba947218/" 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-white/70 rounded-2xl p-5 hover:bg-white/90 transition-all group"
    >
      <span className="text-2xl">💼</span>
      <div>
        <p className="font-medium group-hover:underline" style={{ color: '#4a6fa5' }}>LinkedIn</p>
        <p className="text-sm" style={{ color: '#9ca3af' }}>Connect with me</p>
      </div>
      <span className="ml-auto" style={{ color: '#4a6fa5' }}>→</span>
    </a>
    <a 
      href="https://github.com/nibhatt-png" 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-white/70 rounded-2xl p-5 hover:bg-white/90 transition-all group"
    >
      <span className="text-2xl">💻</span>
      <div>
        <p className="font-medium group-hover:underline" style={{ color: '#4a6fa5' }}>GitHub</p>
        <p className="text-sm" style={{ color: '#9ca3af' }}>Check out my code</p>
      </div>
      <span className="ml-auto" style={{ color: '#4a6fa5' }}>→</span>
    </a>
  </div>
</div>

        </div>

      </main>
    </div>
  );
}