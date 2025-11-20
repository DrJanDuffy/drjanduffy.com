import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Summerlin Real Estate Agent | Luxury Home Specialist | The Ridges',
  description:
    'Summerlin real estate agent specializing in The Ridges, Red Rock Country Club, The Summit. 7 homes that did not sell - now sold. Local expert. Call 702-500-1064',
  alternates: {
    canonical: 'https://www.drjanduffy.com/summerlin-real-estate-agent',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/summerlin-real-estate-agent',
    title: 'Summerlin Real Estate Agent | Luxury Home Specialist | The Ridges',
    description: 'Summerlin real estate agent specializing in The Ridges, Red Rock Country Club, The Summit. 7 homes that did not sell - now sold.',
  },
  twitter: {
    card: 'summary',
    title: 'Summerlin Real Estate Agent | Luxury Home Specialist',
    description: 'Specializing in The Ridges, Red Rock Country Club, The Summit. 7 homes that did not sell - now sold.',
  },
}

export default function SummerlinAgentPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Summerlin Real Estate Agent', url: '/summerlin-real-estate-agent' }
      ]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Summerlin Real Estate Agent - Luxury Home Specialist
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Local expert in The Ridges, Red Rock Country Club, The Summit, and newer Summerlin villages. 7 homes that did not sell - now sold.
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Looking for a Summerlin real estate agent? You need someone who knows the market, understands luxury buyers, and has proven results. I specialize in Summerlin West luxury homes: The Ridges, Red Rock Country Club, The Summit, and newer villages. 7 homes that did not sell - now sold. Local expertise that gets results.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're buying or selling in Summerlin, you need an agent who understands the unique dynamics of this luxury market. Price ranges from $800K to $10M+. Buyer demographics are different. Marketing needs are different. Negotiation strategies are different. This is why you need a Summerlin specialist, not just any Las Vegas agent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Summerlin West Luxury Property Expert
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Summerlin West is Las Vegas's premier luxury community. With price ranges from $800K to $10M+, this market requires specialized expertise. I've sold homes in every major Summerlin West neighborhood:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Link href="/neighborhoods/the-ridges" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                    <h3 className="text-2xl font-black mb-3">The Ridges</h3>
                    <p className="text-gray-700 mb-2">
                      Ultra-luxury estates, gated communities, mountain views. Price range: $1.5M-$10M+.
                    </p>
                    <p className="text-sm text-gray-600">
                      Specialized marketing for high-net-worth buyers, off-market access, builder relationships.
                    </p>
                  </Link>
                  <Link href="/neighborhoods/red-rock-country-club" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                    <h3 className="text-2xl font-black mb-3">Red Rock Country Club</h3>
                    <p className="text-gray-700 mb-2">
                      Golf course homes, resort-style living, luxury amenities. Price range: $800K-$5M+.
                    </p>
                    <p className="text-sm text-gray-600">
                      Golf course property expertise, lifestyle marketing, active adult buyer focus.
                    </p>
                  </Link>
                  <Link href="/neighborhoods/the-summit" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                    <h3 className="text-2xl font-black mb-3">The Summit</h3>
                    <p className="text-gray-700 mb-2">
                      Luxury condos, high-rise living, Strip views. Price range: $500K-$3M+.
                    </p>
                    <p className="text-sm text-gray-600">
                      High-rise expertise, urban luxury marketing, second-home buyer focus.
                    </p>
                  </Link>
                  <Link href="/neighborhoods/summerlin-west" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                    <h3 className="text-2xl font-black mb-3">Newer Summerlin Villages</h3>
                    <p className="text-gray-700 mb-2">
                      New construction, master-planned communities, modern amenities. Price range: $600K-$2M+.
                    </p>
                    <p className="text-sm text-gray-600">
                      Builder relationships (Century, KB, Lennar, Pulte, Toll), new construction expertise.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                The Ridges | Red Rock Country Club | The Summit
              </h2>
              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">The Ridges</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    The Ridges is Summerlin's most exclusive community. Ultra-luxury estates from $1.5M to $10M+. Gated communities, mountain views, private golf courses. This market requires specialized marketing for high-net-worth buyers, off-market property access, and luxury home expertise.
                  </p>
                  <p className="text-lg text-gray-700">
                    I've sold multiple homes in The Ridges, understanding the unique buyer psychology and marketing needs. Luxury buyers want privacy, exclusivity, and quality. They do not respond to generic marketing. They respond to targeted, high-end marketing that showcases the lifestyle, not just the home.
                  </p>
                </div>

                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">Red Rock Country Club</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Red Rock Country Club offers golf course living at its finest. Homes from $800K to $5M+. Resort-style amenities, championship golf, active adult communities. This market attracts buyers who want the golf course lifestyle.
                  </p>
                  <p className="text-lg text-gray-700">
                    I specialize in golf course property marketing, understanding that buyers here want the lifestyle as much as the home. Professional photography that showcases golf course views, resort amenities, and the active lifestyle. Strategic marketing that reaches golf enthusiasts and active adult buyers.
                  </p>
                </div>

                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">The Summit</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    The Summit offers luxury high-rise living with Strip views. Condos from $500K to $3M+. Urban luxury, modern amenities, second-home market. This market attracts buyers who want the convenience of high-rise living with luxury finishes.
                  </p>
                  <p className="text-lg text-gray-700">
                    I understand high-rise marketing, knowing that buyers here want views, amenities, and modern design. Professional photography that showcases Strip views, building amenities, and luxury finishes. Strategic marketing that reaches second-home buyers and urban luxury enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Why Choose a Summerlin Specialist
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Summerlin is different from other Las Vegas markets. You need an agent who understands these differences:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Market Knowledge</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I know every Summerlin neighborhood. Price ranges, buyer demographics, market trends, inventory levels. I know which neighborhoods are hot, which are cooling, and where the opportunities are. This market knowledge is what gets you top dollar when selling and the best deals when buying.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Builder Relationships</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I have relationships with major builders: Century, KB Home, Lennar, Pulte, Toll Brothers. This gives you access to new construction, builder incentives, and off-market opportunities. When buying new construction, I negotiate builder upgrades, closing costs, and incentives. When selling, I understand new construction competition and how to position your resale home.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Luxury Marketing Expertise</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Luxury homes require luxury marketing. Professional photography worth $3,700. Twilight drone shots. 3D virtual tours. Magazine-quality staging. Targeted marketing to high-net-worth buyers. This is what $5,000+ buys you. This is what gets luxury homes sold.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Off-Market Access</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I have access to off-market properties through my network of 500+ agents and builder relationships. When buying, this gives you access to properties before they hit the market. When selling, this gives you access to qualified buyers who are actively looking but have not found the right property yet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Current Summerlin Market Insights
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  As of January 2026, the Summerlin market shows:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Inventory Levels</h3>
                    <p className="text-gray-700">
                      Summerlin has approximately 400-500 active listings, with The Ridges and Red Rock Country Club having the lowest inventory (creating seller advantage) and newer villages having higher inventory (creating buyer advantage).
                    </p>
                  </div>
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Days on Market</h3>
                    <p className="text-gray-700">
                      Average days on market varies by price range: $800K-$1.5M (30-45 days), $1.5M-$3M (45-60 days), $3M+ (60-90 days). Properly priced and marketed homes sell faster.
                    </p>
                  </div>
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Price Trends</h3>
                    <p className="text-gray-700">
                      Summerlin prices have stabilized after 2023-2024 adjustments. Luxury segment ($2M+) remains strong with limited inventory. Mid-range ($800K-$1.5M) is competitive with good buyer activity.
                    </p>
                  </div>
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Buyer Activity</h3>
                    <p className="text-gray-700">
                      Spring 2026 buyers are already active. Pre-qualified, serious buyers looking for luxury homes. Tax refund season (February-April) typically increases buyer activity and purchasing power.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  For the most current market data, <Link href="/market-analysis" className="text-primary font-semibold hover:underline">view my latest market report</Link> or <Link href="/contact" className="text-primary font-semibold hover:underline">contact me</Link> for a personalized market analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Seller Results: Specific Summerlin Sales
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Here are real Summerlin homes I've sold:
                </p>
                <div className="space-y-6 mb-8">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">The Ridges Estate - $2.4M</h3>
                    <p className="text-gray-700">
                      Sold in 21 days at 98.5% of asking. Previous agent had it for 90 days with zero offers. Complete luxury marketing reset with professional photography, targeted buyer outreach, and strategic negotiation.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Red Rock Country Club - $1.2M</h3>
                    <p className="text-gray-700">
                      Sold in 19 days at 99% of asking. Golf course home that sat with previous agent for 75 days. Professional staging, strategic open house, aggressive follow-up with golf course property buyers.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">The Summit Condo - $850K</h3>
                    <p className="text-gray-700">
                      Sold in 16 days at 99.2% of asking. High-rise condo that DID NOT sell with previous agent. Professional photography showcasing Strip views, targeted marketing to second-home buyers, strategic pricing.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  See more <Link href="/success-stories" className="text-primary font-semibold hover:underline">Summerlin success stories</Link> and <Link href="/testimonials" className="text-primary font-semibold hover:underline">client testimonials</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Buyer Services: New Construction & Off-Market Access
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Buying in Summerlin? I provide specialized buyer services:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">New Construction Relationships</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I have relationships with major builders: Century, KB Home, Lennar, Pulte, Toll Brothers. This gives you access to new construction opportunities, builder incentives, and negotiation on upgrades and closing costs. I understand builder contracts, construction timelines, and how to protect your interests.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Off-Market Properties</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Through my network of 500+ agents, I have access to off-market properties. These are homes that have not hit the market yet but sellers are ready to sell. This gives you first access to properties before they become available to the general public.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Neighborhood Expertise</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I know every Summerlin neighborhood. Schools, amenities, HOA fees, lifestyle, resale value. I can help you find the right neighborhood for your lifestyle and budget. Whether you want golf course living, mountain views, or new construction, I know where to look.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Negotiation Expertise</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Luxury home negotiation is different. I understand luxury buyer psychology, seller motivations, and how to structure deals that work for both parties. I negotiate builder upgrades, closing costs, inspection items, and price. I get you the best deal possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Thinking of Buying or Selling in Summerlin?
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Let's discuss your Summerlin real estate goals. Free consultation, no obligation.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Call 702-500-1064 or text 702-500-1064. I'll provide market insights, pricing analysis, and a clear strategy for your Summerlin home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:7025001064"
                className="inline-block bg-white text-primary px-12 py-6 rounded-lg font-bold text-2xl hover:bg-gray-100 transition-colors"
              >
                CALL NOW: (702) 500-1955
              </a>
              <a
                href="tel:7025001064"
                className="inline-block bg-white text-primary px-12 py-6 rounded-lg font-bold text-2xl hover:bg-gray-100 transition-colors"
              >
                TEXT: (702) 222-1964
              </a>
            </div>
            <div className="bg-white/10 p-6 rounded-lg max-w-2xl mx-auto">
              <LeadForm source="summerlin_agent_page" buttonText="GET FREE CONSULTATION" />
            </div>
            <p className="text-sm mt-6 opacity-75">
              Dr. Jan Duffy | Berkshire Hathaway HomeServices | Nevada License #S.0197614.LLC
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

