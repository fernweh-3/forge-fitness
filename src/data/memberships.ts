export type MembershipPlan = {
  name: string
  price: string
  cadence: string
  description: string
  benefits: string[]
  featured?: boolean
}

export const membershipPlans: MembershipPlan[] = [
  {
    name: 'Monthly',
    price: '$49',
    cadence: 'per month',
    description: 'Flexible access for consistent training without a long-term commitment.',
    benefits: ['Full gym access', 'Unlimited classes', 'Free fitness orientation'],
  },
  {
    name: 'Annual',
    price: '$39',
    cadence: 'per month, billed annually',
    description: 'Our best everyday value for members ready to make training a habit.',
    benefits: ['Full gym access', 'Unlimited classes', 'Two guest passes each month'],
    featured: true,
  },
  {
    name: 'Student',
    price: '$29',
    cadence: 'per month with valid ID',
    description: 'Straightforward training access that fits a student schedule and budget.',
    benefits: ['Full gym access', 'Weekday classes', 'Free fitness orientation'],
  },
]