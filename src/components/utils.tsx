import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export function usePageTitle(title: string) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    document.title = title ? `${title} · Rhythm Dance Studio` : 'Rhythm Dance Studio';
    setReady(true);
  }, [title]);
  return ready;
}
