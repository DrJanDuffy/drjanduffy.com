import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import FAQSchema from '@/app/components/faq-schema'
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
  ]
  return (
    <>
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
                  The FAQ below covers the most common questions I get from HOME That DID NOT SELL sellers. These are not generic answers. These are real answers based on 7 homes that DID NOT sell - now sold, 19 day average, 98.7% of asking price. If you have questions that are not covered here, call me directly at (702) 500-1064. I'll give you real answers, not sales pitches. Learn more about <a href="/about" className="text-primary font-semibold hover:underline">my background</a>, <a href="/services" className="text-primary font-semibold hover:underline">my services</a>, and <a href="/process" className="text-primary font-semibold hover:underline">my selling process</a>.
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
