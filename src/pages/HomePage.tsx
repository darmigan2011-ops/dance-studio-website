import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { EventCard } from '../components/EventCard';
import { ArrowRight, InstagramIcon, LotusDivider, LogoMark } from '../components/icons';
import { events } from '../data/events';
import { brand, founders } from '../data/studio';
import { usePageTitle } from '../components/utils';
import { img } from '../lib/assets';
import '../styles/pages.css';
import './Home.css';

export function HomePage() {
  usePageTitle('');
  const featured = events.filter((e) => e.featured);

  return (
    <>
      <section className="hero">
        <div className="hero-ornament" aria-hidden="true">
          <div className="hero-ornament-frame" />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal className="hero-eyebrow">
              <p className="eyebrow eyebrow-light">San Francisco · South Asian Arts</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display-1 hero-title">
                Imbued
                <br />
                with <span className="accent-text">Sound.</span>
              </h1>
            </Reveal>
            <Reveal delay={160} className="hero-wordmark-row">
              <LogoMark className="hero-wordmark-mark" />
              <p className="hero-wordmark">
                Sanāda <span>Space</span>
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="lede hero-lede">
                A new initiative promoting South Asian classical arts and fusion collabs — periodic evenings
                with singers, dancers and musicians in San Francisco.
              </p>
            </Reveal>
            <Reveal delay={280} className="hero-ctas">
              <Link to="/events" className="btn btn-light">
                Upcoming Events <ArrowRight />
              </Link>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <InstagramIcon /> Follow @sanadaspace
              </a>
            </Reveal>
          </div>

          <Reveal className="hero-visual" zoom delay={120}>
            <img
              src={img('images/sanada/performance-1.png')}
              alt="Bharatanatyam dancer in a teal and cream costume holding an expressive pose on a dark stage"
            />
          </Reveal>

          <p className="hero-script" aria-hidden="true">
            Resonant
            <br />
            Collaborative
            <br />
            Alive
          </p>
        </div>
      </section>

      <section className="quick-strip" aria-label="Explore Sanāda Space">
        <div className="container quick-strip-grid">
          {[
            { to: '/events', title: 'Events', sub: 'Jams, performances & more' },
            { to: '/about', title: 'About', sub: 'Our story & co-founders' },
            { to: '/faq', title: 'FAQ', sub: 'What to expect' },
            { to: '/connect', title: 'Connect', sub: 'Instagram & RSVP' },
          ].map((link, i) => (
            <Reveal key={link.to} delay={i * 90} className="quick-item-wrap">
              <Link to={link.to} className="quick-item">
                <span className="quick-text">
                  <strong>{link.title}</strong>
                  <span>{link.sub}</span>
                </span>
                <ArrowRight />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="section home-events">
          <div className="container home-events-grid">
            <Reveal className="home-events-intro">
              <p className="eyebrow">Up Next</p>
              <h2 className="display-2">
                Don’t just scroll.
                <br />
                <span className="accent-text">Be there.</span>
              </h2>
              <Link to="/events" className="link-arrow">
                View All Events <ArrowRight />
              </Link>
            </Reveal>
            <div className="home-events-cards">
              {featured.map((event, i) => (
                <Reveal key={event.slug} delay={i * 110}>
                  <EventCard event={event} variant="dark" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section home-founders">
        <div className="container">
          <Reveal className="home-founders-head">
            <div>
              <p className="eyebrow">The Co-founders</p>
              <h2 className="display-2">
                Two dancers.
                <br />
                One shared stage.
              </h2>
            </div>
            <Link to="/about" className="link-arrow">
              Meet Them <ArrowRight />
            </Link>
          </Reveal>
          <div className="home-founders-grid">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 100} className="founder-teaser">
                <div className="founder-teaser-media hover-zoom">
                  <img src={f.image} alt={f.name} className="card-img" />
                </div>
                <h3>{f.name}</h3>
                <p className="founder-teaser-role">{f.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-story">
        <div className="home-story-panel">
          <Reveal>
            <p className="eyebrow eyebrow-light">About Sanāda</p>
            <h2 className="display-2">
              Meaning
              <br />
              “Imbued with Sound.”
            </h2>
            <p className="home-story-copy">{brand.introLede}</p>
            <Link to="/about" className="btn btn-light">
              Our Story <ArrowRight />
            </Link>
          </Reveal>
        </div>
        <Reveal className="home-story-img home-story-img--side" zoom>
          <img
            src={img('images/sanada/priya-portrait.jpg')}
            alt="Priyadharshini Govindarajan in Bharatanatyam costume on stage"
          />
        </Reveal>
      </section>

      <section className="section home-cta">
        <div className="container home-cta-inner">
          <Reveal>
            <LotusDivider className="home-lotus" />
            <h2 className="display-2">
              Come sit with
              <br />
              live sound.
            </h2>
            <p className="lede">
              Follow along on Instagram for the next gathering, or reserve your place at South Asian Jam.
            </p>
          </Reveal>
          <Reveal delay={140} className="home-cta-actions">
            <Link to="/events/south-asian-jam" className="btn btn-dark">
              South Asian Jam <ArrowRight />
            </Link>
            <Link to="/connect" className="btn btn-outline">
              Connect With Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
