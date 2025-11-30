import Header from '@/app/components/header'
import FAQSchema from '@/app/components/faq-schema'
import LeadForm from '@/app/components/lead-form'
import { Check, X } from 'lucide-react'
export const metadata = {
  title: 'Why Choose Dr. Jan Duffy | specialist in homes that DID NOT sell',
  description:
    'Why choose Dr. Jan Duffy for your HOME THAT DID NOT SELL? 47 sold, 19 day average, 98.7% of asking, and proven results.',
}
export default function WhyChooseMePage() {
  const reasons = [
    {
      title: 'Proven Track Record',
      description: '7 homes that DID NOT sell - now sold with 19 day average and 98.7% of asking price.',
      proof: 'Real results, not promises',
    },
    {
      title: 'specialist in homes that DID NOT sell',
      description: 'I do not dabble in HOMES THAT DID NOT SELL - I specialize in them. This is all I do.',
      proof: '100% focus on HOMES THAT DID NOT SELL',
    },
    {
      title: 'Maximum 6 Listings',
      description: 'I take maximum 6 listings at a time. You get 100% focus, not 2.1% like with big franchise agents.',
      proof: 'Quality over quantity',
    },
    {
      title: '$5,000+ Marketing Investment',
      description: 'I invest $5,000+ per listing in professional media and marketing. Your previous agent spent $37.',
      proof: 'Real investment in your success',
    },
    {
      title: 'Proven Results',
      description: '7 homes that DID NOT sell - now sold with 19 day average and 98.7% of asking price. Weekly updates with real accountability.',
      proof: 'Accountability, not excuses',
    },
    {
      title: 'Aggressive Follow-Up',
      description: 'I do not post and disappear. I aggressively follow up on every showing and negotiate every offer.',
      proof: 'Relentless pursuit of results',
    },
  ]
  const comparisons = [
    {
      aspect: 'Marketing Investment',
      otherAgents: '$37 on photos',
      drJan: '$3,700 on professional media',
    },
    {
      aspect: 'Number of Listings',
      otherAgents: '47+ listings (2.1% focus)',
      drJan: '6 max (100% focus)',
    },
    {
      aspect: 'Follow-Up System',
      otherAgents: 'Zero follow-up',
      drJan: 'Aggressive weekly updates',
    },
    {
      aspect: 'Average Days to Sell',
      otherAgents: '63+ days (expired)',
      drJan: '19 days average',
    },
    {
      aspect: 'Sale Price Percentage',
      otherAgents: 'Variable (often below asking)',
      drJan: '98.7% of asking average',
    },
    {
      aspect: 'Accountability',
      otherAgents: 'None',
      drJan: 'Proven results with real consequences',
    },
  ]
  const faqs = [
    {
      question: 'Why should I choose Dr. Jan Duffy over other agents?',
      answer:
        'I specialize exclusively in homes that did not sell, invest $5,000+ per listing in marketing (vs. $100 average), take maximum 6 listings at a time for 100% focus, and have proven results: 7 homes that did not sell - now sold with 19 day average and 98.7% of asking price.',
    },
    {
      question: 'How is your approach different from my previous agent?',
      answer:
        'I use a 97-point marketing system with professional photography worth $3,700, aggressive follow-up on every showing, weekly updates with real accountability, and strategic negotiation. Your previous agent likely posted to MLS and disappeared.',
    },
    {
      question: 'What results can I expect with Dr. Jan Duffy?',
      answer:
        'My average is 19 days from listing to contract and 98.7% of asking price on homes that did not sell. I have sold 7 homes that other agents failed to sell, all in Summerlin West luxury areas.',
    },
    {
      question: 'Do you take on too many listings like other agents?',
      answer:
        'No. I take maximum 6 listings at a time, ensuring you get 100% focus. Most agents juggle 47+ listings, giving you only 2.1% of their attention. With me, you get dedicated service and results.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                WHY CHOOSE DR. JAN DUFFY?
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                The specialist in homes that DID NOT sell who actually delivers results
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-primary rounded-lg p-6 shadow-lg"
                  >
                    <h3 className="text-2xl font-black mb-3 text-primary">
                      {reason.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-3">
                      {reason.description}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {reason.proof}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-6 text-center">
                  DR. JAN VS. OTHER AGENTS
                </h2>
                <div className="space-y-4">
                  {comparisons.map((comp, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg border-2 border-gray-200"
                    >
                      <h4 className="font-bold text-lg mb-4">{comp.aspect}</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-red-600">Other Agents</p>
                            <p className="text-gray-700">{comp.otherAgents}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-green-700">Dr. Jan Duffy</p>
                            <p className="text-gray-700">{comp.drJan}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                <h2 className="text-3xl font-black mb-4">THE BOTTOM LINE</h2>
                <p className="text-2xl font-bold mb-2">
                  Your previous agent failed. I will not.
                </p>
                <p className="text-xl">
                  7 homes that did not sell - now sold. 19 day average. 98.7% of asking.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY TO CHOOSE RESULTS?
                </h2>
                <LeadForm source="why_choose_me" buttonText="CHOOSE DR. JAN" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
