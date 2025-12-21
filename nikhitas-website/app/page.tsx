export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8e1e6' }}>
      <nav className="flex justify-center gap-24 py-6 text-xl font-semibold tracking-widest" style={{ color: '#4a6fa5' }}>
        <a href="/" className="underline">HOME</a>
        <a href="/about">ABOUT ME</a>
        <a href="/projects">PROJECTS</a>
        <a href="/research">RESEARCH</a>
      </nav>

      <main className="flex justify-center items-center gap-16 px-20 pt-16">
        <div>
          <img 
            src="/nameScreenshot.png" 
            alt="Nikhita Bhatt"
            className="w-[650px]"
          />
        </div>

        <div>
          <img 
            src="/headshot.png" 
            alt="Nikhita Bhatt"
            className="w-170 h-170 object-cover rounded-3xl"
          />
        </div>
      </main>
    </div>
  );
}