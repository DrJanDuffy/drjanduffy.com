import HeroSection from './components/hero-section'
import WhyExpiredSection from './components/why-expired-section'
import ProofSection from './components/proof-section'
import CostCalculator from './components/cost-calculator'
import StickyHeader from './components/sticky-header'
import Navigation from './components/navigation'
import ExitIntentPopup from './components/exit-intent-popup'
import ChatWidget from './components/chat-widget'
import BreadcrumbSchema from './components/breadcrumb-schema'

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      <StickyHeader />
      <Navigation />
      <HeroSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
              YOUR HOUSE DIDN'T FAIL. YOUR AGENT DID.
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              63 Days on Market. 37 Showings. 5 Price Drops. ZERO OFFERS. Sound Familiar?
            </p>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                If your listing expired, you're not alone. In Las Vegas, 20-30% of all listings expire every year. That's 1,500-2,250 homes that sat on the market for months, bleeding money, while agents collected nothing and sellers lost thousands. The problem isn't your house. The problem is your agent.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Most agents use a "post to MLS and pray" strategy. They take iPhone photos, hold one open house (maybe), and disappear. You get 2.1% of their attention because they're juggling 47 other listings. Your house becomes invisible. Buyers scroll past. Showings happen, feedback disappears. Your agent suggests another price drop. The cycle repeats until your listing expires.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Meanwhile, you're losing money every single day. Mortgage payments, HOA fees, insurance, utilities, property taxes - it all adds up. The average expired listing costs sellers $4,964 per month in holding costs. That's $116 per day. Every day your house sits expired is money down the drain, and your previous agent made exactly $0.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyExpiredSection />
      <ProofSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                CALCULATE YOUR LOSS
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                See exactly how much money you're losing every day your listing sits expired
              </p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Every expired listing has a hidden cost. While your house sits unsold, you're paying mortgage, HOA, insurance, utilities, and property taxes. The longer it sits, the more you lose. Use this calculator to see the real financial impact of your expired listing.
              </p>
            </div>
            <CostCalculator />
            
            <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-black mb-4 text-center text-red-800">
                THE REAL COST OF WAITING
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                While you're reading this, your expired listing is costing you money. Every day you wait is another $116+ in holding costs. Every week is another $812. Every month is another $4,964. And that's just the direct costs - it doesn't include lost opportunity, market depreciation, or the emotional toll of a failed listing.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The longer your listing sits expired, the more it becomes stigmatized. Buyers see "expired" and think "what's wrong with it?" After 60 days, they assume it's overpriced. After 90 days, they assume it has problems. After 120 days, it's toxic. The stigma compounds, making it harder to sell even when you finally get the right agent.
              </p>
              <p className="text-lg text-gray-700">
                But here's the good news: expired listings can be fixed. I've sold 47 expired Summerlin listings with an average of 19 days to contract and 98.7% of asking price. The key is a complete reset: new photos, new pricing strategy, fresh MLS listing, and aggressive marketing. The stigma disappears when buyers see a beautiful, properly priced home with professional marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              WHY EXPIRED LISTINGS ARE PERFECT FOR JANUARY 2025
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                January 2025 is the perfect storm for expired listings. December is historically the worst month to list a home - properties sit an average of 63 days during the holiday season. All those failed December listings are expiring right now, creating a massive inventory of frustrated, motivated sellers.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                The January Advantage
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Spring buyers are already starting to look. They're serious, pre-qualified, and ready to move. Tax refunds are coming, giving buyers more purchasing power. Interest rates are stabilizing, making buyers more confident. And most importantly, there's less competition - while other agents are chasing new listings, I'm focused on fixing expired ones.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                The Expired Seller Psychology
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Expired sellers are different from regular sellers. They've already tried once and failed. They're frustrated, angry, and motivated. They've learned the hard way that not all agents are created equal. They're ready to work with someone who actually knows what they're doing. They won't accept excuses. They want results.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This psychology makes expired sellers the best clients. They're educated about the process. They understand the market. They're realistic about pricing. They're ready to make decisions quickly. And most importantly, they're willing to pay full commission to someone who can actually sell their home.
              </p>
              <h3 className="text-2xl font-black mb-4 mt-8">
                The Las Vegas Market Reality
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Las Vegas has 7,500+ active listings as of November 2025. Based on historical averages, 20-30% of these will expire - that's 1,500-2,250 opportunities. In Summerlin West alone, we're looking at 200-300 expired listings. These aren't theoretical numbers. These are real homes, real sellers, real opportunities.
              </p>
              <p className="text-lg text-gray-700">
                The market is shifting. Days on market are increasing. Inventory is growing. More listings are expiring. This isn't a problem - it's an opportunity. While other agents avoid expired listings, I specialize in them. I know how to reset them, market them, and sell them. Fast. At top dollar. With zero excuses.
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
            Your house didn't fail. Your agent did. Let's fix this in 30 days or less.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            I've sold 47 expired Summerlin listings with an average of 19 days to contract and 98.7% of asking price. I guarantee 30 days or I work free. No excuses. No BS. Just results.
          </p>
          <a
            href="tel:7025001064"
            className="inline-block bg-primary text-primary-foreground px-12 py-6 rounded-lg font-bold text-2xl hover:bg-primary/90 transition-colors"
          >
            CALL NOW: (702) 500-1064
          </a>
        </div>
      </section>

      <ExitIntentPopup />
      <ChatWidget />
    </>
  )
}
