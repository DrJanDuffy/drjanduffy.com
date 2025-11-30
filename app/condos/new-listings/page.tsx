import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import FAQSchema from '@/app/components/faq-schema'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
export const metadata = {
  title: 'New Listings for Las Vegas Condos | Dr. Jan Duffy',
  description:
    'New Las Vegas condo listings. Expert help selling your condo fast and at top dollar. Proven results and professional marketing.',
}
export default function NewListingsCondosPage() {
  const faqs = [
    {
      question: 'What real estate services does Dr. Jan Duffy provide for new Las Vegas condo listings?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for new Las Vegas condo listings, including professional photography ($3,700 investment), premium staging, 97-point marketing system, strategic pricing, specialized marketing for luxury high-rise, mid-rise, and urban lofts, and attracting qualified buyers. She serves all Las Vegas condo markets including Summerlin, Henderson, and the Strip.',
    },
    {
      question: 'How long does it take to sell a new Las Vegas condo listing?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for new Las Vegas condo listings. She uses her proven 97-point marketing system and invests $5,000+ per listing in professional marketing to achieve fast sales at top dollar for condos in Summerlin, Henderson, and throughout Las Vegas.',
    },
    {
      question: 'Why choose Dr. Jan Duffy for my new Las Vegas condo listing?',
      answer:
        'Dr. Jan Duffy specializes in Las Vegas condos and understands the unique marketing needs of luxury high-rise, mid-rise, and urban loft condos. She invests $5,000+ per listing in professional marketing and has proven results selling condos that did not sell with previous agents, achieving 98.7% of asking price on average.',
    },
    {
      question: 'What makes Dr. Jan Duffy\'s marketing different for new Las Vegas condo listings?',
      answer:
        'Dr. Jan Duffy uses a 97-point marketing system including $3,700 professional photography, premium staging, strategic pricing, and specialized marketing for each condo type. She serves all Las Vegas condo markets and has proven results selling condos that did not sell with other agents, achieving 19-day average time to contract.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Condos', url: '/condos' },
        { name: 'New Listings', url: '/condos/new-listings' },
      ]} />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                NEW LISTINGS FOR LAS VEGAS CONDOS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help for new Las Vegas condo listings - avoid the mistakes that cause listings to expire
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  If you're listing your Las Vegas condo for the first time, you have one chance to get it right. Most agents do not understand condos. They use generic strategies, make common mistakes, and your home does not sell. I specialize in condos. I know what works. I know what does not. I know how to avoid the mistakes that cause listings to expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  New condo listings face unique challenges. Competition from new construction. HOA restrictions. Seasonal demand fluctuations. Buyers who do not understand condos. Most agents do not address these challenges. They use the same strategies for condos as they do for single-family homes, and the results are predictable: HOMES THAT DID NOT SELL, frustrated sellers, and lost money.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I've sold 7 HOMES THAT DID NOT SELL in Las Vegas. I know what causes listings to expire. I know how to avoid those mistakes. I know how to market condos effectively from day one. If you're listing your condo for the first time, work with an agent who actually understands condos. Work with me.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Common Mistakes with New Condo Listings</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents make the same mistakes with new condo listings. These mistakes cause listings to expire. I know what these mistakes are, and I know how to avoid them.
                </p>
                <h3 className="text-2xl font-bold mb-3">Mistake #1: Generic Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents use generic marketing for condos. They do not highlight unique features. They do not address condo-specific concerns. They do not target the right buyers. Generic marketing does not work for condos. I use targeted marketing that highlights unique features, addresses condo-specific concerns, and targets the right buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Mistake #2: Ignoring HOA Restrictions</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Many Las Vegas condos have strict HOA restrictions. No signs. Limited open houses. Restricted photography. Most agents do not understand these restrictions. They try to market condos like single-family homes, hit restrictions, and give up. I know how to market condos effectively within HOA restrictions. I use digital marketing, network activation, and targeted advertising that does not violate HOA rules.
                </p>
                <h3 className="text-2xl font-bold mb-3">Mistake #3: Wrong Pricing Strategy</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Condos require different pricing strategies than single-family homes. HOA fees affect affordability. Amenities affect value. Competition from new construction affects pricing. Most agents do not understand condo pricing. They use single-family home pricing strategies, and condos expire. I use data-driven pricing strategies specifically for condos. I know how to price condos competitively while maximizing value.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My New Listing Strategy</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I have a proven strategy for new condo listings. This strategy avoids the mistakes that cause listings to expire. It positions your condo competitively. It markets it effectively. It sells it fast. At top dollar.
                </p>
                <h3 className="text-2xl font-bold mb-3">Week 1: Strategic Launch</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Week 1 is critical. This is when we launch your condo listing with professional marketing, strategic pricing, and targeted advertising. We highlight unique features. We address condo-specific concerns. We target the right buyers. We avoid the mistakes that cause listings to expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Week 2-3: Maximum Exposure</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Week 2-3 is about maximum exposure. Strategic open houses (within HOA restrictions). Network activation. Targeted advertising. Digital marketing. We get your condo in front of as many qualified buyers as possible. We create urgency. We generate offers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Week 4: Closing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Week 4 is closing. We negotiate offers. We handle inspections. We manage escrow. We close. Fast. At top dollar. With zero excuses.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Why New Listings Matter</h2>
                <p className="text-lg text-gray-700 mb-4">
                  New listings have momentum. Buyers are interested. Agents are paying attention. The market is watching. If you do not capitalize on this momentum, your home does not sell. Most agents do not capitalize on new listing momentum. They use generic strategies, make common mistakes, and momentum dies. I capitalize on new listing momentum. I use targeted strategies, avoid common mistakes, and momentum builds. Your condo sells. Fast. At top dollar.
                </p>
                <h3 className="text-2xl font-bold mb-3">The First 30 Days</h3>
                <p className="text-lg text-gray-700 mb-4">
                  The first 30 days are critical. This is when your condo has the most visibility. This is when buyers are most interested. This is when you have the best chance to sell. Most agents waste the first 30 days. They use generic strategies. They make common mistakes. They do not capitalize on momentum. I maximize the first 30 days. I use targeted strategies. I avoid common mistakes. I capitalize on momentum. Your condo sells. Fast. At top dollar.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO LIST YOUR LAS VEGAS CONDO?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If you're listing your Las Vegas condo for the first time, work with an agent who actually understands condos. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="new_listings_condos" buttonText="GET STARTED" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
