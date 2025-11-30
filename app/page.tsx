import HeroSection from './components/hero-section'
import WhyExpiredSection from './components/why-expired-section'
import ProofSection from './components/proof-section'
import CostCalculator from './components/cost-calculator'
import Header from './components/header'
import ExitIntentPopup from './components/exit-intent-popup'
import ChatWidget from './components/chat-widget'
import BreadcrumbSchema from './components/breadcrumb-schema'
import FAQSchema from './components/faq-schema'
import NAPSection from './components/nap-section'
import GoogleReviews from './components/google-reviews'
import GBPPostsWidget from './components/gbp-posts-widget'
import GoogleMapEmbed from './components/google-map-embed'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Dr. Janet Duffy Real Estate | Real Estate Agent in Las Vegas, NV | (702) 500-1064',
  description:
    'Dr. Janet Duffy Real Estate - Las Vegas real estate specialist for homes that will not sell. Serving Summerlin, The Ridges, and Henderson. 7 homes that did not sell - now sold. Call (702) 500-1064 for free consultation.',
  alternates: {
    canonical: 'https://www.drjanduffy.com/',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  publisher: 'Dr. Janet Duffy Real Estate',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/',
    siteName: 'Dr. Janet Duffy Real Estate',
    title: 'Dr. Janet Duffy Real Estate | Real Estate Agent in Las Vegas, NV | (702) 500-1064',
    description: 'Dr. Janet Duffy Real Estate - Las Vegas real estate specialist for homes that will not sell. Serving Summerlin, The Ridges, and Henderson. 7 homes that did not sell - now sold. Call (702) 500-1064.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Janet Duffy Real Estate | Real Estate Agent in Las Vegas, NV',
    description: 'Las Vegas real estate specialist for homes that will not sell. Serving Summerlin, The Ridges, and Henderson. Call (702) 500-1064.',
  },
}

export default function HomePage() {
  const faqs = [
    {
      question: 'Why did my home not sell with my previous agent?',
      answer:
        'Most homes fail to sell due to poor marketing, overpricing, or lack of follow-up. Your previous agent likely used minimal marketing (just MLS posting), did not invest in professional photography, and failed to aggressively follow up on showings. I fix all of these issues with a complete marketing reset, strategic pricing, and aggressive follow-up system.',
    },
    {
      question: 'How long will it take to sell my home that did not sell?',
      answer:
        'My average is 19 days from listing to contract. Most homes that did not sell sell within 2-4 weeks when properly marketed and priced. I continue working until your home sells, with weekly updates and real accountability.',
    },
    {
      question: 'What percentage of asking price can I expect?',
      answer:
        'I average 98.7% of asking price on homes that did not sell. This is significantly higher than the market average because of my aggressive marketing and negotiation strategies. I use data-driven pricing to maximize your sale price.',
    },
    {
      question: 'What makes you different from my previous agent?',
      answer:
        'I invest $5,000+ in marketing per listing (vs. $100 average), take maximum 6 listings at a time (vs. 47+), use a 97-point marketing system (vs. "post to MLS"), and provide weekly updates with real accountability. I specialize exclusively in homes that did not sell.',
    },
    {
      question: 'Do you work with luxury homes in Summerlin?',
      answer:
        'Yes, I specialize in Summerlin West luxury homes including The Ridges, Red Rock Country Club, The Summit, and newer villages. I have sold 7 homes that did not sell in these areas with an average of 19 days to contract and 98.7% of asking price.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      <FAQSchema faqs={faqs} />
      <Header />
      <HeroSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
              Sell Your House Fast in Las Vegas - Even If It DID NOT Sell Before
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              63 Days on Market. 37 Showings. 5 Price Drops. ZERO OFFERS. Sound Familiar?
            </p>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                If your house did not sell, you are not alone. In Las Vegas, 20-30% of all homes fail to sell on their first try every year. That's 1,500-2,250 homes that sat on the market for months, bleeding money, while agents collected nothing and sellers lost thousands. The problem is not your house. The problem is your agent. <a href="/why-expire" className="text-primary font-semibold hover:underline">Learn why homes do not sell</a> and what your previous agent did wrong.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Most agents use a "post to MLS and pray" strategy. They take iPhone photos, hold one open house (maybe), and disappear. You get 2.1% of their attention because they're juggling 47 other listings. Your house becomes invisible. Buyers scroll past. Showings happen, feedback disappears. Your agent suggests another price drop. The cycle repeats until your home does not sell. See <a href="/comparison" className="text-primary font-semibold hover:underline">how I'm different from your previous agent</a>.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Meanwhile, you're losing money every single day. Mortgage payments, HOA fees, insurance, utilities, property taxes - it all adds up. The average unsold home costs sellers $4,964 per month in holding costs. That's $116 per day. Every day your house sits unsold is money down the drain, and your previous agent made exactly $0. <a href="/tools/cost-calculator" className="text-primary font-semibold hover:underline">Calculate your exact daily loss</a> with our cost calculator.
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
              Services: Buyers, Sellers, Homes That Will Not Sell
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Complete real estate services for Las Vegas buyers, sellers, and frustrated homeowners
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-black mb-4">For Sellers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Specialized service for homes that will not sell. Professional marketing, strategic pricing, aggressive follow-up. 7 homes that did not sell with other agents - now sold.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Professional photography & staging</li>
                  <li>• 97-point marketing system</li>
                  <li>• Strategic pricing analysis</li>
                  <li>• Aggressive follow-up</li>
                  <li>• 19 day average to contract</li>
                </ul>
                <Link href="/sell-house-fast-las-vegas" className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--color-cta-hover)] transition-colors">
                  Learn more about selling your home fast in Las Vegas →
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
                <Link href="/summerlin-real-estate-agent" className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--color-cta-hover)] transition-colors">
                  Find luxury homes in Summerlin →
                </Link>
              </div>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-black mb-4">Home Will Not Sell?</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Your home will not sell? I specialize in homes that sat with other agents. Complete reset: new photos, new pricing, fresh listing, aggressive marketing.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Complete marketing reset</li>
                  <li>• Strategic pricing analysis</li>
                  <li>• Fresh MLS listing</li>
                  <li>• Aggressive marketing</li>
                  <li>• 98.7% of asking price average</li>
                </ul>
                <Link href="/home-wont-sell-las-vegas" className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--color-cta-hover)] transition-colors">
                  Get help selling your home in Las Vegas →
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
                <h3 className="text-xl font-black mb-2">Summerlin West Real Estate</h3>
                <p className="text-gray-700 text-sm">Luxury homes, golf course properties, The Ridges, Red Rock Country Club in Las Vegas</p>
              </Link>
              <Link href="/neighborhoods/the-ridges" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-black mb-2">The Ridges Las Vegas</h3>
                <p className="text-gray-700 text-sm">Ultra-luxury estates, gated communities, mountain views in Summerlin</p>
              </Link>
              <Link href="/neighborhoods/red-rock-country-club" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-black mb-2">Red Rock Country Club Las Vegas</h3>
                <p className="text-gray-700 text-sm">Golf course homes, resort-style living, luxury amenities in Summerlin</p>
              </Link>
              <Link href="/neighborhoods/the-summit" className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-black mb-2">The Summit Las Vegas</h3>
                <p className="text-gray-700 text-sm">Luxury condos, high-rise living, Strip views in Summerlin</p>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/neighborhoods" className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--color-cta-hover)] transition-colors">
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
              Results: 7 Homes That Did Not Sell - Now Sold
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Real results from Las Vegas real estate transactions
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">7</div>
                <div className="text-lg text-gray-700">Homes That Did Not Sell - Now Sold</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">19</div>
                <div className="text-lg text-gray-700">Day Average</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">98.7%</div>
                <div className="text-lg text-gray-700">Of Asking Price</div>
              </div>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-black mb-4 text-center">Specialized Results</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Homes That did not Sell</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 7 homes sold after other agents failed</li>
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
                Every home that did not sell has a hidden cost. While your house sits unsold, you're paying mortgage, HOA, insurance, utilities, and property taxes. The longer it sits, the more you lose. Use this calculator to see the real financial impact when your home will not sell.
              </p>
            </div>
            <CostCalculator />
            
            <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-black mb-4 text-center text-red-800">
                THE REAL COST OF WAITING
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                While you're reading this, your unsold home is costing you money. Every day you wait is another $116+ in holding costs. Every week is another $812. Every month is another $4,964. And that's just the direct costs - it does not include lost opportunity, market depreciation, or the emotional toll of a home that did not sell.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The longer your home sits unsold, the more it becomes stigmatized. Buyers see a home that's been on the market for months and think "what's wrong with it?" After 60 days, they assume it's overpriced. After 90 days, they assume it has problems. After 120 days, it's toxic. The stigma compounds, making it harder to sell even when you finally get the right agent.
              </p>
              <p className="text-lg text-gray-700">
                But here's the good news: homes that did not sell can be fixed. I've helped 7 Summerlin sellers who could not sell with their previous agent - average 19 days to contract and 98.7% of asking price. The key is a complete reset: new photos, new pricing strategy, fresh MLS listing, and aggressive marketing. The stigma disappears when buyers see a beautiful, properly priced home with professional marketing. See <a href="/success-stories" className="text-primary font-semibold hover:underline">real success stories from Summerlin homes I've sold</a>, learn about <a href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process for Las Vegas homes</a>, and check out my <a href="/guides/sellers-guide" className="text-primary font-semibold hover:underline">complete seller's guide</a> for comprehensive guidance on your next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              WHY HOMES THAT did not SELL ARE PERFECT FOR JANUARY 2026
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                January 2026 is the perfect storm for homes that did not sell. December is historically the worst month to list a home - properties sit an average of 63 days during the holiday season. All those homes that failed to sell in December need a fresh start, creating a massive inventory of frustrated, motivated sellers.
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
                Sellers who tried before are different from first-time sellers. They've already tried once and failed. They're frustrated, angry, and motivated. They've learned the hard way that not all agents are created equal. They're ready to work with someone who actually knows what they're doing. They will not accept excuses. They want results.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This psychology makes frustrated sellers the best clients. They are educated about the process. They understand the market. They are realistic about pricing. They are ready to make decisions quickly. And most importantly, they are willing to pay full commission to someone who can actually sell their home.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                The Las Vegas Market Reality
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Las Vegas has 7,500+ active listings as of November 2026. Based on historical averages, 20-30% of these will fail to sell - that's 1,500-2,250 opportunities. In Summerlin West alone, we're looking at 200-300 homes that did not sell. These are not theoretical numbers. These are real homes, real sellers, real opportunities.
              </p>
              <p className="text-lg text-gray-700">
                The market is shifting. Days on market are increasing. Inventory is growing. More homes are failing to sell. This is not a problem - it's an opportunity. While other agents avoid homes that did not sell, I specialize in them. I know how to reset them, market them, and sell them. Fast. At top dollar. With zero excuses.
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
                Your previous agent failed you. They used minimal marketing, did not invest in professional photography, held maybe one open house, and disappeared. Then your home did not sell, and they made $0 while you lost $4,964 per month in holding costs. That's not how you sell homes. That's how you fail.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Maximum Focus vs. Maximum Listings
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent had 47+ listings. You got 2.1% of their attention. They could not afford to invest $5,000+ in every listing, so they invested $100, hoped for the best, and your home did not sell. I take maximum 6 listings at a time. You get 100% focus. Every home gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance.
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
                Your previous agent had no system. They posted to MLS, held maybe one open house, and hoped for the best. That's not a strategy. That's incompetence. I have a proven 30-day plan that sells homes that did not sell. Week 1 is aggressive reset. Week 2 is maximum exposure. Week 3 is negotiation warfare. Week 4 is closing. Every week has measurable outcomes. Every week moves you closer to SOLD. Learn more about <a href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process for Las Vegas homes</a> and see <a href="/services" className="text-primary font-semibold hover:underline">my complete real estate services in Summerlin and Henderson</a>.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The results speak for themselves: 7 homes that did not sell - now sold, 19 day average, 98.7% of asking price. These are not hypothetical results. These are real homes that I sold after other agents failed. The same system that delivered these results can deliver yours. The only question is: are you ready to work with an agent who actually has a system?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              What To Do When Your Home will not Sell
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              A complete reset that eliminates the stigma of unsold homes and attracts qualified buyers
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Homes that did not sell are not damaged goods. They do not have problems. They're not necessarily overpriced. They did not sell because your previous agent did not know how to market them. The good news? Homes that did not sell can be fixed. I've fixed 47 of them. Here's how.
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
                Most homes that did not sell are overpriced. Your previous agent probably told you what you wanted to hear about price, not the truth. Then they suggested price drop after price drop. I use data-driven pricing and market analysis to price your home right from day one. I do not guess. I analyze. I price strategically to attract qualified buyers while maximizing your sale price. The result? 98.7% of asking price average, not 92% or 95%.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                Aggressive Follow-Up System
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Your previous agent had zero follow-up. Buyers saw your home, but your agent never followed up. Feedback disappeared. Opportunities were lost. I have an aggressive follow-up system that ensures every showing is tracked, every buyer is contacted, and every opportunity is maximized. I do not wait for offers. I create them. I do not accept lowball offers. I negotiate them up. I do not let deals fall apart. I manage every detail until closing.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The complete reset eliminates the stigma of unsold homes. Buyers see a beautiful, properly priced home with professional marketing. They do not see "did not sell." They see "opportunity." That's how homes that did not sell become successful sales. That's how I've sold 47 of them. Fast. At top dollar. With zero excuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAP Section with Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <NAPSection variant="detailed" showMap={true} showHours={true} className="mb-12" />
            
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-black mb-6 text-center">Visit Our Office</h2>
              <GoogleMapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* GBP Posts Widget */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <GBPPostsWidget maxPosts={3} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            READY TO FIRE YOUR AGENT?
          </h2>
          
          {/* Dr. Jan Duffy Headshot */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Trust-building color rings - visible on dark background */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/60 shadow-2xl"></div>
              <div className="absolute inset-1.5 rounded-full border-2 border-amber-400/50"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-600/70 shadow-xl ring-2 ring-white/10">
                <Image
                  src="/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg"
                  alt="Dr. Janet Duffy, Las Vegas real estate agent"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Your house did not fail. Your agent did. Let's fix this fast.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            I've helped 7 Summerlin sellers who could not sell with their previous agent - average 19 days to contract and 98.7% of asking price. Proven results. No excuses. No BS. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="tel:7025001064"
              className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-12 py-6 rounded-lg font-bold text-2xl hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              CALL NOW: (702) 500-1064
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-900 px-12 py-6 rounded-lg font-bold text-2xl hover:bg-gray-100 transition-colors border-2 border-gray-300"
            >
              CONTACT ME
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1180+N+Town+Center+Dr,+Las+Vegas,+NV+89144"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-12 py-6 rounded-lg font-bold text-2xl hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              GET DIRECTIONS
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm opacity-75">
            <a href="/about" className="hover:underline">About Dr. Jan Duffy</a>
            <span>•</span>
            <a href="/services" className="hover:underline">Las Vegas Real Estate Services</a>
            <span>•</span>
            <a href="/process" className="hover:underline">30-Day Selling Process</a>
            <span>•</span>
            <a href="/faq" className="hover:underline">Frequently Asked Questions</a>
            <span>•</span>
            <a href="/success-stories" className="hover:underline">Summerlin Success Stories</a>
          </div>
        </div>
      </section>

      <ExitIntentPopup />
      <ChatWidget />
    </>
  )
}
