export type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface ClassSlot {
  day: string;
  time: string;
  level: Level;
  instructor: string;
}

export interface DanceClass {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  levels: Level[];
  schedule: ClassSlot[];
  featured: boolean;
}

export const classes: DanceClass[] = [
  {
    slug: 'hip-hop',
    name: 'Hip Hop',
    tagline: 'Groove, power and personal flavour',
    description:
      'Foundational bounces, isolations and freestyle battles. Classes build musicality, stage presence and a vocabulary of grooves you can take to any cypher.',
    image: '/images/style-hiphop.jpg',
    accent: '#5b9fd4',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    schedule: [
      { day: 'Monday', time: '6:30 PM – 7:45 PM', level: 'Beginner', instructor: 'Kavin' },
      { day: 'Wednesday', time: '7:45 PM – 9:15 PM', level: 'Intermediate', instructor: 'Kavin' },
      { day: 'Saturday', time: '11:00 AM – 1:00 PM', level: 'Advanced', instructor: 'Rithik' },
    ],
    featured: true,
  },
  {
    slug: 'contemporary',
    name: 'Contemporary',
    tagline: 'Flow, floorwork and honest expression',
    description:
      'Release technique, spirals and breath-led phrasing. Dancers learn to move efficiently through the floor and build emotionally resonant improvisation.',
    image: '/images/style-contemporary.jpg',
    accent: '#e0a35c',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    schedule: [
      { day: 'Tuesday', time: '6:00 PM – 7:30 PM', level: 'Beginner', instructor: 'Isha' },
      { day: 'Thursday', time: '7:30 PM – 9:00 PM', level: 'Intermediate', instructor: 'Isha' },
      { day: 'Sunday', time: '9:30 AM – 11:30 AM', level: 'Advanced', instructor: 'Meera' },
    ],
    featured: true,
  },
  {
    slug: 'jazz',
    name: 'Jazz',
    tagline: 'Sharp lines, performance sparkle',
    description:
      'From classic jazz to theatre commercial style — turns, leaps, formations and the confident performance quality every stage demands.',
    image: '/images/style-jazz.jpg',
    accent: '#e2564a',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    schedule: [
      { day: 'Tuesday', time: '7:30 PM – 8:45 PM', level: 'Intermediate', instructor: 'Isha' },
      { day: 'Friday', time: '6:00 PM – 7:15 PM', level: 'Beginner', instructor: 'Sana' },
    ],
    featured: true,
  },
  {
    slug: 'ballet',
    name: 'Ballet',
    tagline: 'The architecture behind every dancer',
    description:
      'Barre, centre and alignment work that builds the strength, turnout and control supporting every other style in the studio.',
    image: '/images/style-ballet.jpg',
    accent: '#a08a70',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    schedule: [
      { day: 'Monday', time: '5:00 PM – 6:15 PM', level: 'Beginner', instructor: 'Meera' },
      { day: 'Thursday', time: '6:00 PM – 7:30 PM', level: 'Intermediate', instructor: 'Meera' },
      { day: 'Saturday', time: '9:00 AM – 11:00 AM', level: 'Advanced', instructor: 'Meera' },
    ],
    featured: true,
  },
  {
    slug: 'bollywood-fusion',
    name: 'Bollywood Fusion',
    tagline: 'Storytelling, rhythm and joy',
    description:
      'Filmography, classical Indian foundations and contemporary texture blended into high-energy choreography built for the stage.',
    image: '/images/style-bollywood.jpg',
    accent: '#d4568f',
    levels: ['All Levels', 'Intermediate'],
    schedule: [
      { day: 'Wednesday', time: '6:30 PM – 8:00 PM', level: 'All Levels', instructor: 'Diya' },
      { day: 'Saturday', time: '5:00 PM – 7:00 PM', level: 'Intermediate', instructor: 'Diya' },
    ],
    featured: true,
  },
  {
    slug: 'heels',
    name: 'Heels',
    tagline: 'Poise, precision and power',
    description:
      'Technique in heels with an emphasis on posture, controlled weight placement and commanding performance quality.',
    image: '/images/style-heels.jpg',
    accent: '#ef6a52',
    levels: ['Beginner', 'Intermediate'],
    schedule: [
      { day: 'Thursday', time: '8:00 PM – 9:15 PM', level: 'Beginner', instructor: 'Arjun' },
      { day: 'Sunday', time: '5:00 PM – 6:30 PM', level: 'Intermediate', instructor: 'Arjun' },
    ],
    featured: true,
  },
  {
    slug: 'freestyle',
    name: 'Freestyle & Improvisation',
    tagline: 'Find your own movement language',
    description:
      'Guided improvisation, musicality drills and cipher practice. The class where dancers stop copying and start speaking through movement.',
    image: '/images/style-freestyle.jpg',
    accent: '#6cbf8a',
    levels: ['All Levels'],
    schedule: [
      { day: 'Friday', time: '7:30 PM – 9:00 PM', level: 'All Levels', instructor: 'Aarohi' },
    ],
    featured: false,
  },
  {
    slug: 'breaking',
    name: 'Breaking',
    tagline: 'Power moves, toprock and battles',
    description:
      'Toprock, footwork, freezes and progressive power moves in a supportive battle culture with regular studio cyphers.',
    image: '/images/style-breaking.jpg',
    accent: '#8fa8c8',
    levels: ['Beginner', 'Advanced'],
    schedule: [
      { day: 'Saturday', time: '2:00 PM – 4:00 PM', level: 'Beginner', instructor: 'Rithik' },
      { day: 'Wednesday', time: '9:00 PM – 10:30 PM', level: 'Advanced', instructor: 'Rithik' },
    ],
    featured: false,
  },
];

export const allLevels: Level[] = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];

export function getClassBySlug(slug: string) {
  return classes.find((c) => c.slug === slug);
}
