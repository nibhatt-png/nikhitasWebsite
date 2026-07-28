import Nav from "../components/Nav";
import Footer from "../components/Footer";

const cards = [
  {
    title: "musician",
    text: "I love playing piano in my band, ChemAfterChem.",
    bg: "bg-note-terra",
    rotate: "rotate-1",
    tape: "right-8 rotate-3",
    photo: "/about-music2.jpg",
  },
  {
    title: "outdoor explorer",
    text: "I love to go on walks and hikes! I'm also currently training for a triathlon.",
    bg: "bg-note-peach",
    rotate: "rotate-1",
    tape: "left-8 -rotate-3",
    photo: "/about-outdoors.jpg",
  },
  {
    title: "cat lover",
    text: "I spend lots of time with my cats, Mick and Starburst.",
    bg: "bg-note-butter",
    rotate: "-rotate-1",
    tape: "right-8 rotate-4",
    photo: "/about-cats.jpg",
  },
  {
    title: "concert chaser",
    text: "Most recently I've been to Noah Kahan!",
    bg: "bg-note-sky",
    rotate: "rotate-1",
    tape: "left-8 -rotate-2",
    photo: "/about-concert.jpg",
  },
  {
    title: "traveler",
    text: "I love to visit new places. Most recently I visited New York!",
    bg: "bg-note-rose",
    rotate: "-rotate-1",
    tape: "right-8 rotate-2",
    photo: "/about-travel.jpg",
  },
  {
    title: "chef",
    text: "Cooking is one of my favorite things to do!",
    bg: "bg-note-butter",
    rotate: "rotate-1",
    tape: "left-8 -rotate-2",
    photo: "/about-cooking.jpg",
  },
  {
    title: "matcha enthusiast",
    text: "I'm always hunting for the best matcha spot - or making matcha at home!",
    bg: "bg-note-sage",
    rotate: "-rotate-1",
    tape: "left-8 -rotate-4",
    photo: "/about-matcha.jpg",
  },
  {
    title: "south african",
    text: "My family is from South Africa and I love visiting.",
    bg: "bg-note-sage",
    rotate: "-rotate-1",
    tape: "right-8 rotate-3",
    photo: "/about-southafrica.jpg",
  },
  {
    title: "advocate",
    text: "I am deeply passionate about advocacy and pushing for justice in my community.",
    bg: "bg-note-peach",
    rotate: "rotate-1",
    tape: "left-8 -rotate-4",
    photo: "/about-advocate.jpg",
  },
];

export default function About() {
  return (
    <div className="min-h-screen relative">
      <Nav current="about" />

      <div className="pt-20 pb-24 px-8 max-w-[1400px] mx-auto">
        {/* Page Title */}
        <h1
          className="highlight-slab inline-block font-display font-black text-6xl text-[var(--ink)] mb-16"
          style={{ "--tint": "var(--n-sage)" } as React.CSSProperties}
        >
          About Me
        </h1>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14 mb-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative ${card.rotate} ${card.bg} p-5 rounded-xl shadow-paper overflow-hidden`}
            >
              <div className={`tape w-20 h-6 -top-3 ${card.tape}`}></div>

              {card.photo ? (
                <div className="relative rotate-1 mb-5">
                  <div className="polaroid !p-2">
                    <img
                      src={card.photo}
                      alt={card.title}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="photo-placeholder w-full aspect-square mb-5">
                  photo
                  <br />
                  coming soon
                </div>
              )}

              {card.title ? (
                <h3 className="font-display font-bold text-xl text-[var(--paper-ink)] mb-2">
                  {card.title}
                </h3>
              ) : (
                <h3 className="font-display font-bold text-xl text-[var(--paper-ink)]/40 mb-2 italic">
                  add a title...
                </h3>
              )}
              <p className="text-[var(--paper-ink-soft)] italic text-sm leading-relaxed">
                {card.text || "add a sentence here..."}
              </p>

              <div className="corner-fold"></div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
