import { useMemo, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { DancerCard } from '../components/DancerCard';
import { dancerStyles, dancers } from '../data/dancers';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

export function DancersPage() {
  usePageTitle('Dancers');
  const [style, setStyle] = useState<string>('All');

  const filtered = useMemo(
    () => (style === 'All' ? dancers : dancers.filter((d) => d.styles.includes(style))),
    [style],
  );

  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">Dancers</p>
            <h1>
              Real people.
              <br />
              Real stories.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Faculty, company members and resident choreographers — the people who fill our studios with
              work worth watching. Filter by style to find your people.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="dancers-body">
        <div className="container">
          <div className="classes-toolbar">
            <div className="filter-bar" role="group" aria-label="Filter dancers by style">
              <span className="filter-label">Style</span>
              {['All', ...dancerStyles].map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`filter-pill ${style === s ? 'is-active' : ''}`}
                  aria-pressed={style === s}
                  onClick={() => setStyle(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="classes-count" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? 'dancer' : 'dancers'}
            </p>
          </div>

          <div className="dancer-grid">
            {filtered.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 4) * 80} className="dancer-wrap">
                <DancerCard dancer={d} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
