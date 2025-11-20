'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import LeadForm from './lead-form'
import LiveCounter from './live-counter'
import { trackViewContent } from '@/lib/config/analytics'

export default function HeroSection() {
  useEffect(() => {
    trackViewContent('homepage', 0)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Split background effect */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-red-900/20 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl font-black mb-4">DID NOT SELL</div>
            <div className="text-2xl opacity-75">63 Days</div>
          </div>
        </div>
        <div className="bg-green-900/20 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl font-black mb-4">SOLD</div>
            <div className="text-2xl opacity-75">19 Days</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              YOUR HOUSE did not FAIL.
              <br />
              <span className="text-red-500">YOUR AGENT DID.</span>
            </div>
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
              {/* Dr. Jan Duffy Headshot */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                  <Image
                    src="/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg"
                    alt="Dr. Janet Duffy, Las Vegas real estate agent specializing in homes that did not sell"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="text-xl md:text-2xl mb-4 font-semibold">
                Your house will not sell? I specialize in selling homes other agents could not. 7 previously unsold homes sold - average 19 days to contract, 98.7% of asking price.
              </p>
              <p className="text-lg md:text-xl mb-4 font-semibold">
                Summerlin West luxury specialist: The Ridges, The Summit, Red Rock Country Club, and newer villages.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6 text-lg">
                <a href="tel:7025001064" className="font-bold hover:underline">Call 702-500-1064</a>
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                Dr. Jan Duffy | Berkshire Hathaway HomeServices | License #S.0197614.LLC
              </p>
              <LiveCounter />
            </div>

            <div className="max-w-md mx-auto">
              <LeadForm
                source="hero"
                buttonText="GET HELP SELLING MY HOME"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

