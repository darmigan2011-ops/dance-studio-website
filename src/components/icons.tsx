export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M2.5 8h11m0 0L9 3.5M13.5 8L9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3.5 6l4.5 4.5L12.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M5.5 3.8v8.4L12.5 8 5.5 3.8Z" fill="currentColor" />
    </svg>
  );
}

export function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M8 14s5-4.2 5-8A5 5 0 1 0 3 6c0 3.8 5 8 5 8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6" r="1.7" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 4.8V8l2.2 1.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <rect x="2" y="3.2" width="12" height="10.5" rx="1.6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 6.6h12M5.5 2v2.4M10.5 2v2.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 4c1.2 3.4 1 6.2-.6 8.6-1.4 2-3.6 3.4-4.4 5.6-.9 2.4.2 4.6 2.4 5.4-2.8 1-5.2 3-6 5.8-.6 2.2 0 4.4 1.6 6.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M22.5 10.5c2.8.6 5 2.4 6 5 1.2 3.2.2 6.2-2.2 8.4 2.6 1.4 4.4 3.6 5 6.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="20.4" cy="5.4" r="2.2" fill="currentColor" />
    </svg>
  );
}
