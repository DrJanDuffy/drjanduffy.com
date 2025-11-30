import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
export const metadata = {
  title: 'Summerlin Condos | Dr. Jan Duffy',
  description:
    'Expert help selling expired Summerlin condos. Mid-rise condos and townhomes in Summerlin. Proven results and professional marketing.',
  alternates: {
    canonical: '/condos/summerlin',
  },
}
export default function SummerlinCondosPage() {
  const faqs = [
    {
      question: 'What real estate services does Dr. Jan Duffy provide for Summerlin condos?',
      answer:
        'Dr. Jan Duffy provides complete real estate services for Summerlin condos that did not sell, including professional photography ($3,700 investment), staging, 97-point marketing system, strategic pricing for mid-rise condos and townhomes, specialized marketing for Summerlin market, and overcoming HOA restrictions. She serves Summerlin West, The Ridges, and throughout Summerlin.',
    },
    {
      question: 'How long does it take to sell a condo in Summerlin?',
      answer:
        'Dr. Jan Duffy\'s average is 19 days from listing to contract for Summerlin condos that did not sell. She specializes in mid-rise condos and townhomes in Summerlin and uses targeted strategies to attract community-conscious buyers, achieving fast sales at top dollar.',
    },
    {
      question: 'Why choose Dr. Jan Duffy to sell my Summerlin condo?',
      answer:
        'Dr. Jan Duffy specializes in Summerlin condos and understands the unique challenges including competition with new construction, HOA restrictions, and community-conscious buyers. She invests $5,000+ per listing in professional marketing and has proven results selling Summerlin condos in Summerlin West, The Ridges, and throughout Summerlin that did not sell with previous agents.',
    },
    {
      question: 'What areas of Summerlin does Dr. Jan Duffy serve for condos?',
      answer:
        'Dr. Jan Duffy serves condos throughout Summerlin including Summerlin West, The Ridges, Red Rock Country Club, The Summit, and newer Summerlin villages. She specializes in expired condos and has proven results selling mid-rise condos and townhomes that did not sell with previous agents.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Las Vegas Condos', url: '/condos' },
          { name: 'Summerlin Condos', url: '/condos/summerlin' },
        ]}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                SUMMERLIN CONDOS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert help selling expired Summerlin condos - mid-rise condos and townhomes in Las Vegas's premier master-planned community
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Summerlin is Las Vegas's premier master-planned community, offering mid-rise condos, townhomes, and luxury properties in a sophisticated setting. If your Summerlin condo home DID NOT sell, you're not alone. Summerlin condos face unique challenges - from competition with new construction to HOA restrictions to buyers who value community amenities. Most agents do not understand Summerlin condos. They use generic strategies, and Summerlin condos expire.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I specialize in selling expired Summerlin condos. I understand the Summerlin market. I know how to market mid-rise condos and townhomes. I know how to attract community-conscious buyers. I've sold expired condos in Summerlin West, The Ridges, and throughout Summerlin. Fast. At top dollar. With zero excuses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Summerlin condos require community-focused marketing. Professional photography highlighting community amenities. Strategic positioning against new construction. Emphasis on established neighborhoods and mature landscaping. Most agents do not understand this. They use generic strategies, and Summerlin condos expire. I use community-focused marketing, highlight amenities, and attract community-conscious buyers. Summerlin condos sell. Fast. At top dollar.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Summerlin Condos Expire</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin condos expire for the same reasons other condos expire - poor marketing, minimal investment, and zero follow-up. But Summerlin condos face additional challenges that most agents do not understand or address.
                </p>
                <h3 className="text-2xl font-bold mb-3">Competition from New Construction</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin has constant new construction. New condos compete with existing condos. New amenities compete with older amenities. New pricing competes with older pricing. Most agents do not know how to position existing condos against new construction. They do not highlight unique features. They do not emphasize established communities. I know how to position existing condos competitively. I highlight unique features. I emphasize established communities. I showcase mature landscaping and proven neighborhoods.
                </p>
                <h3 className="text-2xl font-bold mb-3">HOA Restriction Challenges</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin condos have HOA restrictions. No signs. Limited open houses. Restricted photography. Most agents do not know how to work within these restrictions. They try to market Summerlin condos like regular condos, hit restrictions, and give up. I know how to market Summerlin condos effectively within HOA restrictions. I use digital marketing, network activation, and targeted advertising that does not violate HOA rules.
                </p>
                <h3 className="text-2xl font-bold mb-3">Community Amenity Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin offers community amenities. Parks. Trails. Golf courses. Community centers. Most agents do not market community amenities effectively. They do not highlight parks. They do not showcase trails. They do not emphasize golf access. I market community amenities effectively. I highlight parks, showcase trails, and emphasize golf access that attracts community-conscious buyers.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">My Summerlin Condo Expertise</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold expired Summerlin condos in Summerlin West, The Ridges, and throughout Summerlin. I understand the Summerlin market. I know how to market mid-rise condos and townhomes. I know how to attract community-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Community-Focused Marketing</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin condos require community-focused marketing. Professional photography highlighting community amenities. Strategic positioning against new construction. Emphasis on established neighborhoods. Most agents do not understand this. I do. I use community-focused marketing, highlight amenities, and attract community-conscious buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Established Neighborhood Positioning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin has established neighborhoods with mature landscaping, proven communities, and established amenities. I position existing condos by highlighting established neighborhoods, showcasing mature landscaping, and emphasizing proven communities. Most agents do not do this. They use generic positioning, and Summerlin condos expire.
                </p>
                <h3 className="text-2xl font-bold mb-3">Community Amenity Highlighting</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin offers community amenities. Parks. Trails. Golf courses. Community centers. I highlight these amenities effectively. I showcase parks, emphasize trails, and highlight golf access that attracts community-conscious buyers. Most agents do not do this. They use generic marketing, and Summerlin condos expire.
                </p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">Popular Summerlin Condo Areas</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin has many condo areas. Each area has unique features, amenities, and buyer appeal. I've sold expired condos in many of these areas. I understand what makes each area unique. I know how to market each area effectively.
                </p>
                <h3 className="text-2xl font-bold mb-3">Summerlin West</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Summerlin West offers mid-rise condos and townhomes with mountain views, established communities, and prime location. I've sold expired Summerlin West condos by highlighting mountain views, showcasing established communities, and positioning condos competitively.
                </p>
                <h3 className="text-2xl font-bold mb-3">The Ridges</h3>
                <p className="text-lg text-gray-700 mb-4">
                  The Ridges offers luxury condos and townhomes with golf course access, exclusive amenities, and sophisticated design. I've sold expired Ridges condos by emphasizing golf course access, highlighting amenities, and targeting sophisticated buyers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Red Rock Country Club</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Red Rock Country Club offers luxury condos with golf course access, exclusive amenities, and prime location. I've sold expired Red Rock CC condos by showcasing golf course access, highlighting amenities, and attracting golf-conscious buyers.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL YOUR SUMMERLIN CONDO?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your Summerlin condo home DID NOT sell, do not wait. Every day costs you money. Call me now at (702) 500-1064 or fill out the form below for a free consultation.
                </p>
                <LeadForm source="summerlin_condos" buttonText="GET MY SUMMERLIN CONDO SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
