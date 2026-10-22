import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight } from '../components/icons';
import { brand } from '../data/studio';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';
import './Faq.css';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'What is Sanāda Space?',
    a: 'Sanāda means “imbued with sound” or “resonant.” Sanāda Space is a San Francisco initiative co-founded by Bharatanatyam dancer Priyadharshini Govindarajan and Kuchipudi dancer Anulekha Chillal to promote South Asian classical arts and fusion collaborations through periodic events.',
  },
  {
    q: 'What kind of events do you host?',
    a: 'Evenings of Indian classical music and dance — vocalists, instrumentalists and dancers — often with room for fusion and cross-cultural collaboration. We also partner with South Asian vendors in the Bay Area where it fits.',
  },
  {
    q: 'Do I need to know anything about Indian classical arts to attend?',
    a: 'Not at all. Our gatherings are open to the curious as well as the devoted. If you enjoy live music, dance and community, you’ll feel at home.',
  },
  {
    q: 'How do I get tickets or RSVP?',
    a: 'Ticket and RSVP details are shared for each event — for South Asian Jam, use the Partiful link on the event page. Tickets are $15 general, $10 for Decentered Arts members. Follow @sanadaspace on Instagram for the latest.',
  },
  {
    q: 'Can I pay at the door, or only online?',
    a: 'For South Asian Jam, payment is arranged via Venmo (@AnuChillal) or PayPal (Anulekha Chillal) as noted on the event listing. Door policies may vary by venue — when in doubt, RSVP ahead.',
  },
  {
    q: 'Where are events held?',
    a: 'Locations vary by gathering. South Asian Jam is at Decentered Arts, 1175 Folsom St, San Francisco — note the studio is up a flight of stairs. Always check the event page for the current venue and any access notes.',
  },
  {
    q: 'I’m an artist — how can I perform or collaborate?',
    a: 'We love meeting singers, dancers, instrumentalists and collaborators. The best first step is to follow and message us on Instagram @sanadaspace.',
  },
  {
    q: 'Are there future events planned?',
    a: 'Yes — Sanāda Space is a periodic series. Announcements for each new gathering will go out on Instagram first, so that’s the place to watch.',
  },
  {
    q: 'Is this affiliated with a particular school or gurukulam?',
    a: 'No. Sanāda Space is an independent initiative. Co-founder Priyadharshini also runs her own Bharatanatyam school, Maargam, but Sanāda Space is its own platform for events and collaborations.',
  },
];

export function FaqPage() {
  usePageTitle('FAQ');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h1>
              Questions,
              <br />
              <span className="accent-text">answered.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              What to expect at a Sanāda gathering, how to join, and how to stay in the loop. If something
              isn’t covered here, reach out on Instagram.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="faq-body">
        <div className="container faq-layout">
          <Reveal className="faq-list-wrap">
            <div className="faq-list">
              {faqs.map((item, i) => {
                const open = openIdx === i;
                return (
                  <div key={item.q} className={`faq-item ${open ? 'is-open' : ''}`}>
                    <h3>
                      <button
                        type="button"
                        className="faq-question"
                        aria-expanded={open}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-btn-${i}`}
                        onClick={() => setOpenIdx(open ? null : i)}
                      >
                        <span>{item.q}</span>
                        <span className="faq-chevron" aria-hidden="true">
                          <svg viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3.5 6l4.5 4.5L12.5 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      className="faq-answer"
                      hidden={!open}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120} className="faq-aside">
            <div className="faq-aside-card">
              <h2>Still curious?</h2>
              <p>
                The fastest way to reach us is Instagram. For the next gathering, check the event listing and
                RSVP in advance.
              </p>
              <div className="faq-aside-actions">
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  @sanadaspace <ArrowRight />
                </a>
                <Link to="/events" className="link-arrow">
                  Upcoming Events <ArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
