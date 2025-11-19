import Header from '@/app/components/header'
import { successStories } from '@/lib/data/success-stories'
import { formatCurrency } from '@/lib/utils'
import Link from 'next/link'
export const metadata = {
  title: 'Case Studies | HOME THAT DIDN\'T SELL Case Studies | Dr. Jan Duffy',
  description:
    'Detailed case studies of homes that didn\'t sell - now sold by Dr. Jan Duffy. See how failed listings became successful sales.',
}
export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                DETAILED CASE STUDIES
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                In-depth analysis of how HOMES THAT DIDN'T SELL became successful sales
              </p>
              <div className="space-y-12">
                {successStories.map((story) => (
                  <div
                    key={story.id}
                    className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-black mb-2">{story.neighborhood}</h2>
                        <p className="text-gray-600">
                          Previous Agent: {story.previousAgent}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold">
                          EXPIRED: {story.daysExpired} Days
                        </span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">The Problem</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• home didn't sell after {story.daysExpired} days</li>
                          <li>• Previous agent: {story.previousAgent}</li>
                          <li>• Zero offers during listing period</li>
                          <li>• Stigma from expired status</li>
                          <li>• Seller frustration and lost time</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">The Solution</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Complete MLS reset with fresh listing</li>
                          <li>• Professional photography and staging</li>
                          <li>• 97-point marketing system activation</li>
                          <li>• Aggressive follow-up on all showings</li>
                          <li>• Strategic negotiation tactics</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary text-primary-foreground p-6 rounded-lg mb-6">
                      <h3 className="text-2xl font-black mb-4 text-center">THE RESULTS</h3>
                      <div className="grid md:grid-cols-4 gap-4 text-center">
                        <div>
                          <p className="text-3xl font-black mb-1">{story.daysSold}</p>
                          <p className="text-sm opacity-90">Days to Sell</p>
                        </div>
                        <div>
                          <p className="text-3xl font-black mb-1">{story.soldPercentage}%</p>
                          <p className="text-sm opacity-90">Of Asking</p>
                        </div>
                        <div>
                          <p className="text-3xl font-black mb-1">
                            {formatCurrency(story.soldPrice)}
                          </p>
                          <p className="text-sm opacity-90">Sale Price</p>
                        </div>
                        <div>
                          <p className="text-3xl font-black mb-1">
                            {story.daysExpired - story.daysSold}
                          </p>
                          <p className="text-sm opacity-90">Days Saved</p>
                        </div>
                      </div>
                    </div>
                    {story.testimonial && (
                      <div className="border-t pt-6">
                        <h3 className="text-xl font-bold mb-3">Client Testimonial</h3>
                        <p className="text-lg text-gray-700 italic">
                          "{story.testimonial}"
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  href="/success-stories"
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  View All Success Stories →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
