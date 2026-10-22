import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { EventCard } from '../components/EventCard';
import { ArrowRight } from '../components/icons';
import { events } from '../data/events';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

export function EventsPage() {
  usePageTitle('Events');
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">Events</p>
            <h1>
              Gatherings,
              <br />
              <span className="accent-text">not just gigs.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Periodic evenings of South Asian classical music and dance, with room for fusion and
              collaboration. Open the card for full details and how to reserve a place.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="events-body">
        <div className="container">
          {sorted.length === 0 ? (
            <p className="lede">No events listed right now — check back soon.</p>
          ) : (
            <div className="events-list events-list--page">
              {sorted.map((e, i) => (
                <Reveal key={e.slug} delay={(i % 2) * 100}>
                  <EventCard event={e} variant="light" />
                </Reveal>
              ))}
            </div>
          )}

          <div className="events-foot">
            <Reveal>
              <h2 className="display-3">Want to perform or collaborate?</h2>
              <p className="lede" style={{ marginTop: '0.7rem' }}>
                We platform singers, dancers and instrumentalists across the Bay Area. Reach out on Instagram.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/connect" className="btn btn-dark">
                Connect <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
