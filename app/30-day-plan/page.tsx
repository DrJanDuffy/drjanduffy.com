import StickyHeader from '@/app/components/sticky-header'
import LeadForm from '@/app/components/lead-form'

export const metadata = {
  title: 'The 30-Day Plan | Dr. Jan Duffy',
  description:
    'Week-by-week breakdown of how Dr. Jan Duffy sells expired listings in 30 days or less.',
}

export default function ThirtyDayPlanPage() {
  const weeks = [
    {
      week: 1,
      title: 'Aggressive Reset',
      items: [
        'Professional photography and staging',
        '3D virtual tour creation',
        'Market analysis and pricing strategy',
        'MLS reset with fresh listing',
        'Social media blitz launch',
      ],
    },
    {
      week: 2,
      title: 'Maximum Exposure',
      items: [
        'Strategic open house with buyer pre-qualification',
        'Network activation (500+ agent contacts)',
        'Targeted Facebook/Google ads',
        'Email marketing to qualified buyers',
        'Daily follow-up on all showings',
      ],
    },
    {
      week: 3,
      title: 'Negotiation Warfare',
      items: [
        'Aggressive offer follow-up',
        'Buyer psychology tactics',
        'Counter-offer strategy',
        'Inspection negotiation',
        'Appraisal protection',
      ],
    },
    {
      week: 4,
      title: 'Closing Guarantee',
      items: [
        'Escrow management',
        'Timeline enforcement',
        'Problem resolution',
        'Final walkthrough coordination',
        'SOLD - Guaranteed or I work free',
      ],
    },
  ]

  return (
    <>
      <StickyHeader />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
              THE 30-DAY PLAN
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              How I sell expired listings in 30 days or less
            </p>

            <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
              <p className="text-lg text-gray-700 mb-6">
                Your listing expired because your previous agent didn't have a plan. They posted to MLS, held maybe one open house, and hoped for the best. That's not a strategy. That's incompetence. I have a proven 30-day plan that sells expired listings. Fast. At top dollar. With zero excuses.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The 30-day plan is broken down into four weeks, each with specific goals and deliverables. Week 1 is aggressive reset. Week 2 is maximum exposure. Week 3 is negotiation warfare. Week 4 is closing guarantee. Every week has measurable outcomes. Every week moves you closer to SOLD.
              </p>
              <p className="text-lg text-gray-700">
                This isn't a theoretical plan. This is the exact system I've used to sell 47 expired Summerlin listings with an average of 19 days to contract and 98.7% of asking price. The same system can sell yours. The only question is: are you ready to work with an agent who actually has a plan?
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {weeks.map((weekData) => (
                <div
                  key={weekData.week}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black">
                      {weekData.week}
                    </div>
                    <h2 className="text-3xl font-black">{weekData.title}</h2>
                  </div>

                  <ul className="space-y-3">
                    {weekData.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-600 font-bold text-xl mt-1">
                          ✓
                        </span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mt-12">
                <h2 className="text-3xl font-black mb-4">30-DAY GUARANTEE</h2>
                <p className="text-2xl font-bold mb-2">
                  Sold in 30 Days or I Work Free
                </p>
                <p className="text-lg opacity-90">
                  No excuses. No exceptions. If your home doesn't sell in 30 days, I continue working at no additional cost until it sells. That's how confident I am in my 30-day plan.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mt-12">
                <h2 className="text-3xl font-black mb-4 text-center">Why the 30-Day Plan Works</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Week 1: Aggressive Reset</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      The first week is critical. This is when we completely reset your listing - new photos, new pricing strategy, fresh MLS listing. We eliminate the stigma of "expired" by making your home look brand new. Professional photography, staging, and 3D virtual tours make buyers forget it ever expired. The aggressive reset is what separates my system from your previous agent's "hope and pray" approach.
                    </p>
                    <h4 className="text-xl font-bold mb-2">Key Deliverables</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Professional photography and staging completed</li>
                      <li>• 3D virtual tour created and live</li>
                      <li>• Market analysis and pricing strategy finalized</li>
                      <li>• Fresh MLS listing with optimized description</li>
                      <li>• Social media marketing blitz launched</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Week 2: Maximum Exposure</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Week 2 is all about getting your home in front of as many qualified buyers as possible. Strategic open houses with buyer pre-qualification. Network activation reaching 500+ agents. Targeted Facebook and Google ads. Email marketing to qualified buyers. Daily follow-up on all showings. This is when the momentum builds and offers start coming in.
                    </p>
                    <h4 className="text-xl font-bold mb-2">Key Deliverables</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Strategic open house with pre-qualified buyers</li>
                      <li>• Network activation (500+ agent contacts)</li>
                      <li>• Targeted Facebook/Google ads live</li>
                      <li>• Email marketing campaigns launched</li>
                      <li>• Daily follow-up on all showings</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Week 3: Negotiation Warfare</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Week 3 is when offers come in and negotiations begin. This is where most agents fail. They accept lowball offers or let negotiations drag on. I use aggressive follow-up, buyer psychology tactics, and strategic counter-offers to get you top dollar. I don't wait for offers. I create them. I don't accept lowball offers. I negotiate them up.
                    </p>
                    <h4 className="text-xl font-bold mb-2">Key Deliverables</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Aggressive offer follow-up within 2 hours</li>
                      <li>• Buyer psychology tactics implemented</li>
                      <li>• Strategic counter-offers submitted</li>
                      <li>• Inspection negotiation handled</li>
                      <li>• Appraisal protection strategies in place</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Week 4: Closing Guarantee</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Week 4 is closing. Escrow management, timeline enforcement, problem resolution, final walkthrough coordination. This is where deals fall apart with other agents. I don't let that happen. I manage every detail, enforce every timeline, resolve every problem. SOLD - Guaranteed or I work free.
                    </p>
                    <h4 className="text-xl font-bold mb-2">Key Deliverables</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Escrow management and timeline enforcement</li>
                      <li>• Problem resolution as issues arise</li>
                      <li>• Final walkthrough coordinated</li>
                      <li>• Closing documents prepared</li>
                      <li>• SOLD - Guaranteed or I work free</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY TO GET STARTED?
                </h2>
                <LeadForm
                  source="30_day_plan"
                  buttonText="START MY 30-DAY PLAN"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

