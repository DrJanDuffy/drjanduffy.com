import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import FAQSchema from '@/app/components/faq-schema'
export const metadata = {
  title: 'Las Vegas Townhomes | Dr. Jan Duffy',
  description:
    'Expert help selling expired Las Vegas townhomes. Townhomes offer space and value. Proven results and professional marketing.',
}
export default function TownhomesPage() {
  const faqs = [
    {
      question: 'What real estate services does Dr. Jan Duffy provide for Las Vegas townhomes?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Las Vegas townhomes that did not sell, including space-focused marketing, professional photography ($3,700 investment), staging, 97-point marketing system, strategic pricing emphasizing value, specialized marketing for space and affordability, and highlighting community living benefits. She serves Summerlin, Henderson, and throughout Las Vegas.',
    },
    {
      question: 'How long does it take to sell a townhome in Las Vegas?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Las Vegas townhomes that did not sell. She specializes in townhomes and uses space-focused marketing to attract buyers seeking single-family home alternatives, achieving fast sales at top dollar.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my Las Vegas townhome?',
      answer:
        'Dr. Jan Duffy specializes in Las Vegas townhomes and understands space-focused marketing, value positioning compared to single-family homes, and community living appeal. She invests $5,000+ per listing in professional marketing and has proven results selling townhomes in Summerlin, Henderson, and throughout Las Vegas that did not sell with previous agents.',
    },
    {
      question: 'What areas of Las Vegas does Dr. Jan Duffy serve for townhomes?',
      answer:
        'Dr. Jan Duffy serves townhomes throughout Las Vegas including Summerlin, Henderson, and surrounding Las Vegas areas. She specializes in expired townhomes and has proven results selling these properties that offer space, value, and community living that did not sell with previous agents.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                LAS VEGAS TOWNHOMES
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired Las Vegas townhomes - space, value, and community living
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Las Vegas townhomes offer space, value, and community living in a single-family home alternative. If your townhome home DID NOT sell, you're not alone. Townhomes face unique challenges - from competition with single-family homes to HOA restrictions to buyers who value space and affordability. Most agents do not understand townhomes. They use generic strategies, and townhomes expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired townhomes. I understand the townhome market. I know how to market space and value. I know how to attract buyers seeking single-family home alternatives. I've sold expired townhomes throughout Las Vegas. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Townhomes require space-focused marketing. Professional photography highlighting square footage and layout. Strategic positioning emphasizing value compared to single-family homes. Emphasis on community living and low maintenance. Most agents do not understand this. They use generic strategies, and townhomes expire. I use space-focused marketing, highlight value, and attract buyers seeking space and affordability. Townhomes sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Townhomes Expire</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes expire for the same reasons other properties expire - poor marketing, minimal investment, and zero follow-up. But townhomes face additional challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Space Marketing Challenges</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer space. Multiple levels. Square footage. Layout flexibility. Most agents do not market space effectively. They do not highlight multiple levels. They do not showcase square footage. They do not emphasize layout flexibility. I market space effectively. I highlight multiple levels, showcase square footage, and emphasize layout flexibility that attracts space-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Value Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer value compared to single-family homes. Lower prices. Lower maintenance. Community amenities. Most agents do not position value effectively. They do not highlight lower prices. They do not showcase lower maintenance. They do not emphasize community amenities. I position value effectively. I highlight lower prices, showcase lower maintenance, and emphasize community amenities that attract value-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Single-Family Home Competition</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes compete with single-family homes. Buyers compare space, value, and features. Most agents do not know how to position townhomes against single-family homes. They do not highlight advantages. They do not showcase benefits. They do not emphasize value. I know how to position townhomes competitively. I highlight advantages, showcase benefits, and emphasize value that attracts buyers seeking single-family home alternatives.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Townhome Expertise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired townhomes throughout Las Vegas. I understand the townhome market. I know how to market space and value. I know how to attract buyers seeking single-family home alternatives.
                </p>
                <h3 className="text-2xl font-bold mb-3">Space-Focused Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer space. I market this space effectively. I highlight multiple levels, showcase square footage, and emphasize layout flexibility that attracts space-conscious buyers. Most agents do not do this. They use generic marketing, and townhomes expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Value Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer value. I position this value effectively. I highlight lower prices, showcase lower maintenance, and emphasize community amenities that attract value-conscious buyers. Most agents do not do this. They use generic positioning, and townhomes expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Single-Family Home Alternative Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Townhomes offer single-family home alternatives. I position townhomes by highlighting advantages, showcasing benefits, and emphasizing value compared to single-family homes. Most agents do not do this. They use generic positioning, and townhomes expire.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular Townhome Areas</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Las Vegas has many townhome areas. Each area has unique features, amenities, and buyer appeal. I've sold expired townhomes in many of these areas. I understand what makes each area unique. I know how to market each area effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Summerlin Townhomes</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin offers townhomes with community amenities, established neighborhoods, and prime location. I've sold expired Summerlin townhomes by highlighting community amenities, showcasing established neighborhoods, and positioning townhomes competitively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Henderson Townhomes</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Henderson offers townhomes with family-friendly amenities, value positioning, and suburban appeal. I've sold expired Henderson townhomes by emphasizing family-friendly amenities, highlighting value, and targeting family-conscious buyers.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR TOWNHOME?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Las Vegas townhome home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="townhomes" buttonText="GET MY TOWNHOME SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
