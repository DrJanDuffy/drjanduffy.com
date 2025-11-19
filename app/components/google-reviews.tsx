import Script from 'next/script'
import { Star, ExternalLink } from 'lucide-react'
import GoogleBusinessLink from './google-business-link'

interface Review {
  author: string
  rating: number
  text: string
  date?: string
}

interface GoogleReviewsProps {
  reviews?: Review[]
  showSchema?: boolean
}

export default function GoogleReviews({ reviews, showSchema = true }: GoogleReviewsProps) {
  // Default reviews if none provided (these should match your actual Google Reviews)
  const defaultReviews: Review[] = reviews || [
    {
      author: 'Summerlin West Seller',
      rating: 5,
      text: 'Dr. Jan sold my home that didn\'t sell in 16 days at 99% of asking. My previous agent had it for 90 days and it expired. The difference was night and day.',
      date: '2025-01-15',
    },
    {
      author: 'The Ridges Seller',
      rating: 5,
      text: 'I was skeptical after my home didn\'t sell. But Dr. Jan\'s marketing was incredible. Professional photos, aggressive follow-up, strategic negotiation. Sold in 19 days.',
      date: '2025-01-10',
    },
    {
      author: 'Red Rock Country Club Seller',
      rating: 5,
      text: 'The weekly updates were amazing. I always knew what was happening. The transparency and accountability were refreshing after my previous agent disappeared.',
      date: '2025-01-05',
    },
  ]

  const aggregateRating = {
    ratingValue: '5',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  }

  return (
    <>
      {showSchema && (
        <Script
          id="review-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}#business`,
            name: 'Dr. Janet Duffy Real Estate',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: aggregateRating.ratingValue,
              reviewCount: aggregateRating.reviewCount,
              bestRating: aggregateRating.bestRating,
              worstRating: aggregateRating.worstRating,
            },
            review: defaultReviews.map((review) => ({
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: review.author,
              },
              datePublished: review.date || new Date().toISOString().split('T')[0],
              reviewBody: review.text,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating.toString(),
                bestRating: '5',
                worstRating: '1',
              },
            })),
          })}
        </Script>
      )}

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Google Reviews & Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                See what clients say about working with Dr. Jan Duffy
              </p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-3xl font-black">{aggregateRating.ratingValue}.0</div>
                  <div className="text-sm text-gray-600">
                    Based on {aggregateRating.reviewCount} Google Reviews
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <GoogleBusinessLink variant="button" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {defaultReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                    <div>
                      <p className="font-bold text-gray-900">{review.author}</p>
                      {review.date && (
                        <p className="text-sm text-gray-600">{review.date}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span>Google</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                Read more reviews and see our complete Google Business Profile
              </p>
              <GoogleBusinessLink variant="button" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

