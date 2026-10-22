import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight, CalendarIcon, ClockIcon, InstagramIcon, PinIcon } from '../components/icons';
import { formatEventDate, getEventBySlug } from '../data/events';
import { brand } from '../data/studio';
import { NotFoundPage } from './NotFoundPage';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

export function EventDetailPage() {
  const { slug = '' } = useParams();
  const event = getEventBySlug(slug);
  usePageTitle(event ? event.title : 'Event not found');

  if (!event) return <NotFoundPage />;

  return (
    <>
      <section className="event-detail-hero">
        <div className="event-detail-bg" aria-hidden="true">
          <img src={event.image} alt="" />
        </div>
        <div className="container event-detail-content">
          <Link to="/events" className="detail-back">
            <ArrowRight /> All events
          </Link>
          <Reveal>
            <span className="event-card-cat event-card-cat--gold">{event.category}</span>
            <h1>{event.title}</h1>
            <div className="event-meta-row">
              <span>
                <CalendarIcon /> {formatEventDate(event.date)}
              </span>
              <span>
                <ClockIcon /> {event.startTime} – {event.endTime}
              </span>
              <span>
                <PinIcon /> {event.venue}, {event.address}, {event.city}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="event-detail-body">
        <div className="container event-detail-cols">
          <div>
            <Reveal className="prose">
              {event.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>

            {event.performers.length > 0 && (
              <Reveal delay={140}>
                <h2 style={{ marginTop: '2.8rem' }}>On the bill</h2>
                <div className="lineup">
                  {event.performers.map((p) => (
                    <div key={p.name} className="lineup-item">
                      <h3>{p.name}</h3>
                      <p className="lineup-role">{p.role}</p>
                      {p.bio && <p className="lineup-bio">{p.bio}</p>}
                      {p.instagramUrl && (
                        <a
                          href={p.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lineup-ig"
                        >
                          <InstagramIcon /> {p.instagram}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {event.venueNote && (
              <Reveal delay={160}>
                <p className="venue-note">
                  <strong>Venue note:</strong> {event.venueNote}
                </p>
              </Reveal>
            )}
          </div>

          <Reveal delay={120}>
            <aside className="event-aside-card">
              <h3>Reserve your place</h3>
              <dl>
                <div>
                  <dt>Date</dt>
                  <dd>{formatEventDate(event.date)}</dd>
                </div>
                <div>
                  <dt>Time</dt>
                  <dd>
                    {event.startTime} – {event.endTime}
                  </dd>
                </div>
                <div>
                  <dt>Venue</dt>
                  <dd>
                    {event.venue}
                    <br />
                    {event.address}
                    <br />
                    {event.city}
                  </dd>
                </div>
                <div>
                  <dt>Admission</dt>
                  <dd>{event.admission}</dd>
                </div>
              </dl>
              {event.registrationUrl ? (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  RSVP on Partiful <ArrowRight />
                </a>
              ) : (
                <Link to="/connect" className="btn btn-dark">
                  Connect <ArrowRight />
                </Link>
              )}
              {event.paymentNote && <p className="event-disclaimer">{event.paymentNote}</p>}
              {event.registrationNote && (
                <p className="event-disclaimer">{event.registrationNote}</p>
              )}
              <p className="event-disclaimer">
                100% of funds support the performing artists and the nonprofit venue so more evenings like
                this can happen in the future.
              </p>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline event-ig-btn"
              >
                <InstagramIcon /> @sanadaspace
              </a>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
