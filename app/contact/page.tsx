import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import GoogleBusinessLink from '@/app/components/google-business-link'
import GoogleMapEmbed from '@/app/components/google-map-embed'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
export const metadata = {
  title: 'Contact Dr. Jan Duffy | (702) 500-1064',
  description:
    'Contact Dr. Janet Duffy to discuss your HOME THAT DID NOT SELL. Call (702) 500-1064 or fill out the form for immediate response.',
}
export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                CONTACT DR. JAN DUFFY
              </h1>
              <p className="text-xl text-center text-gray-600 mb-8">
                Sell your HOME THAT DID NOT SELL in 30 days or less
              </p>
              
              {/* Dr. Jan Duffy Headshot */}
              <div className="flex justify-center mb-12">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  {/* Trust-building color rings - deep blue for trust, gold accent for premium */}
                  <div className="absolute inset-0 rounded-full border-4 border-blue-700 shadow-2xl"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-amber-500/50"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-800 shadow-xl bg-gradient-to-br from-blue-50 to-white">
                    <Image
                      src="/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg"
                      alt="Dr. Janet Duffy, Las Vegas real estate agent specializing in homes that did not sell in Summerlin, The Ridges, and Henderson"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  If your home did not sell, you need to act fast. Every day your house sits unsold is costing you money - mortgage payments, HOA fees, insurance, utilities, property taxes. The average cost when your home will not sell is $4,964 per month in holding costs. That is $116 per day. The longer you wait, the more you lose.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  But here is the good news: HOMES THAT DID NOT SELL can be fixed. I have sold 7 Summerlin sellers who could not sell with an average of 19 days to contract and 98.7% of asking price. The key is getting started immediately with the right agent, the right strategy, and the right marketing. Do not let another day pass. Contact me now and let us sell your HOME THAT DID NOT SELL.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I understand how frustrating it is when your home does not sell. You trusted your previous agent, they promised results, and they failed. You are angry, frustrated, and ready to work with someone who actually knows what they are doing. That is where I come in. I specialize in HOMES THAT DID NOT SELL. This is all I do. I know how to reset them, market them, and sell them. Fast. At top dollar. With zero excuses.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h2 className="text-3xl font-black mb-4">Call Now</h2>
                  <a
                    href="tel:7025001064"
                    className="text-3xl font-black hover:underline block mb-4"
                  >
                    (702) 500-1064
                  </a>
                  <p className="mt-4 text-lg opacity-90 mb-4">
                    Available 7 days a week
                  </p>
                  <p className="text-sm opacity-75">
                    Direct line to Dr. Jan Duffy. No gatekeepers. No voicemail jail. Real conversations about your HOME THAT DID NOT SELL.
                  </p>
                </div>
                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4" />
                  <h2 className="text-3xl font-black mb-4">Email</h2>
                  <a
                    href="mailto:drjan@drjanduffy.com"
                    className="text-xl font-semibold hover:underline block mb-4"
                  >
                    drjan@drjanduffy.com
                  </a>
                  <p className="mt-4 text-lg opacity-75 mb-4">
                    Response within 24 hours
                  </p>
                  <p className="text-sm opacity-75">
                    Send me details about your HOME That DID NOT SELL and I will respond with a personalized strategy within 24 hours.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                  <Clock className="w-8 h-8 mb-4 text-primary" />
                  <h2 className="text-3xl font-black mb-4">Business Hours</h2>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between">
                      <span className="font-semibold">Monday - Sunday:</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-sm text-gray-600 mb-2">Available 7 days a week for consultations</p>
                      <p className="text-sm text-gray-600">Emergency calls accepted outside business hours</p>
                    </div>
                    <div className="pt-4">
                      <GoogleBusinessLink variant="button" />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <h2 className="text-3xl font-black mb-4 text-center">Service Area</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <MapPin className="w-8 h-8 mb-4 text-primary" />
                    <h3 className="text-2xl font-bold mb-3">Primary Markets</h3>
                    <ul className="space-y-2 text-lg">
                      <li>• Las Vegas, Nevada</li>
                      <li>• Summerlin West</li>
                      <li>• The Ridges</li>
                      <li>• Red Rock Country Club</li>
                      <li>• The Summit</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Additional Areas</h3>
                    <ul className="space-y-2 text-lg">
                      <li>• MacDonald Ranch</li>
                      <li>• Southern Highlands</li>
                      <li>• Skye Canyon</li>
                      <li>• Mountains Edge</li>
                      <li>• All Las Vegas Luxury Communities</li>
                    </ul>
                  </div>
                </div>
                  <p className="text-lg text-gray-700">
                    I specialize in HOMES THAT DID NOT SELL throughout Las Vegas, with particular expertise in Summerlin West, The Ridges, Red Rock Country Club, and other luxury communities. If your home DID NOT sell anywhere in the Las Vegas area, I can help. Distance does not matter - results do.
                  </p>
                </div>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">Why Contact Me Now?</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Time Is Money</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Every day your listing sits expired is costing you money. The average cost when your home will not sell is $4,964 per month in holding costs. That is $116 per day. Every week is another $812. Every month is another $4,964. The longer you wait, the more you lose. Do not let another day pass. Contact me now and let us stop the bleeding.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Stigma Compounds</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      The longer your listing sits expired, the more it becomes stigmatized. Buyers see "expired" and think "what's wrong with it?" After 60 days, they assume it is overpriced. After 90 days, they assume it has problems. After 120 days, it is toxic. The stigma compounds, making it harder to sell even when you finally get the right agent. The sooner you reset, the easier it is to overcome the stigma.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Market Timing</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      January 2026 is the perfect time to reset your HOME THAT DID NOT SELL. Spring buyers are already starting to look. They are serious, pre-qualified, and ready to move. Tax refunds are coming, giving buyers more purchasing power. Interest rates are stabilizing, making buyers more confident. And most importantly, there is less competition - while other agents are chasing new listings, I'm focused on fixing expired ones. Do not miss this window.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Free Consultation</h3>
                    <p className="text-lg text-gray-700">
                      I offer a free consultation to analyze why your home DID NOT sell and what needs to change. No BS, just honest assessment. I will tell you exactly what your previous agent did wrong, what I will do differently, and how quickly I can sell your home. There is no obligation, no pressure, just real answers. Contact me now and let us get started.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12 text-center">
                <h2 className="text-3xl font-black mb-4">What Happens When You Contact Me?</h2>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Step 1: Initial Contact</h3>
                    <p className="text-lg opacity-90">
                      You call, email, or fill out the form. I respond within 24 hours (usually much faster). We discuss your HOME THAT DID NOT SELL, your situation, and your goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Step 2: Free Analysis</h3>
                    <p className="text-lg opacity-90">
                      I analyze why your home DID NOT sell and what needs to change. I will tell you exactly what your previous agent did wrong and what I will do differently.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Step 3: Strategy Session</h3>
                    <p className="text-lg opacity-90">
                      We discuss my 30-day plan, my proven results, and my marketing system. You get real answers, not sales pitches. Then you decide if I'm the right agent for you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4 text-center">
                  SEND A MESSAGE
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  Fill out the form below and I will contact you within 24 hours. Include details about your HOME THAT DID NOT SELL - how long it was on the market, what your previous agent did (or DID NOT do), and what you are looking for in your next agent. The more information you provide, the better I can help.
                </p>
                <p className="text-center text-gray-600 mb-6">
                  Or call me directly at <a href="tel:7025001064" className="text-primary font-bold hover:underline">(702) 500-1064</a> for immediate assistance.
                </p>
                <LeadForm source="contact_page" buttonText="SEND MESSAGE" />
              </div>

              {/* Google Map Section */}
              <div className="bg-white border-2 border-primary rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  Visit Our Office Location
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  Located at 1180 North Town Center Drive in Las Vegas, serving Summerlin, The Ridges, and surrounding areas.
                </p>
                <GoogleMapEmbed />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
