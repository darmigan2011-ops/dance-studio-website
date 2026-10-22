import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight, InstagramIcon, LotusDivider } from '../components/icons';
import { brand, founders } from '../data/studio';
import { usePageTitle } from '../components/utils';
import { img } from '../lib/assets';
import '../styles/pages.css';
import './Home.css';

export function AboutPage() {
  usePageTitle('About');

  return (
    <>
      <header className="page-hero page-hero--dark">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow eyebrow-light">{brand.introEyebrow}</p>
            <h1>{brand.introTitle}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">{brand.introLede}</p>
          </Reveal>
        </div>
      </header>

      <section className="about-story">
        <div className="container about-story-grid">
          <Reveal className="about-story-media" zoom>
            <img
              src={img('images/sanada/anulekha-portrait.jpg')}
              alt="Anulekha Chillal in Kuchipudi costume in a garden setting"
            />
          </Reveal>
          <Reveal delay={120} className="about-story-copy">
            <p className="eyebrow">Why Sanāda</p>
            <h2>A place for resonance in the diaspora.</h2>
            {brand.story.map((p, i) => (
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
              Three words we gather by.
            </h2>
          </Reveal>
          <div className="values-grid">
            {brand.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 110} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="instructors">
        <div className="container">
          <Reveal className="instructors-head">
            <div>
              <p className="eyebrow">About the Co-founders</p>
              <h2 className="display-2">The people behind Sanāda Space.</h2>
            </div>
          </Reveal>
          <div className="founders-full">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 120} className="founder-row">
                <div className="founder-row-media hover-zoom">
                  <img src={f.image} alt={f.name} loading="lazy" className="card-img" />
                </div>
                <div className="founder-row-copy">
                  <h3>{f.name}</h3>
                  <p className="founder-row-role">{f.role}</p>
                  <p>{f.bio}</p>
                  <p className="founder-funfact">
                    <strong>Fun fact:</strong> {f.funFact}
                  </p>
                  <a
                    href={f.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow"
                  >
                    <InstagramIcon /> {f.instagram} <ArrowRight />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <Reveal>
            <LotusDivider className="home-lotus" />
            <h2 className="display-3" style={{ marginTop: '1rem' }}>
              Come experience the next gathering.
            </h2>
            <p className="lede" style={{ marginTop: '0.8rem' }}>
              Follow @sanadaspace for announcements, or join us at South Asian Jam.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/events" className="btn btn-dark">
                Events <ArrowRight />
              </Link>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
