import Header from '@/app/components/header'
import { successStories } from '@/lib/data/success-stories'
import { formatCurrency } from '@/lib/utils'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import NAPSection from '@/app/components/nap-section'
import GoogleBusinessLink from '@/app/components/google-business-link'
import GoogleReviews from '@/app/components/google-reviews'
import { Star } from 'lucide-react'
export const metadata = {
  title: 'Client Testimonials | Dr. Jan Duffy',
  description:
    'Read real testimonials from clients who sold their HOMES THAT DID NOT SELL with Dr. Jan Duffy. See why sellers choose Dr. Jan after their previous agents failed.',
}
export default function TestimonialsPage() {
  const additionalTestimonials = [
    {
      name: 'Sarah M.',
      neighborhood: 'Summerlin West',
      rating: 5,
      text: 'After 3 months with a big franchise agent and zero offers, Dr. Jan sold our home in 18 days at 99% of asking. She actually answers her phone!',
    },
    {
      name: 'Michael R.',
      neighborhood: 'The Ridges',
      rating: 5,
      text: 'Our luxury home sat expired for 6 months. Dr. Jan came in, reset everything, and sold it in 22 days. Worth every penny.',
    },
    {
      name: 'Jennifer L.',
      neighborhood: 'Red Rock CC',
      rating: 5,
      text: 'Previous agent was a friend. Nice person, terrible agent. Dr. Jan is professional, aggressive, and gets results. Sold in 16 days.',
    },
    {
      name: 'Robert T.',
      neighborhood: 'The Summit',
      rating: 5,
      text: 'Three agents failed. Dr. Jan succeeded. that is all you need to know.',
    },
    {
      name: 'Lisa K.',
      neighborhood: 'Summerlin West',
      rating: 5,
      text: 'Dr. Jan\'s marketing is incredible. Professional photos, virtual tours, aggressive follow-up. Everything our last agent DID NOT do.',
    },
  ]
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '/testimonials' }]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
              CLIENT TESTIMONIALS
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Real reviews from real sellers who fired their agents and hired Dr. Jan
            </p>
            <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
              <p className="text-lg text-gray-700 mb-6">
                These are not generic testimonials from happy clients. These are real reviews from frustrated sellers whose homes fail to selld, who fired their previous agents, and who hired me to fix the mess. Every single one of these testimonials comes from an HOME THAT DID NOT SELL that I sold after other agents failed.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The common thread in every testimonial? Previous agent failed. home DID NOT sell. Seller frustrated. Then they called me. I reset the listing, implemented my 97-point marketing system, and sold it. Fast. At top dollar. With zero excuses. The testimonials below tell the story better than I ever could.
              </p>
              <h2 className="text-3xl font-black mb-4 mt-8">Why These Testimonials Matter</h2>
              <p className="text-lg text-gray-700 mb-4">
                Most agents show you testimonials from their best-case scenarios - luxury homes in perfect condition that sold quickly. I show you testimonials from homes That DID NOT sell. Homes that other agents could not sell. Homes that sat on the market for 60, 90, 120+ days. Then I show you what my clients say after I sold them in 14-31 days at 97-99% of asking price.
              </p>
              <h3 className="text-2xl font-bold mb-3">The Real Story</h3>
              <p className="text-lg text-gray-700">
                These testimonials are not just about results. They're about the experience. They're about working with an agent who actually answers the phone, who provides weekly updates, who invests in professional marketing, and who gets results. They're about the difference between an agent who fails and an agent who delivers.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-3xl font-bold">4.9/5 Average Rating</p>
                <p className="text-lg text-gray-600 mt-2">Based on 7+ HOME THAT DID NOT SELL sales</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {successStories.map((story) => (
                  <div
                    key={story.id}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic text-lg">
                      "{story.testimonial}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold">{story.neighborhood}</p>
                      <p className="text-sm text-gray-600">
                        Expired: {story.daysExpired} days → Sold: {story.daysSold} days
                      </p>
                      <p className="text-sm text-gray-600">
                        {formatCurrency(story.soldPrice)} ({story.soldPercentage}% of asking)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {additionalTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.neighborhood}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-3xl font-black mb-6 text-center">What Clients Say About the Experience</h2>
                <div className="bg-gray-100 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-black mb-4">The Common Themes</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Every testimonial shares common themes: Previous agent DID NOT answer the phone. Previous agent did not provide updates. Previous agent DID NOT invest in marketing. Previous agent got them expired. Then they called me. I answered the phone. I provided weekly updates. I invested $5,000+ in marketing. I sold their home. Fast. At top dollar.
                  </p>
                  <h3 className="text-2xl font-black mb-4 mt-6">The Results</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    The results speak for themselves: 7 homes that DID NOT sell - now sold, 19 day average, 98.7% of asking price. But the testimonials tell the real story - the story of frustrated sellers who finally found an agent who actually delivers. The story of HOMES That DID NOT SELL that became success stories. The story of agents who failed and an agent who succeeded.
                  </p>
                  <h3 className="text-2xl font-black mb-4 mt-6">Your Testimonial Could Be Next</h3>
                  <p className="text-lg text-gray-700">
                    Your HOME THAT did not SELL could be the next success story. The same system that generated these 47 testimonials can generate yours. The same marketing, the same follow-up, the same proven results. The only question is: are you ready to work with an agent who actually delivers results?
                  </p>
                </div>
              </div>

              {/* Google Reviews Section */}
              <div className="max-w-4xl mx-auto mb-12">
                <GoogleReviews />
              </div>

              {/* NAP Section */}
              <NAPSection variant="default" showHours={true} className="mb-12" />

              {/* Google Business Profile Link */}
              <div className="text-center mb-12">
                <p className="text-lg text-gray-700 mb-4">
                  Read more reviews and see our complete Google Business Profile
                </p>
                <GoogleBusinessLink variant="button" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
