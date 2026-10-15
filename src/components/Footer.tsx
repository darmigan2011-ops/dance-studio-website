import { Link } from 'react-router-dom';
import { studio } from '../data/studio';
import { LogoMark } from './icons';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Rhythm Dance Studio — home">
            <LogoMark className="footer-mark" />
            <span>
              <span className="footer-name">Rhythm</span>
              <span className="footer-sub">Dance Studio</span>
            </span>
          </Link>
          <p className="footer-tagline">{studio.tagline}</p>
          <p className="footer-note">Sample studio details — replace with real information before launch.</p>
        </div>

        <nav className="footer-col" aria-label="Explore">
          <h3 className="footer-heading">Explore</h3>
          <Link to="/classes">Classes</Link>
          <Link to="/dancers">Dancers</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
        </nav>

        <nav className="footer-col" aria-label="Visit">
          <h3 className="footer-heading">Visit</h3>
          <p>{studio.contact.address}</p>
          <p>{studio.contact.city}</p>
          <p>{studio.contact.phone}</p>
          <a href={`mailto:${studio.contact.email}`}>{studio.contact.email}</a>
        </nav>

        <div className="footer-col">
          <h3 className="footer-heading">Studio Hours</h3>
          {studio.contact.hours.map((h) => (
            <p key={h.days} className="footer-hours">
              <span>{h.days}</span>
              <span>{h.time}</span>
            </p>
          ))}
          <Link to="/contact" className="footer-cta">
            Enrolment enquiries →
          </Link>
        </div>
      </div>
      <div className="container footer-base">
        <p>© {new Date().getFullYear()} Rhythm Dance Studio. Demonstration website.</p>
        <p>Movement lives here.</p>
      </div>
    </footer>
  );
}
