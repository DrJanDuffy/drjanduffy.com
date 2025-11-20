'use client'

import { MapPin, Navigation } from 'lucide-react'

interface GoogleMapEmbedProps {
  address?: string
  className?: string
  height?: string
}

export default function GoogleMapEmbed({
  address = '1180 N Town Center Dr, Las Vegas, NV 89144',
  className = '',
  height = '400px',
}: GoogleMapEmbedProps) {
  // Google Maps embed URL - using query parameter format for reliable embedding
  // Address: 1180 N Town Center Dr, Las Vegas, NV 89144
  const mapEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL || 
    `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`

  return (
    <div className={`relative ${className}`}>
      <div className="rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg" style={{ height }}>
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dr. Janet Duffy Real Estate Location"
          className="w-full"
        />
      </div>
      <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
        >
          <Navigation className="w-5 h-5" />
          Get Directions
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
        >
          <MapPin className="w-5 h-5" />
          View on Google Maps
        </a>
      </div>
    </div>
  )
}

