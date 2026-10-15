import { Link } from 'react-router-dom';
import type { Dancer } from '../data/dancers';
import { ArrowRight } from './icons';
import './DancerCard.css';

export function DancerCard({ dancer, index = 0 }: { dancer: Dancer; index?: number }) {
  return (
    <Link
      to={`/dancers/${dancer.slug}`}
      className="dancer-card hover-zoom"
      style={{ '--card-delay': `${index * 60}ms` } as React.CSSProperties}
    >
      <div className="dancer-card-media">
        <img src={dancer.image} alt={`${dancer.name} — ${dancer.tagline}`} loading="lazy" className="card-img" />
      </div>
      <div className="dancer-card-body">
        <div className="dancer-card-top">
          <h3>{dancer.name}</h3>
          <span className="dancer-card-arrow" aria-hidden="true">
            <ArrowRight />
          </span>
        </div>
        <p>{dancer.tagline}</p>
      </div>
    </Link>
  );
}
