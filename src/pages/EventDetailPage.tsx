import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight, CalendarIcon, ClockIcon, PinIcon } from '../components/icons';
import { categoryColors, formatEventDate, getEventBySlug } from '../data/events';
import { getDancerBySlug } from '../data/dancers';
import { NotFoundPage } from './NotFoundPage';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

export function EventDetailPage() {
  const { slug = '' } = useParams();
  const event = getEventBySlug(slug);
  usePageTitle(event ? event.title : 'Event not found');

  if (!event) return <NotFoundPage />;

  const performers = event.performers
    .map((p) => getDancerBySlug(p))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

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
            <span
              className="event-card-cat"
              style={{ color: categoryColors[event.category], borderColor: categoryColors[event.category] }}
            >
              {event.category}
            </span>
            <h1>{event.title}</h1>
            <div className="event-meta-row">
              <span>
                <CalendarIcon /> {formatEventDate(event.date)}
              </span>
              <span>
                <ClockIcon /> {event.startTime} – {event.endTime}
              </span>
              <span>
                <PinIcon /> {event.venue}
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

            <Reveal delay={100}>
              <h2 style={{ marginTop: '2.8rem' }}>Running order</h2>
              <ul className="agenda">
                {event.agenda.map((item) => (
                  <li key={item.time}>
                    <time>{item.time}</time>
                    <span>{item.item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {performers.length > 0 && (
              <Reveal delay={140}>
                <h2 style={{ marginTop: '2.8rem' }}>On stage</h2>
                <div className="performers">
                  {performers.map((d) => (
                    <Link key={d.slug} to={`/dancers/${d.slug}`} className="performer-chip">
                      <img src={d.image} alt="" loading="lazy" />
                      {d.name}
                    </Link>
                  ))}
                </div>
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
                  <dd>{event.venue}</dd>
                </div>
                <div>
                  <dt>Admission</dt>
                  <dd>{event.admission}</dd>
                </div>
              </dl>
              <Link to={`/contact?event=${event.slug}`} className="btn btn-light">
                Request tickets <ArrowRight />
              </Link>
              <p className="event-disclaimer">
                {event.registrationNote} Reservations are handled by our studio team directly — there is no
                external ticketing provider on this demonstration site.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
