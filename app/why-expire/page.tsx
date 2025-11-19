import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
export const metadata = {
  title: 'Why Homes Do Not Sell | Dr. Jan Duffy',
  description:
    'Data-driven analysis of why homes do not sell. Common agent failures and how to avoid them.',
  alternates: {
    canonical: '/why-expire',
  },
}
export default function WhyExpirePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Why homes fail to sell', url: '/why-expire' }]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-12">
              WHY homes fail to sell
            </h1>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    If your home DID NOT sell, you're not alone. In fact, you're part of a significant trend in the Las Vegas real estate market. Understanding why homes fail to sell is the first step to fixing yours. The data is clear: most listings do not expire because of the home itself. They expire because of poor marketing, minimal investment, and zero follow-up from agents who do not know what they're doing.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    The good news? HOMES THAT DID NOT SELL can be fixed. I've sold 47 Summerlin sellers who could not sell with an average of 19 days to contract and 98.7% of asking price. The key is understanding what went wrong and implementing a completely different strategy. This page will show you exactly why your home DID NOT sell and what needs to change. See <a href="/comparison" className="text-primary font-semibold hover:underline">how I'm different from your previous agent</a> and learn about <a href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process</a>.
                  </p>
              </div>
              <div>
                <h2 className="text-3xl font-black mb-4">The Data: Las Vegas HOME THAT DID NOT SELL Reality</h2>
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <ul className="space-y-3 text-lg mb-4">
                    <li>
                      <strong>63 days average</strong> - Time listings sit before expiring
                    </li>
                    <li>
                      <strong>20-30%</strong> of homes fail to sell in Las Vegas market
                    </li>
                    <li>
                      <strong>7,500+ active listings</strong> in November 2026
                    </li>
                    <li>
                      <strong>1,500-2,250</strong> will fail to sell (historical average)
                    </li>
                    <li>
                      <strong>$4,964/month</strong> - Average holding costs for HOMES THAT DID NOT SELL
                    </li>
                    <li>
                      <strong>$116/day</strong> - Daily cost of an HOME That DID NOT SELL
                    </li>
                  </ul>
                  <h3 className="text-2xl font-bold mb-3">What This Data Means</h3>
                  <p className="text-lg text-gray-700">
                    These numbers are not abstract statistics. They represent real homes, real sellers, and real money lost. In Las Vegas alone, 1,500-2,250 listings will fail to sell this year. That's 1,500-2,250 sellers who trusted their agents, got failed results, and lost thousands of dollars in holding costs. The problem is not the market. The problem is not the homes. The problem is the agents.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-black mb-4">
                  Common Agent Failure Patterns
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  After analyzing hundreds of HOMES THAT DID NOT SELL, I've identified five common failure patterns that cause listings to expire. Your previous agent likely made at least three of these mistakes. Understanding what went wrong is the first step to fixing it.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-bold mb-2">
                      1. Poor Photography
                    </h3>
                    <p className="text-gray-700 mb-3">
                      iPhone photos in 2026? Dark rooms, cluttered spaces, and unprofessional staging kill buyer interest in the first 2.3 seconds. Buyers scroll through hundreds of listings online. If your photos do not grab them immediately, they move on. Your previous agent spent $37 on photos. I spend $3,700 on professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. The difference is obvious.
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
                      Agents tell you what you want to hear to get the listing. Then suggest price drops every month. Amateur hour. Your previous agent probably told you your home was worth more than it actually was, just to get the listing. Then, when it DID NOT sell, they suggested price drops. That's not a strategy. That's incompetence.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Impact</h4>
                    <p className="text-gray-700">
                      Overpricing kills buyer interest immediately. Buyers are educated. They know market values. If your home is overpriced, they will not even look at it. I use data-driven pricing strategies based on market analysis, buyer psychology, and competitive positioning. I price it right from day one, so it sells fast at top dollar.
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
                      I aggressively follow up on every showing within 2 hours. I collect detailed feedback, address concerns immediately, and use buyer psychology tactics to create urgency. I do not wait for offers. I create them. That's why I sell in 19 days and they got you expired.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">The Bottom Line</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Your listing DID NOT expire because of your home. It expired because of your agent. Poor photography, minimal marketing, overpricing, part-time effort, and zero follow-up - these are the five fatal mistakes that kill listings. Your previous agent made at least three of them. That's why your home DID NOT sell.
                </p>
                <h3 className="text-2xl font-bold mb-3">What Needs to Change</h3>
                <p className="text-lg text-gray-700 mb-4">
                  The good news? HOMES THAT DID NOT SELL can be fixed. I've sold 47 Summerlin sellers who could not sell with an average of 19 days to contract and 98.7% of asking price. The key is a complete reset: new photos, new pricing strategy, fresh MLS listing, and aggressive marketing. The same system that sold these 47 HOMES THAT DID NOT SELL can sell yours. The only question is: are you ready to work with an agent who actually knows what they're doing?
                </p>
                <p className="text-lg text-gray-700">
                  The fix requires a complete reset. Professional photography eliminates the stigma of poor photos. Strategic pricing positions your home competitively. Fresh MLS listing eliminates expired stigma. Aggressive marketing creates maximum exposure. This complete reset is what transforms HOMES THAT DID NOT SELL into successful sales. This is what I do. This is what your previous agent DID NOT do.
                </p>
              </div>

              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">The Psychology of HOMES That DID NOT SELL</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  Understanding why homes fail to sell is not just about data - it's about understanding the psychology of buyers, sellers, and agents.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Buyer Psychology: Why They Scroll Past</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Buyers scroll through hundreds of listings online. They make split-second decisions based on photos, price, and description. If your photos are dark and cluttered, they scroll past. If your price is too high, they scroll past. If your description is generic, they scroll past. Your previous agent's poor marketing made your home invisible. Buyers never even saw it.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Professional photography stops the scroll. Strategic pricing attracts qualified buyers. Optimized descriptions highlight unique features. This is what gets buyers to click. This is what gets buyers to schedule showings. This is what your previous agent DID NOT provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Seller Psychology: The Frustration Factor</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      frustrated sellers are frustrated. They trusted their agent, followed their advice, and got failed results. They're angry. They're motivated. They're ready to work with someone who actually knows what they're doing. This psychology makes frustrated sellers the best clients. They're educated about the process. They understand the market. They're realistic about pricing. They're ready to make decisions quickly.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      I understand this psychology. I know frustrated sellers are different from regular sellers. They've already been failed once - they will not accept failure again. They want results. They want accountability. They want an agent who actually delivers. This is what I provide. This is what your previous agent DID NOT provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Agent Psychology: Volume vs. Quality</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Most agents operate on a volume-based model. They take as many listings as possible, invest minimal marketing in each, and hope something sticks. This model works for them - they collect commissions on the few that sell. But it does not work for you. You got minimal marketing, minimal attention, and an HOME THAT DID NOT SELL.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      I operate on a quality-based model. I take maximum 6 listings at a time, invest $5,000+ in marketing per listing, and deliver proven results. This model works for you - you get maximum marketing, maximum attention, and a successful sale. Quality over quantity. Results over volume. This is what separates successful agents from failed agents.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">The Cost of HOMES THAT DID NOT SELL</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  HOMES That DID NOT SELL cost sellers money. A lot of money. Here's the real cost:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-2xl font-black mb-4">Direct Costs</h3>
                    <ul className="space-y-3 text-lg text-gray-700 mb-4">
                      <li>• $4,964/month in holding costs</li>
                      <li>• $116/day in daily costs</li>
                      <li>• $14,892 over 3 months</li>
                      <li>• $29,784 over 6 months</li>
                    </ul>
                    <p className="text-xl font-bold text-red-600">
                      These costs add up fast
                    </p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-2xl font-black mb-4">Hidden Costs</h3>
                    <ul className="space-y-3 text-lg text-gray-700 mb-4">
                      <li>• Lost opportunity cost</li>
                      <li>• Market depreciation</li>
                      <li>• Emotional toll</li>
                      <li>• Stigma making future sale harder</li>
                    </ul>
                    <p className="text-xl font-bold text-red-600">
                      These costs are harder to measure
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 text-center">
                  The longer your listing sits expired, the more it costs you. Every day you wait is another $116+ in holding costs. Every week is another $812. Every month is another $4,964. The cost of waiting is real. The cost of working with the wrong agent is real. The solution? Work with an agent who actually knows what they're doing.
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
                  "7 Reasons your home did not sell (And How to Fix Them in 30 Days)"
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
