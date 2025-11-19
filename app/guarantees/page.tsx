import StickyHeader from '@/app/components/sticky-header'
import Navigation from '@/app/components/navigation'
import LeadForm from '@/app/components/lead-form'
import { Shield, Clock, DollarSign, Phone } from 'lucide-react'

export const metadata = {
  title: 'Guarantees & Promises | Dr. Jan Duffy',
  description:
    'Dr. Jan Duffy guarantees: Sold in 30 days or work free, 98% of asking or commission cut, weekly updates or $500 credit.',
}

export default function GuaranteesPage() {
  const guarantees = [
    {
      icon: Clock,
      title: '30-Day Sale Guarantee',
      description: 'Sold in 30 days or I work free. No excuses, no exceptions.',
      details: 'If your home doesn\'t sell in 30 days, I continue working at no additional cost until it sells.',
    },
    {
      icon: DollarSign,
      title: '98% of Asking Guarantee',
      description: '98% of asking price or I cut my commission.',
      details: 'If we don\'t achieve at least 98% of your asking price, I reduce my commission to make up the difference.',
    },
    {
      icon: Phone,
      title: 'Weekly Updates Guarantee',
      description: 'Weekly updates or $500 credit toward closing costs.',
      details: 'You\'ll receive a detailed update every week. If I miss a week, you get $500 credit.',
    },
    {
      icon: Shield,
      title: 'Professional Photos Guarantee',
      description: 'Professional staging and photography or $1,000 back.',
      details: 'If I don\'t provide professional staging and photography worth at least $3,700, you get $1,000 back.',
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
                MY GUARANTEES
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                No empty promises. Real guarantees with real consequences.
              </p>

              <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
                <p className="text-lg text-gray-700 mb-6">
                  Your previous agent made promises. They promised your home would sell quickly. They promised top dollar. They promised regular updates. Then your listing expired, and they made $0 while you lost $4,964 per month in holding costs. Promises don't sell homes. Guarantees do.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I don't make promises. I make guarantees. Real guarantees with real consequences. 30 days or I work free. 98% of asking or I cut my commission. Weekly updates or $500 credit. Professional photos or $1,000 back. These aren't marketing fluff. These are real guarantees that I've backed up 47 times.
                </p>
                <h2 className="text-3xl font-black mb-4 mt-8">Why Guarantees Matter</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents won't guarantee anything. They make promises, hope for the best, and disappear when things go wrong. I guarantee results because I know my system works. I've sold 47 expired Summerlin listings with an average of 19 days to contract and 98.7% of asking price. I can guarantee results because I've proven I can deliver them.
                </p>
                <h3 className="text-2xl font-bold mb-3">The Difference</h3>
                <p className="text-lg text-gray-700">
                  The difference between promises and guarantees is accountability. Your previous agent made promises with no consequences. I make guarantees with real consequences. If I don't deliver, you get compensated. That's accountability. That's how you sell homes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {guarantees.map((guarantee, index) => {
                  const Icon = guarantee.icon
                  return (
                    <div
                      key={index}
                      className="bg-white border-2 border-primary rounded-lg p-8 shadow-lg"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black">{guarantee.title}</h3>
                      </div>
                      <p className="text-xl font-bold mb-3 text-primary">
                        {guarantee.description}
                      </p>
                      <p className="text-gray-700">{guarantee.details}</p>
                    </div>
                  )
                })}
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">
                  WHY I CAN GUARANTEE THIS
                </h2>
                <p className="text-lg mb-6 text-center opacity-90">
                  I can guarantee results because I've proven I can deliver them. Here's the proof:
                </p>
                <div className="space-y-4 text-lg mb-6">
                  <p>
                    <strong>47 expired listings sold</strong> - I know what works. I've sold more expired listings than most agents have sold total listings. I know the system. I know the process. I know what it takes to sell expired listings fast and at top dollar.
                  </p>
                  <p>
                    <strong>19 day average</strong> - Speed is my specialty. The average expired listing in Las Vegas sits for 63+ days before expiring, then sits expired for another 30-90 days. I sell them in 19 days average. That's not luck. That's a proven system.
                  </p>
                  <p>
                    <strong>98.7% of asking</strong> - I get top dollar. Most agents accept lowball offers or let negotiations drag on. I use aggressive follow-up, buyer psychology tactics, and strategic counter-offers to get you top dollar. I don't accept less than 98% of asking. I guarantee it.
                  </p>
                  <p>
                    <strong>97-point marketing system</strong> - Nothing is left to chance. Your previous agent did 3-5 points: MLS posting, maybe one open house, zero follow-up. I do 97 points: professional media, social media blitzes, network activation, targeted ads, strategic open houses, aggressive follow-up. That's why I sell in 19 days and they got you expired.
                  </p>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">The Track Record</h3>
                <p className="text-lg text-center opacity-90">
                  These aren't theoretical guarantees. These are guarantees backed by 47 expired listings sold, 19 day average, 98.7% of asking price. The same system that delivered these results can deliver yours. The only question is: are you ready to work with an agent who actually guarantees results?
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">How the Guarantees Work</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">30-Day Sale Guarantee</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      If your home doesn't sell in 30 days, I continue working at no additional cost until it sells. You don't pay extra commission. I don't give up. I keep working until it's sold. That's how confident I am in my system.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Fine Print</h4>
                    <p className="text-gray-700">
                      This guarantee applies to expired listings that are properly priced and in marketable condition. If your home requires significant repairs or is priced significantly above market value, we'll discuss adjustments to the timeline. But in 47 expired listings, I've never had to invoke this guarantee. That's how effective my system is.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">98% of Asking Guarantee</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      If we don't achieve at least 98% of your asking price, I reduce my commission to make up the difference. This guarantee ensures you get top dollar, and I'm incentivized to get it for you.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Fine Print</h4>
                    <p className="text-gray-700">
                      This guarantee applies when your home is properly priced based on market analysis. If you insist on pricing significantly above market value, we'll discuss adjustments. But in 47 expired listings, I've averaged 98.7% of asking. That's not a coincidence. That's a proven system.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Weekly Updates Guarantee</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      You'll receive a detailed update every week. If I miss a week, you get $500 credit toward closing costs. This guarantee ensures you're always informed and I'm always accountable.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Fine Print</h4>
                    <p className="text-gray-700">
                      Weekly updates include showing activity, buyer feedback, market conditions, and strategy adjustments. If I miss a scheduled update, you get $500 credit. No excuses. No exceptions. That's accountability.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Professional Photos Guarantee</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      If I don't provide professional staging and photography worth at least $3,700, you get $1,000 back. This guarantee ensures you get the professional media your home deserves.
                    </p>
                    <h4 className="text-xl font-bold mb-2">The Fine Print</h4>
                    <p className="text-gray-700">
                      Professional media includes staging consultation, twilight drone photography, 3D virtual tours, high-resolution interior photography, and aerial property shots. If I don't deliver this level of quality, you get $1,000 back. But in 47 expired listings, I've never had to pay. That's how committed I am to quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY FOR GUARANTEED RESULTS?
                </h2>
                <LeadForm source="guarantees_page" buttonText="GET MY GUARANTEES" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

