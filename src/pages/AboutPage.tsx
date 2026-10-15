import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight } from '../components/icons';
import { studio } from '../data/studio';
import { usePageTitle } from '../components/utils';
import { img } from '../lib/assets';
import '../styles/pages.css';

export function AboutPage() {
  usePageTitle('About');

  return (
    <>
      <header className="page-hero page-hero--dark">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow eyebrow-light">About</p>
            <h1>Move. Create. Belong.</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              A decade of teaching, performing and building a room people are glad to walk into. This is
              the story of Rhythm — and the faculty who keep it moving.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="about-story">
        <div className="container about-story-grid">
          <Reveal className="about-story-media" zoom>
            <img src={img('images/about-rehearsal.jpg')} alt="Dancers rehearsing together in warm stage light" />
          </Reveal>
          <Reveal delay={120} className="about-story-copy">
            <p className="eyebrow">Since 2016</p>
            <h2>From one borrowed hall to a full community.</h2>
            {studio.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="values-band">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow-light">What we stand for</p>
            <h2 className="display-2" style={{ marginTop: '0.8rem' }}>
              Three words we teach by.
            </h2>
          </Reveal>
          <div className="values-grid">
            {studio.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 110} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="stats-row">
            {studio.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="instructors">
        <div className="container">
          <Reveal className="instructors-head">
            <div>
              <p className="eyebrow">Faculty</p>
              <h2 className="display-2">The people behind the programmes.</h2>
            </div>
            <Link to="/dancers" className="link-arrow">
              Meet all dancers <ArrowRight />
            </Link>
          </Reveal>
          <div className="instructor-grid">
            {studio.instructors.map((ins, i) => (
              <Reveal key={ins.name} delay={i * 90}>
                {ins.dancerSlug ? (
                  <Link to={`/dancers/${ins.dancerSlug}`} className="instructor-card">
                    <div className="instructor-media">
                      <img src={ins.image} alt={ins.name} loading="lazy" />
                    </div>
                    <h3>{ins.name}</h3>
                    <p className="instructor-role">{ins.role}</p>
                    <p className="instructor-bio">{ins.bio}</p>
                  </Link>
                ) : (
                  <div className="instructor-card">
                    <div className="instructor-media">
                      <img src={ins.image} alt={ins.name} loading="lazy" />
                    </div>
                    <h3>{ins.name}</h3>
                    <p className="instructor-role">{ins.role}</p>
                    <p className="instructor-bio">{ins.bio}</p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <Reveal>
            <h2 className="display-3">Come see the room for yourself.</h2>
            <p className="lede" style={{ marginTop: '0.8rem' }}>
              Trial classes can be arranged any week of term — just ask.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/contact" className="btn btn-dark">
              Plan a visit <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
