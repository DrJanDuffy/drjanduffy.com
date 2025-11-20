import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Sell Your House Fast Las Vegas | 19 Day Average | Free Consultation',
  description:
    'Need to sell your house fast in Las Vegas? Specialized service for homes that will not sell. 7 homes that did not sell - now sold. Summerlin expert. Free consultation: 702-500-1064',
  alternates: {
    canonical: 'https://www.drjanduffy.com/sell-house-fast-las-vegas',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/sell-house-fast-las-vegas',
    title: 'Sell Your House Fast Las Vegas | 19 Day Average | Free Consultation',
    description: 'Need to sell your house fast in Las Vegas? Specialized service for homes that will not sell. 7 homes that did not sell - now sold.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your House Fast Las Vegas',
    description: 'Specialized service for homes that will not sell. 7 homes that did not sell - now sold. Summerlin expert.',
  },
}

export default function SellHouseFastPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sell Your House Fast Las Vegas', url: '/sell-house-fast-las-vegas' }
      ]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Sell Your House Fast in Las Vegas
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Specialized service for homes that will not sell. 7 previously unsold homes sold - average 19 days to contract, 98.7% of asking price.
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Need to sell your house fast in Las Vegas? You're not alone. Every year, thousands of Las Vegas homeowners face the same challenge: their house will not sell, and they're losing money every day it sits on the market. The average unsold home costs sellers $4,964 per month in holding costs. That's $116 per day. Every day you wait is money down the drain.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling homes fast - even homes that DID NOT sell with other agents. I've helped 7 Summerlin sellers who could not sell with their previous agent. Average 19 days to contract. 98.7% of asking price. These are not hypothetical results. These are real homes that I sold after other agents failed. See <Link href="/success-stories" className="text-primary font-semibold hover:underline">real success stories</Link> and learn about <Link href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Why Las Vegas Houses do not Sell Fast (And How to Fix It)
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Most Las Vegas houses do not sell fast because of five common mistakes. Your previous agent probably made at least three of them. Understanding what went wrong is the first step to fixing it.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">1. Overpricing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  The number one reason houses do not sell fast is overpricing. Your previous agent probably told you what you wanted to hear about price, not the truth. Then they suggested price drop after price drop. That's not a strategy. That's incompetence. I use data-driven pricing and market analysis to price your home right from day one. I do not guess. I analyze. I price strategically to attract qualified buyers while maximizing your sale price. The result? 98.7% of asking price average, not 92% or 95%.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">2. Poor Photography</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Your previous agent used iPhone photos. Dark rooms, cluttered spaces, unprofessional staging. Buyers scroll through hundreds of listings online. If your photos do not grab them immediately, they move on. I invest $3,700 in professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. Professional photography increases showing requests by 300% and sale price by 5-10%. This is what $3,700 buys you. This is what your previous agent DID NOT provide.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">3. Weak Marketing Strategy</h3>
                <p className="text-lg text-gray-700 mb-4">
                  "Posted to MLS" is not a strategy. One open house, zero follow-up, no buyer targeting. Your house becomes invisible. I use a 97-point marketing system that includes social media blitzes, network activation (500+ agents), targeted Facebook/Google ads, strategic open houses, and email marketing campaigns. This comprehensive system ensures your home gets maximum exposure to qualified buyers.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">4. Zero Follow-Up</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Your previous agent had zero follow-up. Buyers saw your home, but your agent never followed up. Feedback disappeared. Opportunities were lost. I have an aggressive follow-up system that ensures every showing is tracked, every buyer is contacted, and every opportunity is maximized. I do not wait for offers. I create them. This aggressive follow-up is what turns showings into offers and offers into sales.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">5. Part-Time Effort</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Your previous agent had 47+ listings. You got 2.1% of their attention. They could not afford to invest $5,000+ in every listing. They spread themselves thin, hoping something would stick. I take maximum 6 listings at a time. You get 100% focus. Every home gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                The Fast-Sale Strategy That Works
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Selling your house fast in Las Vegas requires a complete strategy, not a "post to MLS and pray" approach. Here's the proven system that works:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 1: Complete Marketing Reset</h3>
                <p className="text-lg text-gray-700 mb-4">
                  The first week is all about reset. Professional photography and staging ($3,700 investment). 3D virtual tour creation. Market analysis and strategic pricing. Fresh MLS listing with optimized description. Social media marketing blitz launch. This complete reset eliminates the stigma of unsold homes. Buyers see a beautiful, properly priced home with professional marketing. They do not see "DID NOT sell." They see "opportunity."
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 2: Maximum Exposure</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Week 2 is maximum exposure. Strategic open house with buyer pre-qualification. Network activation reaching 500+ agents. Targeted Facebook and Google ads. Email marketing to qualified buyers. Daily follow-up on all showings. This aggressive marketing creates momentum and generates offers.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 3: Active Negotiation</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Week 3 is when offers come in and negotiations begin. I use aggressive follow-up, buyer psychology tactics, and strategic counter-offers to get you top dollar. I do not accept lowball offers. I negotiate them up. This aggressive negotiation is how I get 98.7% of asking price average.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 4: Closing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Week 4 is closing. Escrow management, timeline enforcement, problem resolution, final walkthrough coordination. I manage every detail through closing. This complete management ensures your sale closes smoothly and on time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Real Results: Houses Sold Fast After Sitting on Market
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  These are not hypothetical results. These are real Las Vegas homes that I sold fast after they sat on the market with other agents:
                </p>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">Summerlin West Home</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Previous agent: 90 days on market, zero offers, expired. My result: Listed fresh, sold in 16 days at 99% of asking price. Complete marketing reset with professional photography, strategic pricing, and aggressive follow-up.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">The Ridges Luxury Estate</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Previous agent: 120 days on market, 3 price drops, expired. My result: Listed fresh, sold in 19 days at 98.5% of asking price. Luxury marketing strategy with targeted buyer outreach and strategic negotiation.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">Red Rock Country Club Home</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Previous agent: 75 days on market, minimal showings, expired. My result: Listed fresh, sold in 14 days at 99.2% of asking price. Professional staging, strategic open house, aggressive follow-up.
                  </p>
                </div>
                <p className="text-lg text-gray-700">
                  The pattern is clear: homes that DID NOT sell with other agents sell fast with the right strategy. See more <Link href="/success-stories" className="text-primary font-semibold hover:underline">success stories</Link> from homes I've sold.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                What Makes Homes Sell Fast in Las Vegas
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas is a competitive market. To sell fast, you need more than just a listing. You need:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Professional Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Professional photography increases showing requests by 300% and sale price by 5-10%. Strategic marketing brings qualified buyers. Aggressive follow-up creates urgency. The $5,000+ investment pays for itself through faster sales and higher prices.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Strategic Pricing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Data-driven pricing based on market analysis, buyer psychology, and competitive positioning. I price it right from day one, so it sells fast at top dollar. Not too high (sits on market). Not too low (leaves money on table). Just right.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Local Expertise</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin luxury specialist with deep knowledge of The Ridges, Red Rock Country Club, The Summit, and newer villages. Builder relationships with Century, KB, Lennar, Pulte, Toll Brothers. Off-market property access. This local expertise is what gets homes sold fast.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Active Agent Involvement</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Maximum 6 listings at a time. 100% focus on your home. Every showing tracked. Every buyer contacted. Every opportunity maximized. This active involvement is what separates fast sales from slow sales.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Sell Your House Fast?
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Let's get your house sold fast. Free consultation, no obligation.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Call 702-500-1064 or text 702-500-1064. I'll analyze your situation and show you exactly how to sell your house fast in Las Vegas.
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
              <LeadForm source="sell_house_fast_page" buttonText="GET FREE CONSULTATION" />
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

