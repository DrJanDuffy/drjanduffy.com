import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import ServiceSchema from '@/app/components/service-schema'
import NAPSection from '@/app/components/nap-section'
import { Camera, Home, TrendingUp, Users, FileText, Phone } from 'lucide-react'
export const metadata = {
  title: 'Real Estate Services in Las Vegas, NV | Dr. Janet Duffy | (702) 500-1064',
  description:
    'Complete real estate services for homes that didn\'t sell in Las Vegas, Summerlin, and Henderson. Professional photography, staging, marketing, negotiation, and closing management. Call (702) 500-1064.',
  alternates: {
    canonical: 'https://www.drjanduffy.com/services',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/services',
    title: 'Real Estate Services in Las Vegas, NV | Dr. Janet Duffy',
    description: 'Complete real estate services for homes that didn\'t sell in Las Vegas, Summerlin, and Henderson. Professional photography, staging, marketing, negotiation, and closing management.',
  },
  twitter: {
    card: 'summary',
    title: 'Real Estate Services in Las Vegas, NV | Dr. Janet Duffy',
    description: 'Complete real estate services for homes that didn\'t sell in Las Vegas, Summerlin, and Henderson.',
  },
}
import Link from 'next/link'
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
      description: 'Fresh listing with optimized description, professional photos, and strategic pricing to overcome stigma of unsold homes.',
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
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]} />
      <ServiceSchema
        serviceName="HOME THAT DIDN\'T SELL Real Estate Services"
        description="Complete services for HOMES THAT didn\'t SELL including professional photography, staging, marketing, negotiation, and closing management. $5,000+ investment per listing."
        areaServed={['Las Vegas', 'Summerlin', 'Henderson']}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                COMPLETE SERVICES
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Everything needed to sell your HOME THAT DIDN\'T SELL fast and at top dollar
              </p>
              <div className="max-w-4xl mx-auto mb-12 prose prose-lg">
                <p className="text-lg text-gray-700 mb-6 text-center">
                  I invest $5,000+ in professional marketing per listing - 50x more than the average agent. This comprehensive service package includes professional photography, staging, complete MLS reset, aggressive marketing, and strategic negotiation. See <Link href="/process" className="text-primary font-semibold hover:underline">my 30-day selling process</Link> and learn about <Link href="/marketing-strategy" className="text-primary font-semibold hover:underline">my 97-point marketing system</Link>.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Your previous agent failed you because they didn\'t provide complete services. They took iPhone photos, posted to MLS, held maybe one open house, and disappeared. That's not service. That's negligence. I provide complete services that transform HOMES THAT DIDN\'T SELL into successful sales. Every service is designed to overcome stigma of unsold homes, maximize exposure, and attract qualified buyers.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The difference between my services and your previous agent's services is dramatic. They spent $100. I spend $5,000+. They used minimal marketing. I use a 97-point marketing system. They had zero follow-up. I have aggressive follow-up. They made promises. I deliver proven results. The result? They got you expired. I get you sold. Fast. At top dollar. With zero excuses.
                </p>
              </div>
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

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">DETAILED SERVICE BREAKDOWN</h2>
                <p className="text-center text-lg text-gray-700 mb-8">
                  Each service is designed to overcome stigma of unsold homes and attract qualified buyers. Here's what you get with each service:
                </p>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black mb-4">Professional Photography & Staging ($3,700 Investment)</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent used iPhone photos. I use professional photography worth $3,700. The difference is dramatic. Professional photos increase showing requests by 300% and sale price by 5-10%. Twilight drone shots showcase your property at its best. 3D virtual tours allow buyers to tour your home 24/7. Magazine-quality staging makes your home look like it belongs in a design magazine. This isn't optional. This is essential. HOMES THAT DIDN\'T SELL need professional media to overcome stigma and attract qualified buyers.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      The professional media package includes staging consultation, twilight drone photography, 3D virtual tours, high-resolution interior photography, and aerial property shots. Every photo is professionally edited. Every room is staged to perfection. Every detail is optimized to showcase your home's best features. This is what $3,700 buys you. This is what your previous agent didn\'t provide. This is why your home DIDN\'T sell.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4">Complete MLS Reset</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent posted to MLS with a generic description and iPhone photos. I create a fresh MLS listing with optimized description, professional photos, and strategic pricing. The MLS reset eliminates stigma of unsold homes. Buyers see a beautiful, properly priced home with professional marketing. They don't see "expired." They see "opportunity."
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      The MLS reset includes fresh listing, optimized property description highlighting unique features, strategic pricing analysis based on market data, market positioning to attract qualified buyers, and stigma elimination strategy to overcome HOME THAT didn\'t SELL perception. This complete reset transforms your HOME THAT DIDN\'T SELL into an attractive opportunity that buyers want to see.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4">97-Point Marketing System</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent used a "post to MLS and pray" strategy. I use a 97-point marketing system that leaves nothing to chance. Social media marketing blitz reaches thousands of potential buyers. Network activation reaches 500+ agents who can bring qualified buyers. Targeted Facebook and Google ads reach buyers actively searching for homes. Strategic open houses with buyer pre-qualification attract serious buyers. Email marketing campaigns reach qualified buyers in your price range.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      The 97-point marketing system includes social media marketing blitz, network activation reaching 500+ agents, targeted Facebook and Google ads, strategic open houses with buyer pre-qualification, email marketing campaigns to qualified buyers, and daily follow-up on all marketing activities. This comprehensive system ensures your home gets maximum exposure to qualified buyers. This is what $5,000+ buys you. This is what your previous agent didn't provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4">Aggressive Follow-Up & Negotiation</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent had zero follow-up. Buyers saw your home, but your agent never followed up. Feedback disappeared. Opportunities were lost. I have an aggressive follow-up system that ensures every showing is tracked, every buyer is contacted, and every opportunity is maximized. I don't wait for offers. I create them. I don't accept lowball offers. I negotiate them up.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      The aggressive follow-up system includes immediate showing follow-up within 2 hours, buyer psychology tactics to create urgency, strategic counter-offers to maximize sale price, inspection negotiation to protect your interests, and appraisal protection to ensure sale price. This aggressive system ensures every showing leads to an offer, and every offer leads to top dollar. This is how I get 98.7% of asking price average. This is how your previous agent got you expired.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4">Escrow Management & Closing</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent disappeared after getting an offer. I manage every detail through closing. Escrow management ensures timelines are met. Problem resolution handles issues as they arise. Final walkthrough coordination ensures smooth closing. Closing management ensures all documents are signed. Post-closing support ensures you're satisfied with the process.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      The escrow management includes timeline enforcement to ensure closing happens on time, problem resolution to handle issues as they arise, final walkthrough coordination to ensure smooth closing, closing management to ensure all documents are signed, and post-closing support to ensure you're satisfied. This complete management ensures your sale closes smoothly and on time. This is where deals fall apart with other agents. I don't let that happen.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4">Weekly Communication & Accountability</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Your previous agent disappeared after listing your home. I provide weekly detailed reports with real accountability. Weekly detailed reports show showing activity, buyer feedback, market conditions, and strategy adjustments. Real-time updates keep you informed of all activity. Direct phone access ensures you can reach me when needed. Email communication provides written updates. Text message updates provide instant notifications.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      The weekly communication includes weekly detailed reports with showing activity and buyer feedback, real-time updates on all marketing activities, direct phone access for immediate questions, email communication for written updates, and text message updates for instant notifications. This communication ensures you're always informed and I'm always accountable. This is transparency. This is accountability. This is what your previous agent DIDN\'T provide.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">Related Resources</h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  Learn more about how I sell homes that didn\'t sell:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/process" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <h3 className="font-bold text-lg mb-2">Selling Process</h3>
                    <p className="text-sm text-gray-600">30-day plan to sell your home</p>
                  </Link>
                  <Link href="/marketing-strategy" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <h3 className="font-bold text-lg mb-2">Marketing Strategy</h3>
                    <p className="text-sm text-gray-600">97-point marketing system</p>
                  </Link>
                  <Link href="/success-stories" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <h3 className="font-bold text-lg mb-2">Success Stories</h3>
                    <p className="text-sm text-gray-600">Real results from homes That Didn\'t sell</p>
                  </Link>
                  <Link href="/about" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <h3 className="font-bold text-lg mb-2">About Dr. Jan</h3>
                    <p className="text-sm text-gray-600">Learn about the expert</p>
                  </Link>
                  <Link href="/why-choose-me" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <h3 className="font-bold text-lg mb-2">Why Choose Me</h3>
                    <p className="text-sm text-gray-600">What makes me different</p>
                  </Link>
                  <Link href="/comparison" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <h3 className="font-bold text-lg mb-2">Agent Comparison</h3>
                    <p className="text-sm text-gray-600">See the difference</p>
                  </Link>
                </div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">The Service Difference</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  The difference between my services and your previous agent's services is dramatic. They spent $100. I spend $5,000+. They used minimal marketing. I use a 97-point marketing system. They had zero follow-up. I have aggressive follow-up. They made promises. I deliver proven results.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <h3 className="text-2xl font-black mb-4 text-red-800">Your Previous Agent's Services</h3>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>• $37 on iPhone photos</li>
                      <li>• Basic MLS posting</li>
                      <li>• Maybe one open house</li>
                      <li>• Zero follow-up</li>
                      <li>• No social media marketing</li>
                      <li>• No network activation</li>
                      <li>• No targeted advertising</li>
                      <li>• Result: HOME THAT DIDN\'T SELL</li>
                    </ul>
                    <p className="text-lg text-gray-700 mt-4">
                      Your previous agent's minimal services cost you thousands. The $100 investment wasn't enough to sell your home. The lack of marketing made your home invisible. The zero follow-up lost opportunities. This is what minimal services get you: an HOME THAT DIDN'T SELL.
                    </p>
                  </div>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="text-2xl font-black mb-4 text-green-800">My Complete Services</h3>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>• $3,700 on professional media</li>
                      <li>• 97-point marketing system</li>
                      <li>• Strategic open houses</li>
                      <li>• Aggressive follow-up</li>
                      <li>• Social media marketing blitz</li>
                      <li>• Network activation (500+ agents)</li>
                      <li>• Targeted Facebook/Google ads</li>
                      <li>• Result: SOLD in 19 days average</li>
                    </ul>
                    <p className="text-lg text-gray-700 mt-4">
                      My complete services deliver proven results. The $5,000+ investment pays for itself through faster sales and higher prices. The comprehensive marketing creates maximum exposure. The aggressive follow-up turns showings into offers. This is what complete services get you: a successful sale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY FOR COMPLETE SERVICE?
                </h2>
                <LeadForm source="services_page" buttonText="GET STARTED" />
              </div>

              {/* Contact Information Section */}
              <NAPSection variant="compact" showMap={false} showHours={true} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
