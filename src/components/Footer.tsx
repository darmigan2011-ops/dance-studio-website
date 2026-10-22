import { Link } from 'react-router-dom';
import { brand, founders } from '../data/studio';
import { InstagramIcon, LogoMark } from './icons';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Sanāda Space — home">
            <LogoMark className="footer-mark" />
            <span>
              <span className="footer-name">Sanāda</span>
              <span className="footer-sub">Space</span>
            </span>
          </Link>
          <p className="footer-tagline">Imbued with Sound</p>
          <p className="footer-note">{brand.tagline}</p>
        </div>

        <nav className="footer-col" aria-label="Explore">
          <h3 className="footer-heading">Explore</h3>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/connect">Connect</Link>
        </nav>

        <div className="footer-col">
          <h3 className="footer-heading">Co-founders</h3>
          {founders.map((f) => (
            <a key={f.name} href={f.instagramUrl} target="_blank" rel="noopener noreferrer">
              {f.name.split(' ')[0]} · {f.instagram}
            </a>
          ))}
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Find us</h3>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-ig"
          >
            <InstagramIcon /> @sanadaspace
          </a>
          <Link to="/events/south-asian-jam" className="footer-cta">
            Next: South Asian Jam →
          </Link>
        </div>
      </div>
      <div className="container footer-base">
        <p>© {new Date().getFullYear()} Sanāda Space. All rights reserved.</p>
        <p>South Asian arts & fusion collabs · San Francisco</p>
      </div>
    </footer>
  );
}
