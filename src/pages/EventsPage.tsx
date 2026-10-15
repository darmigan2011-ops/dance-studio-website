import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { EventCard } from '../components/EventCard';
import { ArrowRight } from '../components/icons';
import {
  categoryColors,
  eventCategories,
  events,
  monthLabel,
  type EventCategory,
} from '../data/events';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const monthKeys = Array.from(new Set(events.map((e) => e.date.slice(0, 7)))).sort();

function daysInMonth(key: string) {
  const [y, m] = key.split('-').map(Number);
  return new Date(y, m, 0).getDate();
}

function firstDowMonday(key: string) {
  const [y, m] = key.split('-').map(Number);
  const jsDay = new Date(y, m - 1, 1).getDay(); // 0 = Sun
  return (jsDay + 6) % 7; // 0 = Mon
}

export function EventsPage() {
  usePageTitle('Events');
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [category, setCategory] = useState<EventCategory | 'All'>('All');
  const [monthIdx, setMonthIdx] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      events
        .filter((e) => category === 'All' || e.category === category)
        .sort((a, b) => a.date.localeCompare(b.date)),
    [category],
  );

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const e of filtered) {
      const key = e.date.slice(0, 7);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(e);
    }
    return Array.from(map.entries());
  }, [filtered]);

  const calMonth = monthKeys[Math.min(monthIdx, monthKeys.length - 1)];
  const calEvents = filtered.filter((e) => e.date.startsWith(calMonth));
  const selectedEvents = selectedDate ? filtered.filter((e) => e.date === selectedDate) : calEvents;

  const totalDays = daysInMonth(calMonth);
  const lead = firstDowMonday(calMonth);
  const cells: (string | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: totalDays }, (_, i) => {
      const [y, m] = calMonth.split('-');
      return `${y}-${m}-${String(i + 1).padStart(2, '0')}`;
    }),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">Events</p>
            <h1>
              Don’t just watch.
              <br />
              <span className="accent-text">Be there.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Showcases, workshops, battles and community nights. Browse the list or open the calendar —
              every card leads to full details and how to reserve a place.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="events-body">
        <div className="container">
          <div className="events-toolbar">
            <div className="filter-bar" role="group" aria-label="Filter events by category">
              <span className="filter-label">Category</span>
              {(['All', ...eventCategories] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${category === cat ? 'is-active' : ''}`}
                  aria-pressed={category === cat}
                  onClick={() => {
                    setCategory(cat);
                    setSelectedDate(null);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="view-toggle" role="group" aria-label="Change events view">
              <button
                type="button"
                className={view === 'list' ? 'is-active' : ''}
                aria-pressed={view === 'list'}
                onClick={() => setView('list')}
              >
                List
              </button>
              <button
                type="button"
                className={view === 'calendar' ? 'is-active' : ''}
                aria-pressed={view === 'calendar'}
                onClick={() => setView('calendar')}
              >
                Calendar
              </button>
            </div>
          </div>

          {view === 'list' ? (
            grouped.length === 0 ? (
              <p className="lede">No events in this category right now.</p>
            ) : (
              grouped.map(([key, list]) => (
                <div className="events-month" key={key}>
                  <h2>
                    {monthLabel(key)} <span>{list.length} events</span>
                  </h2>
                  <div className="events-list">
                    {list.map((e, i) => (
                      <Reveal key={e.slug} delay={(i % 2) * 100}>
                        <EventCard event={e} variant="light" />
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))
            )
          ) : (
            <Reveal>
              <div className="calendar">
                <div className="calendar-head">
                  <h2>{monthLabel(calMonth)}</h2>
                  <div className="calendar-nav">
                    <button
                      type="button"
                      aria-label="Previous month"
                      disabled={monthIdx === 0}
                      onClick={() => {
                        setMonthIdx((i) => Math.max(0, i - 1));
                        setSelectedDate(null);
                      }}
                    >
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M10 3.5 5.5 8 10 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Next month"
                      disabled={monthIdx >= monthKeys.length - 1}
                      onClick={() => {
                        setMonthIdx((i) => Math.min(monthKeys.length - 1, i + 1));
                        setSelectedDate(null);
                      }}
                    >
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="calendar-grid" role="grid" aria-label={monthLabel(calMonth)}>
                  {DOW.map((d) => (
                    <div key={d} className="calendar-dow" role="columnheader">
                      {d}
                    </div>
                  ))}
                  {cells.map((date, i) => {
                    if (!date) return <div key={`e${i}`} className="calendar-cell is-outside" role="gridcell" aria-hidden="true" />;
                    const dayEvents = filtered.filter((e) => e.date === date);
                    const has = dayEvents.length > 0;
                    return (
                      <button
                        key={date}
                        type="button"
                        role="gridcell"
                        className={`calendar-cell ${has ? 'has-event' : ''} ${selectedDate === date ? 'is-selected' : ''}`}
                        aria-label={`${date}${has ? `, ${dayEvents.length} event${dayEvents.length > 1 ? 's' : ''}` : ', no events'}`}
                        disabled={!has}
                        onClick={() => setSelectedDate(selectedDate === date ? null : date)}
                      >
                        {Number(date.slice(-2))}
                        {has && (
                          <span className="calendar-dots">
                            {dayEvents.slice(0, 3).map((e) => (
                              <i key={e.slug} style={{ background: categoryColors[e.category] }} />
                            ))}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="calendar-legend">
                  {eventCategories.map((cat) => (
                    <span key={cat}>
                      <i style={{ background: categoryColors[cat] }} /> {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="calendar-selected">
                <h3>
                  {selectedDate
                    ? `Events on ${new Date(`${selectedDate}T12:00:00`).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}`
                    : `All events in ${monthLabel(calMonth)}`}
                  {selectedDate && (
                    <button
                      type="button"
                      className="link-arrow"
                      style={{ marginLeft: '1rem', background: 'none', border: 0, cursor: 'pointer', font: 'inherit' }}
                      onClick={() => setSelectedDate(null)}
                    >
                      Clear
                    </button>
                  )}
                </h3>
                {selectedEvents.length === 0 ? (
                  <p className="lede">Nothing scheduled — try another date.</p>
                ) : (
                  <div className="events-list">
                    {selectedEvents.map((e, i) => (
                      <Reveal key={e.slug} delay={i * 90}>
                        <EventCard event={e} variant="light" />
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          )}

          <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <Reveal>
              <h2 className="display-3">Perform with us.</h2>
              <p className="lede" style={{ marginTop: '0.7rem' }}>
                Dancers in our programmes are invited to audition for showcase casts.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/contact" className="btn btn-dark">
                Ask about auditions <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
