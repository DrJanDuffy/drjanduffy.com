import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import FAQSchema from '@/app/components/faq-schema'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
export const metadata = {
  title: 'FAQ | HOME THAT DID NOT SELL Questions | Dr. Jan Duffy',
  description:
    'Frequently asked questions about HOMES THAT DID NOT SELL, selling process, and working with Dr. Jan Duffy.',
}
export default function FAQPage() {
  const faqs = [
    {
      question: 'Why did my listing expire?',
      answer:
        'Most homes fail to sell due to poor marketing, overpricing, or lack of follow-up. Your previous agent likely used minimal marketing (just MLS posting), DID NOT invest in professional photography, and failed to aggressively follow up on showings. I fix all of these issues.',
    },
    {
      question: 'How long will it take to sell my HOME THAT DID NOT SELL?',
      answer:
        'My average is 19 days from listing to contract. Most HOMES THAT DID NOT SELL sell within 2-4 weeks when properly marketed and priced. I continue working until your home sells.',
    },
    {
      question: 'What percentage of asking price can I expect?',
      answer:
        'I average 98.7% of asking price on HOMES THAT DID NOT SELL. This is significantly higher than the market average because of my aggressive marketing and negotiation strategies.',
    },
    {
      question: 'What makes you different from my previous agent?',
      answer:
        'I invest $5,000+ in marketing per listing (vs. $100 average), take maximum 6 listings at a time (vs. 47+), use a 97-point marketing system (vs. "post to MLS"), and provide weekly updates with real accountability.',
    },
    {
      question: 'Do you work with luxury homes?',
      answer:
        'Yes. I specialize in luxury properties in The Ridges, Red Rock CC, The Summit, and Summerlin West. I have sold expired luxury listings ranging from $675K to $2.1M.',
    },
    {
      question: 'What if my home does not sell in 30 days?',
      answer:
        'I continue working at no additional cost until it sells. You do not pay extra commission - I work until your home is sold.',
    },
    {
      question: 'How much do you charge?',
      answer:
        'Standard commission rates apply. However, I invest significantly more in marketing ($5,000+ vs. industry average of $100), which typically results in faster sales and higher prices.',
    },
    {
      question: 'Can you sell my home if it is been expired for months?',
      answer:
        'Yes. I have sold homes that were expired for 200+ days. The key is a complete reset: new photos, new pricing strategy, fresh MLS listing, and aggressive marketing. Stigma can be overcome with the right approach.',
    },
    {
      question: 'What neighborhoods do you serve?',
      answer:
        'I specialize in Summerlin West, The Ridges, Red Rock Country Club, The Summit, and surrounding Las Vegas luxury communities.',
    },
    {
      question: 'How quickly can you start?',
      answer:
        'I can begin the reset process within 24-48 hours. Professional photography and staging typically happen within 3-5 days, with the fresh listing going live within a week.',
    },
    {
      question: 'How should I respond when agents contact me about my expired listing?',
      answer:
        'When agents reach out, evaluate them carefully. Look for agents who mention specific strategies (not just "I can sell it"), ask about your previous experience, and offer a consultation rather than just asking for the listing. Be wary of agents who promise unrealistic prices or timelines without seeing your home. I always start with a free consultation to understand your situation and explain my approach. See my complete seller\'s guide for detailed guidance on evaluating agent outreach.',
    },
    {
      question: 'What should I look for in agent outreach emails?',
      answer:
        'Quality agent emails should include: specific strategies they use (not generic promises), questions about what went wrong previously, a clear explanation of their approach, and an invitation to discuss rather than just asking for a listing. Red flags include: unrealistic promises, no mention of your specific situation, or pressure to sign immediately. A good agent will want to understand your situation first. See my complete seller\'s guide for more details on evaluating agent communications.',
    },
    {
      question: 'How do I evaluate agent voicemail messages?',
      answer:
        'Listen for agents who mention specific strategies, ask about your situation, and offer to discuss rather than just asking for a callback. Quality agents will mention their track record with expired listings, explain their approach briefly, and invite a conversation. Be cautious of agents who only leave generic messages or pressure you to call back immediately. I always leave detailed messages explaining my approach and results.',
    },
    {
      question: 'What should I do if agents come to my door?',
      answer:
        'You are not obligated to talk to door-knocking agents, but if you do, evaluate them the same way you would any agent. Ask about their specific strategies for expired listings, their track record, and their approach. A quality agent will respect your time, explain their methods, and offer to schedule a proper consultation rather than trying to get a listing on the spot. If you are not comfortable, you can politely decline and ask them to leave their contact information.',
    },
    {
      question: 'I am thinking of selling it myself (FSBO) - is that a good idea?',
      answer:
        'FSBO can work for some sellers, but it requires significant time and effort. You will handle all calls, showings, buyer questions, contracts, and negotiations yourself. Many FSBO sellers find the workload overwhelming and eventually list with an agent. If you are considering FSBO because you had a bad experience with an agent, consider working with an agent who specializes in expired listings instead. I work with FSBO sellers by providing pricing guidance, paperwork help, and buyer connections - no commitment required.',
    },
    {
      question: 'Should I rent my home instead of selling?',
      answer:
        'Renting can make sense in some situations, but it comes with responsibilities: repairs, vacancies, tenant management, and lease enforcement. Many homeowners who plan to rent later realize they prefer to sell. I help clients evaluate renting versus selling objectively, including financial analysis of both options. If you are considering renting because selling did not work, we should discuss what went wrong and whether a different selling strategy would be more effective.',
    },
    {
      question: 'My previous agent wants to relist - should I stay with them?',
      answer:
        'This depends on what will be different this time. If your listing did not sell, it is rarely just bad luck - usually there are concrete issues like pricing strategy, marketing reach, staging, or timing. Ask your previous agent what they will do differently. If they do not have a clear answer or plan, it is likely you will get the same results. I offer a second opinion consultation to show what I would do differently, with no pressure to switch.',
    },
    {
      question: 'Is now the right time to sell, or should I wait?',
      answer:
        'When a listing does not sell, it is rarely due to timing alone. Often there are tangible issues that can be addressed: pricing strategy, staging, or marketing. Market conditions matter, but proper pricing and marketing can overcome timing challenges. I can help you evaluate whether waiting makes sense or if addressing specific issues would be more effective. Sometimes a fresh approach with better marketing and pricing works regardless of timing.',
    },
    {
      question: 'What should I expect in a real estate consultation?',
      answer:
        'A quality consultation should include: analysis of why your home did not sell, review of your previous listing and marketing, discussion of your goals and timeline, explanation of the agent\'s specific strategies, and a clear marketing plan. I provide a comprehensive consultation that covers pricing analysis, marketing strategy, and a detailed plan for getting your home sold. You should leave with a clear understanding of what will be different this time. Learn more about my consultation process and see my complete seller\'s guide for what to expect.',
    },
    {
      question: 'How do I know if an agent\'s marketing plan will work?',
      answer:
        'Look for specific, detailed marketing plans - not just "I will post to MLS." Quality agents should mention: professional photography investment, staging strategy, online advertising, social media marketing, agent network activation, targeted buyer outreach, and follow-up systems. Ask about their marketing budget per listing and their track record. I invest $5,000+ per listing in marketing and use a 97-point system. Compare that to agents who spend $100 and hope for the best.',
    },
    {
      question: 'What questions should I ask before signing a listing agreement?',
      answer:
        'Key questions include: What is your track record with expired listings? How many listings do you handle at once? What is your marketing budget per listing? What specific strategies will you use? How often will you update me? What happens if my home does not sell? How do you price homes? What is your negotiation approach? A quality agent will answer these directly with specific details, not vague promises. I am happy to answer all of these questions in detail during our consultation.',
    },
    {
      question: 'What happens after I sign a listing agreement?',
      answer:
        'After signing, you should expect: photography and staging scheduling within days, listing preparation and MLS entry, marketing launch across multiple channels, regular updates on showings and feedback, and active follow-up on all buyer interest. I provide a clear timeline: photography within 3-5 days, listing goes live within a week, marketing launches immediately, and you receive weekly updates with real activity reports. You should know exactly what is happening at every step.',
    },
    {
      question: 'What is the 3-3-3 rule in real estate?',
      answer:
        'The 3-3-3 rule is a general real estate guideline suggesting that buyers should look at 3 homes in 3 different neighborhoods over 3 weekends before making a decision. However, for sellers with homes that did not sell, this rule highlights why proper marketing and pricing are critical. If your home is not properly presented or priced, buyers will move on to the next 3 homes. I use strategic pricing and professional marketing to ensure your home stands out in those first 3 showings. My 19-day average proves that with the right approach, homes sell quickly regardless of buyer decision timelines. Learn more about my proven selling process.',
    },
    {
      question: 'What salary do you need for a $400000 house?',
      answer:
        'For a $400,000 home in Las Vegas, buyers typically need an annual income of approximately $100,000-$120,000 to qualify for a conventional mortgage, assuming a 20% down payment and standard debt-to-income ratios. This helps sellers understand their buyer pool. In the Las Vegas market, homes in this price range attract qualified buyers, but proper pricing and marketing are essential to reach them. I use market analysis to price homes competitively within their buyer qualification range, ensuring maximum buyer interest. This strategic pricing is part of why I achieve 98.7% of asking price on homes that did not sell.',
    },
  ]
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/faq' }]} />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Everything you need to know about selling your HOME THAT DID NOT SELL
              </p>
              <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
                <p className="text-lg text-gray-700 mb-6">
                  If your home DID NOT sell, you probably have questions. Why did it expire? How long will it take to sell? What percentage of asking can you expect? What makes me different from your previous agent? These are all valid questions, and you deserve real answers.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The FAQ below covers the most common questions I get from HOME That DID NOT SELL sellers. These are not generic answers. These are real answers based on 7 homes that DID NOT sell - now sold, 19 day average, 98.7% of asking price. If you have questions that are not covered here, call me directly at (702) 500-1064. I'll give you real answers, not sales pitches. Learn more about <a href="/about" className="text-primary font-semibold hover:underline">my background</a>, <a href="/services" className="text-primary font-semibold hover:underline">my services</a>, <a href="/process" className="text-primary font-semibold hover:underline">my selling process</a>, and check out my <a href="/guides/sellers-guide" className="text-primary font-semibold hover:underline">complete seller's guide</a> for comprehensive guidance.
                </p>
                <h2 className="text-3xl font-black mb-4 mt-8">Why These Questions Matter</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents avoid answering tough questions. They give vague answers, make promises, and hope you do not ask follow-ups. I answer every question directly, honestly, and with real data. You deserve to know what you're getting into. You deserve real answers.
                </p>
                <h3 className="text-2xl font-bold mb-3">The Real Answers</h3>
                <p className="text-lg text-gray-700">
                  The answers below are based on real experience, real results, and real data. I've sold 7 HOMES THAT DID NOT SELL. I know what works. I know what does not. I know how long it takes. I know what percentage of asking you can expect. I'll give you real answers, not marketing fluff.
                </p>
              </div>
              <div className="space-y-6 mb-12">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg"
                  >
                    <h3 className="text-xl font-black mb-3 text-primary">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                <h2 className="text-3xl font-black mb-4">STILL HAVE QUESTIONS?</h2>
                <p className="text-xl mb-4">Call me directly:</p>
                <a
                  href="tel:7025001064"
                  className="text-3xl font-black hover:underline block mb-4"
                >
                  (702) 500-1064
                </a>
                <p className="text-lg opacity-90">
                  I answer every question directly, honestly, and with real data. No sales pitches. No BS. Just real answers.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">Common Concerns About HOMES THAT DID NOT SELL</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Is My Home Stigmatized?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Many sellers worry that their HOME THAT DID NOT SELL is stigmatized - that buyers will see "expired" and think "what's wrong with it?" The truth is, HOMES THAT DID NOT SELL can be stigmatized, but the stigma can be overcome. The key is a complete reset: new photos, new pricing strategy, fresh MLS listing, and aggressive marketing. When buyers see a beautiful, properly priced home with professional marketing, they forget it ever expired.
                    </p>
                    <h4 className="text-xl font-bold mb-2">How I Overcome Stigma</h4>
                    <p className="text-gray-700">
                      I overcome stigma through aggressive reset. Professional photography makes your home look brand new. Fresh MLS listing eliminates the "expired" label. Strategic pricing positions your home competitively. Aggressive marketing brings qualified buyers. The stigma disappears when buyers see a beautiful, properly priced home with professional marketing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Will I Get Less Than Asking?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Many sellers worry that HOMES THAT DID NOT SELL sell for less than asking. The truth is, it depends on the agent. Your previous agent probably got you expired because they overpriced your home or did not negotiate effectively. I average 98.7% of asking price on HOMES THAT DID NOT SELL through aggressive marketing and strategic negotiation.
                    </p>
                    <h4 className="text-xl font-bold mb-2">How I Get Top Dollar</h4>
                    <p className="text-gray-700">
                      I get top dollar through data-driven pricing, aggressive marketing, and strategic negotiation. I price your home right from day one, so it sells fast at top dollar. I use buyer psychology tactics and strategic counter-offers to maximize your sale price. I do not accept lowball offers. I negotiate them up.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">How Long Will It Really Take?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Many sellers worry that HOMES THAT DID NOT SELL take longer to sell. The truth is, it depends on the agent. Your previous agent probably got you expired because they DID NOT have a system. I have a proven 30-day plan that sells homes that did not sell. I average 19 days to contract and continue working until your home sells.
                    </p>
                    <h4 className="text-xl font-bold mb-2">How I Sell Fast</h4>
                    <p className="text-gray-700">
                      I sell fast through aggressive reset, maximum exposure, and strategic negotiation. Week 1 is aggressive reset. Week 2 is maximum exposure. Week 3 is negotiation warfare. Week 4 is closing. Every week has measurable outcomes. Every week moves you closer to SOLD.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY TO GET ANSWERS?
                </h2>
                <LeadForm source="faq_page" buttonText="ASK YOUR QUESTION" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
