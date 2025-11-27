import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { socials } from '../data/siteData'

const navItems = [
  { label: 'About', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Blog', to: '/blog' },
]

export function AppShell() {
  return (
    <div className="app-shell">
      <RouteIndicator />
      <SiteHeader />
      <div className="content">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="container header-grid">
        <Link to="/" className="brand">
          <span className="brand-dot" />
          <span>Rohan</span>
        </Link>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
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
  )
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
  )
}

function RouteIndicator() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setVisible(true)
    setProgress(20)
    requestAnimationFrame(() => setProgress(100))
    const hide = setTimeout(() => {
      setVisible(false)
      setProgress(0)
    }, 400)
    return () => clearTimeout(hide)
  }, [location.pathname])

  return (
    <div className={`route-indicator ${visible ? 'visible' : ''}`}>
      <span style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  )
}
