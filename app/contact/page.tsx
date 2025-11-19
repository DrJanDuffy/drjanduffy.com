import StickyHeader from '@/app/components/sticky-header'
import Navigation from '@/app/components/navigation'
import LeadForm from '@/app/components/lead-form'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Dr. Jan Duffy | (702) 500-1064',
  description:
    'Contact Dr. Janet Duffy to discuss your expired listing. Call (702) 500-1064 or fill out the form for immediate response.',
}

export default function ContactPage() {
  return (
    <>
      <StickyHeader />
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                CONTACT DR. JAN DUFFY
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Get your expired listing sold in 30 days or less
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Call Now</h3>
                  <a
                    href="tel:7025001064"
                    className="text-3xl font-black hover:underline block"
                  >
                    (702) 500-1064
                  </a>
                  <p className="mt-4 text-sm opacity-90">
                    Available 7 days a week
                  </p>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Email</h3>
                  <a
                    href="mailto:drjan@drjanduffy.com"
                    className="text-xl font-semibold hover:underline block"
                  >
                    drjan@drjanduffy.com
                  </a>
                  <p className="mt-4 text-sm opacity-75">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Service Area</h3>
                <p className="text-lg">
                  Las Vegas, NV | Summerlin West | The Ridges | Red Rock CC
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  SEND A MESSAGE
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  Fill out the form below and I'll contact you within 24 hours
                </p>
                <LeadForm source="contact_page" buttonText="SEND MESSAGE" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

