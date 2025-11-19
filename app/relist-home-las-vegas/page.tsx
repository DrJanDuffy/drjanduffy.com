import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Relist Your Home Las Vegas | Failed Listing Specialist',
  description:
    'Need to relist your home in Las Vegas? Specialist in homes that didn\'t sell. 47 sold, 19 days average, 98.7% asking. Call 702-500-1064',
  alternates: {
    canonical: '/relist-home-las-vegas',
  },
}

export default function RelistHomePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Relist Your Home Las Vegas', url: '/relist-home-las-vegas' }
      ]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Time to Relist Your Home in Las Vegas? Here's How We Do It Right.
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Your listing expired. Your agent couldn\'t sell it. You need a fresh start. I specialize in relisting homes that DIDN\'T sell.
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Your listing expired. Your agent couldn't sell it. You're frustrated, angry, and losing money every day. The average unsold home costs sellers $4,964 per month in holding costs. That's $116 per day. Every day you wait is money down the drain.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  But here's the truth: you can\'t keep doing what DIDN\'T work. Relisting with the same strategy, same photos, same pricing, same agent - that's insanity. You need a complete reset. New photos. New pricing strategy. Fresh MLS listing. Aggressive marketing. This is what I do. I've helped 47 sellers who couldn\'t sell with their previous agent. Average 19 days to contract. 98.7% of asking price. See <Link href="/success-stories" className="text-primary font-semibold hover:underline">real success stories</Link> from relisted homes I've sold.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Why Relisting With the Same Strategy Fails
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Relisting with the same strategy is like doing the same thing and expecting different results. It doesn't work. Here's why:
                </p>
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">Same Photos, Same Problem</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your previous agent used iPhone photos. Dark rooms, cluttered spaces, unprofessional staging. Relisting with the same photos means buyers see the same problems. They scroll past. Your home stays invisible.
                  </p>
                  <p className="text-lg text-gray-700">
                    I invest $3,700 in professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. Professional photography increases showing requests by 300% and sale price by 5-10%. This is what gets homes sold.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">Same Pricing, Same Result</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your previous agent overpriced your home. Then they suggested price drop after price drop. Relisting with the same pricing strategy means the same problem. Too high (sits on market). Too low (leaves money on table).
                  </p>
                  <p className="text-lg text-gray-700">
                    I use data-driven pricing and market analysis to price your home right from day one. I analyze comparable sales, market trends, buyer psychology, and competitive positioning. I price strategically to attract qualified buyers while maximizing your sale price. The result? 98.7% of asking price average.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">Same Marketing, Same Invisibility</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your previous agent posted to MLS and disappeared. One open house, zero follow-up, no buyer targeting. Relisting with the same marketing means the same invisibility. Buyers never see your home.
                  </p>
                  <p className="text-lg text-gray-700">
                    I use a 97-point marketing system that includes social media blitzes, network activation (500+ agents), targeted Facebook/Google ads, strategic open houses, and email marketing campaigns. This comprehensive system ensures your home gets maximum exposure to qualified buyers.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">Same Agent, Same Failure</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your previous agent had 47+ listings. You got 2.1% of their attention. They couldn\'t afford to invest $5,000+ in every listing. Relisting with the same agent means the same part-time effort. Your listing gets lost in the shuffle.
                  </p>
                  <p className="text-lg text-gray-700">
                    I take maximum 6 listings at a time. You get 100% focus. Every home gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance. This focus is what separates successful sales from failed listings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                The Complete Reset: What Changes
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Relisting with me means a complete reset. Here's what changes:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">New Professional Photography</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I invest $3,700 in professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. Professional photography showcases your home at its best. Buyers see a beautiful, properly staged home. They don't see "expired." They see "opportunity." This professional media is what gets homes sold.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Strategic Pricing Analysis</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I use data-driven pricing and market analysis to price your home right from day one. I don't just lower the price. I analyze comparable sales, market trends, buyer psychology, and competitive positioning. I price strategically to attract qualified buyers while maximizing your sale price. The result? 98.7% of asking price average, not 92% or 95%.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Fresh MLS Listing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Fresh MLS listing with optimized description highlighting unique features. New photos. New pricing. New listing number. This fresh listing eliminates the stigma of "expired." Buyers see a new opportunity, not a failed listing. This is what gets homes sold.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Aggressive Marketing Campaign</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I use a 97-point marketing system that includes social media blitzes, network activation (500+ agents), targeted Facebook/Google ads, strategic open houses, and email marketing campaigns. This aggressive marketing creates maximum exposure to qualified buyers. This is what gets homes sold fast.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Active Agent Involvement</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I take maximum 6 listings at a time. You get 100% focus. Every showing tracked. Every buyer contacted. Every opportunity maximized. This active involvement is what turns showings into offers and offers into sales.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Homes That Failed to Sell - Now Sold
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  These are real Las Vegas homes that failed to sell with other agents - until I relisted them:
                </p>
                <div className="space-y-6 mb-8">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Summerlin West Home - Relisted</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 90 days, zero offers, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Relist Result:</strong> Fresh listing, sold in 16 days at 99% of asking
                    </p>
                    <p className="text-sm text-gray-600">
                      Complete reset: new professional photos, strategic pricing, fresh MLS listing, aggressive marketing. The stigma disappeared when buyers saw a beautiful, properly priced home.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">The Ridges Estate - Relisted</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 120 days, 3 price drops, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Relist Result:</strong> Fresh listing, sold in 19 days at 98.5% of asking
                    </p>
                    <p className="text-sm text-gray-600">
                      Luxury marketing reset: professional photography, targeted buyer outreach, strategic negotiation. The complete reset eliminated expired listing stigma.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Henderson Home - Relisted</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 100 days, 5 price drops, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Relist Result:</strong> Fresh listing, sold in 21 days at 98.3% of asking
                    </p>
                    <p className="text-sm text-gray-600">
                      Data-driven pricing, professional marketing, complete reset strategy. The fresh listing attracted qualified buyers who saw opportunity, not failure.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  The pattern is clear: homes that failed to sell with other agents sell with the right relisting strategy. See more <Link href="/success-stories" className="text-primary font-semibold hover:underline">relist success stories</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                What to Expect When You Relist
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Here's what happens when you relist with me:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 1: Complete Reset</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Professional photography and staging ($3,700 investment). 3D virtual tour creation. Market analysis and strategic pricing. Fresh MLS listing with optimized description. Social media marketing blitz launch. This complete reset eliminates expired listing stigma. Buyers see a beautiful, properly priced home with professional marketing.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 2: Maximum Exposure</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strategic open house with buyer pre-qualification. Network activation reaching 500+ agents. Targeted Facebook and Google ads. Email marketing to qualified buyers. Daily follow-up on all showings. This aggressive marketing creates momentum and generates offers.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 3: Active Negotiation</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Offers come in. I use aggressive follow-up, buyer psychology tactics, and strategic counter-offers to get you top dollar. I don't accept lowball offers. I negotiate them up. This aggressive negotiation is how I get 98.7% of asking price average.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Week 4: Closing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Escrow management, timeline enforcement, problem resolution, final walkthrough coordination. I manage every detail through closing. This complete management ensures your sale closes smoothly and on time.
                </p>
                <p className="text-lg text-gray-700">
                  Average timeline: 19 days to contract. 98.7% of asking price. SOLD. This is what relisting with the right strategy gets you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Relist and Sell Your Home
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Your listing expired. Your agent couldn\'t sell it. Let's fix this with a complete reset.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Call 702-500-1064 or text 702-500-1064. Free consultation. Let's relist and sell your home.
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
              <LeadForm source="relist_home_page" buttonText="GET FREE CONSULTATION" />
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

