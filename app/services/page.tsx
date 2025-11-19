import StickyHeader from '@/app/components/sticky-header'
import Navigation from '@/app/components/navigation'
import LeadForm from '@/app/components/lead-form'
import { Camera, Home, TrendingUp, Users, FileText, Phone } from 'lucide-react'

export const metadata = {
  title: 'Services | Expired Listing Services | Dr. Jan Duffy',
  description:
    'Complete services for expired listings: professional photography, staging, marketing, negotiation, and closing management.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: Camera,
      title: 'Professional Photography & Staging',
      description: '$3,700 investment in professional media including twilight drone shots, 3D virtual tours, and magazine-quality staging.',
      features: [
        'Professional staging consultation',
        'Twilight drone photography',
        '3D virtual home tours',
        'High-resolution interior photography',
        'Aerial property shots',
      ],
    },
    {
      icon: Home,
      title: 'Complete MLS Reset',
      description: 'Fresh listing with optimized description, professional photos, and strategic pricing to overcome expired listing stigma.',
      features: [
        'Fresh MLS listing',
        'Optimized property description',
        'Strategic pricing analysis',
        'Market positioning',
        'Stigma elimination strategy',
      ],
    },
    {
      icon: TrendingUp,
      title: '97-Point Marketing System',
      description: 'Comprehensive marketing blitz including social media, network activation, targeted ads, and strategic open houses.',
      features: [
        'Social media marketing blitz',
        'Network activation (500+ agents)',
        'Targeted Facebook/Google ads',
        'Strategic open houses',
        'Email marketing campaigns',
      ],
    },
    {
      icon: Users,
      title: 'Aggressive Follow-Up',
      description: 'Relentless follow-up on all showings with buyer psychology tactics and strategic negotiation.',
      features: [
        'Immediate showing follow-up',
        'Buyer psychology tactics',
        'Strategic counter-offers',
        'Inspection negotiation',
        'Appraisal protection',
      ],
    },
    {
      icon: FileText,
      title: 'Escrow Management',
      description: 'Complete escrow management with timeline enforcement and problem resolution.',
      features: [
        'Timeline enforcement',
        'Problem resolution',
        'Final walkthrough coordination',
        'Closing management',
        'Post-closing support',
      ],
    },
    {
      icon: Phone,
      title: 'Weekly Communication',
      description: 'Detailed weekly updates with real accountability. Miss a week? $500 credit toward closing costs.',
      features: [
        'Weekly detailed reports',
        'Real-time updates',
        'Direct phone access',
        'Email communication',
        'Text message updates',
      ],
    },
  ]

  return (
    <>
      <StickyHeader />
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                COMPLETE SERVICES
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Everything needed to sell your expired listing fast and at top dollar
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={index}
                      className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-black">{service.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary font-bold mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                <h2 className="text-3xl font-black mb-4">INVESTMENT COMPARISON</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  <div className="bg-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Your Previous Agent</h3>
                    <p className="text-4xl font-black mb-2">~$100</p>
                    <p className="text-sm opacity-90">Basic MLS posting</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Dr. Jan Duffy</h3>
                    <p className="text-4xl font-black mb-2">$5,000+</p>
                    <p className="text-sm opacity-90">Complete marketing system</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY FOR COMPLETE SERVICE?
                </h2>
                <LeadForm source="services_page" buttonText="GET STARTED" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

