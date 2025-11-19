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
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  If your listing expired, you're not alone. In fact, you're part of a significant trend in the Las Vegas real estate market. Understanding why listings expire is the first step to fixing yours. The data is clear: most listings don't expire because of the home itself. They expire because of poor marketing, minimal investment, and zero follow-up from agents who don't know what they're doing.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The good news? Expired listings can be fixed. I've sold 47 expired Summerlin listings with an average of 19 days to contract and 98.7% of asking price. The key is understanding what went wrong and implementing a completely different strategy. This page will show you exactly why your listing expired and what needs to change.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">The Data: Las Vegas Expired Listing Reality</h2>
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <ul className="space-y-3 text-lg mb-4">
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
                    <li>
                      <strong>$4,964/month</strong> - Average holding costs for expired listings
                    </li>
                    <li>
                      <strong>$116/day</strong> - Daily cost of an expired listing
                    </li>
                  </ul>
                  <h3 className="text-2xl font-bold mb-3">What This Data Means</h3>
                  <p className="text-lg text-gray-700">
                    These numbers aren't abstract statistics. They represent real homes, real sellers, and real money lost. In Las Vegas alone, 1,500-2,250 listings will expire this year. That's 1,500-2,250 sellers who trusted their agents, got failed results, and lost thousands of dollars in holding costs. The problem isn't the market. The problem isn't the homes. The problem is the agents.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">
                  Common Agent Failure Patterns
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  After analyzing hundreds of expired listings, I've identified five common failure patterns that cause listings to expire. Your previous agent likely made at least three of these mistakes. Understanding what went wrong is the first step to fixing it.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      1. Poor Photography
                    </h3>
                    <p className="text-gray-700 mb-3">
                      iPhone photos in 2025? Dark rooms, cluttered spaces, and unprofessional staging kill buyer interest in the first 2.3 seconds. Buyers scroll through hundreds of listings online. If your photos don't grab them immediately, they move on. Your previous agent spent $37 on photos. I spend $3,700 on professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. The difference is obvious.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Impact</h4>
                    <p className="text-gray-700">
                      Poor photography reduces buyer interest by 70-80%. Dark, cluttered photos make your home look smaller, less appealing, and less valuable. Professional photography increases showing requests by 300% and sale price by 5-10%. Your previous agent's $37 investment cost you thousands.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      2. Minimal Marketing
                    </h3>
                    <p className="text-gray-700 mb-3">
                      "Posted to MLS" is not a strategy. One open house, zero follow-up, no buyer targeting. Your house becomes invisible. Your previous agent posted your listing to MLS and disappeared. That's not marketing. That's laziness.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Impact</h4>
                    <p className="text-gray-700">
                      I use a 97-point marketing system that includes social media blitzes, network activation (500+ agents), targeted Facebook/Google ads, strategic open houses, and email marketing campaigns. Your previous agent did 3-5 points. I do 97. That's why I sell in 19 days and they got you expired.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      3. Overpricing Strategy
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Agents tell you what you want to hear to get the listing. Then suggest price drops every month. Amateur hour. Your previous agent probably told you your home was worth more than it actually was, just to get the listing. Then, when it didn't sell, they suggested price drops. That's not a strategy. That's incompetence.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Impact</h4>
                    <p className="text-gray-700">
                      Overpricing kills buyer interest immediately. Buyers are educated. They know market values. If your home is overpriced, they won't even look at it. I use data-driven pricing strategies based on market analysis, buyer psychology, and competitive positioning. I price it right from day one, so it sells fast at top dollar.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      4. Part-Time Effort
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Your agent is juggling 47 other listings. You're inventory number #48. You get 2.1% of their attention. That's not enough to sell a home. Your previous agent spread themselves too thin, and your listing suffered.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Impact</h4>
                    <p className="text-gray-700">
                      I take maximum 6 listings at a time. You get 100% focus, not 2.1%. Every listing gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance. Quality over quantity. Results over volume.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      5. No Follow-Up System
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Showings happen, feedback disappears. No aggressive follow-up, no negotiation strategy, no urgency. Your previous agent probably held showings, collected feedback, and did nothing with it. That's not how you sell homes.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Impact</h4>
                    <p className="text-gray-700">
                      I aggressively follow up on every showing within 2 hours. I collect detailed feedback, address concerns immediately, and use buyer psychology tactics to create urgency. I don't wait for offers. I create them. That's why I sell in 19 days and they got you expired.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-3xl font-black mb-4">The Bottom Line</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Your listing didn't expire because of your home. It expired because of your agent. Poor photography, minimal marketing, overpricing, part-time effort, and zero follow-up - these are the five fatal mistakes that kill listings. Your previous agent made at least three of them. That's why your listing expired.
                </p>
                <h3 className="text-2xl font-bold mb-3">What Needs to Change</h3>
                <p className="text-lg text-gray-700">
                  The good news? Expired listings can be fixed. I've sold 47 expired Summerlin listings with an average of 19 days to contract and 98.7% of asking price. The key is a complete reset: new photos, new pricing strategy, fresh MLS listing, and aggressive marketing. The same system that sold these 47 expired listings can sell yours. The only question is: are you ready to work with an agent who actually knows what they're doing?
                </p>
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

