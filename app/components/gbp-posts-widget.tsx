import Link from 'next/link'
import { ExternalLink, Calendar } from 'lucide-react'
import GoogleBusinessLink from './google-business-link'

interface GBPPost {
  title: string
  description: string
  date?: string
  type?: 'update' | 'offer' | 'event' | 'product'
}

interface GBPPostsWidgetProps {
  posts?: GBPPost[]
  showTitle?: boolean
  maxPosts?: number
}

export default function GBPPostsWidget({
  posts,
  showTitle = true,
  maxPosts = 3,
}: GBPPostsWidgetProps) {
  // Default posts - replace with actual GBP Posts data
  const defaultPosts: GBPPost[] = posts || [
    {
      title: 'New Year, New Opportunities for Sellers',
      description: 'January 2026 is the perfect time to reset your home that didn\'t sell. Spring buyers are already looking, and we\'re here to help you get top dollar.',
      date: '2026-01-15',
      type: 'update',
    },
    {
      title: 'Free Home Valuation for Las Vegas Sellers',
      description: 'Get a free, no-obligation home valuation. Understand your home\'s true market value and what it could sell for with the right marketing strategy.',
      date: '2026-01-10',
      type: 'offer',
    },
    {
      title: '47 Homes That Didn\'t Sell - Now Sold',
      description: 'We\'ve helped 47 Summerlin sellers who couldn\'t sell with their previous agent. Average 19 days to contract, 98.7% of asking price.',
      date: '2026-01-05',
      type: 'update',
    },
  ]

  const displayPosts = defaultPosts.slice(0, maxPosts)

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
      {showTitle && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black">Latest Updates & Offers</h2>
          <GoogleBusinessLink variant="text" />
        </div>
      )}
      <div className="space-y-6">
        {displayPosts.map((post, index) => (
          <div
            key={index}
            className="border-l-4 border-primary pl-4 py-2 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {post.type === 'offer' && (
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                      OFFER
                    </span>
                  )}
                  {post.type === 'event' && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                      EVENT
                    </span>
                  )}
                  {post.date && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 mb-4">
          Stay updated with our latest news, offers, and real estate tips
        </p>
        <GoogleBusinessLink variant="button" />
      </div>
    </div>
  )
}

