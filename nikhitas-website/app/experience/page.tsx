import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import { experienceItems } from "../data/experience";

export default function Experience() {
  return (
    <div className="min-h-screen relative">
      <Nav current="experience" />

      <div className="relative pt-20 pb-24 px-8 max-w-[1400px] mx-auto">
        <h1 className="font-display font-black text-5xl md:text-6xl leading-[1.05] tracking-tight text-[var(--ink)] mb-14">
          Experience
        </h1>

        <Timeline items={experienceItems} />
      </div>

      <Footer />
    </div>
  );
}
