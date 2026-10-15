export interface Instructor {
  name: string;
  role: string;
  image: string;
  bio: string;
  dancerSlug?: string;
}

export interface StudioValue {
  title: string;
  body: string;
}

export const studio = {
  name: 'Rhythm Dance Studio',
  tagline: 'Good dancers · Brighter people',
  introEyebrow: 'Our Studio',
  introTitle: 'More Than a Studio. A Community.',
  story: [
    'Rhythm began in a single borrowed hall with eleven dancers and one shared speaker. Ten years on, the studio occupies two floors, teaches eight styles, and still runs on the same belief: that movement makes people braver.',
    'We are a performance studio first. Students don’t wait years for a stage — every term builds toward something shared, whether that’s a studio jam, a community showcase or a full theatrical production.',
    'Beginners are not an afterthought here. Every advanced dancer in the building started in a beginner slot, and our faculty teach accordingly — patient foundations, honest feedback, and room to grow at your own pace.',
  ],
  values: [
    {
      title: 'Move',
      body: 'Technique in service of expression. We train bodies that are capable and confident.',
    },
    {
      title: 'Create',
      body: 'Every student makes work. Improvisation, choreography and collaboration are part of the curriculum.',
    },
    {
      title: 'Belong',
      body: 'A studio should feel like a room you’re glad to walk into. Ours does — at every age and level.',
    },
  ] satisfies StudioValue[],
  stats: [
    { value: '8', label: 'Dance styles taught' },
    { value: '12', label: 'Faculty members' },
    { value: '40+', label: 'Classes every week' },
    { value: '500+', label: 'Dancers in our community' },
  ],
  instructors: [
    {
      name: 'Isha',
      role: 'Contemporary & Jazz Faculty',
      image: '/images/dancer-isha.jpg',
      bio: 'Twelve years of stage and teaching experience. Leads the annual ensemble piece and the contemporary track.',
      dancerSlug: 'isha',
    },
    {
      name: 'Kavin',
      role: 'Hip Hop Instructor & Choreographer',
      image: '/images/dancer-kavin.jpg',
      bio: 'Commercial choreographer for stage and screen. Runs the intermediate and advanced hip hop tracks.',
      dancerSlug: 'kavin',
    },
    {
      name: 'Meera',
      role: 'Ballet Faculty',
      image: '/images/dancer-meera.jpg',
      bio: 'Conservatory-trained, professionally performed, injury-aware. Builds the foundation every other style stands on.',
      dancerSlug: 'meera',
    },
    {
      name: 'Diya',
      role: 'Bollywood Fusion Choreographer',
      image: '/images/dancer-diya.jpg',
      bio: 'Narrative choreography across filmography and classical Indian lines. Directs festival sets and the Diwali showcase.',
      dancerSlug: 'diya',
    },
  ] satisfies Instructor[],
  contact: {
    address: '14, 2nd Cross Street, Indira Nagar (sample address)',
    city: 'Bengaluru 560038, India',
    phone: '+91 98765 43210 (sample)',
    email: 'hello@rhythmdance.example',
    hours: [
      { days: 'Monday – Friday', time: '4:00 PM – 10:00 PM' },
      { days: 'Saturday', time: '9:00 AM – 8:00 PM' },
      { days: 'Sunday', time: '9:00 AM – 6:00 PM' },
    ],
  },
};
