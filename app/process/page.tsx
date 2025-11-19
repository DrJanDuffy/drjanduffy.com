import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import { Check } from 'lucide-react'
export const metadata = {
  title: 'The Selling Process | Dr. Jan Duffy',
  description:
    'Learn how Dr. Jan Duffy sells homes that didn't sell in 30 days or less. Step-by-step process from listing to closing.',
  alternates: {
    canonical: '/process',
  },
}
export default function ProcessPage() {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'Free analysis of why your home didn't sell and what needs to change. No BS, just honest assessment.',
      duration: '1 Day',
    },
    {
      number: 2,
      title: 'Strategic Reset',
      description: 'Professional photography, staging, 3D virtual tour, and complete MLS reset with fresh listing.',
      duration: '3-5 Days',
    },
    {
      number: 3,
      title: 'Aggressive Marketing Launch',
      description: '97-point marketing system including social media blitz, network activation, targeted ads, and strategic open houses.',
      duration: 'Week 1-2',
    },
    {
      number: 4,
      title: 'Active Negotiation',
      description: 'Aggressive follow-up on all showings, buyer psychology tactics, and strategic counter-offers.',
      duration: 'Week 2-3',
    },
    {
      number: 5,
      title: 'Closing & Escrow',
      description: 'Timeline enforcement, problem resolution, and smooth closing process.',
      duration: 'Week 3-4',
    },
  ]
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Selling Process', url: '/process' }]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                THE SELLING PROCESS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                How I sell homes that didn't sell in 30 days or less
              </p>
              <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
                <p className="text-lg text-gray-700 mb-4 text-center">
                  This proven process has sold 47 Summerlin sellers who couldn't sell with an average of 19 days to contract and 98.7% of asking price. Each step is designed to overcome stigma of unsold homes, maximize exposure, and attract qualified buyers. Learn about <a href="/services" className="text-primary font-semibold hover:underline">my complete services</a> and see <a href="/success-stories" className="text-primary font-semibold hover:underline">real success stories</a> from homes I've sold.
                </p>
              </div>
              <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
                <p className="text-lg text-gray-700 mb-6">
                  your home didn't sell because your previous agent didn't have a process. They posted to MLS, held maybe one open house, and hoped for the best. That's not a process. That's incompetence. I have a proven 5-step process that sells homes that didn't sell. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The selling process is broken down into five clear steps, each with specific deliverables and timelines. Step 1 is initial consultation. Step 2 is strategic reset. Step 3 is aggressive marketing launch. Step 4 is active negotiation. Step 5 is closing and escrow. Every step has measurable outcomes. Every step moves you closer to SOLD.
                </p>
                <h2 className="text-3xl font-black mb-4 mt-8">Why a Process Matters</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents don't have a process. They wing it. They post to MLS and hope. They hold one open house and pray. They wait for offers and accept whatever comes. That's not how you sell homes. That's how you get expired.
                </p>
                <h3 className="text-2xl font-bold mb-3">The Dr. Jan Process</h3>
                <p className="text-lg text-gray-700">
                  My process is proven. I've used it to sell 47 Summerlin sellers who couldn't sell with an average of 19 days to contract and 98.7% of asking price. The same process can sell yours. The only question is: are you ready to work with an agent who actually has a process?
                </p>
              </div>
              <div className="space-y-8 mb-12">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg"
                  >
                    <div className="flex items-start gap-6">
                      <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-black">{step.title}</h3>
                          <span className="bg-gray-100 px-4 py-1 rounded-full text-sm font-semibold">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-lg text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">WHAT'S INCLUDED</h2>
                <p className="text-lg mb-6 text-center opacity-90">
                  Every step of the process includes comprehensive services designed to sell your HOME THAT DIDN'T SELL fast and at top dollar. Here's what you get:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    'Professional Photography & Staging',
                    '3D Virtual Tour',
                    'Drone Aerial Shots',
                    'Social Media Marketing',
                    'Network Activation (500+ agents)',
                    'Strategic Open Houses',
                    'Aggressive Follow-Up System',
                    'Buyer Psychology Tactics',
                    'Negotiation Strategy',
                    'Escrow Management',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">The Investment</h3>
                <p className="text-lg text-center opacity-90">
                  I invest $5,000+ in marketing per listing. Your previous agent spent $100. The difference is obvious: expired vs. sold, $0 commission vs. full commission, $4,964/month loss vs. top dollar sale.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">The Process Timeline</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  Each step of the process is designed to overcome stigma of unsold homes and attract qualified buyers. Here's what happens in each step:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Step 1: Initial Consultation (Day 1)</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      The process starts with a free consultation. I analyze why your home didn't sell and what needs to change. No BS, just honest assessment. I'll tell you exactly what your previous agent did wrong, what I'll do differently, and how quickly I can sell your home. This consultation is free, with no obligation and no pressure.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      During the consultation, I review your HOME THAT DIDN'T SELL history, analyze market conditions, assess your home's condition, and identify what went wrong. I'll explain why your home didn't sell - was it poor marketing? Overpricing? Lack of follow-up? I'll be honest about what needs to change. Then I'll explain my process, show you proven results, and answer all your questions. This consultation is your opportunity to understand what went wrong and what I'll do differently.
                    </p>
                    <h4 className="text-xl font-bold mb-2">What You Get</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Free analysis of why your home didn't sell</li>
                      <li>• Honest assessment of what needs to change</li>
                      <li>• Clear explanation of my process and proven results</li>
                      <li>• Real answers, not sales pitches</li>
                      <li>• Market analysis and pricing strategy discussion</li>
                      <li>• Timeline expectations and process overview</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Step 2: Strategic Reset (Days 2-5)</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Once you decide to work with me, we immediately begin the strategic reset. Professional photography and staging. 3D virtual tour creation. Market analysis and pricing strategy. Fresh MLS listing with optimized description. Social media marketing blitz launch. This is when we eliminate the stigma of "expired" by making your home look brand new.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      The strategic reset is critical. This is where we transform your HOME THAT DIDN'T SELL into an attractive opportunity. Professional photography showcases your home at its best. Staging makes it look like it belongs in a design magazine. 3D virtual tours allow buyers to tour 24/7. Market analysis ensures proper pricing. Fresh MLS listing eliminates expired stigma. Social media blitz creates immediate buzz. This complete reset is what separates my system from your previous agent's "hope and pray" approach.
                    </p>
                    <h4 className="text-xl font-bold mb-2">What You Get</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Professional photography and staging ($3,700 investment)</li>
                      <li>• 3D virtual tour creation</li>
                      <li>• Market analysis and pricing strategy</li>
                      <li>• Fresh MLS listing with optimized description</li>
                      <li>• Social media marketing blitz launch</li>
                      <li>• Twilight drone photography</li>
                      <li>• Aerial property shots</li>
                      <li>• Staging consultation and implementation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Step 3: Aggressive Marketing Launch (Week 1-2)</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Week 1-2 is all about maximum exposure. Strategic open house with buyer pre-qualification. Network activation reaching 500+ agents. Targeted Facebook and Google ads. Email marketing to qualified buyers. Daily follow-up on all showings. This is when the momentum builds and offers start coming in.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      The aggressive marketing launch is where my 97-point marketing system comes into play. Your previous agent posted to MLS and disappeared. I launch a comprehensive marketing blitz that reaches thousands of potential buyers. Strategic open houses with buyer pre-qualification attract serious buyers. Network activation reaches 500+ agents who can bring qualified buyers. Targeted Facebook and Google ads reach buyers actively searching for homes. Email marketing campaigns reach qualified buyers in your price range. Daily follow-up ensures every showing is tracked and every buyer is contacted. This aggressive marketing is what creates momentum and generates offers.
                    </p>
                    <h4 className="text-xl font-bold mb-2">What You Get</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Strategic open house with buyer pre-qualification</li>
                      <li>• Network activation (500+ agent contacts)</li>
                      <li>• Targeted Facebook/Google ads</li>
                      <li>• Email marketing campaigns</li>
                      <li>• Daily follow-up on all showings</li>
                      <li>• Social media marketing blitz</li>
                      <li>• Buyer feedback collection and analysis</li>
                      <li>• Weekly marketing performance reports</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Step 4: Active Negotiation (Week 2-3)</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Week 2-3 is when offers come in and negotiations begin. This is where most agents fail. They accept lowball offers or let negotiations drag on. I use aggressive follow-up, buyer psychology tactics, and strategic counter-offers to get you top dollar. I don't wait for offers. I create them.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Active negotiation is where I maximize your sale price. Your previous agent probably accepted the first offer or let negotiations drag on. I use aggressive follow-up to create urgency. Buyer psychology tactics to create competition. Strategic counter-offers to maximize price. Inspection negotiation to protect your interests. Appraisal protection to ensure sale price. I don't accept lowball offers. I negotiate them up. I don't let deals fall apart. I manage every detail. This aggressive negotiation is how I get 98.7% of asking price average, not 92% or 95%.
                    </p>
                    <h4 className="text-xl font-bold mb-2">What You Get</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Aggressive offer follow-up within 2 hours</li>
                      <li>• Buyer psychology tactics</li>
                      <li>• Strategic counter-offers</li>
                      <li>• Inspection negotiation</li>
                      <li>• Appraisal protection</li>
                      <li>• Multiple offer management</li>
                      <li>• Timeline enforcement</li>
                      <li>• Contract negotiation and review</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Step 5: Closing & Escrow (Week 3-4)</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Week 3-4 is closing. Escrow management, timeline enforcement, problem resolution, final walkthrough coordination. This is where deals fall apart with other agents. I don't let that happen. I manage every detail, enforce every timeline, resolve every problem. SOLD - Proven results.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Closing and escrow is where deals fall apart with other agents. They disappear after getting an offer. They don't manage timelines. They don't resolve problems. They let deals fall apart. I don't let that happen. I manage every detail through closing. Escrow management ensures timelines are met. Problem resolution handles issues as they arise. Final walkthrough coordination ensures smooth closing. Closing management ensures all documents are signed. Post-closing support ensures you're satisfied. This complete management ensures your sale closes smoothly and on time. This is where I prove my value. This is where you get SOLD.
                    </p>
                    <h4 className="text-xl font-bold mb-2">What You Get</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Escrow management</li>
                      <li>• Timeline enforcement</li>
                      <li>• Problem resolution</li>
                      <li>• Final walkthrough coordination</li>
                      <li>• SOLD - Proven results</li>
                      <li>• Closing document preparation</li>
                      <li>• Title company coordination</li>
                      <li>• Post-closing support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">Why This Process Works</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  This process has sold 47 Summerlin sellers who couldn't sell with an average of 19 days to contract and 98.7% of asking price. Here's why it works:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Complete Reset Eliminates Stigma</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      The strategic reset eliminates stigma of unsold homes. Professional photography, staging, and fresh MLS listing make your home look brand new. Buyers don't see "expired." They see "opportunity." This reset is what transforms HOMES THAT DIDN'T SELL into attractive opportunities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Maximum Exposure Attracts Buyers</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      The aggressive marketing launch creates maximum exposure. Strategic open houses, network activation, targeted ads, and email marketing reach thousands of potential buyers. This exposure is what generates showings and creates offers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Aggressive Negotiation Maximizes Price</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      The active negotiation maximizes your sale price. Aggressive follow-up, buyer psychology tactics, and strategic counter-offers get you top dollar. This negotiation is what delivers 98.7% of asking price average.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Complete Management Ensures Closing</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      The closing and escrow management ensures smooth closing. Timeline enforcement, problem resolution, and complete coordination ensure your sale closes on time. This management is what prevents deals from falling apart.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY TO START THE PROCESS?
                </h2>
                <LeadForm source="process_page" buttonText="GET STARTED" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
