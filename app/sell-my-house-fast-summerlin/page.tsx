import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Sell My House Fast Summerlin | Luxury Home Specialist | 19 Days',
  description:
    'Sell your house fast in Summerlin. Luxury home specialist with 47 previously unsold homes sold. Average 19 days. Call 702-500-1064',
  alternates: {
    canonical: 'https://www.drjanduffy.com/sell-my-house-fast-summerlin',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/sell-my-house-fast-summerlin',
    title: 'Sell My House Fast Summerlin | Luxury Home Specialist | 19 Days',
    description: 'Sell your house fast in Summerlin. Luxury home specialist with 47 previously unsold homes sold.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell My House Fast Summerlin',
    description: 'Luxury home specialist with 47 previously unsold homes sold. Average 19 days.',
  },
}

export default function SellFastSummerlinPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sell My House Fast Summerlin', url: '/sell-my-house-fast-summerlin' }
      ]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Sell Your House Fast in Summerlin
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Luxury home specialist with 47 previously unsold homes sold. Average 19 days to contract, 98.7% of asking price.
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Need to sell your house fast in Summerlin? The Summerlin luxury market is different. Price ranges from $800K to $10M+. Buyer expectations are higher. Marketing needs are different. Competition is fierce. You need a Summerlin specialist who understands luxury home marketing, not just any Las Vegas agent.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling Summerlin luxury homes fast. I've helped 47 Summerlin sellers who couldn\'t sell with their previous agent. Average 19 days to contract. 98.7% of asking price. These aren't hypothetical results. These are real Summerlin homes that I sold after other agents failed. See <Link href="/success-stories" className="text-primary font-semibold hover:underline">real success stories</Link> and learn about <Link href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Why Summerlin Luxury Homes Need Specialized Marketing
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Summerlin luxury homes are different from regular Las Vegas homes. They require specialized marketing:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Price Points</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin homes range from $800K to $10M+. At these price points, buyers expect luxury marketing. Professional photography worth $3,700. Twilight drone shots. 3D virtual tours. Magazine-quality staging. Generic marketing doesn't work. Luxury buyers want to see the lifestyle, not just the home.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Buyer Expectations</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin buyers are different. They're high-net-worth individuals, second-home buyers, retirees, and executives. They expect professional marketing, strategic pricing, and active agent involvement. They don't respond to generic "post to MLS and pray" strategies. They respond to targeted, high-end marketing.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Competition</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin is competitive. New construction from major builders. Resale homes with professional marketing. Off-market properties. To sell fast, you need marketing that stands out. Professional photography, strategic pricing, aggressive follow-up, and targeted buyer outreach. This is what gets Summerlin homes sold fast.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Neighborhood Dynamics</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Each Summerlin neighborhood is different. The Ridges (ultra-luxury, $1.5M-$10M+). Red Rock Country Club (golf course, $800K-$5M+). The Summit (high-rise, $500K-$3M+). Newer villages (new construction, $600K-$2M+). Each requires different marketing strategies, buyer targeting, and pricing approaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                The Fast-Sale Strategy for Summerlin Properties
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Selling your Summerlin home fast requires a specialized strategy:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 1: Luxury Marketing Reset</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Professional photography worth $3,700 - twilight drone shots, 3D virtual tours, magazine-quality staging. Market analysis and strategic pricing for luxury market. Fresh MLS listing with optimized description highlighting luxury features. Social media marketing blitz targeting high-net-worth buyers. This luxury marketing reset is what gets Summerlin homes sold fast.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 2: Targeted Buyer Outreach</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strategic open house with buyer pre-qualification. Network activation reaching 500+ agents who work with luxury buyers. Targeted Facebook and Google ads reaching high-net-worth buyers. Email marketing to qualified buyers in your price range. Off-market property network activation. This targeted outreach is what brings qualified luxury buyers.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 3: Strategic Negotiation</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Luxury home negotiation is different. I understand luxury buyer psychology, seller motivations, and how to structure deals that work for both parties. I negotiate price, terms, inspection items, and closing timeline. I get you top dollar while closing fast. This strategic negotiation is how I get 98.7% of asking price average.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 4: Closing Management</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Luxury home closings require careful management. Escrow coordination, timeline enforcement, problem resolution, final walkthrough. I manage every detail through closing. This complete management ensures your sale closes smoothly and on time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Summerlin Homes Sold Fast: Real Results
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Here are real Summerlin homes I sold fast:
                </p>
                <div className="space-y-6 mb-8">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">The Ridges Estate - $2.4M</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 90 days, zero offers, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Result:</strong> 21 days to contract, 98.5% of asking ($2.358M)
                    </p>
                    <p className="text-sm text-gray-600">
                      Complete luxury marketing reset with professional photography, targeted buyer outreach to high-net-worth individuals, and strategic negotiation.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Red Rock Country Club - $1.2M</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 75 days, minimal showings, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Result:</strong> 19 days to contract, 99% of asking ($1.188M)
                    </p>
                    <p className="text-sm text-gray-600">
                      Professional staging, strategic open house targeting golf course property buyers, aggressive follow-up with active adult buyers.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">The Summit Condo - $850K</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 60 days, 2 price drops, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Result:</strong> 16 days to contract, 99.2% of asking ($843K)
                    </p>
                    <p className="text-sm text-gray-600">
                      Professional photography showcasing Strip views, targeted marketing to second-home buyers, strategic pricing for high-rise market.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  See more <Link href="/success-stories" className="text-primary font-semibold hover:underline">Summerlin success stories</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                What Summerlin Buyers Want Right Now
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Understanding what Summerlin buyers want is key to selling fast:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Lifestyle, Not Just Home</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin buyers want the lifestyle. Golf course living. Mountain views. Resort-style amenities. Active adult communities. New construction with modern finishes. Your marketing needs to showcase the lifestyle, not just the home. Professional photography that captures the lifestyle. Descriptions that sell the experience.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Quality & Condition</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin buyers expect quality. Updated kitchens, modern bathrooms, luxury finishes, well-maintained properties. Deferred maintenance is a deal-breaker. Professional staging makes your home look like it belongs in a design magazine. This is what attracts luxury buyers.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Location & Neighborhood</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin buyers care about location. The Ridges (ultra-luxury, exclusivity). Red Rock Country Club (golf course, active adult). The Summit (high-rise, urban luxury). Newer villages (new construction, modern amenities). Each neighborhood attracts different buyers. Your marketing needs to highlight neighborhood advantages.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Price & Value</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin buyers are educated. They know market values. They compare your home to new construction, resale homes, and off-market properties. Strategic pricing is critical. Too high (sits on market). Too low (leaves money on table). Just right (sells fast at top dollar). I use data-driven pricing to price your home right from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Get Your Summerlin Home Sold Fast
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Summerlin luxury home specialist. 47 previously unsold homes sold. Average 19 days. 98.7% of asking.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Call 702-500-1064 or text 702-500-1064. Free consultation. Let's get your Summerlin home sold fast.
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
              <LeadForm source="sell_fast_summerlin_page" buttonText="GET FREE CONSULTATION" />
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

