import { img } from '../lib/assets';

export interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
  funFact: string;
  instagram: string;
  instagramUrl: string;
}

export const brand = {
  name: 'Sanāda Space',
  namePlain: 'Sanada Space',
  meaning: 'Imbued with Sound',
  tagline: 'South Asian arts & fusion collabs in San Francisco',
  instagramUrl: 'https://www.instagram.com/sanadaspace/',
  introEyebrow: 'Imbued with Sound',
  introTitle: 'A space where sound, movement and collaboration meet.',
  introLede:
    'Sanāda Space is a new initiative promoting South Asian classical arts and fusion collaborations in San Francisco — periodic evenings with singers, dancers and musicians, often alongside South Asian vendors in the Bay Area.',
  story: [
    'Sanāda means “imbued with sound” or “resonant.” We built this space because we missed South Indian classical music and dance in San Francisco — and because we wanted room for fusion work that sits comfortably outside traditional schools without replacing them.',
    'We are Priyadharshini and Anulekha — a Bharatanatyam dancer and a Kuchipudi dancer who met this need with a shared stage. Sanāda Space platforms different singers, dancers and instrumentalists, and partners primarily with South Asian vendors in SF.',
    'Each gathering is an invitation to step away from the screen for an evening and be with live raga, rhythm and story.',
  ],
  values: [
    {
      title: 'Resonance',
      body: 'Classical forms deserve living rooms, not only archives. We create evenings where tradition can ring out afresh.',
    },
    {
      title: 'Collaboration',
      body: 'East and west, north and south — jugalbandis, fusion sets and shared stages where artists meet each other halfway.',
    },
    {
      title: 'Community',
      body: 'A gathering place for diaspora audiences and artists who want South Asian arts to thrive here, on their own terms.',
    },
  ],
};

export const founders: Founder[] = [
  {
    name: 'Priyadharshini Govindarajan',
    role: 'Bharatanatyam dancer · Co-founder',
    image: img('images/sanada/priya-portrait.jpg'),
    bio: 'Priyadharshini Govindarajan is a Bharatanatyam dancer, choreographer, and educator based in San Francisco. Dancing since the age of four, she has performed on prominent stages across India and the Bay Area. Through her school, Maargam, and as co-founder of Sanāda Space, Priyadharshini is committed to championing Bharatanatyam in the diaspora while creating spaces for South Asian and Western art forms to meet, resonate, and create together. Her practice also explores longevity in Bharatanatyam, integrating strength training and Pilates to support a sustainable life in dance.',
    funFact: 'I went skydiving with my mom for her 60th birthday!',
    instagram: '@priyagovind.art',
    instagramUrl: 'https://www.instagram.com/priyagovind.art/',
  },
  {
    name: 'Anulekha Chillal',
    role: 'Kuchipudi dancer · Co-founder',
    image: img('images/sanada/anulekha-portrait.jpg'),
    bio: 'Anulekha Chillal is a Kuchipudi dancer of 10+ years, trained in the Bay Area and Bangalore. Kuchipudi is a South Indian classical form that famously includes dancing on the plate. In addition to being certified as a semi-classical Bollywood instructor, she loves Latin and hip-hop music and dance. As co-founder of Sanāda Space, Anulekha is committed to bringing fusion collaborations between east and west to life, while honoring a space for traditional Indian arts to thrive on a new platform. She works in the audit and consulting industry and is passionate about bringing yoga to corporate workplaces as a certified yoga teacher.',
    funFact: 'Has seen a kiwi bird (not the fruit) in New Zealand!',
    instagram: '@thedevithedancer',
    instagramUrl: 'https://www.instagram.com/thedevithedancer/',
  },
];
