import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight, ClockIcon } from '../components/icons';
import { allLevels, classes, type Level } from '../data/classes';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

export function ClassesPage() {
  usePageTitle('Classes');
  const [level, setLevel] = useState<Level | 'All'>('All');

  const filtered = useMemo(
    () => (level === 'All' ? classes : classes.filter((c) => c.levels.includes(level))),
    [level],
  );

  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">Classes</p>
            <h1>
              Eight styles.
              <br />
              One standard.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Every class is taught by working performers, structured by level, and built toward something
              shared — a showcase, a cypher, a stage. Filter by level to find your fit.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="classes-body">
        <div className="container">
          <div className="classes-toolbar">
            <div className="filter-bar" role="group" aria-label="Filter classes by level">
              <span className="filter-label">Level</span>
              {(['All', ...allLevels] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  className={`filter-pill ${level === lvl ? 'is-active' : ''}`}
                  aria-pressed={level === lvl}
                  onClick={() => setLevel(lvl)}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <p className="classes-count" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? 'class' : 'classes'}
            </p>
          </div>

          <div className="class-grid">
            {filtered.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 90} className="class-card-wrap">
                <article className="class-card hover-zoom">
                  <Link to={`/classes/${c.slug}`} className="class-card-media" tabIndex={-1} aria-hidden="true">
                    <img src={c.image} alt="" loading="lazy" className="card-img" />
                  </Link>
                  <div className="class-card-body">
                    <h3>
                      <Link to={`/classes/${c.slug}`}>{c.name}</Link>
                    </h3>
                    <p className="class-tagline">{c.tagline}</p>
                    <p className="class-desc">{c.description}</p>
                    <div className="level-chips">
                      {c.levels.map((lvl) => (
                        <span key={lvl} className="level-chip">
                          {lvl}
                        </span>
                      ))}
                    </div>
                    {c.schedule[0] && (
                      <p className="class-card-next">
                        <ClockIcon />
                        Next: {c.schedule[0].day}, {c.schedule[0].time}
                      </p>
                    )}
                    <Link to={`/classes/${c.slug}`} className="link-arrow class-card-link">
                      Class Details <ArrowRight />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="lede" style={{ marginTop: '2rem' }}>
              No classes at this level right now — try another filter, or{' '}
              <Link to="/contact" className="link-arrow">
                ask us <ArrowRight />
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <section className="section-tight" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <Reveal>
            <h2 className="display-3">Not sure where to start?</h2>
            <p className="lede" style={{ marginTop: '0.8rem' }}>
              Tell us your experience and schedule — we’ll recommend a level within a day.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/contact" className="btn btn-dark">
              Ask for a recommendation <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
