import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import NAPSection from '@/app/components/nap-section'
import GoogleBusinessLink from '@/app/components/google-business-link'
import Link from 'next/link'

export const metadata = {
  title: 'Complete Guide: What to Do When Your Home Did Not Sell | Dr. Jan Duffy',
  description:
    'Complete guide for home sellers: How to evaluate agent outreach, address common concerns, prepare for consultation, and successfully relist your home. Expert advice from Las Vegas expired listing specialist.',
  alternates: {
    canonical: 'https://www.drjanduffy.com/guides/sellers-guide',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/guides/sellers-guide',
    title: 'Complete Guide: What to Do When Your Home Did Not Sell | Dr. Jan Duffy',
    description: 'Expert guidance for home sellers on evaluating agents, addressing concerns, and successfully relisting. Las Vegas expired listing specialist.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide: What to Do When Your Home Did Not Sell',
    description: 'Expert guidance for home sellers on evaluating agents and successfully relisting.',
  },
}

const guideFAQs = [
  {
    question: 'How should I respond when agents contact me about my expired listing?',
    answer:
      'Evaluate agents carefully. Look for specific strategies, questions about your situation, and an invitation to discuss rather than just asking for the listing. Quality agents will want to understand your situation first.',
  },
  {
    question: 'Should I stay with my previous agent if they want to relist?',
    answer:
      'Only if they can clearly explain what will be different this time. If your listing did not sell, there are usually concrete issues that need addressing. Ask what they will do differently.',
  },
  {
    question: 'What should I expect in a real estate consultation?',
    answer:
      'A quality consultation should include analysis of why your home did not sell, review of your previous listing, discussion of goals, explanation of specific strategies, and a clear marketing plan.',
  },
]

export default function SellersGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides/sellers-guide' },
          { name: "Seller's Guide", url: '/guides/sellers-guide' },
        ]}
      />
      <FAQSchema faqs={guideFAQs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                Complete Guide: What to Do When Your Home Did Not Sell
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert guidance for evaluating agents, addressing concerns, and successfully relisting your home
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  If your home did not sell, you are probably feeling frustrated, confused, and unsure about what to do next. You may be getting calls, emails, and visits from agents. You may be wondering if you should try again, wait, or do something different. This comprehensive guide will help you navigate the process, evaluate your options, and make informed decisions about your next steps.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I have helped 7 Summerlin sellers whose homes did not sell with other agents. I know what works, what does not, and how to help you succeed. This guide is based on real experience, real results, and real answers to the questions sellers like you face every day. Learn more about <a href="/about" className="text-primary font-semibold hover:underline">my background</a> and <a href="/success-stories" className="text-primary font-semibold hover:underline">my results</a>.
                </p>
              </div>

              {/* Section 1: Understanding Your Situation */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12 shadow-lg">
                <h2 className="text-3xl font-black mb-6 text-primary">
                  1. Understanding Your Situation
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  The first step is understanding what happened and why. Most homes do not sell due to specific, addressable issues - not because there is something wrong with your home.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">What Went Wrong?</h3>
                <p className="text-lg text-gray-700 mb-4">
                  There are usually three main reasons a home did not sell: price, presentation, and promotion. Understanding which areas were weak helps you evaluate what needs to change.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="text-xl font-bold mb-2">Price Issues</h4>
                    <p className="text-gray-700">
                      Was there much showing activity or agent feedback suggesting the home was priced too high? Overpricing is the most common reason homes do not sell. Your previous agent may have told you what you wanted to hear to get the listing, then suggested price drops later. Data-driven pricing from day one is essential.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="text-xl font-bold mb-2">Presentation Problems</h4>
                    <p className="text-gray-700">
                      Did the photos and staging do your home's best features justice? Poor photography can reduce buyer interest by 70-80%. iPhone photos, dark rooms, and cluttered spaces make your home look smaller and less appealing. Professional photography and staging make a dramatic difference.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="text-xl font-bold mb-2">Promotion Weaknesses</h4>
                    <p className="text-gray-700">
                      Was it mostly just MLS exposure, or was there broader marketing through social media, email, and agent networks? "Posted to MLS" is not a strategy. Quality agents use comprehensive marketing systems that reach buyers through multiple channels.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-4">
                  Once you understand what went wrong, you can evaluate whether agents who contact you have solutions for those specific issues. See <a href="/why-expire" className="text-primary font-semibold hover:underline">why homes do not sell</a> for more detailed analysis.
                </p>
              </div>

              {/* Section 2: How to Evaluate Agent Outreach */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12 shadow-lg">
                <h2 className="text-3xl font-black mb-6 text-primary">
                  2. How to Evaluate Agent Outreach
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  When your listing expires, agents will contact you through various channels. Here is how to evaluate their outreach and identify quality agents.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Evaluating Text Messages</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Quality agents will mention that they noticed your home came off the market, explain their specialization in expired listings, and invite a conversation rather than just asking for the listing. Look for agents who mention specific strategies or results, not just generic promises.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Red flags include: generic messages that could be sent to anyone, unrealistic promises, or pressure to respond immediately. A good agent will respect your time and offer to discuss when convenient for you.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Evaluating Email Outreach</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Quality emails should include: acknowledgment of your specific situation, explanation of the agent's approach to expired listings, specific strategies they use, questions about what happened previously, and an invitation to discuss rather than just asking for a listing.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Look for agents who reference your address, mention their track record with expired listings, and explain what they would do differently. Be cautious of emails that are clearly templates with no personalization or understanding of your situation.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Evaluating Voicemail Messages</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Quality voicemails will mention: that they noticed your home came off the market, their specialization in helping sellers in your situation, specific strategies or results, and an invitation to discuss when convenient. They should sound professional, respectful, and focused on helping you.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Be cautious of agents who leave generic messages, pressure you to call back immediately, or do not explain their approach. A quality agent will leave enough information for you to evaluate whether they are worth your time.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Handling Door-to-Door Visits</h3>
                <p className="text-lg text-gray-700 mb-4">
                  You are not obligated to talk to agents who come to your door. If you do choose to engage, evaluate them the same way you would any agent: ask about their specific strategies, track record with expired listings, and approach. A quality agent will respect your time, explain their methods briefly, and offer to schedule a proper consultation rather than trying to get a listing on the spot.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  If you are not comfortable, you can politely decline and ask them to leave their contact information. You should never feel pressured to make decisions on your doorstep.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg mt-6">
                  <h4 className="text-xl font-bold mb-3">Key Questions to Ask</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• What is your track record with expired listings?</li>
                    <li>• What specific strategies do you use that are different from my previous agent?</li>
                    <li>• How many listings do you handle at once?</li>
                    <li>• What is your marketing budget per listing?</li>
                    <li>• Can you show me examples of homes you sold that did not sell with other agents?</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Common Concerns and Objections */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12 shadow-lg">
                <h2 className="text-3xl font-black mb-6 text-primary">
                  3. Common Concerns and Objections
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Many sellers have concerns about relisting. Here is how to think through common objections and make informed decisions.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">"I am Thinking of Selling It Myself (FSBO)"</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Selling yourself can work, but it requires significant time and effort. You will handle all calls, showings, buyer questions, contracts, and negotiations yourself. Many FSBO sellers find the workload overwhelming and eventually list with an agent.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  If you are considering FSBO because you had a bad experience with an agent, consider working with an agent who specializes in expired listings instead. I work with FSBO sellers by providing pricing guidance, paperwork help, and buyer connections - no commitment required. The key is finding someone who actually knows what they are doing.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">"I am Going to Rent It Instead"</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Renting can make sense in some situations, but it comes with responsibilities: repairs, vacancies, tenant management, and lease enforcement. Many homeowners who plan to rent later realize they prefer to sell, especially when they understand the ongoing responsibilities.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  If you are considering renting because selling did not work, we should discuss what went wrong and whether a different selling strategy would be more effective. I help clients evaluate renting versus selling objectively, including financial analysis of both options. Sometimes addressing the real issues (pricing, marketing, staging) makes selling the better choice.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">"I am Staying with My Previous Agent"</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Staying loyal can make sense, but only if your previous agent can clearly explain what will be different this time. If your listing did not sell, it is rarely just bad luck - usually there are concrete issues that need addressing: pricing strategy, marketing reach, staging, or timing.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Ask your previous agent: What will you do differently? What was missing last time? How will you address the issues that prevented a sale? If they do not have clear, specific answers, you will likely get the same results. I offer a second opinion consultation to show what I would do differently, with no pressure to switch.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">"It is Not the Right Time to Sell"</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Timing matters, but when a listing does not sell, it is rarely due to timing alone. Often there are tangible issues that can be addressed: pricing strategy, staging, or marketing. Market conditions matter, but proper pricing and marketing can overcome timing challenges.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I can help you evaluate whether waiting makes sense or if addressing specific issues would be more effective. Sometimes a fresh approach with better marketing and pricing works regardless of timing. The key is understanding whether timing is the real issue or if other factors are at play.
                </p>
              </div>

              {/* Section 4: What to Expect in a Consultation */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12 shadow-lg">
                <h2 className="text-3xl font-black mb-6 text-primary">
                  4. What to Expect in a Consultation
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  A quality consultation should give you clarity on what went wrong, what needs to change, and how the agent plans to help you succeed.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">The Diagnostic Process</h3>
                <p className="text-lg text-gray-700 mb-4">
                  A good agent will analyze why your home did not sell by examining three areas: price, presentation, and promotion. They should ask about showing activity, agent feedback, marketing efforts, and your experience with the previous listing.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I walk through each area systematically: Was there showing activity suggesting price was an issue? Did the photos and staging showcase your home's best features? Was marketing comprehensive or just MLS posting? Once we identify the weak areas, we can focus on fixing them.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Understanding Your Goals</h3>
                <p className="text-lg text-gray-700 mb-4">
                  A quality consultation should include discussion of your goals: timeline, price expectations, and priorities. The agent should explain how their approach aligns with your goals and what you can realistically expect.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I discuss your timeline, price goals, and what matters most to you. Then I explain how my approach (19 day average, 98.7% of asking price) aligns with those goals and what you can expect throughout the process.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">The Marketing Plan Overview</h3>
                <p className="text-lg text-gray-700 mb-4">
                  You should receive a clear explanation of the marketing plan, including: professional photography and staging, online advertising strategy, social media marketing, agent network activation, targeted buyer outreach, and follow-up systems.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  I explain my 97-point marketing system, including $5,000+ investment per listing, professional media, comprehensive online presence, agent network activation, and aggressive follow-up. You should understand exactly how your home will be marketed and why it will work this time.
                </p>

                <div className="bg-primary text-primary-foreground p-6 rounded-lg mt-6">
                  <h4 className="text-xl font-bold mb-3">What You Should Leave With</h4>
                  <ul className="space-y-2">
                    <li>• Clear understanding of what went wrong</li>
                    <li>• Specific plan for what will be different</li>
                    <li>• Realistic expectations for timeline and price</li>
                    <li>• Confidence in the agent's approach</li>
                    <li>• Answers to all your questions</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 mt-6">
                  Learn more about <a href="/process" className="text-primary font-semibold hover:underline">my consultation process</a> and <a href="/services" className="text-primary font-semibold hover:underline">my services</a>.
                </p>
              </div>

              {/* Section 5: Preparing to Relist Your Home */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12 shadow-lg">
                <h2 className="text-3xl font-black mb-6 text-primary">
                  5. Preparing to Relist Your Home
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Once you decide to work with an agent, here is what to expect and how to prepare for a successful relisting.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">The Complete Reset</h3>
                <p className="text-lg text-gray-700 mb-4">
                  A quality agent will implement a complete reset: new professional photography, fresh staging, updated MLS listing with optimized description, and comprehensive marketing launch. This eliminates the stigma of the expired listing and presents your home as a fresh opportunity.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I schedule professional photography within 3-5 days, complete staging consultation, create a fresh MLS listing with optimized description, and launch comprehensive marketing immediately. Your home will look brand new and attract qualified buyers.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Strategic Pricing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Pricing should be data-driven, not based on what you want to hear. A quality agent will conduct market analysis, review comparable sales, consider buyer feedback from the previous listing, and price strategically to attract qualified buyers while maximizing your sale price.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I use comprehensive market analysis to price your home right from day one. This means pricing to sell fast at top dollar, not overpricing and hoping for the best. My 98.7% of asking price average shows this approach works.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Marketing Launch</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Quality marketing should launch immediately and include: professional photography and virtual tours, online advertising (Facebook, Google), social media marketing, email campaigns to buyer database, agent network activation, and strategic open houses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  My marketing launches the day your listing goes live and continues aggressively until your home sells. You will receive weekly updates on showing activity, buyer feedback, and market response. Nothing is left to chance.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Ongoing Communication</h3>
                <p className="text-lg text-gray-700 mb-4">
                  You should expect regular updates on: showing activity and feedback, buyer interest and inquiries, market response and adjustments, and progress toward your goals. A quality agent will keep you informed and engaged throughout the process.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I provide weekly updates with real activity reports, not generic "everything is going great" messages. You will know exactly what is happening, what buyers are saying, and how we are progressing toward a sale.
                </p>
              </div>

              {/* Section 6: Questions to Ask Before Signing */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12 shadow-lg">
                <h2 className="text-3xl font-black mb-6 text-primary">
                  6. Questions to Ask Before Signing
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Before signing a listing agreement, make sure you have answers to these critical questions. A quality agent will answer them directly and specifically.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Track Record Questions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• What is your track record with expired listings?</li>
                      <li>• How many homes that did not sell have you sold?</li>
                      <li>• What is your average days on market?</li>
                      <li>• What percentage of asking price do you average?</li>
                      <li>• Can you show me examples of homes you sold that did not sell with other agents?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategy Questions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• What specific strategies will you use that are different from my previous agent?</li>
                      <li>• What is your marketing budget per listing?</li>
                      <li>• How will you market my home specifically?</li>
                      <li>• What is your pricing strategy?</li>
                      <li>• How will you handle negotiations?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Availability Questions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• How many listings do you handle at once?</li>
                      <li>• How much time can you dedicate to my listing?</li>
                      <li>• How often will you update me?</li>
                      <li>• How quickly can you respond to questions or issues?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Process Questions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• What happens if my home does not sell?</li>
                      <li>• What is your timeline for getting started?</li>
                      <li>• What can I expect in the first week?</li>
                      <li>• How will you handle buyer feedback?</li>
                      <li>• What is your approach to price adjustments if needed?</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg mt-6">
                  <p className="text-lg text-gray-700">
                    A quality agent will answer all of these questions directly with specific details, not vague promises. If an agent avoids answering or gives generic responses, that is a red flag. You deserve real answers before making a commitment.
                  </p>
                </div>
              </div>

              {/* Call to Action Section */}
              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                <h2 className="text-3xl font-black mb-4">READY TO GET STARTED?</h2>
                <p className="text-xl mb-4">
                  I have helped 7 Summerlin sellers whose homes did not sell with other agents
                </p>
                <p className="text-lg mb-6 opacity-90">
                  Average 19 days to contract | 98.7% of asking price | Proven results
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:7025001064"
                    className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--color-cta-hover)] transition-colors"
                  >
                    CALL (702) 500-1064
                  </a>
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    CONTACT ME
                  </Link>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-6 text-center">Additional Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Learn More</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/why-expire" className="text-primary hover:underline">
                          Why Homes Do Not Sell
                        </Link>
                      </li>
                      <li>
                        <Link href="/process" className="text-primary hover:underline">
                          My 30-Day Selling Process
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" className="text-primary hover:underline">
                          Complete Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/success-stories" className="text-primary hover:underline">
                          Success Stories
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Get Help</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/faq" className="text-primary hover:underline">
                          Frequently Asked Questions
                        </Link>
                      </li>
                      <li>
                        <Link href="/comparison" className="text-primary hover:underline">
                          Agent Comparison
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-primary hover:underline">
                          Contact Me
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources" className="text-primary hover:underline">
                          Free Resources
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lead Form */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  HAVE QUESTIONS ABOUT RELISTING?
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  Get personalized guidance on your specific situation
                </p>
                <LeadForm source="sellers_guide" buttonText="GET EXPERT GUIDANCE" />
              </div>

              {/* NAP Section */}
              <div className="mt-12">
                <NAPSection variant="detailed" showMap={false} showHours={true} />
                <div className="mt-6 text-center">
                  <GoogleBusinessLink variant="button" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

