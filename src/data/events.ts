import { img } from '../lib/assets';

export type EventCategory = 'Jam Session' | 'Performance' | 'Workshop' | 'Community';

export interface EventPerformer {
  name: string;
  role: string;
  instagram?: string;
  instagramUrl?: string;
  bio?: string;
}

export interface EventAgendaItem {
  time: string;
  item: string;
}

export interface DanceEvent {
  slug: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  venue: string;
  venueNote?: string;
  address: string;
  city: string;
  category: EventCategory;
  image: string;
  excerpt: string;
  description: string[];
  agenda?: EventAgendaItem[];
  admission: string;
  paymentNote?: string;
  registrationUrl?: string;
  registrationNote?: string;
  performers: EventPerformer[];
  featured: boolean;
}

export const events: DanceEvent[] = [
  {
    slug: 'south-asian-jam',
    title: 'South Asian Jam',
    date: '2026-10-17',
    startTime: '5:00 PM',
    endTime: '8:00 PM',
    venue: 'Decentered Arts',
    venueNote: 'Studio is up a flight of stairs.',
    address: '1175 Folsom St',
    city: 'San Francisco, CA 94103',
    category: 'Jam Session',
    image: img('images/sanada/south-asian-jam-poster.jpg'),
    excerpt: 'An evening of Indian classical music and dance with Sanāda Space and Decentered Arts.',
    description: [
      'Come experience a South Asian Jam session from Sanāda Space — an artistic initiative started by two Indian classical dancers, Priyadharshini Govindarajan (@priyagovind.art) and Anulekha Chillal (@thedevithedancer), in collaboration with Decentered Arts.',
      'This South Asian Jam features an evening of Indian classical music and dance, with snacks and chai provided. 100% of funds support the performing artists and Decentered Arts, the nonprofit venue, so more evenings like this can happen in the future.',
    ],
    agenda: [],
    admission: '$15 general · $10 Decentered Arts members',
    paymentNote: 'Pay through Venmo @AnuChillal or PayPal (Anulekha Chillal).',
    registrationUrl: 'https://partiful.com/e/bIBtifNoGGLKrRite1nL?c=t0FeW8wp',
    registrationNote: 'RSVP and ticket info on Partiful. Tickets are $15, and $10 for Decentered Arts members.',
    performers: [
      {
        name: 'Swati Jhaveri',
        role: 'Hindustani vocals',
        instagram: '@swati.jhaveri1128',
        instagramUrl: 'https://www.instagram.com/swati.jhaveri1128/',
        bio: 'A melodious singer taking us through evening-themed ragas and songs — both soothing and joyous — accompanied by Tushar Gupte (tabla) and Satyam Bagwe (harmonium and vocals).',
      },
      {
        name: 'Tushar Gupte',
        role: 'Tabla (North Indian drums)',
        instagram: '@tushar_gupte',
        instagramUrl: 'https://www.instagram.com/tushar_gupte/',
        bio: 'Accomplished tabla player, joining the drum duo / jugalbandi with Shiva Iyer on mridangam.',
      },
      {
        name: 'Shiva Iyer',
        role: 'Mridangam (South Indian drums)',
        instagram: '@shivariyer',
        instagramUrl: 'https://www.instagram.com/shivariyer/',
        bio: 'Accomplished mridangam player. Come witness beats in action in a North–South drum jugalbandi.',
      },
      {
        name: 'Satyam Bagwe',
        role: 'Harmonium & vocals',
        instagram: '@satyambagwe',
        instagramUrl: 'https://www.instagram.com/satyambagwe/',
        bio: 'Talented harmonium player and vocalist accompanying Swati Jhaveri.',
      },
      {
        name: 'Anulekha Chillal',
        role: 'Kuchipudi dance',
        instagram: '@thedevithedancer',
        instagramUrl: 'https://www.instagram.com/thedevithedancer/',
        bio: 'A staple Kuchipudi item, then a plate-dance finale — musically accompanied by Priyadharshini (nattuvangam) and Shiva (mridangam).',
      },
      {
        name: 'Priyadharshini Govindarajan',
        role: 'Nattuvangam (cymbals) · Bharatanatyam',
        instagram: '@priyagovind.art',
        instagramUrl: 'https://www.instagram.com/priyagovind.art/',
        bio: 'Providing nattuvangam (percussion through cymbals) for Anulekha’s Kuchipudi set.',
      },
    ],
    featured: true,
  },
];

export const eventCategories: EventCategory[] = ['Jam Session', 'Performance', 'Workshop', 'Community'];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function formatEventDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export const categoryColors: Record<EventCategory, string> = {
  'Jam Session': '#c96f2e',
  Performance: '#c9a24b',
  Workshop: '#5c8fa8',
  Community: '#b8956a',
};
