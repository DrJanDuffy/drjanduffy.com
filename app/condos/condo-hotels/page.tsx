import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import FAQSchema from '@/app/components/faq-schema'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
export const metadata = {
  title: 'Condo Hotels Las Vegas | Dr. Jan Duffy',
  description:
    'Expert help selling expired condo hotels in Las Vegas. Investment properties with rental programs. Proven results and professional marketing.',
}
export default function CondoHotelsPage() {
  const faqs = [
    {
      question: 'What real estate services does Dr. Jan Duffy provide for condo hotels in Las Vegas?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Las Vegas condo hotels that did not sell, including investment-focused marketing, professional photography ($3,700 investment) highlighting hotel amenities, premium staging, 97-point marketing system, strategic pricing for condo hotels, specialized marketing emphasizing rental income potential and resort access, and attracting investors and second-home buyers. She serves MGM Signature, Palms Place, and other condo hotels on the Las Vegas Strip.',
    },
    {
      question: 'How long does it take to sell a condo hotel in Las Vegas?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Las Vegas condo hotels that did not sell. She specializes in luxury condo hotels with rental programs and uses investment-focused marketing strategies to attract buyers seeking rental income and resort access, achieving fast sales at top dollar.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my Las Vegas condo hotel?',
      answer:
        'Dr. Jan Duffy specializes in Las Vegas condo hotels and understands investment property marketing, the importance of explaining rental programs, resort access, and hotel management. She invests $5,000+ per listing in professional marketing and has proven results selling condo hotels that did not sell with previous agents.',
    },
    {
      question: 'What makes condo hotels unique in Las Vegas?',
      answer:
        'Condo hotels in Las Vegas offer investment properties with rental programs, resort access, and hotel management. Dr. Jan Duffy specializes in marketing these investment properties and has proven results selling condo hotels on the Las Vegas Strip that did not sell with other agents.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Condos', url: '/condos' },
        { name: 'Condo Hotels', url: '/condos/condo-hotels' },
      ]} />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                CONDO HOTELS LAS VEGAS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired condo hotels - investment properties with rental programs and hotel management
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas condo hotels are unique investment properties that combine ownership with hotel rental programs. If your condo hotel home DID NOT sell, you're not alone. Condo hotels face unique challenges - from explaining rental programs to marketing to investors to buyers who need to understand hotel management. Most agents do not understand condo hotels. They use generic strategies, and condo hotels expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired condo hotels. I understand the investment market. I know how to market rental programs. I know how to attract investors and second-home buyers. I've sold expired condo hotels throughout Las Vegas. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Condo hotels require investment-focused marketing. Professional photography highlighting hotel amenities. Strategic positioning emphasizing rental income potential. Explanation of rental programs and hotel management. Most agents do not understand this. They use generic strategies, and condo hotels expire. I use investment-focused marketing, highlight rental programs, and attract investors and second-home buyers. Condo hotels sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Condo Hotels Expire</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Condo hotels expire for the same reasons other properties expire - poor marketing, minimal investment, and zero follow-up. But condo hotels face additional challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Rental Program Explanation</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Condo hotels offer rental programs. Buyers need to understand how rental programs work. Most agents do not explain rental programs effectively. They do not explain income potential. They do not showcase hotel management. They do not highlight rental history. I explain rental programs effectively. I explain income potential, showcase hotel management, and highlight rental history that attracts investors.
                </p>
                <h3 className="text-2xl font-bold mb-3">Investment Buyer Targeting</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Condo hotels attract investors. Investors need to understand ROI, rental income, and management. Most agents do not know how to market to investors. They use residential marketing, and investors look elsewhere. I know how to market to investors. I emphasize ROI, highlight rental income, and showcase management that attracts investment buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Hotel Amenity Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Condo hotels offer hotel amenities. Pools. Restaurants. Concierge. Room service. Most agents do not market hotel amenities effectively. They do not highlight pools. They do not showcase restaurants. They do not emphasize concierge services. I market hotel amenities effectively. I highlight pools, showcase restaurants, and emphasize concierge services that attract amenity-conscious buyers.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Condo Hotel Expertise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired condo hotels throughout Las Vegas. I understand the investment market. I know how to market rental programs. I know how to attract investors and second-home buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Investment-Focused Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Condo hotels require investment-focused marketing. I market condo hotels by emphasizing ROI, highlighting rental income, and showcasing management that attracts investors. Most agents do not do this. They use generic marketing, and condo hotels expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Rental Program Explanation</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Condo hotels offer rental programs. I explain rental programs effectively. I explain income potential, showcase hotel management, and highlight rental history that attracts investors. Most agents do not do this. They use generic explanations, and condo hotels expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Investor Network</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Condo hotels attract investors. I have a network of investors seeking rental properties. I use this network to market condo hotels effectively. Most agents do not have this network. They use generic advertising, and condo hotels expire.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular Condo Hotel Buildings</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has many condo hotel buildings. Each building has unique rental programs, amenities, and buyer appeal. I've sold expired condo hotels in many of these buildings. I understand what makes each building unique. I know how to market each building effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Strip Condo Hotels</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strip condo hotels offer prime location, resort access, and high rental income potential. I've sold expired Strip condo hotels by emphasizing prime location, highlighting resort access, and showcasing rental income potential.
                </p>
                <h3 className="text-2xl font-bold mb-3">Downtown Condo Hotels</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Downtown condo hotels offer urban location, value positioning, and investment appeal. I've sold expired downtown condo hotels by emphasizing urban location, highlighting value, and showcasing investment appeal.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR CONDO HOTEL?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Las Vegas condo hotel home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="condo_hotels" buttonText="GET MY CONDO HOTEL SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
