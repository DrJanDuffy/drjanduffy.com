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
                <p className="text-2xl font-bold">
                  Sold in 30 Days or I Work Free
                </p>
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

