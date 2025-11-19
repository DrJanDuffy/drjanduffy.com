'use client'

import { X, Check } from 'lucide-react'

export default function WhyExpiredSection() {
  const failures = [
    { text: 'iPhone Photos in 2025', icon: X },
    { text: 'One Open House (Maybe)', icon: X },
    { text: '"Posted to MLS" Strategy', icon: X },
    { text: 'Zero Follow-Up System', icon: X },
    { text: 'No Buyer Targeting', icon: X },
    { text: 'Discount Marketing', icon: X },
    { text: 'Part-Time Effort', icon: X },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          WHY YOUR HOME DIDN'T SELL
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          (Spoiler: It's Not Your House)
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {failures.map((failure, index) => {
              const Icon = failure.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-red-50 border-2 border-red-200 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <span className="text-xl font-bold text-gray-800">
                    {failure.text}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
            <p className="text-2xl font-bold mb-2">Your Agent Made $0</p>
            <p className="text-4xl font-black text-red-400 mb-4">
              You Lost $4,964/Month
            </p>
            <p className="text-3xl font-bold">ANGRY YET?</p>
          </div>

          <div className="text-center mt-8">
            <a
              href="/why-expire"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              See What I Do Differently →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

