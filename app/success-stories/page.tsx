import { successStories } from '@/lib/data/success-stories'
import { formatCurrency } from '@/lib/utils'
import Header from '@/app/components/header'
import SuccessStoriesCarousel from '@/app/components/success-stories-carousel'
export const metadata = {
  title: 'HOME THAT DIDN'T SELL Success Stories | Dr. Jan Duffy',
  description:
    'Real results from homes that didn't sell - now sold by Dr. Jan Duffy. See how we turned failed listings into successful sales in 14-31 days.',
}
export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
              EXPIRED → SOLD: SUCCESS STORIES
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Real results from frustrated sellers who fired their agents
            </p>
            <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
              <p className="text-lg text-gray-700 mb-6">
                These aren't hypothetical success stories or marketing fluff. These are real HOMES THAT DIDN'T SELL that I sold after other agents failed. Every single one of these homes sat on the market for months, bleeding money, while previous agents collected nothing and sellers lost thousands. Then they called me. I reset the listing, implemented my <a href="/marketing-strategy" className="text-primary font-semibold hover:underline">97-point marketing system</a>, and sold them. Fast. At top dollar. With zero excuses.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The numbers don't lie. I've sold 47 Summerlin sellers who couldn't sell with an average of 19 days to contract and 98.7% of asking price. That's not a coincidence. That's not luck. That's a proven system that works. When you see these success stories, you're seeing what's possible when you work with an agent who actually knows what they're doing. Learn about <a href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process</a> and <a href="/services" className="text-primary font-semibold hover:underline">my complete services</a>.
              </p>
              <h2 className="text-3xl font-black mb-4 mt-8">What Makes These Success Stories Different?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Most agents show you their best-case scenarios - luxury homes in perfect condition that sold quickly. I show you HOMES THAT DIDN'T SELL. Homes that other agents couldn't sell. Homes that sat on the market for 60, 90, 120+ days. Homes that were stigmatized, overpriced, or poorly marketed. Then I show you how I sold them in 14-31 days at 97-99% of asking price.
              </p>
              <h3 className="text-2xl font-bold mb-3">The Common Thread</h3>
              <p className="text-lg text-gray-700 mb-4">
                Every single one of these success stories shares the same pattern: Previous agent used minimal marketing (just MLS posting), didn't invest in professional photography, held maybe one open house, and disappeared. Then I came in, reset everything, implemented my 97-point marketing system, and sold the home. Fast. At top dollar. The difference isn't the home. The difference is the agent.
              </p>
            </div>
            <div className="max-w-6xl mx-auto mb-12">
              <SuccessStoriesCarousel />
            </div>
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-black mb-6 text-center">Complete Success Story Details</h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Below are detailed accounts of homes I've sold. Each story includes the neighborhood, days expired, previous agent, days to sell with me, sale price, and client testimonial.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {successStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-lg shadow-xl p-6 border-2 border-gray-200"
                >
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold">{story.neighborhood}</h3>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                        EXPIRED: {story.daysExpired} Days
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Previous Agent: {story.previousAgent}
                    </p>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expired:</span>
                      <span className="font-bold text-red-600">
                        {story.daysExpired} days
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sold:</span>
                      <span className="font-bold text-green-600">
                        {story.daysSold} days
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Asking:</span>
                      <span className="font-bold">
                        {formatCurrency(story.askingPrice)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sold:</span>
                      <span className="font-bold text-green-600">
                        {formatCurrency(story.soldPrice)} ({story.soldPercentage}%)
                      </span>
                    </div>
                  </div>
                  {story.testimonial && (
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-700 italic">
                        "{story.testimonial}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto mt-12">
              <h2 className="text-3xl font-black mb-6 text-center">The Results Speak for Themselves</h2>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-4xl font-black mb-2">47</h3>
                    <p className="text-lg">homes that didn't sell - now sold</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black mb-2">19</h3>
                    <p className="text-lg">Day Average</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black mb-2">98.7%</h3>
                    <p className="text-lg">Of Asking Price</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-black mb-4">Why These Results Matter</h3>
                <p className="text-lg text-gray-700 mb-4">
                  These aren't cherry-picked success stories. These are real HOMES THAT DIDN'T SELL that I sold after other agents failed. Every single one of these homes had the same problems: poor marketing, minimal investment, zero follow-up. Then I came in, reset everything, and sold them. Fast. At top dollar.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The average HOME THAT DIDN'T SELL in Las Vegas sits for 63+ days before expiring. Then it sits expired for another 30-90 days before someone finally sells it (if they sell it at all). I sell them in 19 days average. That's not a coincidence. That's a proven system.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-6">What Your Success Story Could Look Like</h3>
                <p className="text-lg text-gray-700">
                  Your HOME THAT DIDN'T SELL could be the next success story. The same system that sold these 47 HOMES THAT DIDN'T SELL can sell yours. The same marketing, the same follow-up, the same proven results. The only question is: are you ready to work with an agent who actually delivers results?
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
