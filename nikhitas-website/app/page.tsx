import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ConnectBand from "./components/ConnectBand";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Nav current="home" />

      {/* ==================== HOME SECTION ==================== */}
      <section id="home" className="pt-20 px-8 max-w-[1400px] mx-auto pb-24">
        {/* Name Section */}
        <div className="relative mb-16">
          <p className="font-script text-4xl text-[var(--jungle)] mb-2 -rotate-3 inline-block">
            hello, I&apos;m
          </p>
          <h1 className="font-display text-[100px] leading-[0.95] tracking-tight text-[var(--ink)] font-black">
            Nikhita Bhatt
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Image */}
          <div className="col-span-12 md:col-span-5">
            <div className="sticky top-32">
              <div className="relative inline-block -rotate-2">
                <div className="polaroid">
                  <img
                    src="/headshot.png"
                    alt="Nikhita Bhatt"
                    className="w-full h-[520px] object-cover"
                  />
                  <div className="h-8"></div>
                </div>
                <div className="tape w-24 h-8 -top-4 left-1/2 -translate-x-1/2 -rotate-3"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-12 md:col-span-7 space-y-2">
            <p className="text-2xl text-[var(--ink-soft)] mb-8 font-display font-semibold">
              Currently, I am...
            </p>

            {/* Item 1 - Education */}
            <div className="py-6">
              <p className="text-xl text-[var(--ink)] mb-4">
                Studying{" "}
                <span className="highlight-slab font-bold" style={{ "--tint": "var(--n-sage)" } as React.CSSProperties}>
                  Computer Science &amp; Economics
                </span>{" "}
                at Harvey Mudd + Claremont McKenna.
              </p>
              <a href="/about" className="btn">
                get to know me →
              </a>
            </div>

            {/* Item 2 - Projects */}
            <div className="py-6">
              <p className="text-xl text-[var(--ink)] mb-4">
                Building{" "}
                <span className="highlight-slab font-bold" style={{ "--tint": "var(--n-peach)" } as React.CSSProperties}>
                  tools at the intersection of tech &amp; impact
                </span>
                .
              </p>
              <a href="/projects" className="btn blue">
                see my projects →
              </a>
            </div>

            {/* Item 3 - Research */}
            <div className="py-6">
              <p className="text-xl text-[var(--ink)] mb-4">
                Chasing{" "}
                <span className="highlight-slab font-bold" style={{ "--tint": "var(--n-rose)" } as React.CSSProperties}>
                  questions through research
                </span>
                .
              </p>
              <a href="/research" className="btn rose">
                read my work →
              </a>
            </div>

            {/* Item 4 - Leadership */}
            <div className="py-6">
              <p className="text-xl text-[var(--ink)] mb-4">
                Working on{" "}
                <span className="highlight-slab font-bold" style={{ "--tint": "var(--n-terra)" } as React.CSSProperties}>
                  making a difference in my community
                </span>
                .
              </p>
              <a href="/leadership" className="btn moss">
                see my leadership →
              </a>
            </div>
          </div>
        </div>
      </section>

      <ConnectBand />
      <Footer />
    </div>
  );
}
