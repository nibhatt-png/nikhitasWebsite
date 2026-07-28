export default function Footer() {
  return (
    <footer className="py-10 px-8 text-center text-sm text-[var(--ink-faint)]">
      <div className="flex justify-center gap-6 mb-3">
        <a href="mailto:nibhatt@g.hmc.edu" className="footer-link">Email</a>
        <a
          href="https://www.linkedin.com/in/nikhita-b-aba947218/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/nibhatt-png"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
      </div>
      <p>© 2026 Nikhita Bhatt</p>
    </footer>
  );
}
