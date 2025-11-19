import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Find New Real Estate Agent Las Vegas | When Your Agent Can\'t Sell',
  description:
    'Looking for a new real estate agent in Las Vegas? Specialist in selling homes other agents couldn\'t. 500+ families served. Call 702-500-1064',
  alternates: {
    canonical: 'https://www.drjanduffy.com/find-new-real-estate-agent-las-vegas',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/find-new-real-estate-agent-las-vegas',
    title: 'Find New Real Estate Agent Las Vegas | When Your Agent Can\'t Sell',
    description: 'Looking for a new real estate agent in Las Vegas? Specialist in selling homes other agents couldn\'t.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find New Real Estate Agent Las Vegas',
    description: 'Specialist in selling homes other agents couldn\'t. 500+ families served.',
  },
}

export default function FindNewAgentPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Find New Real Estate Agent Las Vegas', url: '/find-new-real-estate-agent-las-vegas' }
      ]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Looking for a New Real Estate Agent in Las Vegas?
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                You trusted an agent. They DIDN\'T deliver. Now what? Here's how to find a real estate agent who actually sells homes.
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  You trusted an agent. They didn\'t deliver. Your listing expired. Your home DIDN\'T sell. You're frustrated, angry, and losing money every day. The average unsold home costs sellers $4,964 per month in holding costs. That's $116 per day. Every day you wait is money down the drain.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  But here's the truth: not all agents are created equal. Some agents actually sell homes. Others just collect listings and hope something sticks. You need to find an agent who actually delivers results. I specialize in selling homes other agents couldn\'t. 500+ families served. $127M+ in sales. 47 homes that DIDN\'T sell with other agents - now sold. See <Link href="/success-stories" className="text-primary font-semibold hover:underline">real success stories</Link> and learn about <Link href="/comparison" className="text-primary font-semibold hover:underline">how I'm different from your previous agent</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Signs You Need a New Agent
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  How do you know if you need a new agent? Here are the signs:
                </p>
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">No Communication</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your agent disappeared after listing your home. No weekly updates. No showing feedback. No communication. You're left in the dark, wondering what's happening. This is a red flag. You need an agent who communicates regularly and keeps you informed.
                  </p>
                  <p className="text-lg text-gray-700">
                    I provide weekly detailed reports with showing activity, buyer feedback, market conditions, and strategy adjustments. Real-time updates. Direct phone access. Email communication. Text message updates. This communication ensures you're always informed and I'm always accountable.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">No Showings or Feedback</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your home has been on the market for weeks with no showings. Or showings happen, but you never get feedback. Your agent doesn't know why. They don't care. This is a red flag. You need an agent who actively markets your home and follows up on every showing.
                  </p>
                  <p className="text-lg text-gray-700">
                    I have an aggressive follow-up system that ensures every showing is tracked, every buyer is contacted, and every opportunity is maximized. I follow up within 2 hours of every showing. I collect detailed feedback. I create urgency through buyer psychology tactics. This aggressive follow-up is what turns showings into offers.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">Price Drops With No Strategy</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your agent suggested price drop after price drop with no strategy. No market analysis. No buyer feedback. Just "lower the price." This is a red flag. You need an agent who uses data-driven pricing and market analysis.
                  </p>
                  <p className="text-lg text-gray-700">
                    I use data-driven pricing and market analysis to price your home right from day one. I analyze comparable sales, market trends, buyer psychology, and competitive positioning. I don't guess. I analyze. I price strategically to attract qualified buyers while maximizing your sale price. The result? 98.7% of asking price average.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">No Marketing Beyond MLS</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your agent posted to MLS and disappeared. No social media marketing. No network activation. No targeted ads. No strategic open houses. This is a red flag. You need an agent who uses comprehensive marketing.
                  </p>
                  <p className="text-lg text-gray-700">
                    I use a 97-point marketing system that includes social media blitzes, network activation (500+ agents), targeted Facebook/Google ads, strategic open houses, and email marketing campaigns. This comprehensive system ensures your home gets maximum exposure to qualified buyers. This is what $5,000+ buys you.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4 text-red-800">Listing Sitting 60+ Days</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Your listing has been on the market for 60+ days with no offers. Your agent has no plan. No strategy. No urgency. This is a red flag. You need an agent who has a proven system that gets homes sold.
                  </p>
                  <p className="text-lg text-gray-700">
                    I have a proven 30-day plan that sells homes. Week 1 is aggressive reset. Week 2 is maximum exposure. Week 3 is negotiation warfare. Week 4 is closing. Every week has measurable outcomes. Every week moves you closer to SOLD. Average 19 days to contract. This is what a proven system gets you.
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
                What to Look for in Your Next Agent
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  When looking for a new agent, here's what to look for:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Proven Track Record in YOUR Neighborhood</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Not all agents know all neighborhoods. You need an agent who has sold homes in your specific neighborhood. I specialize in Summerlin West: The Ridges, Red Rock Country Club, The Summit, and newer villages. I know the market, the buyers, and what works. This local expertise is what gets homes sold.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Specific Marketing Strategy</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ask about their marketing strategy. Generic answers like "I'll market it" aren't enough. You need specific details: professional photography, staging, social media, network activation, targeted ads. I use a 97-point marketing system with specific tactics for each step. This is what gets homes sold.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Regular Communication Commitment</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ask about communication. How often will you hear from them? What format? Weekly reports? Real-time updates? I provide weekly detailed reports with showing activity, buyer feedback, market conditions, and strategy adjustments. Plus real-time updates, direct phone access, email, and text. This communication ensures you're always informed.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Professional Photography & Staging</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ask about photography and staging. Will they invest in professional media? How much? I invest $3,700 in professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. Professional photography increases showing requests by 300% and sale price by 5-10%. This is what gets homes sold.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Aggressive Pricing Strategy</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ask about pricing strategy. Will they use data-driven analysis? Market trends? Buyer psychology? I use data-driven pricing and market analysis to price your home right from day one. I don't guess. I analyze. I price strategically to attract qualified buyers while maximizing your sale price.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
                Questions to Ask Before Hiring
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Before hiring a new agent, ask these questions:
                </p>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">1. How many homes have you sold in my neighborhood?</h3>
                  <p className="text-lg text-gray-700">
                    Local expertise matters. I've sold multiple homes in The Ridges, Red Rock Country Club, The Summit, and newer Summerlin villages. I know the market, the buyers, and what works in your specific neighborhood.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">2. What's your average days on market?</h3>
                  <p className="text-lg text-gray-700">
                    Speed matters. For homes that DIDN\'T sell with other agents, I average 19 days to contract. For properly priced and marketed homes, the average is 30-45 days. This is what a proven system gets you.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">3. What happens if my home doesn't sell?</h3>
                  <p className="text-lg text-gray-700">
                    Accountability matters. I have a proven system that works. But if your home doesn't sell, we analyze what went wrong and adjust the strategy. I don't disappear. I don't make excuses. I deliver results or we figure out why.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">4. What's your marketing plan?</h3>
                  <p className="text-lg text-gray-700">
                    Specific strategy matters. I use a 97-point marketing system with specific tactics: professional photography ($3,700), social media blitzes, network activation (500+ agents), targeted ads, strategic open houses, email marketing. This comprehensive system ensures your home gets maximum exposure.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                  <h3 className="text-2xl font-black mb-4">5. How many listings do you take at a time?</h3>
                  <p className="text-lg text-gray-700">
                    Focus matters. I take maximum 6 listings at a time. You get 100% focus. Every home gets the full treatment. Your previous agent had 47+ listings. You got 2.1% of their attention. This focus is what separates successful sales from failed listings.
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
                How to Choose a Real Estate Agent Who Actually Sells
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Choosing the right agent is critical. Here's how to choose one who actually sells:
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Look for Specialization</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Not all agents are good at everything. Some specialize in first-time buyers. Some specialize in luxury homes. Some specialize in homes that DIDN\'T sell. I specialize in homes that didn\'t sell with other agents. This specialization is what delivers results. 47 homes That Didn\'t sell - now sold. 19 day average. 98.7% of asking price.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Check Their Track Record</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ask for specific results. How many homes sold? Average days on market? Average sale price percentage? I've sold 47 homes that DIDN\'T sell with other agents. Average 19 days to contract. 98.7% of asking price. $127M+ in total sales. 500+ families served. These are real results, not promises.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Ask About Their System</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Results come from systems, not luck. Ask about their process. What happens week by week? What's the marketing strategy? What's the follow-up system? I have a proven 30-day plan with specific tactics for each week. This system is what delivers results.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Verify Their Investment</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ask about their marketing investment. How much do they spend per listing? What do they spend it on? I invest $5,000+ per listing: $3,700 on professional media, plus marketing, staging, and follow-up. This investment is what gets homes sold. Your previous agent spent $100. That's why your home DIDN\'T sell.
                </p>
                <h3 className="text-2xl font-black mb-4 mt-8">Read Testimonials</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Read testimonials from real clients. Do they mention specific results? Communication? Marketing? I have testimonials from 47 sellers who couldn\'t sell with their previous agent. They mention specific results, communication, and marketing. See <Link href="/testimonials" className="text-primary font-semibold hover:underline">real client testimonials</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-2 border-primary rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">My Credentials</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  Here's why I'm different from your previous agent:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-black mb-3">Results</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 500+ families served</li>
                      <li>• $127M+ in total sales</li>
                      <li>• 47 homes that DIDN\'T sell - now sold</li>
                      <li>• 19 day average to contract</li>
                      <li>• 98.7% of asking price average</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-3">Credentials</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Dr. Jan Duffy</li>
                      <li>• Berkshire Hathaway HomeServices</li>
                      <li>• Nevada License #S.0197614.LLC</li>
                      <li>• Summerlin luxury specialist</li>
                      <li>• Good Neighbor Award Recipient</li>
                    </ul>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 text-center">
                  These credentials are for credibility. But what matters is results. 47 homes that didn\'t sell with other agents - now sold. That's what you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Discuss Your Situation
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Looking for a new real estate agent? Let's discuss your situation and see if I'm the right fit.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Call 702-500-1064 or text 702-500-1064. Free consultation. No obligation. Let's find the right agent for you.
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
              <LeadForm source="find_new_agent_page" buttonText="GET FREE CONSULTATION" />
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

