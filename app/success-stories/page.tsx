import { successStories } from '@/lib/data/success-stories'
import { formatCurrency } from '@/lib/utils'
import StickyHeader from '@/app/components/sticky-header'
import SuccessStoriesCarousel from '@/app/components/success-stories-carousel'

export const metadata = {
  title: 'Expired Listing Success Stories | Dr. Jan Duffy',
  description:
    'Real results from expired listings sold by Dr. Jan Duffy. See how we turned failed listings into successful sales in 14-31 days.',
}

export default function SuccessStoriesPage() {
  return (
    <>
      <StickyHeader />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
              EXPIRED → SOLD: SUCCESS STORIES
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Real results from frustrated sellers who fired their agents
            </p>

            <div className="max-w-6xl mx-auto mb-12">
              <SuccessStoriesCarousel />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>
      </div>
    </>
  )
}

