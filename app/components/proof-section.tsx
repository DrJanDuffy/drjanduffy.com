'use client'

import { successStories } from '@/lib/data/success-stories'
import { formatCurrency } from '@/lib/utils'

export default function ProofSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          DIDN\'T SELL → SOLD: RECENT WINS
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Real results from frustrated sellers who fired their agents
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.slice(0, 3).map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-xl p-6 border-2 border-gray-200"
            >
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold">{story.neighborhood}</h3>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                    didn\'t SELL: {story.daysExpired} Days
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Previous Agent: {story.previousAgent}
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Didn't Sell:</span>
                  <span className="font-bold text-red-600">
                    {story.daysExpired} days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sold:</span>
                  <span className="font-bold text-green-700">
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
                  <span className="font-bold text-green-700">
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

        <div className="text-center mt-12">
          <a
            href="/success-stories"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
          >
            View All Success Stories →
          </a>
        </div>
      </div>
    </section>
  )
}

