import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { socials } from "../data/siteData";

const navItems = [
  { label: "About", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Blog", to: "/blog" },
];

const brandWords = ["tinkering...", "building...", "thinking...", "zooming..."];

export function AppShell({ children }) {
  return (
    <div className="app-shell">
      <RouteIndicator />
      <SiteHeader />
      <div className="content">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [brandWord, setBrandWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setInterval(
      () => setWordIndex((index) => (index + 1) % brandWords.length),
      7000
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!brandWord) return;
    setIsDeleting(true);
  }, [wordIndex]);

  useEffect(() => {
    const target = brandWords[wordIndex];
    const speed = isDeleting ? 50 : 80;

    const tick = setTimeout(() => {
      if (isDeleting) {
        if (brandWord.length === 0) {
          setIsDeleting(false);
          return;
        }
        setBrandWord((prev) => prev.slice(0, -1));
        return;
      }

      if (brandWord === target) return;
      setBrandWord((prev) => target.slice(0, prev.length + 1));
    }, speed);

    return () => clearTimeout(tick);
  }, [brandWord, isDeleting, wordIndex]);

  return (
    <header className="site-header">
      <div className="container header-grid">
        <div className="brand">
          <Link to="/" className="brand-home" aria-label="Go to home">
            <span className="brand-dot" />
          </Link>
          <span className="brand-word" aria-live="polite">
            {brandWord}
          </span>
        </div>
        <nav className={`nav ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="nav-toggle" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="muted">Let’s build something calm and intentional.</p>
        </div>
        <div className="socials">
          {socials.map((item) => (
            <a key={item.label} href={item.href} className="nav-link muted">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function RouteIndicator() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setVisible(true);
    setProgress(20);
    requestAnimationFrame(() => setProgress(100));
    const hide = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 400);
    return () => clearTimeout(hide);
  }, [location.pathname]);

  return (
    <div className={`route-indicator ${visible ? "visible" : ""}`}>
      <span style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  );
}
