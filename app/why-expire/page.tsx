import StickyHeader from '@/app/components/sticky-header'
import LeadForm from '@/app/components/lead-form'

export const metadata = {
  title: 'Why Listings Expire | Dr. Jan Duffy',
  description:
    'Data-driven analysis of why listings expire. Common agent failures and how to avoid them.',
}

export default function WhyExpirePage() {
  return (
    <>
      <StickyHeader />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-12">
              WHY LISTINGS EXPIRE
            </h1>

            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-4">The Data</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <ul className="space-y-3 text-lg">
                    <li>
                      <strong>63 days average</strong> - Time listings sit before expiring
                    </li>
                    <li>
                      <strong>20-30%</strong> of listings expire in Las Vegas market
                    </li>
                    <li>
                      <strong>7,500+ active listings</strong> in November 2025
                    </li>
                    <li>
                      <strong>1,500-2,250</strong> will expire (historical average)
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">
                  Common Agent Failure Patterns
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      1. Poor Photography
                    </h3>
                    <p className="text-gray-700">
                      iPhone photos in 2025? Dark rooms, cluttered spaces, and
                      unprofessional staging kill buyer interest in the first 2.3
                      seconds.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      2. Minimal Marketing
                    </h3>
                    <p className="text-gray-700">
                      "Posted to MLS" is not a strategy. One open house, zero
                      follow-up, no buyer targeting. Your house becomes invisible.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      3. Overpricing Strategy
                    </h3>
                    <p className="text-gray-700">
                      Agents tell you what you want to hear to get the listing.
                      Then suggest price drops every month. Amateur hour.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      4. Part-Time Effort
                    </h3>
                    <p className="text-gray-700">
                      Your agent is juggling 47 other listings. You're inventory
                      number #48. You get 2.1% of their attention.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      5. No Follow-Up System
                    </h3>
                    <p className="text-gray-700">
                      Showings happen, feedback disappears. No aggressive follow-up,
                      no negotiation strategy, no urgency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <h2 className="text-3xl font-black mb-4 text-center">
                  YOUR AGENT MADE $0
                </h2>
                <p className="text-4xl font-black text-center mb-4">
                  YOU LOST $4,964/MONTH
                </p>
                <p className="text-2xl font-bold text-center">
                  ANGRY YET?
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  GET YOUR FREE REPORT
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  "7 Reasons Your Listing Expired (And How to Fix Them in 30 Days)"
                </p>
                <LeadForm source="why_expire" buttonText="GET THE REPORT" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

