import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { DancerCard } from '../components/DancerCard';
import { EventCard } from '../components/EventCard';
import { ArrowRight, CalendarIcon, ClockIcon, PinIcon } from '../components/icons';
import { classes } from '../data/classes';
import { dancers } from '../data/dancers';
import { events } from '../data/events';
import { usePageTitle } from '../components/utils';
import './Home.css';

const quickLinks = [
  {
    to: '/classes',
    title: 'Dance Classes',
    sub: 'Learn from expert instructors',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 20c2-5 3.5-8 3-12 .8 1.2 2 2 3.5 2.2M10 8c-.8-1.4-1-3-.4-4.6C12 4 14 6.4 14.5 9c.4 2-.2 3.8-1.4 5.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M7 20h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/events',
    title: 'Upcoming Events',
    sub: 'Performances, workshops & more',
    icon: <CalendarIcon />,
  },
  {
    to: '/dancers',
    title: 'Our Dancers',
    sub: 'Meet our talented community',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16.5" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 19c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5M14.5 19c.4-1.8 1.5-3 3.3-3 1.5 0 2.6.8 3.2 2.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/contact',
    title: 'Join the Community',
    sub: 'Move. Create. Belong.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 20s-7-4.4-7-9.2A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 7 2.8C19 15.6 12 20 12 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function HomePage() {
  usePageTitle('');
  const featuredClasses = classes.filter((c) => c.featured).slice(0, 6);
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);
  const featuredDancers = dancers.filter((d) => d.featured).slice(0, 5);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal className="hero-eyebrow">
              <p className="eyebrow">Dance · People · Community</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display-1 hero-title">
                Movement
                <br />
                Lives
                <br />
                <span className="accent-text">Here.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="lede hero-lede">
                Classes. Performances. Events. A community that moves, creates and grows together.
              </p>
            </Reveal>
            <Reveal delay={260} className="hero-ctas">
              <Link to="/classes" className="btn btn-dark">
                Explore Classes <ArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline hero-story-btn">
                <span className="play-dot" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M6 4.5v7l6-3.5-6-3.5Z" fill="currentColor" />
                  </svg>
                </span>
                Watch Our Story
              </Link>
            </Reveal>
          </div>

          <Reveal className="hero-visual" zoom delay={120}>
            <img src="/images/hero-dancer-leap.jpg" alt="Dancer leaping through shafts of stage light and haze" />
          </Reveal>

          <p className="hero-script" aria-hidden="true">
            Good
            <br />
            Dancers
            <br />
            Brighter
            <br />
            People
          </p>

          <a href="#styles" className="hero-scroll" aria-label="Scroll to explore">
            <span>Scroll</span>
            <span className="hero-scroll-ring">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 3v9m0 0L4.5 8.5M8 12l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* ---------- Quick links ---------- */}
      <section className="quick-strip" aria-label="Explore the studio">
        <div className="container quick-strip-grid">
          {quickLinks.map((link, i) => (
            <Reveal key={link.to} delay={i * 90} className="quick-item-wrap">
              <Link to={link.to} className="quick-item">
                <span className="quick-icon">{link.icon}</span>
                <span className="quick-text">
                  <strong>{link.title}</strong>
                  <span>{link.sub}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Styles showcase ---------- */}
      <section className="styles-section" id="styles">
        <div className="styles-split">
          <Reveal className="styles-visual" zoom>
            <img src="/images/styles-spotlight.jpg" alt="Hip hop dancer moving through a single spotlight in a dark studio" />
            <p className="styles-visual-eyebrow">
              Different styles
              <br />
              One community
            </p>
            <Link to="/classes" className="styles-orb" aria-label="Find your style — browse classes">
              <span>
                Find
                <br />
                Your
                <br />
                Style
              </span>
              <ArrowRight />
            </Link>
          </Reveal>

          <div className="styles-content">
            <div className="container styles-head">
              <Reveal>
                <p className="eyebrow">Classes</p>
                <h2 className="display-2">
                  Explore
                  <br />
                  Your Style
                </h2>
              </Reveal>
              <Reveal delay={120} className="styles-intro">
                <p className="lede">
                  From high-energy hip hop to expressive contemporary, our classes are designed for every
                  level — taught by faculty who still perform.
                </p>
                <Link to="/classes" className="link-arrow">
                  View All Classes <ArrowRight />
                </Link>
              </Reveal>
            </div>

            <div className="styles-rail-wrap">
              <div className="styles-rail">
                {featuredClasses.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 80} zoom className="style-card-wrap">
                    <Link to={`/classes/${c.slug}`} className="style-card hover-zoom">
                      <img src={c.image} alt={c.name} loading="lazy" className="card-img" />
                      <span className="style-card-label">{c.name}</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Events preview ---------- */}
      <section className="section home-events">
        <div className="container home-events-grid">
          <Reveal className="home-events-intro">
            <p className="eyebrow">Upcoming Events</p>
            <h2 className="display-2">
              Don’t Just Watch.
              <br />
              <span className="accent-text">Be There.</span>
            </h2>
            <Link to="/events" className="link-arrow">
              View All Events <ArrowRight />
            </Link>
          </Reveal>
          <div className="home-events-cards">
            {upcoming.map((event, i) => (
              <Reveal key={event.slug} delay={i * 110}>
                <EventCard event={event} variant="dark" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured dancers ---------- */}
      <section className="section home-dancers">
        <div className="container">
          <Reveal className="home-dancers-head">
            <div>
              <p className="eyebrow">Featured Dancers</p>
              <h2 className="display-2">
                Real People.
                <br />
                Real Stories.
              </h2>
            </div>
            <Link to="/dancers" className="link-arrow">
              Meet All Dancers <ArrowRight />
            </Link>
          </Reveal>
          <div className="home-dancers-grid">
            {featuredDancers.map((d, i) => (
              <Reveal key={d.slug} delay={i * 90} className="home-dancer-wrap">
                <DancerCard dancer={d} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Studio story ---------- */}
      <section className="home-story">
        <div className="home-story-media">
          <Reveal className="home-story-img home-story-img--main" zoom>
            <img src="/images/studio-community.jpg" alt="Four dancers laughing and moving together in a sunlit studio" loading="lazy" />
            <span className="home-story-orb" aria-hidden="true">
              Move
              <br />
              Create
              <br />
              <em>Belong</em>
            </span>
          </Reveal>
        </div>
        <div className="home-story-panel">
          <Reveal>
            <p className="eyebrow eyebrow-light">Our Studio</p>
            <h2 className="display-2">
              More Than a Studio.
              <br />A Community.
            </h2>
            <p className="home-story-copy">
              A space for dancers of all levels to learn, perform and grow together. Here, movement builds
              confidence, friendships and brighter futures.
            </p>
            <Link to="/about" className="btn btn-light">
              Our Story <ArrowRight />
            </Link>
          </Reveal>
        </div>
        <Reveal className="home-story-img home-story-img--side" zoom>
          <img src="/images/studio-interior.jpg" alt="The Rhythm studio interior with mirrors, barre and window light" loading="lazy" />
        </Reveal>
      </section>

      {/* ---------- Enrolment CTA ---------- */}
      <section className="section home-cta">
        <div className="container home-cta-inner">
          <Reveal>
            <p className="eyebrow">Begin Here</p>
            <h2 className="display-2">
              Your first class is
              <br />
              waiting.
            </h2>
            <p className="lede">
              Tell us what you’d like to learn — we’ll help you find the right level, schedule and
              instructor. No experience required.
            </p>
          </Reveal>
          <Reveal delay={140} className="home-cta-actions">
            <Link to="/contact" className="btn btn-dark">
              Start Enrolling <ArrowRight />
            </Link>
            <Link to="/events" className="btn btn-outline">
              See Upcoming Events
            </Link>
          </Reveal>
          <Reveal delay={200} className="home-cta-facts">
            <span>
              <ClockIcon /> Weekly classes, 6 days
            </span>
            <span>
              <PinIcon /> Two studios, one address
            </span>
            <span>
              <CalendarIcon /> Performances every term
            </span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
