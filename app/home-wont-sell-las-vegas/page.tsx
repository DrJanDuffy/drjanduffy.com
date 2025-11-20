import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Home will not Sell Las Vegas? Here is Why & How to Fix It',
  description:
    'Your home will not sell in Las Vegas? Specialist in homes that sat with other agents. 7 sold - average 19 days, 98.7% of asking. Call 702-500-1064',
  alternates: {
    canonical: 'https://www.drjanduffy.com/home-wont-sell-las-vegas',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/home-wont-sell-las-vegas',
    title: 'Home will not Sell Las Vegas? Here is Why & How to Fix It',
    description: 'Your home will not sell in Las Vegas? Specialist in homes that sat with other agents. 7 sold - average 19 days, 98.7% of asking.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home will not Sell Las Vegas? Here is Why & How to Fix It',
    description: 'Specialist in homes that sat with other agents. 7 sold - average 19 days, 98.7% of asking.',
  },
}

const faqs = [
  {
    question: 'Why will not my house sell?',
    answer: 'The most common reasons houses do not sell are: overpricing, poor photography, weak marketing strategy, zero follow-up, and part-time agent effort. Your previous agent likely made at least three of these mistakes. I specialize in fixing these issues with a complete marketing reset, strategic pricing, and aggressive follow-up.',
  },
  {
    question: 'How long should I wait before relisting?',
    answer: 'Do not wait. Every day your home sits unsold costs you $116+ in holding costs. The longer it sits, the more it becomes stigmatized. If your listing expired or your home has been on the market 60+ days with no offers, it is time to relist with a different strategy. I can help you relist and sell your home in 30 days or less.',
  },
  {
    question: 'Should I lower my price if my house will not sell?',
    answer: 'Lowering price alone will not fix the problem if your marketing is weak. The issue is usually a combination of pricing AND marketing. I use data-driven pricing analysis to price your home right from day one, combined with professional marketing that attracts qualified buyers. This approach gets you top dollar, not just a lower price.',
  },
  {
    question: 'What\'s the average time to sell in Las Vegas?',
    answer: 'The average time to sell in Las Vegas varies by price range and neighborhood. For homes that DID NOT sell with other agents, I average 19 days to contract. For properly priced and marketed homes in Summerlin, the average is 30-45 days. The key is professional marketing, strategic pricing, and active agent involvement.',
  },
  {
    question: 'How much does it cost when my house sits unsold?',
    answer: 'The average unsold home costs sellers $4,964 per month in holding costs. That is $116 per day. This includes mortgage payments, HOA fees, insurance, utilities, and property taxes. Plus, there are hidden costs: lost opportunity, market depreciation, and emotional toll. The longer it sits, the more it costs you.',
  },
  {
    question: 'What makes you different from my previous agent?',
    answer: 'I invest $5,000+ in marketing per listing (vs. $100). I take maximum 6 listings at a time (vs. 47+). I use a 97-point marketing system (vs. post to MLS and pray). I have aggressive follow-up (vs. zero follow-up). I specialize in homes that DID NOT sell (vs. avoiding them). The result: 7 homes that DID NOT sell - now sold, 19 day average, 98.7% of asking price.',
  },
  {
    question: 'Can you really sell my home if it DID NOT sell before?',
    answer: 'Yes. I have sold 7 homes that DID NOT sell with other agents. Average 19 days to contract, 98.7% of asking price. The key is a complete reset: new professional photos, strategic pricing analysis, fresh MLS listing, and aggressive marketing. The stigma disappears when buyers see a beautiful, properly priced home with professional marketing.',
  },
]

export default function HomeWontSellPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Home will not Sell Las Vegas', url: '/home-wont-sell-las-vegas' }
      ]} />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Your Home will not Sell in Las Vegas? Here's Why.
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                If your home will not sell, you are not alone. In Las Vegas, 20-30% of all homes fail to sell on their first try every year.
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Your home will not sell. You have tried. Your agent tried. Nothing worked. You are frustrated, angry, and losing money every day. The average unsold home costs sellers $4,964 per month in holding costs. That is $116 per day. Every day you wait is money down the drain.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  But here is the truth: your home DID NOT fail. Your agent did. I specialize in homes that will not sell. I have helped 7 Summerlin sellers who could not sell with their previous agent. Average 19 days to contract. 98.7% of asking price. These are not hypothetical results. These are real homes that I sold after other agents failed. See <Link href="/success-stories" className="text-primary font-semibold hover:underline">real success stories</Link>, learn about <Link href="/process" className="text-primary font-semibold hover:underline">my proven 30-day selling process</Link>, and check out my <Link href="/guides/sellers-guide" className="text-primary font-semibold hover:underline">complete seller's guide</Link> for comprehensive guidance on your next steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                5 Reasons Your Las Vegas Home will not Sell
              </h2>
              <div className="prose prose-lg max-w-none">
                <div className="bg-white border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">1. Overpricing</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your previous agent probably told you what you wanted to hear about price, not the truth. They wanted the listing, so they overpriced it. Then, when it DID NOT sell, they suggested price drop after price drop. That's not a strategy. That's incompetence.
                  </p>
                  <p className="text-lg text-gray-700">
                    I use data-driven pricing and market analysis to price your home right from day one. I analyze comparable sales, market trends, buyer psychology, and competitive positioning. I do not guess. I analyze. I price strategically to attract qualified buyers while maximizing your sale price. The result? 98.7% of asking price average, not 92% or 95%.
                  </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">2. Poor Photography & Presentation</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your previous agent used iPhone photos. Dark rooms, cluttered spaces, unprofessional staging. Buyers scroll through hundreds of listings online. If your photos do not grab them immediately, they move on. Your home becomes invisible.
                  </p>
                  <p className="text-lg text-gray-700">
                    I invest $3,700 in professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. Professional photography increases showing requests by 300% and sale price by 5-10%. This is what $3,700 buys you. This is what your previous agent DID NOT provide.
                  </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">3. Weak Marketing Strategy</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    "Posted to MLS" is not a strategy. One open house, zero follow-up, no buyer targeting. Your house becomes invisible. Buyers never even see it.
                  </p>
                  <p className="text-lg text-gray-700">
                    I use a 97-point marketing system that includes social media blitzes, network activation (500+ agents), targeted Facebook/Google ads, strategic open houses, and email marketing campaigns. This comprehensive system ensures your home gets maximum exposure to qualified buyers. This is what $5,000+ buys you. This is what your previous agent DID NOT provide.
                  </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">4. Zero Follow-Up</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your previous agent had zero follow-up. Buyers saw your home, but your agent never followed up. Feedback disappeared. Opportunities were lost. Showings happened, but nothing came of them.
                  </p>
                  <p className="text-lg text-gray-700">
                    I have an aggressive follow-up system that ensures every showing is tracked, every buyer is contacted, and every opportunity is maximized. I follow up within 2 hours of every showing. I collect detailed feedback. I create urgency through buyer psychology tactics. I do not wait for offers. I create them. This aggressive follow-up is what turns showings into offers and offers into sales.
                  </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">5. Part-Time Agent Effort</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your previous agent had 47+ listings. You got 2.1% of their attention. They could not afford to invest $5,000+ in every listing. They spread themselves thin, hoping something would stick. Your listing got lost in the shuffle.
                  </p>
                  <p className="text-lg text-gray-700">
                    I take maximum 6 listings at a time. You get 100% focus. Every home gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance. This focus is what separates successful sales from unsold homes.
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
                The Real Cost When Your Home will not Sell
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  While your home sits unsold, you are losing money every single day. Here is the real cost:
                </p>
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">Direct Costs</h3>
                  <ul className="space-y-2 text-lg text-gray-700 mb-4">
                    <li>• $4,964/month in holding costs (mortgage, HOA, insurance, utilities, property taxes)</li>
                    <li>• $116/day in daily costs</li>
                    <li>• $14,892 over 3 months</li>
                    <li>• $29,784 over 6 months</li>
                  </ul>
                  <p className="text-xl font-bold text-red-600">
                    These costs add up fast.
                  </p>
                </div>
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">Hidden Costs</h3>
                  <ul className="space-y-2 text-lg text-gray-700 mb-4">
                    <li>• Lost opportunity cost - could have sold and moved on</li>
                    <li>• Market depreciation while listing sat</li>
                    <li>• Emotional toll of failed listing</li>
                    <li>• Stigma making future sale harder</li>
                  </ul>
                  <p className="text-xl font-bold text-gray-700">
                    These costs are harder to measure but just as real.
                  </p>
                </div>
                <p className="text-lg text-gray-700">
                  The longer your home sits unsold, the more it costs you. Every day you wait is another $116+ in holding costs. Every week is another $812. Every month is another $4,964. The cost of waiting is real. The cost of working with the wrong agent is real. Use our <Link href="/tools/cost-calculator" className="text-primary font-semibold hover:underline">cost calculator</Link> to see your exact daily loss.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                How to Sell a Home That will not Sell
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Selling a home that will not sell requires a complete reset, not more of the same. Here is how I do it:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Step 1: Complete Marketing Reset</h3>
                <p className="text-lg text-gray-700 mb-4">
                  The first step is a complete marketing reset. Professional photography and staging ($3,700 investment). 3D virtual tour creation. Market analysis and strategic pricing. Fresh MLS listing with optimized description. Social media marketing blitz launch. This complete reset eliminates the stigma of unsold homes. Buyers see a beautiful, properly priced home with professional marketing. They do not see "DID NOT sell." They see "opportunity."
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Step 2: Strategic Pricing Analysis</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Most homes that will not sell are overpriced. But lowering price alone will not fix the problem if your marketing is weak. I use data-driven pricing and market analysis to price your home right from day one. I analyze comparable sales, market trends, buyer psychology, and competitive positioning. I price strategically to attract qualified buyers while maximizing your sale price.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Step 3: Aggressive Marketing Launch</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Week 1-2 is maximum exposure. Strategic open house with buyer pre-qualification. Network activation reaching 500+ agents. Targeted Facebook and Google ads. Email marketing to qualified buyers. Daily follow-up on all showings. This aggressive marketing creates momentum and generates offers.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Step 4: Active Negotiation</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Week 2-3 is when offers come in and negotiations begin. I use aggressive follow-up, buyer psychology tactics, and strategic counter-offers to get you top dollar. I do not accept lowball offers. I negotiate them up. This aggressive negotiation is how I get 98.7% of asking price average.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Step 5: Closing Management</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Week 3-4 is closing. Escrow management, timeline enforcement, problem resolution, final walkthrough coordination. I manage every detail through closing. This complete management ensures your sale closes smoothly and on time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Las Vegas Homes That would not Sell - Until Now
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  These are real Las Vegas homes that would not sell with other agents - until I got involved:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Summerlin West Home</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 90 days, zero offers, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Result:</strong> 16 days to contract, 99% of asking
                    </p>
                    <p className="text-sm text-gray-600">
                      Complete marketing reset with professional photography, strategic pricing, and aggressive follow-up.
                    </p>
                  </div>
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">The Ridges Luxury Estate</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 120 days, 3 price drops, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Result:</strong> 19 days to contract, 98.5% of asking
                    </p>
                    <p className="text-sm text-gray-600">
                      Luxury marketing strategy with targeted buyer outreach and strategic negotiation.
                    </p>
                  </div>
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Red Rock Country Club</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 75 days, minimal showings, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Result:</strong> 14 days to contract, 99.2% of asking
                    </p>
                    <p className="text-sm text-gray-600">
                      Professional staging, strategic open house, aggressive follow-up.
                    </p>
                  </div>
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-black mb-3">Henderson Home</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Previous Agent:</strong> 100 days, 5 price drops, expired
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>My Result:</strong> 21 days to contract, 98.3% of asking
                    </p>
                    <p className="text-sm text-gray-600">
                      Data-driven pricing, professional marketing, complete reset strategy.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  The pattern is clear: homes that will not sell with other agents sell with the right strategy. See more <Link href="/success-stories" className="text-primary font-semibold hover:underline">success stories</Link> from homes I have sold.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Fix This in 30 Days
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Your home will not sell? I specialize in homes that sat with other agents. Complete reset. Aggressive marketing. Proven results.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Call 702-500-1064 or text 702-500-1064. Free consultation. No obligation. Let's get your home sold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:7025001064"
                className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-12 py-6 rounded-lg font-bold text-2xl hover:bg-[var(--color-cta-hover)] transition-colors"
              >
                CALL NOW: (702) 500-1955
              </a>
              <a
                href="tel:7025001064"
                className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-12 py-6 rounded-lg font-bold text-2xl hover:bg-[var(--color-cta-hover)] transition-colors"
              >
                TEXT: (702) 222-1964
              </a>
            </div>
            <div className="bg-white/10 p-6 rounded-lg max-w-2xl mx-auto">
              <LeadForm source="home_wont_sell_page" buttonText="GET FREE CONSULTATION" />
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

