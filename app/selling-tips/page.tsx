import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import { Lightbulb, AlertCircle, CheckCircle } from 'lucide-react'
export const metadata = {
  title: 'Selling Tips | HOME THAT DIDN\'T SELL Tips | Dr. Jan Duffy',
  description:
    'Expert tips for selling homes that didn\'t sell: pricing, staging, marketing, and negotiation strategies.',
}
export default function SellingTipsPage() {
  const tips = [
    {
      icon: AlertCircle,
      category: 'Common Mistakes',
      items: [
        'Overpricing based on emotion, not data',
        'Using iPhone photos instead of professional photography',
        'Skipping staging to "save money"',
        'One open house and calling it marketing',
        'Zero follow-up on showings',
        'Blaming the market instead of the strategy',
      ],
    },
    {
      icon: CheckCircle,
      category: 'What Works',
      items: [
        'Data-driven pricing based on recent comparables',
        'Professional photography and staging ($3,700 investment)',
        'Multiple strategic open houses with buyer pre-qualification',
        'Aggressive follow-up on every showing',
        '97-point marketing system',
        'Strategic negotiation with buyer psychology',
      ],
    },
    {
      icon: Lightbulb,
      category: 'Pro Tips',
      items: [
        'Reset your listing completely - new photos, new description, fresh start',
        'Price competitively from day one - don\'t start high and drop',
        'Be available for showings - flexibility wins',
        'Invest in professional media - it pays for itself',
        'Work with an specialist in homes that didn\'t sell, not a generalist',
        'Set realistic expectations based on market data',
      ],
    },
  ]
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                SELLING TIPS FOR HOMES THAT DIDN'T SELL
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert advice from someone who's sold 47 HOMES THAT DIDN'T SELL
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {tips.map((tip, index) => {
                  const Icon = tip.icon
                  return (
                    <div
                      key={index}
                      className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-black">{tip.category}</h3>
                      </div>
                      <ul className="space-y-3">
                        {tip.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">
                  THE #1 TIP
                </h2>
                <p className="text-2xl font-bold text-center mb-4">
                  Don't hire the same type of agent who failed you.
                </p>
                <p className="text-lg text-center opacity-90">
                  If your previous agent was a generalist, hire a specialist. If they were part-time, hire full-time. If they invested $37, hire someone who invests $3,700.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  NEED PERSONALIZED ADVICE?
                </h2>
                <LeadForm source="selling_tips" buttonText="GET EXPERT ADVICE" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
