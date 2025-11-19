import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import { Check, X } from 'lucide-react'
export const metadata = {
  title: 'Your Agent vs Me | Dr. Jan Duffy',
  description:
    'Side-by-side comparison of what your previous agent did vs. what Dr. Jan Duffy does to sell homes that didn\'t sell.',
  alternates: {
    canonical: '/comparison',
  },
}
export default function ComparisonPage() {
  const comparisons = [
    {
      category: 'Photography',
      yourAgent: 'iPhone photos, $37 budget',
      drJan: 'Professional staging, $3,700 investment, twilight drone shots',
    },
    {
      category: 'Marketing Strategy',
      yourAgent: 'Posted to MLS, disappeared',
      drJan: '97-point marketing system, daily blasts, network activation',
    },
    {
      category: 'Open Houses',
      yourAgent: 'One open house (maybe)',
      drJan: 'Strategic open houses with buyer pre-qualification',
    },
    {
      category: 'Follow-Up',
      yourAgent: 'Zero follow-up system',
      drJan: 'Aggressive follow-up, weekly updates, negotiation warfare',
    },
    {
      category: 'Price Strategy',
      yourAgent: '"Drop it" every month',
      drJan: 'Data-driven pricing, market analysis, buyer psychology',
    },
    {
      category: 'Attention',
      yourAgent: '47 other listings, 2.1% focus',
      drJan: '6 listings max, 100% focus on your home',
    },
    {
      category: 'Results',
      yourAgent: '63 days expired, $0 commission',
      drJan: '19 day average, 98.7% of asking, SOLD',
    },
  ]
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Agent Comparison', url: '/comparison' }]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-12">
              YOUR AGENT VS ME
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Side-by-side comparison of what your previous agent did vs. what I do to sell homes that DIDN\'T sell. The difference is obvious.
            </p>
            <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
              <p className="text-lg text-gray-700 mb-6">
                your home didn\'t sell for a reason. Your previous agent made mistakes. They used minimal marketing, didn't invest in professional photography, held maybe one open house, and disappeared. Then your home DIDN\'T sell, and they made 't invest in professional photography, held maybe one open house, and disappeared. Then your home didn\'t sell, and they made 't invest in professional photography, held maybe one open house, and disappeared. Then your home didn't sell, and they made $0 while you lost $4,964 per month in holding costs. <a href="/why-expire" className="text-primary font-semibold hover:underline">Learn why homes fail to sell</a> and what went wrong.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I do things differently. I invest $5,000+ in marketing per listing. I take maximum 6 listings at a time so you get 100% focus. I use a <a href="/marketing-strategy" className="text-primary font-semibold hover:underline">97-point marketing system</a> that leaves nothing to chance. And I deliver proven results - 47 homes that didn' while you lost $4,964 per month in holding costs. <a href="/why-expire" className="text-primary font-semibold hover:underline">Learn why homes fail to sell</a> and what went wrong.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I do things differently. I invest $5,000+ in marketing per listing. I take maximum 6 listings at a time so you get 100% focus. I use a <a href="/marketing-strategy" className="text-primary font-semibold hover:underline">97-point marketing system</a> that leaves nothing to chance. And I deliver proven results - 47 homes that didn' while you lost $4,964 per month in holding costs. <a href="/why-expire" className="text-primary font-semibold hover:underline">Learn why homes fail to sell</a> and what went wrong.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I do things differently. I invest $5,000+ in marketing per listing. I take maximum 6 listings at a time so you get 100% focus. I use a <a href="/marketing-strategy" className="text-primary font-semibold hover:underline">97-point marketing system</a> that leaves nothing to chance. And I deliver proven results - 47 homes That Didn\'t sell - now sold with 19 day average and 98.7% of asking price. See <a href="/services" className="text-primary font-semibold hover:underline">my complete services</a> and <a href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process</a>.
              </p>
              <p className="text-lg text-gray-700">
                The comparison below shows exactly what your previous agent did vs. what I do. The difference isn't subtle. It's dramatic. And it's why I sell homes that DIDN\'T sell in 19 days average while they got you expired. See <a href="/success-stories" className="text-primary font-semibold hover:underline">real success stories</a> from homes I've sold.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="border-2 border-gray-700 p-4 text-left">
                        Category
                      </th>
                      <th className="border-2 border-gray-700 p-4 text-left bg-red-900">
                        Your Previous Agent
                      </th>
                      <th className="border-2 border-gray-700 p-4 text-left bg-green-900">
                        Dr. Jan Duffy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comp, index) => (
                      <tr key={index} className="bg-white">
                        <td className="border-2 border-gray-300 p-4 font-bold">
                          {comp.category}
                        </td>
                        <td className="border-2 border-gray-300 p-4">
                          <div className="flex items-start gap-2">
                            <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span>{comp.yourAgent}</span>
                          </div>
                        </td>
                        <td className="border-2 border-gray-300 p-4">
                          <div className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{comp.drJan}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h2 className="text-3xl font-black mb-4 text-red-800">
                    Your Agent's Investment
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Your previous agent's total investment in marketing your home was minimal. Here's what they actually spent:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• $37 on photos (iPhone quality)</li>
                    <li>• 1 open house (maybe)</li>
                    <li>• MLS posting (basic)</li>
                    <li>• Zero follow-up system</li>
                    <li>• No social media marketing</li>
                    <li>• No network activation</li>
                    <li>• No targeted advertising</li>
                  </ul>
                  <p className="mt-4 text-xl font-bold text-red-600 mb-2">
                    Total: ~$100
                  </p>
                  <p className="text-sm text-gray-600">
                    Result: 63 days expired, $0 commission, you lost $4,964/month
                  </p>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <h2 className="text-3xl font-black mb-4 text-green-800">
                    My Investment
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    I invest significantly more in marketing your home because I know it pays off. Here's what I actually spend:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• $3,700 on professional media</li>
                    <li>• Strategic open houses with pre-qualification</li>
                    <li>• 97-point marketing system</li>
                    <li>• Aggressive follow-up system</li>
                    <li>• Social media marketing blitz</li>
                    <li>• Network activation (500+ agents)</li>
                    <li>• Targeted Facebook/Google ads</li>
                  </ul>
                  <p className="mt-4 text-xl font-bold text-green-600 mb-2">
                    Total: ~$5,000+
                  </p>
                  <p className="text-sm text-gray-600">
                    Result: 19 day average, 98.7% of asking, SOLD
                  </p>
                </div>
              </div>
              <div className="mt-12 bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">The Investment Difference</h2>
                <p className="text-lg text-gray-700 mb-4">
                  The difference in investment is dramatic: $100 vs. $5,000+. But the difference in results is even more dramatic: expired vs. sold, $0 commission vs. full commission, $4,964/month loss vs. top dollar sale.
                </p>
                <h3 className="text-2xl font-bold mb-3">Why I Invest More</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I invest more because I know it works. Professional photography increases showing requests by 300% and sale price by 5-10%. Strategic marketing brings qualified buyers. Aggressive follow-up creates urgency. The $5,000+ investment pays for itself through faster sales and higher prices.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The $5,000+ investment isn't a cost - it's an investment in your success. Professional photography showcases your home at its best, attracting more buyers and commanding higher prices. Strategic marketing reaches qualified buyers who are ready to purchase. Aggressive follow-up ensures every showing leads to an offer. The investment pays for itself through faster sales and higher prices. Your previous agent saw it as a cost and minimized it. I see it as an investment and maximize it.
                </p>
                <h3 className="text-2xl font-bold mb-3">Why Your Agent Invested Less</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Your previous agent invested less because they were juggling 47 other listings. They couldn\'t afford to invest $5,000+ in every listing. So they invested $100, hoped for the best, and got you expired. That's not how you sell homes. That's how you fail.
                </p>
                <p className="text-lg text-gray-700">
                  Your previous agent's business model was volume-based. They took as many listings as possible, invested minimal marketing in each, and hoped something would stick. This model works for them - they collect commissions on the few that sell. But it doesn't work for you. You got minimal marketing, minimal attention, and an HOME THAT DIDN\'T SELL. That's the cost of working with a volume-based agent. That's why your home DIDN\'T sell.
                </p>
              </div>

              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">DETAILED COMPARISON BREAKDOWN</h2>
                <p className="text-center text-lg text-gray-700 mb-8">
                  Let's break down each category to understand exactly what your previous agent did vs. what I do:
                </p>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black mb-4">Photography: iPhone vs. Professional</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent used iPhone photos. They spent $37 on photos, took a few quick shots, and called it done. The photos were dark, poorly lit, and didn\'t showcase your home's best features. Buyers saw these photos and scrolled past. Your home became invisible in a sea of listings.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      I invest $3,700 in professional media. Professional photography showcases your home at its best. Twilight drone shots capture your property at golden hour. 3D virtual tours allow buyers to tour 24/7. Magazine-quality staging makes your home look like it belongs in a design magazine. Every photo is professionally edited. Every room is staged to perfection. This professional media is what attracts buyers and commands higher prices. This is what $3,700 buys you. This is what your previous agent DIDN\'T provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4">Marketing: Post and Pray vs. 97-Point System</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent used a "post to MLS and pray" strategy. They posted your listing to MLS, held maybe one open house, and disappeared. That's not marketing. That's negligence. Your home got minimal exposure, attracted few buyers, and expired.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      I use a 97-point marketing system that leaves nothing to chance. Social media marketing blitz reaches thousands of potential buyers. Network activation reaches 500+ agents who can bring qualified buyers. Targeted Facebook and Google ads reach buyers actively searching for homes. Strategic open houses with buyer pre-qualification attract serious buyers. Email marketing campaigns reach qualified buyers in your price range. This comprehensive system ensures your home gets maximum exposure to qualified buyers. This is what $5,000+ buys you. This is what your previous agent DIDN\'T provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4">Follow-Up: Zero vs. Aggressive</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent had zero follow-up. Buyers saw your home, but your agent never followed up. Feedback disappeared. Opportunities were lost. Showings happened, but nothing came of them. Your agent didn\'t know why. They didn't care. They moved on to the next listing.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      I have an aggressive follow-up system that ensures every showing is tracked, every buyer is contacted, and every opportunity is maximized. I follow up within 2 hours of every showing. I collect feedback from every buyer. I create urgency through buyer psychology tactics. I don't wait for offers. I create them. I don't accept lowball offers. I negotiate them up. This aggressive follow-up is what turns showings into offers and offers into sales. This is how I get 98.7% of asking price average. This is how your previous agent got you expired.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4">Attention: 2.1% vs. 100%</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent had 47+ listings. You got 2.1% of their attention. They couldn\'t afford to invest $5,000+ in every listing. They couldn't provide aggressive follow-up on every showing. They couldn't manage every detail. They spread themselves thin, hoping something would stick. Your listing got lost in the shuffle.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      I take maximum 6 listings at a time. You get 100% focus. Every listing gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance. This focus is what separates successful sales from homes that DIDN\'T sell. This focus is what delivers results. This is what your previous agent didn\'t provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4">Results: Expired vs. Sold</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent got you expired. 63 days on market. 37 showings. 5 price drops. Zero offers. Then your home didn't sell, and they made $0 while you lost $4,964 per month in holding costs. That's the result of minimal marketing, zero follow-up, and 2.1% attention.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      I get you sold. 19 day average to contract. 98.7% of asking price. SOLD. That's the result of $5,000+ investment, aggressive follow-up, and 100% focus. The difference isn't subtle. It's dramatic. And it's why I sell homes that DIDN\'T sell while they got you expired.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">The Real Cost of Working with the Wrong Agent</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  The comparison above shows the difference in approach. But what's the real cost of working with the wrong agent?
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <h3 className="text-2xl font-black mb-4 text-red-800">Your Previous Agent's Cost to You</h3>
                    <ul className="space-y-3 text-lg text-gray-700 mb-4">
                      <li>• $4,964/month in holding costs while listing sat expired</li>
                      <li>• $14,892 in lost holding costs over 3 months</li>
                      <li>• Lost opportunity cost - could have sold and moved on</li>
                      <li>• Emotional toll of failed listing</li>
                      <li>• Stigma of HOME THAT DIDN\'T SELL making future sale harder</li>
                      <li>• Market depreciation while listing sat</li>
                    </ul>
                    <p className="text-xl font-bold text-red-600">
                      Total Cost: $14,892+ and counting
                    </p>
                  </div>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="text-2xl font-black mb-4 text-green-800">My Investment in Your Success</h3>
                    <ul className="space-y-3 text-lg text-gray-700 mb-4">
                      <li>• $5,000+ in professional marketing</li>
                      <li>• 100% focus on your listing</li>
                      <li>• Aggressive follow-up system</li>
                      <li>• Strategic negotiation to maximize price</li>
                      <li>• Complete escrow management</li>
                      <li>• Proven results: 19 day average, 98.7% of asking</li>
                    </ul>
                    <p className="text-xl font-bold text-green-600">
                      Result: SOLD in 19 days average
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 text-center">
                  The real cost isn't just the holding costs. It's the lost opportunity, the emotional toll, and the stigma. Working with the right agent eliminates these costs. Working with the wrong agent multiplies them. The choice is obvious.
                </p>
              </div>
              <div className="mt-12 bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY TO FIRE YOUR AGENT?
                </h2>
                <LeadForm
                  source="comparison"
                  buttonText="HIRE ME NOW"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
