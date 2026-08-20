export const classTypes = ['Strength', 'Conditioning', 'Mobility'] as const
export const classLevels = ['All levels', 'Beginner', 'Intermediate', 'Advanced'] as const

export type ClassType = (typeof classTypes)[number]
export type ClassLevel = (typeof classLevels)[number]

export type FitnessClass = {
  name: string
  description: string
  type: ClassType
  instructor: string
  level: ClassLevel
  duration: string
  schedule: string
}

export const fitnessClasses: FitnessClass[] = [
  {
    name: 'Strength Lab',
    description: 'Progressive barbell and dumbbell training with coaching for every experience level.',
    type: 'Strength',
    instructor: 'Alex Morgan',
    level: 'All levels',
    duration: '60 minutes',
    schedule: 'Monday & Wednesday · 6:00 PM',
  },
  {
    name: 'Foundations of Strength',
    description: 'Learn the essential movement patterns and build confidence with weights.',
    type: 'Strength',
    instructor: 'Priya Shah',
    level: 'Beginner',
    duration: '45 minutes',
    schedule: 'Tuesday · 6:00 PM',
  },
  {
    name: 'Conditioning Club',
    description: 'Build power and stamina through varied, coach-led intervals.',
    type: 'Conditioning',
    instructor: 'Jordan Lee',
    level: 'Intermediate',
    duration: '45 minutes',
    schedule: 'Tuesday & Thursday · 7:00 AM',
  },
  {
    name: 'Engine Room',
    description: 'A challenging conditioning session for members ready to raise the pace.',
    type: 'Conditioning',
    instructor: 'Maya Rivera',
    level: 'Advanced',
    duration: '60 minutes',
    schedule: 'Saturday · 9:00 AM',
  },
  {
    name: 'Mobility Reset',
    description: 'Move better, recover well, and leave ready for the next session.',
    type: 'Mobility',
    instructor: 'Taylor Kim',
    level: 'All levels',
    duration: '45 minutes',
    schedule: 'Saturday · 10:00 AM',
  },
  {
    name: 'Mobility Foundations',
    description: 'Build a steady mobility practice with accessible drills and breathing work.',
    type: 'Mobility',
    instructor: 'Sam Carter',
    level: 'Beginner',
    duration: '30 minutes',
    schedule: 'Sunday · 10:00 AM',
  },
]