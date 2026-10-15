import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { EventCard } from '../components/EventCard';
import { ArrowRight } from '../components/icons';
import { dancers, getDancerBySlug } from '../data/dancers';
import { events } from '../data/events';
import { NotFoundPage } from './NotFoundPage';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

export function DancerProfilePage() {
  const { slug = '' } = useParams();
  const dancer = getDancerBySlug(slug);
  usePageTitle(dancer ? dancer.name : 'Dancer not found');

  if (!dancer) return <NotFoundPage />;

  const related = events.filter((e) => e.performers.includes(dancer.slug)).slice(0, 2);
  const others = dancers.filter((d) => d.slug !== dancer.slug && d.styles.some((s) => dancer.styles.includes(s))).slice(0, 4);

  return (
    <>
      <section className="profile-hero">
        <div className="container">
          <Link to="/dancers" className="detail-back">
            <ArrowRight /> All dancers
          </Link>
          <div className="profile-grid">
            <Reveal className="profile-media" zoom>
              <img src={dancer.image} alt={`Portrait of ${dancer.name}`} />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow eyebrow-light">Dancer</p>
              <h1 className="profile-name">{dancer.name}</h1>
              <p className="profile-role">{dancer.role}</p>
              <div className="profile-styles">
                {dancer.styles.map((s) => (
                  <span key={s} className="profile-style-chip">
                    {s}
                  </span>
                ))}
              </div>
              <div className="profile-stats">
                <div className="profile-stat">
                  <strong>{dancer.years}</strong>
                  <span>Years dancing</span>
                </div>
                <div className="profile-stat">
                  <strong>{dancer.specialties.length}</strong>
                  <span>Specialities</span>
                </div>
              </div>
              <p style={{ color: 'var(--dark-muted)', maxWidth: '46ch' }}>{dancer.signature}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="profile-body">
        <div className="container profile-cols">
          <Reveal className="profile-bio">
            {dancer.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <blockquote className="profile-quote">“{dancer.quote}”</blockquote>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="display-3" style={{ marginBottom: '1.2rem' }}>
              Specialities
            </h2>
            <ul className="specialty-list">
              {dancer.specialties.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-dark">
                Train with {dancer.name.split(' ')[0]} <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="container" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <Reveal>
              <h2 className="display-3" style={{ marginBottom: '1.6rem' }}>
                Appearing in
              </h2>
            </Reveal>
            <div className="events-list">
              {related.map((e, i) => (
                <Reveal key={e.slug} delay={i * 100}>
                  <EventCard event={e} variant="light" />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {others.length > 0 && (
          <div className="container" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <Reveal>
              <h2 className="display-3" style={{ marginBottom: '1.6rem' }}>
                Also in {dancer.styles[0]}
              </h2>
            </Reveal>
            <div className="performers">
              {others.map((d) => (
                <Link key={d.slug} to={`/dancers/${d.slug}`} className="performer-chip">
                  <img src={d.image} alt="" loading="lazy" />
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
