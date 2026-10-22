import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight, InstagramIcon, LotusDivider } from '../components/icons';
import { brand, founders } from '../data/studio';
import { events } from '../data/events';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

export function ConnectPage() {
  usePageTitle('Connect');
  const upcoming = [...events]
    .filter((e) => e.registrationUrl)
    .sort((a, b) => a.date.localeCompare(b.date))[0];

  return (
    <>
      <header className="page-hero page-hero--dark">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow eyebrow-light">Connect</p>
            <h1>
              Say hello
              <br />
              <span className="accent-text">on Instagram.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Instagram is our main channel for announcements, artist spotlights and RSVPs. For ticketed
              events, use the Partiful link on the event page.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="contact-body">
        <div className="container connect-grid">
          <Reveal className="connect-main">
            <div className="connect-card connect-card--primary">
              <InstagramIcon className="connect-ig-icon" />
              <h2>@sanadaspace</h2>
              <p>
                Follow for the next gathering, behind-the-scenes, and collaborations. Slide into our DMs for
                performance, vendor or partnership inquiries.
              </p>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Open Instagram <ArrowRight />
              </a>
            </div>

            {upcoming && (
              <div className="connect-card">
                <h3>Next up</h3>
                <p className="connect-event-title">{upcoming.title}</p>
                <p className="connect-event-meta">
                  {upcoming.venue} · {upcoming.address}, {upcoming.city}
                </p>
                <Link to={`/events/${upcoming.slug}`} className="link-arrow">
                  Event details & RSVP <ArrowRight />
                </Link>
              </div>
            )}

            <div className="connect-card">
              <h3>Co-founders</h3>
              <ul className="connect-founders">
                {founders.map((f) => (
                  <li key={f.name}>
                    <span>
                      <strong>{f.name}</strong>
                      <span className="connect-founder-role">{f.role}</span>
                    </span>
                    <a href={f.instagramUrl} target="_blank" rel="noopener noreferrer">
                      {f.instagram}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="connect-aside">
            <div className="connect-note">
              <LotusDivider className="connect-lotus" />
              <h3>A note on email</h3>
              <p>
                We don’t publish a general email or phone number yet — Instagram keeps everything in one place
                until the team is ready to share more channels. Thank you for meeting us there.
              </p>
            </div>
            <div className="connect-note">
              <h3>Collaborators</h3>
              <p>
                Artists, vendors and community partners — we’d love to hear from you. Message us on Instagram
                with a short intro and links to your work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
