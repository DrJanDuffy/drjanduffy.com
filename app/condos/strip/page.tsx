import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import FAQSchema from '@/app/components/faq-schema'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
export const metadata = {
  title: 'Condos on The Strip | Las Vegas Strip Condos | Dr. Jan Duffy',
  description:
    'Expert help selling expired Las Vegas Strip condos. Luxury high-rise condos on The Strip. Proven results and professional marketing.',
  alternates: {
    canonical: '/condos/strip',
  },
}
export default function StripCondosPage() {
  const faqs = [
    {
      question: 'What real estate services does Dr. Jan Duffy provide for Las Vegas Strip condos?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Las Vegas Strip condos that did not sell, including luxury marketing strategies, professional photography ($3,700 investment), staging, 97-point marketing system, strategic pricing for high-rise luxury condos, specialized marketing for luxury buyers, and highlighting exclusive amenities. She serves The Cosmopolitan, Vdara, Veer Towers, Turnberry Place, and other luxury Strip properties.',
    },
    {
      question: 'How long does it take to sell a condo on The Strip in Las Vegas?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Las Vegas Strip condos that did not sell. She specializes in luxury high-rise condos on The Strip and uses sophisticated marketing strategies to attract high-end buyers, achieving fast sales at top dollar.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my Las Vegas Strip condo?',
      answer:
        'Dr. Jan Duffy specializes in Las Vegas Strip condos and understands luxury high-rise marketing, competition from resorts, high HOA fees, and strict building restrictions. She invests $5,000+ per listing in professional marketing and has proven results selling Strip condos in The Cosmopolitan, Vdara, Veer Towers, and Turnberry Place that did not sell with previous agents.',
    },
    {
      question: 'What Las Vegas Strip condo buildings does Dr. Jan Duffy serve?',
      answer:
        'Dr. Jan Duffy serves luxury high-rise condos on The Las Vegas Strip including The Cosmopolitan, Vdara, Veer Towers, Turnberry Place, Panorama Towers, The Ogden, Trump International, and other premium Strip properties. She specializes in expired luxury condos and has proven results selling these properties that did not sell with previous agents.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Condos', url: '/condos' },
        { name: 'Strip Condos', url: '/condos/strip' },
      ]} />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                CONDOS ON THE STRIP
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired Las Vegas Strip condos - luxury high-rise condos that require sophisticated marketing
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas Strip condos are unique. They're luxury high-rise condos in the heart of the entertainment capital of the world. They compete with world-class resorts. They attract high-end buyers. They require sophisticated marketing. Most agents do not understand Strip condos. They use generic strategies, and Strip condos expire. Explore <a href="/condos" className="text-primary font-semibold hover:underline">all Las Vegas condo categories</a> or see <a href="/condos/luxury" className="text-primary font-semibold hover:underline">luxury condos</a>.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired Strip condos. I understand the luxury market. I know how to market high-rise condos. I know how to attract high-end buyers. I've sold expired condos in The Cosmopolitan, Vdara, Veer Towers, Turnberry Place, and other luxury Strip properties. Fast. At top dollar. With zero excuses. Learn about <a href="/services" className="text-primary font-semibold hover:underline">my complete services</a> and <a href="/marketing-strategy" className="text-primary font-semibold hover:underline">my 97-point marketing system</a>.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Strip condos face unique challenges. Competition from luxury resorts. High HOA fees. Strict building restrictions. Buyers who expect luxury amenities and exclusive access. Most agents do not address these challenges. They use generic strategies, and Strip condos expire. I address these challenges. I use luxury marketing strategies, highlight exclusive amenities, and attract high-end buyers. Strip condos sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Strip Condos Expire</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Strip condos expire for the same reasons other condos expire - poor marketing, minimal investment, and zero follow-up. But Strip condos face additional challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Competition from Luxury Resorts</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strip condos compete with world-class luxury resorts. Buyers can stay at The Bellagio, The Venetian, or The Wynn. Why buy a condo? Most agents do not know how to answer this question. They do not know how to position condos against luxury resorts. I do. I highlight unique features, emphasize ownership benefits, and position condos competitively against luxury resorts.
                </p>
                <h3 className="text-2xl font-bold mb-3">High HOA Fees</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strip condos have high HOA fees. Buyers are concerned about affordability. Most agents do not address HOA fee concerns. They do not explain value. They do not justify costs. I address HOA fee concerns. I explain value. I justify costs. I show buyers why high HOA fees are worth it for luxury amenities and exclusive access.
                </p>
                <h3 className="text-2xl font-bold mb-3">Strict Building Restrictions</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strip condos have strict building restrictions. Limited open houses. Restricted photography. Complex approval processes. Most agents do not know how to work within these restrictions. They try to market Strip condos like regular condos, hit restrictions, and give up. I know how to market Strip condos effectively within building restrictions. I use digital marketing, exclusive access events, and targeted advertising that does not violate building rules.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Strip Condo Expertise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired Strip condos in The Cosmopolitan, Vdara, Veer Towers, Turnberry Place, and other luxury properties. I understand the luxury market. I know how to market high-rise condos. I know how to attract high-end buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Luxury Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strip condos require luxury marketing. Professional photography. Luxury staging. Exclusive access events. High-end advertising. Most agents do not invest in luxury marketing. I invest $5,000+ in professional media, luxury staging, and exclusive marketing that attracts high-end buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">High-End Buyer Targeting</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strip condos attract high-end buyers. Investors. Second-home buyers. Luxury lifestyle seekers. Most agents do not know how to target these buyers. I do. I use targeted advertising, exclusive access events, and luxury marketing that attracts high-end buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Exclusive Access</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strip condos offer exclusive access. Private amenities. Concierge services. Resort access. Most agents do not highlight exclusive access. I do. I showcase private amenities, emphasize concierge services, and highlight resort access that attracts high-end buyers.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular Strip Condo Buildings</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas Strip has many luxury high-rise condos. Each building has unique features, amenities, and buyer appeal. I've sold expired condos in many of these buildings. I understand what makes each building unique. I know how to market each building effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">The Cosmopolitan</h3>
                <p className="text-lg text-gray-700 mb-4">
                  The Cosmopolitan offers luxury condos with resort access, world-class amenities, and prime Strip location. I've sold expired Cosmopolitan condos by highlighting resort access, showcasing amenities, and positioning condos competitively against luxury resorts.
                </p>
                <h3 className="text-2xl font-bold mb-3">Vdara</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Vdara offers non-gaming luxury condos with Aria access, sophisticated design, and exclusive amenities. I've sold expired Vdara condos by emphasizing non-gaming appeal, highlighting Aria access, and targeting sophisticated buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Veer Towers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Veer Towers offers luxury condos with CityCenter access, modern design, and exclusive amenities. I've sold expired Veer Towers condos by showcasing CityCenter access, highlighting modern design, and attracting luxury lifestyle seekers.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR STRIP CONDO?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Las Vegas Strip condo home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="strip_condos" buttonText="GET MY STRIP CONDO SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
