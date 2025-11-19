import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
export const metadata = {
  title: 'Las Vegas Condos | Dr. Jan Duffy - failed listing specialist',
  description:
    'Expert help selling expired Las Vegas condos. Dr. Jan Duffy has sold 47 HOMES THAT DIDN'T SELL in 19 days average at 98.7% of asking price. Get your condo sold fast.',
  alternates: {
    canonical: '/condos',
  },
}
export default function LasVegasCondosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Las Vegas Condos', url: '/condos' },
        ]}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                LAS VEGAS CONDOS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired Las Vegas condos fast and at top dollar
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  If your Las Vegas condo home didn't sell, you're not alone. Condos face unique challenges in the Las Vegas market - from HOA restrictions to seasonal demand fluctuations to competition from new construction. Many agents don't understand the condo market. They use the same strategies for condos as they do for single-family homes, and the results are predictable: HOMES THAT DIDN'T SELL, frustrated sellers, and lost money. <a href="/why-expire" className="text-primary font-semibold hover:underline">Learn why homes fail to sell</a> and what your previous agent did wrong.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired condos in Las Vegas. I understand the unique challenges condos face. I know how to market them effectively. I know how to overcome HOA restrictions, seasonal demand issues, and competition from new construction. I've sold expired condos in The Strip, Summerlin, Henderson, and throughout Las Vegas. Fast. At top dollar. With zero excuses. See <a href="/services" className="text-primary font-semibold hover:underline">my complete services</a> and learn about <a href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process</a>.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The Las Vegas condo market is complex. High-rise condos on The Strip compete with luxury resorts. Mid-rise condos in Summerlin compete with new construction. Condo hotels compete with traditional hotels. Each requires a different strategy. Most agents don't understand this. They use a one-size-fits-all approach, and condos expire. I use targeted strategies for each condo type, and condos sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Las Vegas Condos Expire</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas condos expire for the same reasons single-family homes expire - poor marketing, minimal investment, and zero follow-up. But condos face additional challenges that most agents don't understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">HOA Restrictions</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Many Las Vegas condos have strict HOA restrictions that limit marketing options. No signs. Limited open houses. Restricted photography. Most agents don't know how to work within these restrictions. They try to market condos like single-family homes, hit restrictions, and give up. I know how to market condos effectively within HOA restrictions. I use digital marketing, network activation, and targeted advertising that doesn't violate HOA rules.
                </p>
                <h3 className="text-2xl font-bold mb-3">Seasonal Demand Fluctuations</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas condos face seasonal demand fluctuations. Summer is slow. Winter is busy. Holiday seasons are unpredictable. Most agents don't adjust their strategies for seasonal demand. They market the same way year-round, and condos expire during slow seasons. I adjust my marketing strategies based on seasonal demand. I know when to push, when to pull back, and when to pivot.
                </p>
                <h3 className="text-2xl font-bold mb-3">Competition from New Construction</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has constant new construction. New condos compete with existing condos. New amenities compete with older amenities. New pricing competes with older pricing. Most agents don't know how to position existing condos against new construction. I know how to highlight unique features, emphasize established communities, and position existing condos competitively against new construction.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Las Vegas Condo Expertise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired condos throughout Las Vegas - from luxury high-rises on The Strip to mid-rise condos in Summerlin to condo hotels throughout the valley. I understand the unique challenges each condo type faces, and I have proven strategies to overcome them.
                </p>
                <h3 className="text-2xl font-bold mb-3">High-Rise Condos</h3>
                <p className="text-lg text-gray-700 mb-4">
                  High-rise condos on The Strip and in luxury areas require sophisticated marketing. Buyers expect luxury amenities, professional photography, and exclusive access. Most agents don't invest in the marketing high-rise condos require. I invest $5,000+ in professional media, luxury staging, and exclusive marketing that attracts high-end buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Mid-Rise Condos & Lofts</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Mid-rise condos and lofts in Summerlin, Henderson, and other areas require different strategies. Buyers value community, amenities, and value. Most agents don't know how to market these effectively. I use community-focused marketing, amenity highlights, and value positioning that attracts the right buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Condo Hotels</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Condo hotels require unique strategies. Buyers need to understand rental programs, hotel management, and investment potential. Most agents don't understand condo hotels. I specialize in marketing condo hotels to investors and second-home buyers who understand the unique value proposition.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">The Las Vegas Condo Market Reality</h2>
                <p className="text-lg text-gray-700 mb-4">
                  The Las Vegas condo market is competitive. New construction constantly enters the market. Existing condos compete for buyers. HOA restrictions limit marketing options. Seasonal demand fluctuates. Most agents don't understand these dynamics. They use generic strategies, and condos expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Market Statistics</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has thousands of condos on the market at any given time. The Strip alone has hundreds of high-rise condos. Summerlin has hundreds of mid-rise condos. Henderson has hundreds of townhomes and condos. Competition is fierce. Most agents don't know how to compete effectively. I do.
                </p>
                <h3 className="text-2xl font-bold mb-3">Expired Condo Statistics</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Condos expire at similar rates to single-family homes - 20-30% of homes fail to sell. But condos face additional challenges that make them harder to sell. HOA restrictions. Seasonal demand. Competition from new construction. Most agents don't address these challenges. I do.
                </p>
                <h3 className="text-2xl font-bold mb-3">The Opportunity</h3>
                <p className="text-lg text-gray-700">
                  Expired condos represent opportunities. Sellers are frustrated. They've tried once and failed. They're ready to work with an agent who actually understands condos. I understand condos. I know how to market them. I know how to sell them. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">
                  EXPLORE LAS VEGAS CONDO CATEGORIES
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  Find expert help for your specific condo type:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a href="/condos/strip" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors">
                    <h3 className="font-bold text-lg mb-2">Strip Condos</h3>
                    <p className="text-sm text-gray-600">Luxury condos on The Strip</p>
                  </a>
                  <a href="/condos/high-rise" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors">
                    <h3 className="font-bold text-lg mb-2">High-Rise Condos</h3>
                    <p className="text-sm text-gray-600">Luxury high-rise buildings</p>
                  </a>
                  <a href="/condos/luxury" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors">
                    <h3 className="font-bold text-lg mb-2">Luxury Condos</h3>
                    <p className="text-sm text-gray-600">Premium luxury properties</p>
                  </a>
                  <a href="/condos/mid-rise" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors">
                    <h3 className="font-bold text-lg mb-2">Mid-Rise Condos</h3>
                    <p className="text-sm text-gray-600">Urban living options</p>
                  </a>
                  <a href="/condos/summerlin" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors">
                    <h3 className="font-bold text-lg mb-2">Summerlin Condos</h3>
                    <p className="text-sm text-gray-600">Summerlin area condos</p>
                  </a>
                  <a href="/condos/henderson" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors">
                    <h3 className="font-bold text-lg mb-2">Henderson Condos</h3>
                    <p className="text-sm text-gray-600">Henderson area condos</p>
                  </a>
                  <a href="/condos/condo-hotels" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors">
                    <h3 className="font-bold text-lg mb-2">Condo Hotels</h3>
                    <p className="text-sm text-gray-600">Investment properties</p>
                  </a>
                  <a href="/condos/townhomes" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors">
                    <h3 className="font-bold text-lg mb-2">Townhomes</h3>
                    <p className="text-sm text-gray-600">Space and value</p>
                  </a>
                  <a href="/condos/sold" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors">
                    <h3 className="font-bold text-lg mb-2">Sold Condos</h3>
                    <p className="text-sm text-gray-600">See real results</p>
                  </a>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR LAS VEGAS CONDO?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Las Vegas condo home didn't sell, don't wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="las_vegas_condos" buttonText="GET MY CONDO SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
