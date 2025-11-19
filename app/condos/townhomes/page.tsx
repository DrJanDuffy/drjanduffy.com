import StickyHeader from '@/app/components/sticky-header'
import Navigation from '@/app/components/navigation'
import LeadForm from '@/app/components/lead-form'

export const metadata = {
  title: 'Las Vegas Townhomes | Dr. Jan Duffy',
  description:
    'Expert help selling expired Las Vegas townhomes. Townhomes offer space and value. 30-day guarantee or work free.',
}

export default function TownhomesPage() {
  return (
    <>
      <StickyHeader />
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                LAS VEGAS TOWNHOMES
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired Las Vegas townhomes - space, value, and community living
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas townhomes offer space, value, and community living in a single-family home alternative. If your townhome listing expired, you're not alone. Townhomes face unique challenges - from competition with single-family homes to HOA restrictions to buyers who value space and affordability. Most agents don't understand townhomes. They use generic strategies, and townhomes expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired townhomes. I understand the townhome market. I know how to market space and value. I know how to attract buyers seeking single-family home alternatives. I've sold expired townhomes throughout Las Vegas. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Townhomes require space-focused marketing. Professional photography highlighting square footage and layout. Strategic positioning emphasizing value compared to single-family homes. Emphasis on community living and low maintenance. Most agents don't understand this. They use generic strategies, and townhomes expire. I use space-focused marketing, highlight value, and attract buyers seeking space and affordability. Townhomes sell. Fast. At top dollar.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Townhomes Expire</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes expire for the same reasons other properties expire - poor marketing, minimal investment, and zero follow-up. But townhomes face additional challenges that most agents don't understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Space Marketing Challenges</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer space. Multiple levels. Square footage. Layout flexibility. Most agents don't market space effectively. They don't highlight multiple levels. They don't showcase square footage. They don't emphasize layout flexibility. I market space effectively. I highlight multiple levels, showcase square footage, and emphasize layout flexibility that attracts space-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Value Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer value compared to single-family homes. Lower prices. Lower maintenance. Community amenities. Most agents don't position value effectively. They don't highlight lower prices. They don't showcase lower maintenance. They don't emphasize community amenities. I position value effectively. I highlight lower prices, showcase lower maintenance, and emphasize community amenities that attract value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Single-Family Home Competition</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes compete with single-family homes. Buyers compare space, value, and features. Most agents don't know how to position townhomes against single-family homes. They don't highlight advantages. They don't showcase benefits. They don't emphasize value. I know how to position townhomes competitively. I highlight advantages, showcase benefits, and emphasize value that attracts buyers seeking single-family home alternatives.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Townhome Expertise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired townhomes throughout Las Vegas. I understand the townhome market. I know how to market space and value. I know how to attract buyers seeking single-family home alternatives.
                </p>
                <h3 className="text-2xl font-bold mb-3">Space-Focused Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer space. I market this space effectively. I highlight multiple levels, showcase square footage, and emphasize layout flexibility that attracts space-conscious buyers. Most agents don't do this. They use generic marketing, and townhomes expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Value Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer value. I position this value effectively. I highlight lower prices, showcase lower maintenance, and emphasize community amenities that attract value-conscious buyers. Most agents don't do this. They use generic positioning, and townhomes expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Single-Family Home Alternative Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer single-family home alternatives. I position townhomes by highlighting advantages, showcasing benefits, and emphasizing value compared to single-family homes. Most agents don't do this. They use generic positioning, and townhomes expire.
                </p>
              </div>

              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular Townhome Areas</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has many townhome areas. Each area has unique features, amenities, and buyer appeal. I've sold expired townhomes in many of these areas. I understand what makes each area unique. I know how to market each area effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Summerlin Townhomes</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin offers townhomes with community amenities, established neighborhoods, and prime location. I've sold expired Summerlin townhomes by highlighting community amenities, showcasing established neighborhoods, and positioning townhomes competitively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Henderson Townhomes</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson offers townhomes with family-friendly amenities, value positioning, and suburban appeal. I've sold expired Henderson townhomes by emphasizing family-friendly amenities, highlighting value, and targeting family-conscious buyers.
                </p>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12 text-center">
                <h2 className="text-3xl font-black mb-4">30-DAY GUARANTEE</h2>
                <p className="text-2xl font-bold mb-2">
                  Sold in 30 Days or I Work Free
                </p>
                <p className="text-lg opacity-90">
                  No excuses. No exceptions. If your townhome doesn't sell in 30 days, I continue working at no additional cost until it sells. That's how confident I am in my townhome marketing system.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR TOWNHOME?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Las Vegas townhome listing expired, don't wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="townhomes" buttonText="GET MY TOWNHOME SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

