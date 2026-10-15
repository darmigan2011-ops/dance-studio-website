export type EventCategory = 'Performance' | 'Workshop' | 'Competition' | 'Community';

export interface EventAgendaItem {
  time: string;
  item: string;
}

export interface DanceEvent {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  startTime: string;
  endTime: string;
  venue: string;
  category: EventCategory;
  image: string;
  excerpt: string;
  description: string[];
  agenda: EventAgendaItem[];
  admission: string;
  registrationNote: string;
  performers: string[];
  featured: boolean;
}

export const events: DanceEvent[] = [
  {
    slug: 'urban-beats-night',
    title: 'Urban Beats Night',
    date: '2026-10-18',
    startTime: '7:00 PM',
    endTime: '10:00 PM',
    venue: 'Hosur Cultural Hall',
    category: 'Performance',
    image: '/images/event-urban-beats.jpg',
    excerpt: 'An evening of hip hop choreography, cyphers and guest crews under one roof.',
    description: [
      'Urban Beats Night is the studio’s flagship hip hop showcase — new choreography from every faculty member, open cyphers between sets, and guest crews from across the city.',
      'Doors open at 6:30 PM. The first half is student work; the second half belongs to the freestyle floor. Bring friends, bring energy.',
    ],
    agenda: [
      { time: '6:30 PM', item: 'Doors open · lobby gallery' },
      { time: '7:00 PM', item: 'Student showcase — first half' },
      { time: '8:00 PM', item: 'Guest crew performances' },
      { time: '8:45 PM', item: 'Open cypher — all levels welcome' },
      { time: '9:45 PM', item: 'Awards & close' },
    ],
    admission: '₹400 general · ₹250 students · free for members',
    registrationNote:
      'Reserve your seat by sending an enquiry — we hold seats for 48 hours after confirmation.',
    performers: ['kavin', 'aarohi', 'rithik', 'arjun'],
    featured: true,
  },
  {
    slug: 'fusion-dance-showcase',
    title: 'Fusion Dance Showcase',
    date: '2026-10-25',
    startTime: '6:30 PM',
    endTime: '9:30 PM',
    venue: 'Chennai Art Centre',
    category: 'Performance',
    image: '/images/event-fusion-showcase.jpg',
    excerpt: 'Contemporary, jazz and Bollywood fusion pieces performed by studio ensembles.',
    description: [
      'One night, three vocabularies. The Fusion Showcase pairs contemporary ensembles with jazz and Bollywood fusion sets, closing with a combined company piece choreographed by Isha and Diya.',
      'The Art Centre’s black box is an intimate room — every seat is a good one.',
    ],
    agenda: [
      { time: '6:00 PM', item: 'Doors open' },
      { time: '6:30 PM', item: 'Contemporary ensemble sets' },
      { time: '7:30 PM', item: 'Jazz & Bollywood fusion' },
      { time: '8:30 PM', item: 'Combined company piece' },
      { time: '9:00 PM', item: 'Reception with the artists' },
    ],
    admission: '₹500 general · free for members',
    registrationNote: 'Seating is limited to 180 guests. Enquire to reserve.',
    performers: ['isha', 'diya', 'meera', 'sana'],
    featured: true,
  },
  {
    slug: 'kids-performance-day',
    title: 'Kids Performance Day',
    date: '2026-11-02',
    startTime: '4:00 PM',
    endTime: '7:00 PM',
    venue: 'Studio Main Hall',
    category: 'Community',
    image: '/images/event-kids-day.jpg',
    excerpt: 'Our youngest dancers take the floor in front of family and friends.',
    description: [
      'A celebration rather than an exam — every child performs a piece they have built over the term, with live encouragement from the whole studio community.',
      'Photography is welcome. A shared potluck follows in the lobby.',
    ],
    agenda: [
      { time: '3:30 PM', item: 'Backstage warm-up' },
      { time: '4:00 PM', item: 'Minis showcase (ages 5–8)' },
      { time: '5:00 PM', item: 'Juniors showcase (ages 9–13)' },
      { time: '6:00 PM', item: 'Awards & certificates' },
      { time: '6:30 PM', item: 'Community potluck' },
    ],
    admission: 'Free for participating families · ₹100 guests',
    registrationNote: 'Participating families confirm through their class instructor.',
    performers: ['sana', 'diya'],
    featured: true,
  },
  {
    slug: 'choreographers-lab',
    title: 'Choreographers’ Lab',
    date: '2026-11-21',
    startTime: '6:00 PM',
    endTime: '9:00 PM',
    venue: 'Studio Black Box',
    category: 'Workshop',
    image: '/images/event-choreographers-lab.jpg',
    excerpt: 'A working session for dancers creating their own material.',
    description: [
      'Bring an eight-count, a concept, or an empty notebook. Faculty rotate through small groups offering feedback on structure, musicality and staging.',
      'The lab closes with an informal showing — no judgement, just work in progress.',
    ],
    agenda: [
      { time: '6:00 PM', item: 'Warm-up & intention setting' },
      { time: '6:30 PM', item: 'Rotating mentor feedback' },
      { time: '8:00 PM', item: 'Open creation time' },
      { time: '8:45 PM', item: 'Informal showing' },
    ],
    admission: '₹350 per dancer · free for advanced-track members',
    registrationNote: 'Places capped at 20. Enquire to hold a spot.',
    performers: ['kavin', 'isha', 'aarohi'],
    featured: false,
  },
  {
    slug: 'winter-dance-intensive',
    title: 'Winter Dance Intensive',
    date: '2026-12-12',
    startTime: '10:00 AM',
    endTime: '4:00 PM',
    venue: 'Studio Main Hall & Studio 2',
    category: 'Workshop',
    image: '/images/event-winter-intensive.jpg',
    excerpt: 'A full day of technique, conditioning and repertoire across styles.',
    description: [
      'One day, six sessions. Ballet barre with Meera, contemporary floorwork with Isha, hip hop foundations with Kavin, plus conditioning and a repertoire block building toward the anniversary gala.',
      'Lunch and studio merch discounts included. Bring layers, water and a notebook.',
    ],
    agenda: [
      { time: '10:00 AM', item: 'Ballet barre & centre' },
      { time: '11:30 AM', item: 'Contemporary floorwork' },
      { time: '1:00 PM', item: 'Lunch break' },
      { time: '2:00 PM', item: 'Hip hop foundations' },
      { time: '3:00 PM', item: 'Gala repertoire block' },
      { time: '3:45 PM', item: 'Cool-down & notes' },
    ],
    admission: '₹1,800 full day · ₹1,000 single session',
    registrationNote: 'Early enrollment required — places are limited to 30 dancers.',
    performers: ['meera', 'isha', 'kavin'],
    featured: false,
  },
  {
    slug: 'studio-anniversary-gala',
    title: 'Studio Anniversary Gala',
    date: '2027-01-16',
    startTime: '7:30 PM',
    endTime: '11:00 PM',
    venue: 'Hosur Cultural Hall',
    category: 'Performance',
    image: '/images/event-anniversary-gala.jpg',
    excerpt: 'Ten years of Rhythm — an evening of premieres, alumni and celebration.',
    description: [
      'The gala marks a decade of the studio with world-premiere pieces from current faculty, reunions with alumni now dancing professionally, and a closing number that involves every level in the building.',
      'Formal dress encouraged. Proceeds support the scholarship fund.',
    ],
    agenda: [
      { time: '7:00 PM', item: 'Red carpet & reception' },
      { time: '7:30 PM', item: 'Premiere performances' },
      { time: '9:00 PM', item: 'Alumni company set' },
      { time: '9:45 PM', item: 'All-studio finale' },
      { time: '10:15 PM', item: 'Afterparty in the lobby' },
    ],
    admission: '₹800 general · ₹500 balcony · scholarship fund raffle',
    registrationNote: 'Priority booking for members until 1 December. Enquire for tickets.',
    performers: ['aarohi', 'kavin', 'isha', 'rithik', 'diya', 'arjun', 'meera', 'sana'],
    featured: false,
  },
];

export const eventCategories: EventCategory[] = ['Performance', 'Workshop', 'Competition', 'Community'];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function eventMonthKey(iso: string) {
  return iso.slice(0, 7);
}

export function formatEventDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export function monthLabel(key: string) {
  const [y, m] = key.split('-').map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

export const categoryColors: Record<EventCategory, string> = {
  Performance: '#e2564a',
  Workshop: '#5b9fd4',
  Competition: '#6cbf8a',
  Community: '#e8b27d',
};
