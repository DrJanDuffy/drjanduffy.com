'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { successStories } from '@/lib/data/success-stories'
import { formatCurrency } from '@/lib/utils'

export default function SuccessStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length)
  }

  const currentStory = successStories[currentIndex]

  return (
    <div className="relative bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-black">SUCCESS STORIES</h2>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold">{currentStory.neighborhood}</h3>
            <p className="text-gray-600">Previous Agent: {currentStory.previousAgent}</p>
          </div>
          <div className="text-right">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
              EXPIRED: {currentStory.daysExpired} Days
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Expired</div>
            <div className="text-2xl font-bold text-red-600">
              {currentStory.daysExpired} days
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Sold</div>
            <div className="text-2xl font-bold text-green-700">
              {currentStory.daysSold} days
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Asking Price:</span>
            <span className="font-bold">{formatCurrency(currentStory.askingPrice)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sold Price:</span>
            <span className="font-bold text-green-700">
              {formatCurrency(currentStory.soldPrice)} ({currentStory.soldPercentage}%)
            </span>
          </div>
        </div>

        {currentStory.testimonial && (
          <div className="border-t pt-4">
            <p className="text-gray-700 italic">"{currentStory.testimonial}"</p>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2">
        {successStories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Go to story ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

