import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
export const metadata = {
  title: 'Marketing Strategy | 97-Point System | Dr. Jan Duffy',
  description:
    'Learn about Dr. Jan Duffy\'s 97-point marketing system that sells homes that didn\'t sell in 19 days average.',
}
export default function MarketingStrategyPage() {
  const strategies = [
    {
      category: 'Professional Media',
      points: [
        'Professional staging consultation',
        'Twilight drone photography ($1,200)',
        '3D virtual home tours ($800)',
        'High-resolution interior photography ($1,200)',
        'Aerial property shots ($500)',
        'Total Investment: $3,700+',
      ],
    },
    {
      category: 'Digital Marketing',
      points: [
        'Social media marketing blitz',
        'Facebook targeted ads',
        'Google search ads',
        'Instagram property showcases',
        'LinkedIn network activation',
        'Email marketing campaigns',
      ],
    },
    {
      category: 'Network Activation',
      points: [
        '500+ agent network contact',
        'Broker open house events',
        'Agent preview events',
        'Direct agent outreach',
        'Co-broker incentives',
        'Referral network activation',
      ],
    },
    {
      category: 'Traditional Marketing',
      points: [
        'Strategic open houses',
        'Neighborhood mailers',
        'Luxury home magazines',
        'Real estate publications',
        'Local market exposure',
        'Signage optimization',
      ],
    },
    {
      category: 'Follow-Up System',
      points: [
        'Immediate showing follow-up',
        'Buyer feedback collection',
        'Agent feedback requests',
        'Weekly status reports',
        'Price adjustment strategy',
        'Market condition updates',
      ],
    },
    {
      category: 'Negotiation & Closing',
      points: [
        'Buyer psychology tactics',
        'Strategic counter-offers',
        'Inspection negotiation',
        'Appraisal protection',
        'Timeline enforcement',
        'Problem resolution',
      ],
    },
  ]
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                THE 97-POINT MARKETING SYSTEM
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Comprehensive marketing strategy that sells homes that didn't sell fast
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {strategies.map((strategy, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg"
                  >
                    <h3 className="text-2xl font-black mb-4 text-primary">
                      {strategy.category}
                    </h3>
                    <ul className="space-y-2">
                      {strategy.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary font-bold mt-1">✓</span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">
                  WHY 97 POINTS MATTERS
                </h2>
                <div className="space-y-4 text-lg">
                  <p>
                    Your previous agent did <strong>3-5 points</strong>: MLS posting, maybe one open house, zero follow-up.
                  </p>
                  <p>
                    I do <strong>97 points</strong>: Complete marketing system, aggressive follow-up, strategic negotiation.
                  </p>
                  <p className="text-2xl font-bold mt-4">
                    That's why I sell in 19 days and they got you expired.
                  </p>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY FOR REAL MARKETING?
                </h2>
                <LeadForm source="marketing_strategy" buttonText="GET MY STRATEGY" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
