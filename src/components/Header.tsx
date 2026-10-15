import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, LogoMark } from './icons';
import './Header.css';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/classes', label: 'Classes' },
  { to: '/dancers', label: 'Dancers' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Rhythm Dance Studio — home">
          <LogoMark className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">Rhythm</span>
            <span className="brand-sub">Dance Studio</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-dark btn-join">
            Join Us <ArrowRight />
          </Link>
          <button
            type="button"
            className={`menu-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {nav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-dark mobile-join">
            Join Us <ArrowRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
