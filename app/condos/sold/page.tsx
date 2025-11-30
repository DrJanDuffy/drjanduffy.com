import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import FAQSchema from '@/app/components/faq-schema'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
export const metadata = {
  title: 'Condos Sold in Las Vegas | Dr. Jan Duffy',
  description:
    'See condos sold by Dr. Jan Duffy. homes that DID NOT sell - now sold fast and at top dollar. Proven results.',
}
export default function CondosSoldPage() {
  const faqs = [
    {
      question: 'What results has Dr. Jan Duffy achieved selling Las Vegas condos that did not sell?',
      answer:
        'Dr. Jan Duffy has sold 7 Las Vegas condos that did not sell with previous agents, achieving 19-day average time to contract, 98.7% of asking price, and 100% success rate. She uses her 97-point marketing system and invests $5,000+ per listing in professional marketing for condos in Summerlin, Henderson, and throughout Las Vegas.',
    },
    {
      question: 'How does Dr. Jan Duffy sell condos that did not sell in Las Vegas?',
      answer:
        'Dr. Jan Duffy uses a proven 97-point marketing system including $3,700 professional photography, premium staging, strategic pricing, specialized marketing for each condo type, and aggressive follow-up. She specializes in luxury high-rise, mid-rise, and urban loft condos in Las Vegas, Summerlin, and Henderson.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my Las Vegas condo that did not sell?',
      answer:
        'Dr. Jan Duffy specializes in selling Las Vegas condos that did not sell with previous agents. She invests $5,000+ per listing in professional marketing and has proven results: 19-day average time to contract, 98.7% of asking price, and 100% success rate for condos in Summerlin, Henderson, and throughout Las Vegas.',
    },
    {
      question: 'What types of Las Vegas condos has Dr. Jan Duffy sold?',
      answer:
        'Dr. Jan Duffy has sold luxury high-rise condos, mid-rise condos, urban lofts, and condo hotels in Las Vegas, Summerlin, and Henderson. She specializes in condos that did not sell with previous agents and uses her proven 97-point marketing system to achieve fast sales at top dollar.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Condos', url: '/condos' },
        { name: 'Condos Sold', url: '/condos/sold' },
      ]} />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                CONDOS SOLD IN LAS VEGAS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Real results from expired condo listings sold by Dr. Jan Duffy - fast sales at top dollar
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  These are not hypothetical success stories or marketing fluff. These are real expired condo listings that I sold after other agents failed. Every single one of these condos sat on the market for months, bleeding money, while previous agents collected nothing and sellers lost thousands. Then they called me. I reset the listing, implemented my 97-point marketing system, and sold them. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The numbers do not lie. I've sold 7 HOMES THAT DID NOT SELL in Las Vegas with an average of 19 days to contract and 98.7% of asking price. Many of these were condos - from luxury high-rises on The Strip to mid-rise condos in Summerlin to townhomes in Henderson. That's not a coincidence. That's not luck. That's a proven system that works for condos.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  When you see these sold condos, you're seeing what's possible when you work with an agent who actually understands condos. Most agents show you their best-case scenarios - luxury condos in perfect condition that sold quickly. I show you expired condos. Condos that other agents could not sell. Condos that sat on the market for 60, 90, 120+ days. Then I show you how I sold them in 14-31 days at 97-99% of asking price.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">What Makes These Sold Condos Different?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents show you their best-case scenarios - luxury condos in perfect condition that sold quickly. I show you expired condos. Condos that other agents could not sell. Condos that sat on the market for 60, 90, 120+ days. Homes that were stigmatized, overpriced, or poorly marketed. Then I show you how I sold them in 14-31 days at 97-99% of asking price.
                </p>
                <h3 className="text-2xl font-bold mb-3">The Common Thread</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Every single one of these sold condos shares the same pattern: Previous agent used minimal marketing (just MLS posting), DID NOT invest in professional photography, held maybe one open house, and disappeared. Then I came in, reset everything, implemented my 97-point marketing system, and sold the condo. Fast. At top dollar. The difference is not the condo. The difference is the agent.
                </p>
                <h3 className="text-2xl font-bold mb-3">Condo-Specific Challenges Overcome</h3>
                <p className="text-lg text-gray-700 mb-4">
                  These sold condos faced condo-specific challenges. HOA restrictions. Competition from new construction. Seasonal demand fluctuations. Buyers who DID NOT understand condos. Most agents do not address these challenges. I do. I overcome HOA restrictions with digital marketing. I position existing condos competitively against new construction. I adjust strategies for seasonal demand. I educate buyers about condo value. That's why these condos sold.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Types of Condos I've Sold</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired condos of all types throughout Las Vegas. Each type requires different strategies, and I know how to market each effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Luxury High-Rise Condos</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired luxury high-rise condos on The Strip and in luxury areas. These require sophisticated marketing, exclusive access events, and high-end buyer targeting. I invest $5,000+ in professional media, luxury staging, and exclusive marketing that attracts high-end buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Mid-Rise Condos & Lofts</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired mid-rise condos and lofts throughout Las Vegas. These require community-focused marketing, modern design highlighting, and urban lifestyle positioning. I use community-focused marketing, highlight modern design, and attract urban lifestyle seekers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Townhomes</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired townhomes in Summerlin, Henderson, and throughout Las Vegas. These require space-focused marketing, value positioning, and single-family home alternative positioning. I use space-focused marketing, highlight value, and attract buyers seeking space and affordability.
                </p>
                <h3 className="text-2xl font-bold mb-3">Condo Hotels</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired condo hotels on The Strip and throughout Las Vegas. These require investment-focused marketing, rental program explanation, and investor targeting. I use investment-focused marketing, explain rental programs, and attract investors and second-home buyers.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">The Results Speak for Themselves</h2>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR CONDO?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  Your expired condo could be the next success story. The same system that sold these 7 HOMES THAT did not SELL can sell yours. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="condos_sold" buttonText="GET MY CONDO SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
