export type MembershipPlan = {
  name: string
  price: string
  cadence: string
  description: string
  benefits: string[]
  featured?: boolean
}

export type MembershipFaq = {
  question: string
  answer: string
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

export const membershipFaqs: MembershipFaq[] = [
  {
    question: 'Can I try Forge Fitness before joining?',
    answer:
      'Yes. Use the free trial form to book an introductory session and see if Forge is the right fit for you.',
  },
  {
    question: 'What is included with every membership?',
    answer:
      'Every plan includes access to the training floor and a free fitness orientation. Class access depends on the plan you choose.',
  },
  {
    question: 'Can I change or cancel my membership?',
    answer:
      'You can contact our team to discuss plan changes or cancellation. We will explain the terms for your current plan before making a change.',
  },
  {
    question: 'Do I need previous gym experience?',
    answer:
      'No. Our coaches can adapt the training to your current level and help you build confidence from your first session.',
  },
]