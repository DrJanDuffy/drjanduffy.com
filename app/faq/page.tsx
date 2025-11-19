import StickyHeader from '@/app/components/sticky-header'
import Navigation from '@/app/components/navigation'
import LeadForm from '@/app/components/lead-form'

export const metadata = {
  title: 'FAQ | Expired Listing Questions | Dr. Jan Duffy',
  description:
    'Frequently asked questions about expired listings, selling process, guarantees, and working with Dr. Jan Duffy.',
}

export default function FAQPage() {
  const faqs = [
    {
      question: 'Why did my listing expire?',
      answer:
        'Most listings expire due to poor marketing, overpricing, or lack of follow-up. Your previous agent likely used minimal marketing (just MLS posting), didn\'t invest in professional photography, and failed to aggressively follow up on showings. I fix all of these issues.',
    },
    {
      question: 'How long will it take to sell my expired listing?',
      answer:
        'My average is 19 days from listing to contract. I guarantee 30 days or I work free. Most expired listings sell within 2-4 weeks when properly marketed and priced.',
    },
    {
      question: 'What percentage of asking price can I expect?',
      answer:
        'I average 98.7% of asking price on expired listings. I guarantee 98% or I cut my commission. This is significantly higher than the market average because of my aggressive marketing and negotiation strategies.',
    },
    {
      question: 'What makes you different from my previous agent?',
      answer:
        'I invest $5,000+ in marketing per listing (vs. $100 average), take maximum 6 listings at a time (vs. 47+), use a 97-point marketing system (vs. "post to MLS"), and provide weekly updates with real accountability.',
    },
    {
      question: 'Do you work with luxury homes?',
      answer:
        'Yes. I specialize in luxury properties in The Ridges, Red Rock CC, The Summit, and Summerlin West. I\'ve sold expired luxury listings ranging from $675K to $2.1M.',
    },
    {
      question: 'What if my home doesn\'t sell in 30 days?',
      answer:
        'I continue working at no additional cost until it sells. The 30-day guarantee means I work free after 30 days - you don\'t pay extra commission.',
    },
    {
      question: 'How much do you charge?',
      answer:
        'Standard commission rates apply. However, I invest significantly more in marketing ($5,000+ vs. industry average of $100), which typically results in faster sales and higher prices.',
    },
    {
      question: 'Can you sell my home if it\'s been expired for months?',
      answer:
        'Yes. I\'ve sold homes that were expired for 200+ days. The key is a complete reset: new photos, new pricing strategy, fresh MLS listing, and aggressive marketing. Stigma can be overcome with the right approach.',
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
      <StickyHeader />
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Everything you need to know about selling your expired listing
              </p>

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
                  className="text-3xl font-black hover:underline block"
                >
                  (702) 500-1064
                </a>
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

