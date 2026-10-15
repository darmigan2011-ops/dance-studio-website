import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight } from '../components/icons';
import { getClassBySlug } from '../data/classes';
import { events } from '../data/events';
import { EventCard } from '../components/EventCard';
import { NotFoundPage } from './NotFoundPage';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

export function ClassDetailPage() {
  const { slug = '' } = useParams();
  const danceClass = getClassBySlug(slug);
  usePageTitle(danceClass ? danceClass.name : 'Class not found');

  if (!danceClass) return <NotFoundPage />;

  const relatedEvents = events
    .filter((e) => e.category === 'Workshop' || e.category === 'Performance')
    .slice(0, 2);

  return (
    <>
      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <Link to="/classes" className="detail-back">
              <ArrowRight /> All classes
            </Link>
            <Reveal>
              <p className="eyebrow eyebrow-light">Class</p>
              <h1>{danceClass.name}</h1>
              <p className="detail-tagline">{danceClass.tagline}</p>
              <p className="detail-desc">{danceClass.description}</p>
              <div className="detail-actions">
                <Link to="/contact" className="btn btn-light">
                  Enquire about this class <ArrowRight />
                </Link>
                <Link to="/events" className="btn btn-outline-light">
                  See events
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="detail-hero-media" zoom delay={120}>
            <img src={danceClass.image} alt={`${danceClass.name} dancers`} />
          </Reveal>
        </div>
      </section>

      <section className="detail-body">
        <div className="container detail-cols">
          <Reveal className="detail-section">
            <h2>Weekly schedule</h2>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Level</th>
                  <th>Instructor</th>
                </tr>
              </thead>
              <tbody>
                {danceClass.schedule.map((slot) => (
                  <tr key={`${slot.day}-${slot.time}`}>
                    <td>{slot.day}</td>
                    <td>{slot.time}</td>
                    <td>{slot.level}</td>
                    <td>{slot.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="detail-aside" delay={120}>
            <h3>Levels offered</h3>
            <div className="level-chips" style={{ marginBottom: '1.4rem' }}>
              {danceClass.levels.map((lvl) => (
                <span key={lvl} className="level-chip">
                  {lvl}
                </span>
              ))}
            </div>
            <h3>Enrolment</h3>
            <p>
              New dancers can join mid-term in beginner and all-levels slots. Trial classes are arranged
              individually — send an enquiry and we’ll confirm availability.
            </p>
            <Link to="/contact" className="btn btn-dark">
              Request a trial <ArrowRight />
            </Link>
          </Reveal>
        </div>

        {relatedEvents.length > 0 && (
          <div className="container" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
            <Reveal>
              <h2 className="display-3" style={{ marginBottom: '1.6rem' }}>
                Where it performs
              </h2>
            </Reveal>
            <div className="events-list">
              {relatedEvents.map((e, i) => (
                <Reveal key={e.slug} delay={i * 100}>
                  <EventCard event={e} variant="light" />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
