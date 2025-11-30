import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
export const metadata = {
  title: 'Mid-Rise Condos & Lofts Las Vegas | Dr. Jan Duffy',
  description:
    'Expert help selling expired mid-rise condos and lofts in Las Vegas. Urban living and modern design. Proven results and professional marketing.',
  alternates: {
    canonical: '/condos/mid-rise',
  },
}
export default function MidRiseCondosPage() {
  const faqs = [
    {
      question: 'What real estate services does Dr. Jan Duffy provide for mid-rise condos and lofts in Las Vegas?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Las Vegas mid-rise condos and lofts that did not sell, including professional photography ($3,700 investment), staging, 97-point marketing system, strategic pricing for urban living properties, specialized marketing for modern design appeal, and highlighting urban lifestyle amenities. She serves Summerlin, Henderson, and throughout Las Vegas.',
    },
    {
      question: 'How long does it take to sell a mid-rise condo or loft in Las Vegas?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Las Vegas mid-rise condos and lofts that did not sell. She specializes in urban living properties and uses strategic marketing to attract buyers seeking modern design and urban lifestyle, achieving fast sales at top dollar.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my mid-rise condo or loft in Las Vegas?',
      answer:
        'Dr. Jan Duffy specializes in mid-rise condos and lofts and understands urban living marketing, modern design appeal, and urban lifestyle positioning. She invests $5,000+ per listing in professional marketing and has proven results selling mid-rise condos and lofts in Summerlin, Henderson, and throughout Las Vegas that did not sell with previous agents.',
    },
    {
      question: 'What areas of Las Vegas does Dr. Jan Duffy serve for mid-rise condos and lofts?',
      answer:
        'Dr. Jan Duffy serves mid-rise condos and lofts throughout Las Vegas including Summerlin, Henderson, and urban Las Vegas areas. She specializes in expired mid-rise properties and has proven results selling these urban living properties that did not sell with previous agents.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Las Vegas Condos', url: '/condos' },
          { name: 'Mid-Rise Condos & Lofts', url: '/condos/mid-rise' },
        ]}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                MID-RISE CONDOS & LOFTS LAS VEGAS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired mid-rise condos and lofts - urban living with modern design and community amenities
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas mid-rise condos and lofts offer urban living with modern design, community amenities, and value positioning. If your mid-rise condo or loft home DID NOT sell, you're not alone. Mid-rise condos face unique challenges - from competition with new construction to HOA restrictions to buyers who value community and modern design. Most agents do not understand mid-rise condos. They use generic strategies, and mid-rise condos expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired mid-rise condos and lofts. I understand the mid-rise market. I know how to market modern design and community amenities. I know how to attract urban lifestyle seekers. I've sold expired mid-rise condos and lofts throughout Las Vegas. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Mid-rise condos require community-focused marketing. Professional photography highlighting modern design. Strategic positioning emphasizing value and community. Emphasis on urban lifestyle and convenience. Most agents do not understand this. They use generic strategies, and mid-rise condos expire. I use community-focused marketing, highlight modern design, and attract urban lifestyle seekers. Mid-rise condos sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Mid-Rise Condos Expire</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Mid-rise condos expire for the same reasons other condos expire - poor marketing, minimal investment, and zero follow-up. But mid-rise condos face additional challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Modern Design Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Mid-rise condos offer modern design. Open floor plans. High ceilings. Contemporary finishes. Most agents do not market modern design effectively. They do not highlight open floor plans. They do not showcase high ceilings. They do not emphasize contemporary finishes. I market modern design effectively. I highlight open floor plans, showcase high ceilings, and emphasize contemporary finishes that attract design-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Community Amenity Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Mid-rise condos offer community amenities. Fitness centers. Pools. Community spaces. Most agents do not position community amenities effectively. They do not highlight fitness centers. They do not showcase pools. They do not emphasize community spaces. I position community amenities effectively. I highlight fitness centers, showcase pools, and emphasize community spaces that attract community-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Urban Lifestyle Appeal</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Mid-rise condos attract urban lifestyle seekers. Young professionals. Empty nesters. Urban enthusiasts. Most agents do not know how to market to urban lifestyle seekers. They use suburban marketing, and urban lifestyle seekers look elsewhere. I know how to market to urban lifestyle seekers. I emphasize urban location, highlight convenience, and showcase urban lifestyle appeal that attracts urban-conscious buyers.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Mid-Rise Condo Expertise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired mid-rise condos and lofts throughout Las Vegas. I understand the mid-rise market. I know how to market modern design and community amenities. I know how to attract urban lifestyle seekers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Modern Design Highlighting</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Mid-rise condos offer modern design. I highlight this design effectively. I showcase open floor plans, emphasize high ceilings, and highlight contemporary finishes that attract design-conscious buyers. Most agents do not do this. They use generic marketing, and mid-rise condos expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Community Amenity Showcasing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Mid-rise condos offer community amenities. I showcase these amenities effectively. I highlight fitness centers, emphasize pools, and showcase community spaces that attract community-conscious buyers. Most agents do not do this. They use generic marketing, and mid-rise condos expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Urban Lifestyle Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Mid-rise condos attract urban lifestyle seekers. I position mid-rise condos by emphasizing urban location, highlighting convenience, and showcasing urban lifestyle appeal. Most agents do not do this. They use generic positioning, and mid-rise condos expire.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular Mid-Rise Condo Buildings</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has many mid-rise condo buildings. Each building has unique features, amenities, and buyer appeal. I've sold expired condos in many of these buildings. I understand what makes each building unique. I know how to market each building effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Loft Buildings</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has many loft buildings offering urban living with modern design. I've sold expired lofts by highlighting modern design, showcasing urban location, and attracting urban lifestyle seekers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Mid-Rise Communities</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has many mid-rise communities offering community amenities and value positioning. I've sold expired mid-rise condos by emphasizing community amenities, highlighting value, and attracting community-conscious buyers.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR MID-RISE CONDO OR LOFT?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your mid-rise condo or loft home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="mid_rise_condos" buttonText="GET MY MID-RISE CONDO SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
