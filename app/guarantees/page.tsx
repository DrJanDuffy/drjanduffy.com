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
                <div className="space-y-4 text-lg">
                  <p>
                    <strong>47 expired listings sold</strong> - I know what works
                  </p>
                  <p>
                    <strong>19 day average</strong> - Speed is my specialty
                  </p>
                  <p>
                    <strong>98.7% of asking</strong> - I get top dollar
                  </p>
                  <p>
                    <strong>97-point marketing system</strong> - Nothing is left to chance
                  </p>
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

