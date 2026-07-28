export default function ConnectBand({
  heading = "Let's connect",
  text,
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="cta-band py-20 px-8 text-center">
      <div className="relative max-w-2xl mx-auto">
        <h2 className="font-display font-black text-4xl md:text-5xl mb-8 tracking-tight">
          {heading}
        </h2>
        {text && <p className="text-[var(--paper)]/85 text-lg mb-8">{text}</p>}
        <a href="mailto:nibhatt@g.hmc.edu" className="btn rose">
          Say hello →
        </a>
      </div>
    </section>
  );
}
