export type FeaturedClass = {
  name: string
  description: string
  schedule: string
  level: string
}

export const heroSlides = [
  {
    src: '/hero/forge-training-floor.svg',
    alt: 'Training floor with racks, weights, and an open space for coached sessions',
    label: 'The training floor',
    detail: 'Room to do the work',
  },
  {
    src: '/hero/forge-coaching-session.svg',
    alt: 'Coach guiding a member through a strength training movement',
    label: 'Expert coaching',
    detail: 'Progress with purpose',
  },
  {
    src: '/hero/forge-community.svg',
    alt: 'Small group of gym members training together in a supportive community',
    label: 'The Forge community',
    detail: 'Stronger together',
  },
]

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

export const featuredClasses: FeaturedClass[] = [
  {
    name: 'Strength Lab',
    description: 'Progressive strength work with coaching for every experience level.',
    schedule: 'Mon & Wed · 6:00 PM',
    level: 'All levels',
  },
  {
    name: 'Conditioning Club',
    description: 'Build power and stamina through varied, coach-led intervals.',
    schedule: 'Tue & Thu · 7:00 AM',
    level: 'Intermediate',
  },
  {
    name: 'Mobility Reset',
    description: 'Move better, recover well, and leave ready for the next session.',
    schedule: 'Sat · 10:00 AM',
    level: 'All levels',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'I finally found a training routine I can stick with. The coaches make every session feel achievable.',
    name: 'Maya R.',
    detail: 'Member since 2023',
  },
  {
    quote: 'Forge feels serious about training without taking itself too seriously. I look forward to showing up.',
    name: 'Jordan K.',
    detail: 'Member since 2024',
  },
  {
    quote: 'The community at Forge is incredibly supportive. I have made great friends while getting stronger.',
    name: 'Alex P.',
    detail: 'Member since 2022',
  },
//   {
//     quote: 'The variety of classes keeps me motivated and challenged. I never get bored with my workouts.',
//     name: 'Sam T.',
//     detail: 'Member since 2021',
//   },
//   {
//     quote: 'The coaches are knowledgeable and always willing to help. I feel confident in my training here.',
//     name: 'Taylor L.',
//     detail: 'Member since 2020',
//   },
]

export const gymInfo = {
  address: ['184 Franklin Street', 'Brooklyn, NY 11222'],
  phone: '(718) 555-0148',
  email: 'hello@forgefitness.example',
  hours: [
    ['Monday - Friday', '5:30 AM - 10:00 PM'],
    ['Saturday', '7:00 AM - 6:00 PM'],
    ['Sunday', '8:00 AM - 4:00 PM'],
  ],
}