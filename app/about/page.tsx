import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import NAPSection from '@/app/components/nap-section'
import GoogleReviews from '@/app/components/google-reviews'
import GoogleBusinessLink from '@/app/components/google-business-link'
import Image from 'next/image'

export const metadata = {
  title: 'About Dr. Janet Duffy | Real Estate Agent in Las Vegas, NV | (702) 500-1064',
  description:
    'Learn about Dr. Janet Duffy, Las Vegas real estate expert specializing in selling homes that did not sell. Serving Summerlin, The Ridges, and Henderson. Helped 7 Summerlin sellers in 19 days average at 98.7% of asking price. Call (702) 500-1064.',
  alternates: {
    canonical: 'https://www.drjanduffy.com/about',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/about',
    title: 'About Dr. Janet Duffy | Real Estate Agent in Las Vegas, NV',
    description: 'Learn about Dr. Janet Duffy, Las Vegas real estate expert specializing in selling homes that did not sell. Serving Summerlin, The Ridges, and Henderson.',
  },
  twitter: {
    card: 'summary',
    title: 'About Dr. Janet Duffy | Real Estate Agent in Las Vegas, NV',
    description: 'Las Vegas real estate expert specializing in selling homes that did not sell. Serving Summerlin, The Ridges, and Henderson.',
  },
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-12">
                ABOUT DR. JAN DUFFY
              </h1>

              {/* Dr. Jan Duffy Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
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
                <div className="bg-primary/10 p-8 rounded-lg mb-8">
                  <h2 className="text-3xl font-black mb-4">The Failed Listing Specialist</h2>
                  <p className="text-xl mb-4">
                    Dr. Janet Duffy has sold <strong>7 Summerlin sellers who could not sell</strong> with an average of <strong>19 days</strong> to contract and <strong>98.7% of asking price</strong>.
                  </p>
                  <p className="text-lg mb-4">
                    While other agents give up on HOMES THAT DID NOT SELL, Dr. Jan specializes in turning failed listings into successful sales through aggressive marketing, data-driven pricing, and relentless follow-up. Most agents see HOMES THAT DID NOT SELL as damaged goods or too much work. I see them as opportunities - homes that just need the right agent, the right strategy, and the right marketing.
                  </p>
                  <p className="text-lg">
                    My approach is different. I do not use the "post to MLS and pray" strategy that got your home DID NOT sell in the first place. I invest $5,000+ in professional marketing per listing. I take maximum 6 listings at a time so you get 100% focus, not 2.1% like with big franchise agents. I use a <a href="/marketing-strategy" className="text-primary font-semibold hover:underline">97-point marketing system</a> that leaves nothing to chance. Learn more about <a href="/services" className="text-primary font-semibold hover:underline">my complete services</a> and <a href="/process" className="text-primary font-semibold hover:underline">how I sell homes that DID NOT sell in 30 days or less</a>.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h2 className="text-3xl font-black mb-4">Professional Credentials</h2>
                    <p className="text-lg mb-4">
                      Dr. Janet Duffy is a licensed real estate agent with extensive experience in the Las Vegas market, specializing in HOMES That DID NOT SELL and luxury properties.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
                    <ul className="space-y-2 text-lg mb-4">
                      <li>• Licensed Real Estate Agent (Nevada)</li>
                      <li>• specialist in homes that DID NOT sell</li>
                      <li>• 135+ Domain Portfolio</li>
                      <li>• Top 1% of Las Vegas Agents</li>
                      <li>• 7 homes that DID NOT sell - now sold</li>
                      <li>• 19 Day Average Time to Contract</li>
                      <li>• 98.7% Average Sale Price Percentage</li>
                      <li>• Good Neighbor Award Recipient</li>
                    </ul>
                    <h3 className="text-2xl font-bold mb-4">Education & Training</h3>
                    <p className="text-lg">
                      Continuous education in real estate marketing, negotiation tactics, buyer psychology, and market analysis. Specialized training in HOME That DID NOT SELL strategies and luxury property marketing. See <a href="/why-choose-me" className="text-primary font-semibold hover:underline">why choose me</a> over other agents and read <a href="/testimonials" className="text-primary font-semibold hover:underline">client testimonials</a>.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black mb-4">Market Specialties</h2>
                    <p className="text-lg mb-4">
                      Dr. Jan focuses exclusively on HOMES THAT DID NOT SELL in Las Vegas luxury communities, bringing specialized expertise to each transaction.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Primary Markets</h3>
                    <ul className="space-y-2 text-lg mb-4">
                      <li>• HOMES THAT DID NOT SELL (All Price Ranges)</li>
                      <li>• Luxury Properties ($675K-$10M+)</li>
                      <li>• Summerlin West</li>
                      <li>• The Ridges</li>
                      <li>• Red Rock Country Club</li>
                      <li>• The Summit</li>
                      <li>• MacDonald Ranch</li>
                      <li>• Southern Highlands</li>
                    </ul>
                    <h3 className="text-2xl font-bold mb-4">Property Types</h3>
                    <p className="text-lg">
                      Single-family homes, luxury estates, golf course properties, gated communities, and high-end condominiums. Experience with all property types that have HOMES That DID NOT SELL.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-black mb-4">Why HOMES THAT DID NOT SELL?</h2>
                  <p className="text-lg mb-4">
                    Most agents avoid HOMES THAT DID NOT SELL. They see them as damaged goods or too much work. They think HOMES That DID NOT SELL are stigmatized, overpriced, or have problems. They are wrong. I see HOMES THAT DID NOT SELL as opportunities - homes that just need the right agent, the right strategy, and the right marketing.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">The Psychology of Frustrated Sellers</h3>
                  <p className="text-lg mb-4">
                    Frustrated sellers are frustrated, motivated, and ready to work with someone who actually knows what they are doing. They have already been failed once - they will not accept failure again. They are educated about the process. They understand the market. They are realistic about pricing. They are ready to make decisions quickly. And most importantly, they are willing to pay full commission to someone who can actually sell their home.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">The Opportunity</h3>
                  <p className="text-lg mb-4">
                    In Las Vegas, 20-30% of all homes fail to sell every year. That is 1,500-2,250 homes that sat on the market for months, bleeding money, while agents collected nothing and sellers lost thousands. These are not bad homes. These are homes that had bad agents. With the right agent, the right strategy, and the right marketing, these homes sell. Fast. At top dollar. With zero excuses.
                  </p>
                  <p className="text-lg">
                    That is where I come in. I take the homes that other agents could not sell and I sell them. Fast. At top dollar. With zero excuses. I have done it 7 times. I can do it for you too.
                  </p>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                  <h2 className="text-3xl font-black mb-4">The Dr. Jan Difference</h2>
                  <p className="text-lg mb-4">
                    What makes me different from your previous agent? It is not just experience or credentials - it is my approach, my investment, and my proven results.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Maximum Focus</h3>
                  <p className="text-lg mb-4">
                    I take maximum 6 listings at a time. Your previous agent had 47+ listings. You got 2.1% of their attention. With me, you get 100% focus. Every listing gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance.
                  </p>
                  <p className="text-lg mb-4">
                    The difference between 2.1% focus and 100% focus is dramatic. Your previous agent could not afford to invest $5,000+ in every listing because they had 47 of them. They spread themselves thin, hoping something would stick. I focus intensely on a few listings, ensuring each one gets the full treatment. This focus is what separates successful sales from homes that DID NOT sell.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Real Investment</h3>
                  <p className="text-lg mb-4">
                    I invest $5,000+ in marketing per listing. Your previous agent spent $37 on photos. I spend $3,700 on professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. I use a 97-point marketing system that includes social media blitzes, network activation, targeted ads, and strategic open houses. Your previous agent posted to MLS and disappeared.
                  </p>
                  <p className="text-lg mb-4">
                    The $5,000+ investment pays for itself through faster sales and higher prices. Professional photography increases showing requests by 300% and sale price by 5-10%. Strategic marketing brings qualified buyers. Aggressive follow-up creates urgency. The investment is not a cost - it is an investment in your success. Your previous agent saw it as a cost and minimized it. I see it as an investment and maximize it.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
                  <p className="text-lg mb-4">
                    I deliver proven results. 7 homes that DID NOT sell - now sold with an average of 19 days to contract and 98.7% of asking price. Weekly updates with real accountability. Professional photos worth $3,700+. Your previous agent made promises. I deliver proven results with real consequences.
                  </p>
                  <p className="text-lg mb-4">
                    The results speak for themselves: 7 homes that DID NOT sell - now sold, 19 day average, 98.7% of asking price. These are not hypothetical results. These are real HOMES THAT DID NOT SELL that I sold after other agents failed. The same system that delivered these results can deliver yours. The only question is: are you ready to work with an agent who actually delivers results?
                  </p>
                </div>

                <div className="bg-gray-100 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-black mb-4">My Journey to Failed Listing Specialist</h2>
                  <p className="text-lg mb-4">
                    I DID NOT start as a Failed Listing Specialist. I started like most agents - taking any listing I could get, hoping for the best. But I quickly learned that most agents fail because they do not have a system. They do not invest in marketing. They do not follow up. They do not deliver results. I decided to be different.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">The Turning Point</h3>
                  <p className="text-lg mb-4">
                    The turning point came when I saw my first HOME THAT DID NOT SELL. The seller was frustrated. The previous agent had failed. The listing had expired. But the home was beautiful. It was properly priced. It just needed the right agent, the right strategy, and the right marketing. I took it on, implemented my system, and sold it in 14 days at 99% of asking price. That is when I knew HOMES THAT DID NOT SELL were not problems - they were opportunities.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Building the System</h3>
                  <p className="text-lg mb-4">
                    After that first success, I refined my system. I invested more in marketing. I developed the 97-point marketing system. I created the aggressive follow-up process. I built the strategic negotiation tactics. Each HOME THAT DID NOT SELL taught me something new. Each success validated the system. After 7 HOMES THAT DID NOT SELL, I have a proven system that works. Fast. At top dollar. With zero excuses.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">The Specialization</h3>
                  <p className="text-lg mb-4">
                    Most agents avoid HOMES That DID NOT SELL. They see them as damaged goods or too much work. I see them as opportunities. I specialize in HOMES THAT DID NOT SELL because I know how to fix them. I know how to reset them. I know how to market them. I know how to sell them. This specialization is what makes me different. This specialization is what delivers results.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12">
                  <h2 className="text-3xl font-black mb-4">What Clients Say</h2>
                  <p className="text-lg mb-4">
                    Do not just take my word for it. Here's what clients say about working with me:
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-lg text-gray-700 italic mb-2">
                        "Dr. Jan sold my HOME THAT DID NOT SELL in 16 days at 99% of asking. My previous agent had it for 90 days and it expired. The difference was night and day."
                      </p>
                      <p className="text-sm text-gray-600">- Summerlin West Seller</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-lg text-gray-700 italic mb-2">
                        "I was skeptical after my home DID NOT sell. But Dr. Jan's marketing was incredible. Professional photos, aggressive follow-up, strategic negotiation. Sold in 19 days."
                      </p>
                      <p className="text-sm text-gray-600">- The Ridges Seller</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-lg text-gray-700 italic mb-2">
                        "The weekly updates were amazing. I always knew what was happening. The transparency and accountability were refreshing after my previous agent disappeared."
                      </p>
                      <p className="text-sm text-gray-600">- Red Rock Country Club Seller</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mt-6">
                    These testimonials represent real results from real HOMES THAT DID NOT SELL. See more <a href="/testimonials" className="text-primary font-semibold hover:underline">client testimonials</a> and <a href="/success-stories" className="text-primary font-semibold hover:underline">success stories</a> from homes I have sold. Each testimonial represents a frustrated seller who finally found an agent who actually delivers results. Each testimonial represents a HOME THAT DID NOT SELL that became a success story. Your HOME THAT DID NOT SELL could be next.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12">
                  <h2 className="text-3xl font-black mb-4 text-center">Ready to Work with the Expert?</h2>
                  <p className="text-lg text-gray-700 mb-4 text-center">
                    If your home did not sell, you need an agent who actually knows what they are doing. You need an agent who specializes in HOMES THAT DID NOT SELL. You need an agent who delivers proven results. That is me. I have sold 7 Summerlin sellers who could not sell with an average of 19 days to contract and 98.7% of asking price. The same system that delivered these results can deliver yours.
                  </p>
                  <p className="text-lg text-gray-700 text-center">
                    Do not let your home that will not sell cost you another $4,964 per month. Do not let your previous agent's failure become your failure. Work with an agent who actually delivers results. Work with me. Call (702) 500-1064 or fill out the form below to get started.
                  </p>
                </div>

              </div>

                <div className="bg-gray-100 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-black mb-4 text-center">Learn More</h2>
                  <p className="text-center text-lg text-gray-700 mb-6">
                    Explore my services, process, and proven results:
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="/services" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <h3 className="font-bold text-lg mb-2">Services</h3>
                      <p className="text-sm text-gray-600">Complete failed listing solutions</p>
                    </a>
                    <a href="/process" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <h3 className="font-bold text-lg mb-2">Selling Process</h3>
                      <p className="text-sm text-gray-600">30-day plan to sell your home</p>
                    </a>
                    <a href="/success-stories" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <h3 className="font-bold text-lg mb-2">Success Stories</h3>
                      <p className="text-sm text-gray-600">Real results from homes that did not sell</p>
                    </a>
                    <a href="/marketing-strategy" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <h3 className="font-bold text-lg mb-2">Marketing Strategy</h3>
                      <p className="text-sm text-gray-600">97-point marketing system</p>
                    </a>
                    <a href="/why-choose-me" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <h3 className="font-bold text-lg mb-2">Why Choose Me</h3>
                      <p className="text-sm text-gray-600">What makes me different</p>
                    </a>
                    <a href="/faq" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <h3 className="font-bold text-lg mb-2">FAQ</h3>
                      <p className="text-sm text-gray-600">Common questions answered</p>
                    </a>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY TO WORK WITH THE EXPERT?
                </h2>
                <LeadForm source="about_page" buttonText="GET STARTED NOW" />
              </div>

              {/* Google Reviews Section */}
              <div className="mb-12">
                <GoogleReviews />
              </div>

              {/* Contact Information Section */}
              <NAPSection variant="detailed" showMap={false} showHours={true} />

              {/* Google Business Profile Link */}
              <div className="text-center mt-8">
                <GoogleBusinessLink variant="button" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

