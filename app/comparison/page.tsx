import StickyHeader from '@/app/components/sticky-header'
import LeadForm from '@/app/components/lead-form'
import { Check, X } from 'lucide-react'

export const metadata = {
  title: 'Your Agent vs Me | Dr. Jan Duffy',
  description:
    'Side-by-side comparison of what your previous agent did vs. what Dr. Jan Duffy does to sell expired listings.',
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
      <StickyHeader />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-12">
              YOUR AGENT VS ME
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Side-by-side comparison of what your previous agent did vs. what I do to sell expired listings. The difference is obvious.
            </p>

            <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
              <p className="text-lg text-gray-700 mb-6">
                Your listing expired for a reason. Your previous agent made mistakes. They used minimal marketing, didn't invest in professional photography, held maybe one open house, and disappeared. Then your listing expired, and they made $0 while you lost $4,964 per month in holding costs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I do things differently. I invest $5,000+ in marketing per listing. I take maximum 6 listings at a time so you get 100% focus. I use a 97-point marketing system that leaves nothing to chance. And I guarantee results - 30 days or I work free, 98% of asking or I cut my commission.
              </p>
              <p className="text-lg text-gray-700">
                The comparison below shows exactly what your previous agent did vs. what I do. The difference isn't subtle. It's dramatic. And it's why I sell expired listings in 19 days average while they got you expired.
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

              <div className="mt-12 bg-gray-100 p-8 rounded-lg">
                <h2 className="text-3xl font-black mb-4 text-center">The Investment Difference</h2>
                <p className="text-lg text-gray-700 mb-4">
                  The difference in investment is dramatic: $100 vs. $5,000+. But the difference in results is even more dramatic: expired vs. sold, $0 commission vs. full commission, $4,964/month loss vs. top dollar sale.
                </p>
                <h3 className="text-2xl font-bold mb-3">Why I Invest More</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I invest more because I know it works. Professional photography increases showing requests by 300% and sale price by 5-10%. Strategic marketing brings qualified buyers. Aggressive follow-up creates urgency. The $5,000+ investment pays for itself through faster sales and higher prices.
                </p>
                <h3 className="text-2xl font-bold mb-3">Why Your Agent Invested Less</h3>
                <p className="text-lg text-gray-700">
                  Your previous agent invested less because they were juggling 47 other listings. They couldn't afford to invest $5,000+ in every listing. So they invested $100, hoped for the best, and got you expired. That's not how you sell homes. That's how you fail.
                </p>
              </div>

              <div className="mt-12 bg-primary text-primary-foreground p-8 rounded-lg text-center">
                <h2 className="text-3xl font-black mb-4">RESULTS GUARANTEE</h2>
                <p className="text-2xl font-bold mb-2">
                  Sold in 30 Days or I Work Free
                </p>
                <p className="text-xl mb-2">98% of Asking or I Cut Commission</p>
                <p className="text-lg">Weekly Updates or $500 Credit</p>
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

