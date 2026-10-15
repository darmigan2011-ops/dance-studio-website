import { img } from '../lib/assets';

export interface Dancer {
  slug: string;
  name: string;
  role: string;
  styles: string[];
  image: string;
  tagline: string;
  bio: string[];
  quote: string;
  years: number;
  signature: string;
  specialties: string[];
  featured: boolean;
}

export const dancers: Dancer[] = [
  {
    slug: 'aarohi',
    name: 'Aarohi',
    role: 'Freestyle Cypher Lead',
    styles: ['Freestyle', 'Hip Hop'],
    image: img('images/dancer-aarohi.jpg'),
    tagline: 'Hip Hop · Freestyle',
    bio: [
      'Aarohi came to hip hop through late-night cyphers and never really left. Her classes balance foundational grooves with the confidence to improvise in front of anyone.',
      'She has performed at citywide battles and mentors the studio’s weekly freestyle jam, where beginners are always given the first eight counts.',
    ],
    quote: 'The groove is yours before anyone is watching.',
    years: 9,
    signature: 'Musicality & cypher confidence',
    specialties: ['Grooves', 'Battle prep', 'Improvisation'],
    featured: true,
  },
  {
    slug: 'kavin',
    name: 'Kavin',
    role: 'Hip Hop Instructor & Choreographer',
    styles: ['Urban', 'Choreography'],
    image: img('images/dancer-kavin.jpg'),
    tagline: 'Urban · Choreography',
    bio: [
      'Kavin builds clean, hard-hitting choreography for stage and screen. His classes are known for meticulous counts, sharp texture changes and an insistence that every dancer understands the why behind each hit.',
      'Outside the studio he choreographs for music videos and college fests across the region.',
    ],
    quote: 'Precision is what makes freedom look effortless.',
    years: 11,
    signature: 'Commercial choreography',
    specialties: ['Choreography', 'Stagecraft', 'Audition prep'],
    featured: true,
  },
  {
    slug: 'isha',
    name: 'Isha',
    role: 'Contemporary & Jazz Faculty',
    styles: ['Contemporary', 'Jazz'],
    image: img('images/dancer-isha.jpg'),
    tagline: 'Contemporary · Jazz',
    bio: [
      'Trained in both release contemporary and theatre jazz, Isha’s teaching joins technique to storytelling. Expect floorwork, breath-led phrasing and choreography that asks something honest of every dancer.',
      'She leads the studio’s annual ensemble piece.',
    ],
    quote: 'Movement should say something true, even in silence.',
    years: 12,
    signature: 'Floorwork & performance quality',
    specialties: ['Release technique', 'Repertoire', 'Solo coaching'],
    featured: true,
  },
  {
    slug: 'rithik',
    name: 'Rithik',
    role: 'Breaking & Hip Hop',
    styles: ['Hip Hop', 'Breaking'],
    image: img('images/dancer-rithik.jpg'),
    tagline: 'Hip Hop · Breaking',
    bio: [
      'Rithik started breaking in a college stairwell and progressed to regional battle finals. He teaches progression with patience — toprock and footwork first, power moves only when the body is ready.',
      'He runs the studio’s monthly battle night.',
    ],
    quote: 'Respect the foundation, then break your own rules.',
    years: 10,
    signature: 'Breaking fundamentals',
    specialties: ['Toprock', 'Power moves', 'Battle culture'],
    featured: true,
  },
  {
    slug: 'diya',
    name: 'Diya',
    role: 'Bollywood Fusion Choreographer',
    styles: ['Bollywood', 'Fusion'],
    image: img('images/dancer-diya.jpg'),
    tagline: 'Bollywood · Fusion',
    bio: [
      'Diya blends filmography with classical Indian lines and contemporary texture. Her pieces are narrative, high-energy and built for ensembles of every experience level.',
      'She choreographs the studio’s festival sets and Diwali showcase.',
    ],
    quote: 'Every song already has a story — we just give it a body.',
    years: 8,
    signature: 'Narrative ensemble work',
    specialties: ['Filmography', 'Mudra basics', 'Ensemble staging'],
    featured: true,
  },
  {
    slug: 'arjun',
    name: 'Arjun',
    role: 'Heels & Movement Coach',
    styles: ['Urban', 'Heels'],
    image: img('images/dancer-arjun.jpg'),
    tagline: 'Urban · Heels',
    bio: [
      'Arjun’s classes treat heels as technique, not costume — posture, weight placement and controlled transitions. Dancers leave standing taller in every shoe they own.',
      'He coaches performance groups ahead of showcase season.',
    ],
    quote: 'Poise is just controlled weight, repeated until it’s yours.',
    years: 7,
    signature: 'Heels technique & presence',
    specialties: ['Posture', 'Transitions', 'Stage presence'],
    featured: true,
  },
  {
    slug: 'meera',
    name: 'Meera',
    role: 'Ballet Faculty',
    styles: ['Ballet', 'Contemporary'],
    image: img('images/dancer-meera.jpg'),
    tagline: 'Ballet · Contemporary',
    bio: [
      'Meera brings conservatory-level ballet training into a warm, ego-free studio. Her barre work is precise; her corrections are kind; her students become the strongest movers in the building.',
      'She trained professionally before returning to teaching full time.',
    ],
    quote: 'Alignment is kindness to your future body.',
    years: 15,
    signature: 'Classical foundation',
    specialties: ['Barre', 'Pointe prep', 'Injury-aware training'],
    featured: true,
  },
  {
    slug: 'sana',
    name: 'Sana',
    role: 'Jazz & Kids Programme',
    styles: ['Jazz', 'Bollywood'],
    image: img('images/dancer-sana.jpg'),
    tagline: 'Jazz · Kids Programme',
    bio: [
      'Sana leads the children’s and teen programmes, where technique is disguised as play and every recital ends with the whole room on its feet.',
      'She also assists the beginner jazz track upstairs.',
    ],
    quote: 'If they’re laughing, they’re already learning the counts.',
    years: 6,
    signature: 'Youth training',
    specialties: ['Kids classes', 'Recital direction', 'Beginner jazz'],
    featured: false,
  },
];

export function getDancerBySlug(slug: string) {
  return dancers.find((d) => d.slug === slug);
}

export const dancerStyles = Array.from(new Set(dancers.flatMap((d) => d.styles))).sort();
