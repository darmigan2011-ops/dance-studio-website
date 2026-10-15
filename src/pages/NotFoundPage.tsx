import { Link } from 'react-router-dom';
import { usePageTitle } from '../components/utils';

export function NotFoundPage() {
  usePageTitle('Page not found');

  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1 className="display-2">This stage is empty.</h1>
      <p className="lede" style={{ margin: '0 auto' }}>
        The page you’re looking for doesn’t exist — but the dance floor does.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
        <Link to="/" className="btn btn-dark">
          Back home
        </Link>
        <Link to="/classes" className="btn btn-outline">
          Browse classes
        </Link>
      </div>
    </section>
  );
}
