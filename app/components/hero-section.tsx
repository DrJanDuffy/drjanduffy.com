'use client'

import LeadForm from './lead-form'
import LiveCounter from './live-counter'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Split background effect */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-red-900/20 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl font-black mb-4">EXPIRED</div>
            <div className="text-2xl opacity-75">63 Days</div>
          </div>
        </div>
        <div className="bg-green-900/20 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl font-black mb-4">SOLD</div>
            <div className="text-2xl opacity-75">14 Days</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              YOUR HOUSE DIDN'T FAIL.
              <br />
              <span className="text-red-500">YOUR AGENT DID.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-semibold">
              63 Days on Market. 37 Showings. 5 Price Drops.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-red-400 mb-6">
              ZERO OFFERS.
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Sound Familiar?
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border-2 border-white/20">
            <div className="text-center mb-8">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                I've Sold 47 Expired Summerlin Listings
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6 text-lg">
                <span className="font-semibold">19 Day Average</span>
                <span>|</span>
                <span className="font-semibold">98.7% of Asking</span>
              </div>
              <LiveCounter />
            </div>

            <div className="max-w-md mx-auto">
              <LeadForm
                source="hero"
                buttonText="GET MY FAILED LISTING FIXED"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

