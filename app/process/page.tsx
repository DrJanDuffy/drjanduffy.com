import StickyHeader from '@/app/components/sticky-header'
import Navigation from '@/app/components/navigation'
import LeadForm from '@/app/components/lead-form'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'The Selling Process | Dr. Jan Duffy',
  description:
    'Learn how Dr. Jan Duffy sells expired listings in 30 days or less. Step-by-step process from listing to closing.',
}

export default function ProcessPage() {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'Free analysis of why your listing expired and what needs to change. No BS, just honest assessment.',
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
      <StickyHeader />
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                THE SELLING PROCESS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                How I sell expired listings in 30 days or less
              </p>

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
                <div className="grid md:grid-cols-2 gap-4">
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

