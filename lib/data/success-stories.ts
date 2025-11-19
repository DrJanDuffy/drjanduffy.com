export interface SuccessStory {
  id: string
  neighborhood: string
  daysExpired: number
  daysSold: number
  askingPrice: number
  soldPrice: number
  soldPercentage: number
  previousAgent: string
  testimonial?: string
  image?: string
}

export const successStories: SuccessStory[] = [
  {
    id: '1',
    neighborhood: 'The Ridges',
    daysExpired: 127,
    daysSold: 14,
    askingPrice: 1250000,
    soldPrice: 1240000,
    soldPercentage: 99.2,
    previousAgent: 'Big Franchise',
    testimonial: 'Previous agent had my house for 4 months with zero offers. Dr. Jan sold it in 2 weeks at 99.2% of asking.',
  },
  {
    id: '2',
    neighborhood: 'Red Rock CC',
    daysExpired: 89,
    daysSold: 21,
    askingPrice: 850000,
    soldPrice: 837250,
    soldPercentage: 98.5,
    previousAgent: 'Discount Broker',
    testimonial: 'After 94 days with Redfin and multiple price drops, Dr. Jan got us full asking price in 21 days.',
  },
  {
    id: '3',
    neighborhood: 'The Summit',
    daysExpired: 203,
    daysSold: 31,
    askingPrice: 2100000,
    soldPrice: 2053800,
    soldPercentage: 97.8,
    previousAgent: 'Luxury Expert',
    testimonial: 'Three agents failed over 6 months. Dr. Jan sold our luxury home in 31 days at 97.8% of asking.',
  },
  {
    id: '4',
    neighborhood: 'Summerlin West',
    daysExpired: 63,
    daysSold: 19,
    askingPrice: 675000,
    soldPrice: 666225,
    soldPercentage: 98.7,
    previousAgent: 'Friend Referral',
    testimonial: 'My friend\'s agent was nice but couldn\'t sell. Dr. Jan got it done in 19 days.',
  },
  {
    id: '5',
    neighborhood: 'The Ridges',
    daysExpired: 94,
    daysSold: 17,
    askingPrice: 1450000,
    soldPrice: 1432750,
    soldPercentage: 98.8,
    previousAgent: 'National Brand',
    testimonial: 'Failed in Oct, sold in Dec for 98.8% asking. Dr. Jan knows how to sell luxury homes.',
  },
]

export function getSuccessStoriesByNeighborhood(neighborhood?: string): SuccessStory[] {
  if (!neighborhood) return successStories
  return successStories.filter((story) =>
    story.neighborhood.toLowerCase().includes(neighborhood.toLowerCase()),
  )
}

