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
        d="M20 30c-6-2-10-7.5-10-13.5 0-2.5 1-5 2.5-6.5C14.5 12 18 14 20 18c2-4 5.5-6 7.5-8 1.5 1.5 2.5 4 2.5 6.5C30 22.5 26 28 20 30Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 28c-2.5 0-5-1.5-6.5-3.5M28 28c2.5 0 5-1.5 6.5-3.5M20 32.5V28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="15" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function LotusDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M32 20c-5-1.5-9-5.5-9-10 0-1.8.7-3.5 1.8-4.8 2.3 1.5 5.2 4.5 7.2 7.8 2-3.3 4.9-6.3 7.2-7.8A5.7 5.7 0 0 1 41 10c0 4.5-4 8.5-9 10Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M22 21H8M42 21h14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <circle cx="4" cy="21" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="60" cy="21" r="1" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}
