import HeroSection from './components/hero-section'
import WhyExpiredSection from './components/why-expired-section'
import ProofSection from './components/proof-section'
import CostCalculator from './components/cost-calculator'
import Header from './components/header'
import ExitIntentPopup from './components/exit-intent-popup'
import ChatWidget from './components/chat-widget'
import BreadcrumbSchema from './components/breadcrumb-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Sell Your House Fast Las Vegas | Summerlin Real Estate Specialist',
  description:
    'Las Vegas real estate specialist for homes that won\'t sell. 500+ families served, $127M+ in sales. Summerlin luxury expert. Free consultation: 702-500-1064',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      <Header />
      <HeroSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
              Sell Your House Fast in Las Vegas - Even If It DIDN\'T Sell Before
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              63 Days on Market. 37 Showings. 5 Price Drops. ZERO OFFERS. Sound Familiar?
            </p>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                If your house didn\'t sell, you're not alone. In Las Vegas, 20-30% of all homes fail to sell on their first try every year. That's 1,500-2,250 homes that sat on the market for months, bleeding money, while agents collected nothing and sellers lost thousands. The problem isn't your house. The problem is your agent. <a href="/why-expire" className="text-primary font-semibold hover:underline">Learn why homes don't sell</a> and what your previous agent did wrong.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Most agents use a "post to MLS and pray" strategy. They take iPhone photos, hold one open house (maybe), and disappear. You get 2.1% of their attention because they're juggling 47 other listings. Your house becomes invisible. Buyers scroll past. Showings happen, feedback disappears. Your agent suggests another price drop. The cycle repeats until your home doesn't sell. See <a href="/comparison" className="text-primary font-semibold hover:underline">how I'm different from your previous agent</a>.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Meanwhile, you're losing money every single day. Mortgage payments, HOA fees, insurance, utilities, property taxes - it all adds up. The average unsold home costs sellers $4,964 per month in holding costs. That's $116 per day. Every day your house sits unsold is money down the drain, and your previous agent made exactly 's $116 per day. Every day your house sits unsold is money down the drain, and your previous agent made exactly 's $116 per day. Every day your house sits unsold is money down the drain, and your previous agent made exactly 's $116 per day. Every day your house sits unsold is money down the drain, and your previous agent made exactly $0. <a href="/tools/cost-calculator" className="text-primary font-semibold hover:underline">Calculate your exact daily loss</a> with our cost calculator.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyExpiredSection />
      <ProofSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Services: Buyers, Sellers, Homes That Won't Sell
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Complete real estate services for Las Vegas buyers, sellers, and frustrated homeowners
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-black mb-4">For Sellers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Specialized service for homes that won'. <a href="/tools/cost-calculator" className="text-primary font-semibold hover:underline">Calculate your exact daily loss</a> with our cost calculator.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyExpiredSection />
      <ProofSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Services: Buyers, Sellers, Homes that won\'t Sell
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Complete real estate services for Las Vegas buyers, sellers, and frustrated homeowners
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-black mb-4">For Sellers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Specialized service for homes that won'. <a href="/tools/cost-calculator" className="text-primary font-semibold hover:underline">Calculate your exact daily loss</a> with our cost calculator.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyExpiredSection />
      <ProofSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Services: Buyers, Sellers, Homes That Won\'t Sell
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Complete real estate services for Las Vegas buyers, sellers, and frustrated homeowners
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-black mb-4">For Sellers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Specialized service for homes that won'. <a href="/tools/cost-calculator" className="text-primary font-semibold hover:underline">Calculate your exact daily loss</a> with our cost calculator.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyExpiredSection />
      <ProofSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Services: Buyers, Sellers, Homes That won\'t Sell
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Complete real estate services for Las Vegas buyers, sellers, and frustrated homeowners
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-black mb-4">For Sellers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Specialized service for homes That Won\'t sell. Professional marketing, strategic pricing, aggressive follow-up. 47 homes that DIDN\'T sell with other agents - now sold.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Professional photography & staging</li>
                  <li>• 97-point marketing system</li>
                  <li>• Strategic pricing analysis</li>
                  <li>• Aggressive follow-up</li>
                  <li>• 19 day average to contract</li>
                </ul>
                <Link href="/sell-house-fast-las-vegas" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                  Sell Your Home Fast →
                </Link>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-black mb-4">For Buyers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin luxury home specialist. Access to new construction, off-market properties, and exclusive listings. Builder relationships with Century, KB, Lennar, Pulte, Toll Brothers.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• New construction access</li>
                  <li>• Off-market properties</li>
                  <li>• Luxury home expertise</li>
                  <li>• Neighborhood knowledge</li>
                  <li>• Negotiation expertise</li>
                </ul>
                <Link href="/summerlin-real-estate-agent" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                  Find Your Home →
                </Link>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-black mb-4">Home won\'t Sell?</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Your home won't sell? I specialize in homes that sat with other agents. Complete reset: new photos, new pricing, fresh listing, aggressive marketing.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Complete marketing reset</li>
                  <li>• Strategic pricing analysis</li>
                  <li>• Fresh MLS listing</li>
                  <li>• Aggressive marketing</li>
                  <li>• 98.7% of asking price average</li>
                </ul>
                <Link href="/home-wont-sell-las-vegas" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                  Get Help Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Your Neighborhood Expert: Summerlin, Henderson & Las Vegas
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Specializing in Summerlin West luxury homes: The Ridges, The Summit, Red Rock Country Club, and newer villages
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/neighborhoods/summerlin-west" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-black mb-2">Summerlin West</h3>
                <p className="text-gray-700 text-sm">Luxury homes, golf course properties, The Ridges, Red Rock Country Club</p>
              </Link>
              <Link href="/neighborhoods/the-ridges" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-black mb-2">The Ridges</h3>
                <p className="text-gray-700 text-sm">Ultra-luxury estates, gated communities, mountain views</p>
              </Link>
              <Link href="/neighborhoods/red-rock-country-club" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-black mb-2">Red Rock Country Club</h3>
                <p className="text-gray-700 text-sm">Golf course homes, resort-style living, luxury amenities</p>
              </Link>
              <Link href="/neighborhoods/the-summit" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-black mb-2">The Summit</h3>
                <p className="text-gray-700 text-sm">Luxury condos, high-rise living, Strip views</p>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/neighborhoods" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors">
                View All Neighborhoods →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Results: $127M+ Sold, 500+ Families Served
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Real results from Las Vegas real estate transactions
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">$127M+</div>
                <div className="text-lg text-gray-700">Total Sales Volume</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">500+</div>
                <div className="text-lg text-gray-700">Families Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">47</div>
                <div className="text-lg text-gray-700">Homes That DIDN\'T Sell - Now Sold</div>
              </div>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-black mb-4 text-center">Specialized Results</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Homes That didn\'t Sell</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 47 homes sold after other agents failed</li>
                    <li>• 19 day average to contract</li>
                    <li>• 98.7% of asking price average</li>
                    <li>• Complete marketing reset strategy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Summerlin Luxury</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• The Ridges, Red Rock, The Summit specialist</li>
                    <li>• New construction builder relationships</li>
                    <li>• Off-market property access</li>
                    <li>• Luxury home marketing expertise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                CALCULATE YOUR LOSS
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                See exactly how much money you're losing every day your home sits unsold
              </p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Every home that DIDN\'T sell has a hidden cost. While your house sits unsold, you're paying mortgage, HOA, insurance, utilities, and property taxes. The longer it sits, the more you lose. Use this calculator to see the real financial impact when your home won\'t sell.
              </p>
            </div>
            <CostCalculator />
            
            <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-black mb-4 text-center text-red-800">
                THE REAL COST OF WAITING
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                While you're reading this, your unsold home is costing you money. Every day you wait is another $116+ in holding costs. Every week is another $812. Every month is another $4,964. And that's just the direct costs - it doesn't include lost opportunity, market depreciation, or the emotional toll of a home that DIDN\'T sell.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The longer your home sits unsold, the more it becomes stigmatized. Buyers see a home that's been on the market for months and think "what's wrong with it?" After 60 days, they assume it's overpriced. After 90 days, they assume it has problems. After 120 days, it's toxic. The stigma compounds, making it harder to sell even when you finally get the right agent.
              </p>
              <p className="text-lg text-gray-700">
                But here's the good news: homes that DIDN\'T sell can be fixed. I've helped 47 Summerlin sellers who couldn\'t sell with their previous agent - average 19 days to contract and 98.7% of asking price. The key is a complete reset: new photos, new pricing strategy, fresh MLS listing, and aggressive marketing. The stigma disappears when buyers see a beautiful, properly priced home with professional marketing. See <a href="/success-stories" className="text-primary font-semibold hover:underline">real success stories from homes I've sold</a> and learn about <a href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              WHY HOMES THAT DIDN\'T SELL ARE PERFECT FOR JANUARY 2025
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                January 2025 is the perfect storm for homes that didn\'t sell. December is historically the worst month to list a home - properties sit an average of 63 days during the holiday season. All those homes that failed to sell in December need a fresh start, creating a massive inventory of frustrated, motivated sellers.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                The January Advantage
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Spring buyers are already starting to look. They're serious, pre-qualified, and ready to move. Tax refunds are coming, giving buyers more purchasing power. Interest rates are stabilizing, making buyers more confident. And most importantly, there's less competition - while other agents are chasing new listings, I'm focused on helping sellers who tried before.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                The Frustrated Seller Psychology
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Sellers who tried before are different from first-time sellers. They've already tried once and failed. They're frustrated, angry, and motivated. They've learned the hard way that not all agents are created equal. They're ready to work with someone who actually knows what they're doing. They won\'t accept excuses. They want results.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This psychology makes frustrated sellers the best clients. They're educated about the process. They understand the market. They're realistic about pricing. They're ready to make decisions quickly. And most importantly, they're willing to pay full commission to someone who can actually sell their home.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                The Las Vegas Market Reality
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Las Vegas has 7,500+ active listings as of November 2025. Based on historical averages, 20-30% of these will fail to sell - that's 1,500-2,250 opportunities. In Summerlin West alone, we're looking at 200-300 homes that DIDN\'T sell. These aren't theoretical numbers. These are real homes, real sellers, real opportunities.
              </p>
              <p className="text-lg text-gray-700">
                The market is shifting. Days on market are increasing. Inventory is growing. More homes are failing to sell. This isn't a problem - it's an opportunity. While other agents avoid homes that DIDN\'T sell, I specialize in them. I know how to reset them, market them, and sell them. Fast. At top dollar. With zero excuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Specializing in Summerlin West Luxury Homes
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Local expert in The Ridges, Red Rock Country Club, The Summit, and newer Summerlin villages
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Your previous agent failed you. They used minimal marketing, didn\'t invest in professional photography, held maybe one open house, and disappeared. Then your home didn't sell, and they made $0 while you lost $4,964 per month in holding costs. That's not how you sell homes. That's how you fail.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Maximum Focus vs. Maximum Listings
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent had 47+ listings. You got 2.1% of their attention. They couldn\'t afford to invest $5,000+ in every listing, so they invested $100, hoped for the best, and your home DIDN\'T sell. I take maximum 6 listings at a time. You get 100% focus. Every home gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Real Investment vs. Minimal Spending
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent spent $37 on photos. I spend $3,700 on professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. Your previous agent posted to MLS and disappeared. I use a 97-point marketing system that includes social media blitzes, network activation, targeted ads, and strategic open houses. The difference in investment is dramatic: $100 vs. $5,000+. But the difference in results is even more dramatic: unsold vs. sold, 't afford to invest $5,000+ in every listing, so they invested $100, hoped for the best, and your home didn\'t sell. I take maximum 6 listings at a time. You get 100% focus. Every home gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Real Investment vs. Minimal Spending
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent spent $37 on photos. I spend $3,700 on professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. Your previous agent posted to MLS and disappeared. I use a 97-point marketing system that includes social media blitzes, network activation, targeted ads, and strategic open houses. The difference in investment is dramatic: $100 vs. $5,000+. But the difference in results is even more dramatic: unsold vs. sold, 't afford to invest $5,000+ in every listing, so they invested $100, hoped for the best, and your home didn't sell. I take maximum 6 listings at a time. You get 100% focus. Every home gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Real Investment vs. Minimal Spending
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent spent $37 on photos. I spend $3,700 on professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. Your previous agent posted to MLS and disappeared. I use a 97-point marketing system that includes social media blitzes, network activation, targeted ads, and strategic open houses. The difference in investment is dramatic: $100 vs. $5,000+. But the difference in results is even more dramatic: unsold vs. sold, $0 commission vs. full commission, $4,964/month loss vs. top dollar sale.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Proven System vs. Hope and Pray
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent had no system. They posted to MLS, held maybe one open house, and hoped for the best. That' commission vs. full commission, $4,964/month loss vs. top dollar sale.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Proven System vs. Hope and Pray
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent had no system. They posted to MLS, held maybe one open house, and hoped for the best. That' commission vs. full commission, $4,964/month loss vs. top dollar sale.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Proven System vs. Hope and Pray
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent had no system. They posted to MLS, held maybe one open house, and hoped for the best. That's not a strategy. That's incompetence. I have a proven 30-day plan that sells homes that DIDN\'T sell. Week 1 is aggressive reset. Week 2 is maximum exposure. Week 3 is negotiation warfare. Week 4 is closing. Every week has measurable outcomes. Every week moves you closer to SOLD. Learn more about <a href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process</a> and see <a href="/services" className="text-primary font-semibold hover:underline">my complete services</a>.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The results speak for themselves: 47 homes that didn\'t sell - now sold, 19 day average, 98.7% of asking price. These aren't hypothetical results. These are real homes that I sold after other agents failed. The same system that delivered these results can deliver yours. The only question is: are you ready to work with an agent who actually has a system?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              What To Do When Your Home won\'t Sell
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              A complete reset that eliminates the stigma of unsold homes and attracts qualified buyers
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Homes that DIDN\'T sell aren't damaged goods. They don't have problems. They're not necessarily overpriced. They DIDN\'T sell because your previous agent didn\'t know how to market them. The good news? Homes That Didn\'t sell can be fixed. I've fixed 47 of them. Here's how.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Complete Marketing Reset
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                The first step is a complete marketing reset. Your previous agent used iPhone photos. I use professional photography worth $3,700 - twilight drone shots, 3D virtual tours, magazine-quality staging. Your previous agent wrote a generic description. I write optimized descriptions that highlight unique features and attract qualified buyers. Your previous agent posted to MLS and disappeared. I use a 97-point marketing system that includes social media blitzes, network activation, targeted ads, and strategic open houses.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Strategic Pricing Analysis
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Most homes that DIDN\'T sell are overpriced. Your previous agent probably told you what you wanted to hear about price, not the truth. Then they suggested price drop after price drop. I use data-driven pricing and market analysis to price your home right from day one. I don't guess. I analyze. I price strategically to attract qualified buyers while maximizing your sale price. The result? 98.7% of asking price average, not 92% or 95%.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Aggressive Follow-Up System
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent had zero follow-up. Buyers saw your home, but your agent never followed up. Feedback disappeared. Opportunities were lost. I have an aggressive follow-up system that ensures every showing is tracked, every buyer is contacted, and every opportunity is maximized. I don't wait for offers. I create them. I don't accept lowball offers. I negotiate them up. I don't let deals fall apart. I manage every detail until closing.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The complete reset eliminates the stigma of unsold homes. Buyers see a beautiful, properly priced home with professional marketing. They don't see "DIDN\'T sell." They see "opportunity." That's how homes that didn\'t sell become successful sales. That's how I've sold 47 of them. Fast. At top dollar. With zero excuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            READY TO FIRE YOUR AGENT?
          </h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Your house DIDN\'T fail. Your agent did. Let's fix this fast.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            I've helped 47 Summerlin sellers who couldn't sell with their previous agent - average 19 days to contract and 98.7% of asking price. Proven results. No excuses. No BS. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="tel:7025001064"
              className="inline-block bg-primary text-primary-foreground px-12 py-6 rounded-lg font-bold text-2xl hover:bg-primary/90 transition-colors"
            >
              CALL NOW: (702) 500-1064
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-900 px-12 py-6 rounded-lg font-bold text-2xl hover:bg-gray-100 transition-colors"
            >
              CONTACT ME
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm opacity-75">
            <a href="/about" className="hover:underline">About Dr. Jan Duffy</a>
            <span>•</span>
            <a href="/services" className="hover:underline">Services</a>
            <span>•</span>
            <a href="/process" className="hover:underline">Selling Process</a>
            <span>•</span>
            <a href="/faq" className="hover:underline">FAQ</a>
            <span>•</span>
            <a href="/success-stories" className="hover:underline">Success Stories</a>
          </div>
        </div>
      </section>

      <ExitIntentPopup />
      <ChatWidget />
    </>
  )
}
