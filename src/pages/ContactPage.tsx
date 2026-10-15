import { useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight } from '../components/icons';
import { classes } from '../data/classes';
import { getEventBySlug } from '../data/events';
import { studio } from '../data/studio';
import { usePageTitle } from '../components/utils';
import '../styles/pages.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  style: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: '', email: '', phone: '', interest: '', style: '', message: '' };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please tell us your name.';
  if (!values.email.trim()) {
    errors.email = 'An email address is required so we can reply.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'That email address doesn’t look right.';
  }
  if (!values.interest) errors.interest = 'Choose what you’re interested in.';
  if (!values.message.trim()) {
    errors.message = 'A short message helps us help you.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please add a little more detail (at least 10 characters).';
  }
  return errors;
}

export function ContactPage() {
  usePageTitle('Contact');
  const [searchParams] = useSearchParams();
  const linkedEvent = getEventBySlug(searchParams.get('event') ?? '');

  const [values, setValues] = useState<FormState>({
    ...initial,
    interest: linkedEvent ? 'Event tickets' : '',
    message: linkedEvent
      ? `I'd like to reserve a place at ${linkedEvent.title} on ${linkedEvent.date}.`
      : '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <header className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1>
              Let’s find your
              <br />
              first class.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              Enquiries about trials, enrolment, event tickets or anything else — send a note and the
              studio team will get back to you.
              {linkedEvent && (
                <>
                  {' '}
                  Your message is pre-filled for{' '}
                  <strong style={{ color: 'var(--ink)' }}>{linkedEvent.title}</strong>.
                </>
              )}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="contact-body">
        <div className="container contact-grid">
          <Reveal className="contact-form">
            {submitted ? (
              <div className="form-success" role="status">
                <span className="success-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h2>Thank you, {values.name.split(' ')[0]}.</h2>
                <p>
                  Your enquiry has been <strong>recorded in this browser only</strong> — this demonstration
                  site has no backend, so nothing was emailed. When the studio connects a form service
                  (or inbox), submissions like yours will be delivered directly.
                </p>
                <p>
                  In the meantime, you can reach the studio at{' '}
                  <a href={`mailto:${studio.contact.email}`} style={{ borderBottom: '1px solid' }}>
                    {studio.contact.email}
                  </a>{' '}
                  or {studio.contact.phone}.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setValues(initial);
                    setSubmitted(false);
                  }}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h2>Enquiry form</h2>
                <p className="form-intro">
                  Required fields are marked <span className="req">*</span>. We usually reply within two
                  working days.
                </p>

                <div className="form-grid">
                  <div className={`field ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name">
                      Name <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => set('name', e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span className="error" id="name-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className={`field ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => set('email', e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span className="error" id="email-error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => set('phone', e.target.value)}
                    />
                  </div>

                  <div className={`field ${errors.interest ? 'has-error' : ''}`}>
                    <label htmlFor="interest">
                      I’m interested in <span className="req">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={values.interest}
                      onChange={(e) => set('interest', e.target.value)}
                      aria-invalid={Boolean(errors.interest)}
                      aria-describedby={errors.interest ? 'interest-error' : undefined}
                    >
                      <option value="">Select one…</option>
                      <option>Trial class</option>
                      <option>Regular enrolment</option>
                      <option>Event tickets</option>
                      <option>Workshop</option>
                      <option>Kids programme</option>
                      <option>Something else</option>
                    </select>
                    {errors.interest && (
                      <span className="error" id="interest-error">
                        {errors.interest}
                      </span>
                    )}
                  </div>

                  <div className="field field--full">
                    <label htmlFor="style">Preferred style (optional)</label>
                    <select id="style" name="style" value={values.style} onChange={(e) => set('style', e.target.value)}>
                      <option value="">No preference yet…</option>
                      {classes.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={`field field--full ${errors.message ? 'has-error' : ''}`}>
                    <label htmlFor="message">
                      Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={(e) => set('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Tell us about your experience, schedule, or the event you’re interested in…"
                    />
                    {errors.message && (
                      <span className="error" id="message-error">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-dark">
                    Send enquiry <ArrowRight />
                  </button>
                  <p className="form-note">
                    This demo form validates locally — submissions are not sent to a server.
                  </p>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="contact-aside">
            <div className="contact-card">
              <h3>Visit the studio</h3>
              <p>
                {studio.contact.address}
                <br />
                {studio.contact.city}
              </p>
              <p className="contact-map-note">Sample address — replace with the real studio location.</p>
            </div>
            <div className="contact-card">
              <h3>Talk to us</h3>
              <ul>
                <li>
                  <a href={`mailto:${studio.contact.email}`}>{studio.contact.email}</a>
                </li>
                <li>{studio.contact.phone}</li>
              </ul>
            </div>
            <div className="contact-card">
              <h3>Studio hours</h3>
              <ul className="contact-hours">
                {studio.contact.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contact-card">
              <h3>New to Rhythm?</h3>
              <p style={{ marginBottom: '1rem' }}>
                Browse the styles we teach, or meet the dancers you might be training alongside.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/classes" className="link-arrow">
                  Classes <ArrowRight />
                </Link>
                <Link to="/dancers" className="link-arrow">
                  Dancers <ArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
