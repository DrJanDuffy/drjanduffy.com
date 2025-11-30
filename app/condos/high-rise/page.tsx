import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
export const metadata = {
  title: 'High Rise Condos Las Vegas | Dr. Jan Duffy',
  description:
    'Expert help selling expired high-rise condos in Las Vegas. Luxury high-rise condos require sophisticated marketing. Proven results and professional marketing.',
  alternates: {
    canonical: '/condos/high-rise',
  },
}
export default function HighRiseCondosPage() {
  const faqs = [
    {
      question: 'What real estate services does Dr. Jan Duffy provide for high-rise condos in Las Vegas?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Las Vegas high-rise condos that did not sell, including luxury marketing strategies, professional photography ($3,700 investment), premium staging, 97-point marketing system, strategic pricing for high-rise properties, specialized marketing for luxury buyers, and highlighting exclusive high-rise amenities. She serves The Strip, Summerlin, and throughout Las Vegas.',
    },
    {
      question: 'How long does it take to sell a high-rise condo in Las Vegas?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Las Vegas high-rise condos that did not sell. She specializes in luxury high-rise condos and uses sophisticated marketing strategies to attract high-end buyers, achieving fast sales at top dollar for properties in premium Las Vegas buildings.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my high-rise condo in Las Vegas?',
      answer:
        'Dr. Jan Duffy specializes in high-rise condos and understands luxury high-rise marketing, competition from resorts, high HOA fees, strict building restrictions, and premium positioning. She invests $5,000+ per listing in professional marketing and has proven results selling high-rise condos on The Strip, Summerlin, and throughout Las Vegas that did not sell with previous agents.',
    },
    {
      question: 'What areas of Las Vegas does Dr. Jan Duffy serve for high-rise condos?',
      answer:
        'Dr. Jan Duffy serves high-rise condos throughout Las Vegas including The Strip (The Cosmopolitan, Vdara, Veer Towers), Summerlin (The Summit), and other premium Las Vegas locations. She specializes in expired luxury high-rise condos and has proven results selling these properties that did not sell with previous agents.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Las Vegas Condos', url: '/condos' },
          { name: 'High Rise Condos', url: '/condos/high-rise' },
        ]}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                HIGH RISE CONDOS LAS VEGAS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired high-rise condos - luxury condos that require sophisticated marketing
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas high-rise condos are luxury properties that require sophisticated marketing. They compete with world-class resorts. They attract high-end buyers. They require professional photography, luxury staging, and exclusive marketing. Most agents do not understand high-rise condos. They use generic strategies, and high-rise condos expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired high-rise condos. I understand the luxury market. I know how to market high-rise condos. I know how to attract high-end buyers. I've sold expired high-rise condos in Panorama Towers, Turnberry Place, The Ogden, and other luxury buildings. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  High-rise condos face unique challenges. Competition from luxury resorts. High HOA fees. Strict building restrictions. Buyers who expect luxury amenities and exclusive access. Most agents do not address these challenges. They use generic strategies, and high-rise condos expire. I address these challenges. I use luxury marketing strategies, highlight exclusive amenities, and attract high-end buyers. High-rise condos sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why High-Rise Condos Expire</h2>
                <p className="text-lg text-gray-700 mb-4">
                  High-rise condos expire for the same reasons other condos expire - poor marketing, minimal investment, and zero follow-up. But high-rise condos face additional challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Inadequate Luxury Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  High-rise condos require luxury marketing. Professional photography. Luxury staging. Exclusive access events. High-end advertising. Most agents do not invest in luxury marketing. They use generic strategies, and high-rise condos expire. I invest $5,000+ in professional media, luxury staging, and exclusive marketing that attracts high-end buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Wrong Buyer Targeting</h3>
                <p className="text-lg text-gray-700 mb-4">
                  High-rise condos attract high-end buyers. Investors. Second-home buyers. Luxury lifestyle seekers. Most agents do not know how to target these buyers. They use generic advertising, and high-rise condos expire. I use targeted advertising, exclusive access events, and luxury marketing that attracts high-end buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Building Restriction Challenges</h3>
                <p className="text-lg text-gray-700 mb-4">
                  High-rise condos have strict building restrictions. Limited open houses. Restricted photography. Complex approval processes. Most agents do not know how to work within these restrictions. They try to market high-rise condos like regular condos, hit restrictions, and give up. I know how to market high-rise condos effectively within building restrictions. I use digital marketing, exclusive access events, and targeted advertising that does not violate building rules.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My High-Rise Condo Expertise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired high-rise condos in Panorama Towers, Turnberry Place, The Ogden, and other luxury buildings. I understand the luxury market. I know how to market high-rise condos. I know how to attract high-end buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Luxury Marketing Investment</h3>
                <p className="text-lg text-gray-700 mb-4">
                  High-rise condos require luxury marketing investment. Professional photography. Luxury staging. Exclusive access events. High-end advertising. Most agents do not invest in luxury marketing. I invest $5,000+ in professional media, luxury staging, and exclusive marketing that attracts high-end buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">High-End Buyer Network</h3>
                <p className="text-lg text-gray-700 mb-4">
                  High-rise condos attract high-end buyers. I have a network of investors, second-home buyers, and luxury lifestyle seekers. I use this network to market high-rise condos effectively. Most agents do not have this network. They use generic advertising, and high-rise condos expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Building Relationship Management</h3>
                <p className="text-lg text-gray-700 mb-4">
                  High-rise condos have strict building restrictions. I have relationships with building management. I know how to work within restrictions. I know how to get approvals. Most agents do not have these relationships. They hit restrictions, and high-rise condos expire.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular High-Rise Condo Buildings</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has many luxury high-rise condos. Each building has unique features, amenities, and buyer appeal. I've sold expired condos in many of these buildings. I understand what makes each building unique. I know how to market each building effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Panorama Towers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Panorama Towers offers luxury high-rise condos with Strip views, world-class amenities, and prime location. I've sold expired Panorama Towers condos by highlighting Strip views, showcasing amenities, and positioning condos competitively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Turnberry Place</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Turnberry Place offers luxury high-rise condos with resort access, exclusive amenities, and sophisticated design. I've sold expired Turnberry Place condos by emphasizing resort access, highlighting amenities, and targeting sophisticated buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">The Ogden</h3>
                <p className="text-lg text-gray-700 mb-4">
                  The Ogden offers luxury high-rise condos with downtown location, modern design, and exclusive amenities. I've sold expired Ogden condos by showcasing downtown location, highlighting modern design, and attracting urban lifestyle seekers.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR HIGH-RISE CONDO?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Las Vegas high-rise condo home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="high_rise_condos" buttonText="GET MY HIGH-RISE CONDO SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
