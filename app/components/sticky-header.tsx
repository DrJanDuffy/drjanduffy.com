'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function StickyHeader() {
  return (
    <div className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <span className="font-bold">🔥 7 homes that did not sell - now sold</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">19 Day Average</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">98.7% of Asking</span>
          </div>
          <a
            href="tel:7025001064"
            className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">CALL NOW:</span>
            <span>(702) 500-1064</span>
          </a>
        </div>
      </div>
    </div>
  )
}

