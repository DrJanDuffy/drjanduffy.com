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
                  <h2 className="text-2xl font-black mb-4 text-red-800">
                    Your Agent's Investment
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• $37 on photos</li>
                    <li>• 1 open house</li>
                    <li>• MLS posting</li>
                    <li>• Zero follow-up</li>
                  </ul>
                  <p className="mt-4 text-xl font-bold text-red-600">
                    Total: ~$100
                  </p>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <h2 className="text-2xl font-black mb-4 text-green-800">
                    My Investment
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• $3,700 on professional media</li>
                    <li>• Strategic open houses</li>
                    <li>• 97-point marketing system</li>
                    <li>• Aggressive follow-up</li>
                  </ul>
                  <p className="mt-4 text-xl font-bold text-green-600">
                    Total: ~$5,000+
                  </p>
                </div>
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

