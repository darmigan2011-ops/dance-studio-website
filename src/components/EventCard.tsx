import { Link } from 'react-router-dom';
import type { DanceEvent } from '../data/events';
import { categoryColors } from '../data/events';
import { ArrowRight, CalendarIcon, ClockIcon, PinIcon } from './icons';
import './EventCard.css';

interface EventCardProps {
  event: DanceEvent;
  variant?: 'dark' | 'light';
  showImage?: boolean;
}

function dateParts(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return {
    month: d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
    day: String(d.getDate()).padStart(2, '0'),
  };
}

export function EventCard({ event, variant = 'dark', showImage = true }: EventCardProps) {
  const { month, day } = dateParts(event.date);

  return (
    <Link
      to={`/events/${event.slug}`}
      className={`event-card event-card--${variant} hover-zoom`}
    >
      {showImage && (
        <div className="event-card-media">
          <img src={event.image} alt="" loading="lazy" className="card-img" />
        </div>
      )}
      <div className="event-card-body">
        <div className="event-card-date" aria-hidden="true">
          <span>{month}</span>
          <strong>{day}</strong>
        </div>
        <div className="event-card-main">
          <span
            className="event-card-cat"
            style={{ color: categoryColors[event.category], borderColor: categoryColors[event.category] }}
          >
            {event.category}
          </span>
          <h3>{event.title}</h3>
          <ul className="event-card-meta">
            <li>
              <PinIcon /> {event.venue}
            </li>
            <li>
              <ClockIcon /> {event.startTime} – {event.endTime}
            </li>
          </ul>
        </div>
        <span className="event-card-arrow" aria-hidden="true">
          <ArrowRight />
        </span>
      </div>
      <span className="sr-only">
        <CalendarIcon />
      </span>
    </Link>
  );
}
