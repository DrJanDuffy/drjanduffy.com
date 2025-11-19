import StickyHeader from '@/app/components/sticky-header'
import Navigation from '@/app/components/navigation'
import LeadForm from '@/app/components/lead-form'

export const metadata = {
  title: 'About Dr. Jan Duffy | Expired Listing Expert',
  description:
    'Learn about Dr. Janet Duffy, Las Vegas real estate expert specializing in selling expired listings in 19 days average at 98.7% of asking price.',
}

export default function AboutPage() {
  return (
    <>
      <StickyHeader />
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-12">
                ABOUT DR. JAN DUFFY
              </h1>

              <div className="prose prose-lg max-w-none mb-12">
                <div className="bg-primary/10 p-8 rounded-lg mb-8">
                  <h2 className="text-3xl font-black mb-4">The Expired Listing Expert</h2>
                  <p className="text-xl mb-4">
                    Dr. Janet Duffy has sold <strong>47 expired Summerlin listings</strong> with an average of <strong>19 days</strong> to contract and <strong>98.7% of asking price</strong>.
                  </p>
                  <p className="text-lg mb-4">
                    While other agents give up on expired listings, Dr. Jan specializes in turning failed listings into successful sales through aggressive marketing, data-driven pricing, and relentless follow-up. Most agents see expired listings as damaged goods or too much work. I see them as opportunities - homes that just need the right agent, the right strategy, and the right marketing.
                  </p>
                  <p className="text-lg">
                    My approach is different. I don't use the "post to MLS and pray" strategy that got your listing expired in the first place. I invest $5,000+ in professional marketing per listing. I take maximum 6 listings at a time so you get 100% focus, not 2.1% like with big franchise agents. I use a 97-point marketing system that leaves nothing to chance. And I guarantee results - 30 days or I work free, 98% of asking or I cut my commission.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h2 className="text-3xl font-black mb-4">Professional Credentials</h2>
                    <p className="text-lg mb-4">
                      Dr. Janet Duffy is a licensed real estate agent with extensive experience in the Las Vegas market, specializing in expired listings and luxury properties.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
                    <ul className="space-y-2 text-lg mb-4">
                      <li>• Licensed Real Estate Agent (Nevada)</li>
                      <li>• $127M+ in Summerlin Sales</li>
                      <li>• Expired Listing Specialist</li>
                      <li>• 135+ Domain Portfolio</li>
                      <li>• Top 1% of Las Vegas Agents</li>
                      <li>• 47 Expired Listings Sold</li>
                      <li>• 19 Day Average Time to Contract</li>
                      <li>• 98.7% Average Sale Price Percentage</li>
                    </ul>
                    <h3 className="text-2xl font-bold mb-4">Education & Training</h3>
                    <p className="text-lg">
                      Continuous education in real estate marketing, negotiation tactics, buyer psychology, and market analysis. Specialized training in expired listing strategies and luxury property marketing.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black mb-4">Market Specialties</h2>
                    <p className="text-lg mb-4">
                      Dr. Jan focuses exclusively on expired listings in Las Vegas luxury communities, bringing specialized expertise to each transaction.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Primary Markets</h3>
                    <ul className="space-y-2 text-lg mb-4">
                      <li>• Expired Listings (All Price Ranges)</li>
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
                      Single-family homes, luxury estates, golf course properties, gated communities, and high-end condominiums. Experience with all property types that have expired listings.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-black mb-4">Why Expired Listings?</h2>
                  <p className="text-lg mb-4">
                    Most agents avoid expired listings. They see them as damaged goods or too much work. They think expired listings are stigmatized, overpriced, or have problems. They're wrong. I see expired listings as opportunities - homes that just need the right agent, the right strategy, and the right marketing.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">The Psychology of Expired Sellers</h3>
                  <p className="text-lg mb-4">
                    Expired sellers are frustrated, motivated, and ready to work with someone who actually knows what they're doing. They've already been failed once - they won't accept failure again. They're educated about the process. They understand the market. They're realistic about pricing. They're ready to make decisions quickly. And most importantly, they're willing to pay full commission to someone who can actually sell their home.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">The Opportunity</h3>
                  <p className="text-lg mb-4">
                    In Las Vegas, 20-30% of all listings expire every year. That's 1,500-2,250 homes that sat on the market for months, bleeding money, while agents collected nothing and sellers lost thousands. These aren't bad homes. These are homes that had bad agents. With the right agent, the right strategy, and the right marketing, these homes sell. Fast. At top dollar. With zero excuses.
                  </p>
                  <p className="text-lg">
                    That's where I come in. I take the homes that other agents couldn't sell and I sell them. Fast. At top dollar. With zero excuses. I've done it 47 times. I can do it for you too.
                  </p>
                </div>

                <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                  <h2 className="text-3xl font-black mb-4">The Dr. Jan Difference</h2>
                  <p className="text-lg mb-4">
                    What makes me different from your previous agent? It's not just experience or credentials - it's my approach, my investment, and my guarantees.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Maximum Focus</h3>
                  <p className="text-lg mb-4">
                    I take maximum 6 listings at a time. Your previous agent had 47+ listings. You got 2.1% of their attention. With me, you get 100% focus. Every listing gets the full treatment - professional marketing, aggressive follow-up, strategic negotiation. Nothing is left to chance.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Real Investment</h3>
                  <p className="text-lg mb-4">
                    I invest $5,000+ in marketing per listing. Your previous agent spent $37 on photos. I spend $3,700 on professional media - twilight drone shots, 3D virtual tours, magazine-quality staging. I use a 97-point marketing system that includes social media blitzes, network activation, targeted ads, and strategic open houses. Your previous agent posted to MLS and disappeared.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Real Guarantees</h3>
                  <p className="text-lg mb-4">
                    I guarantee results. 30 days or I work free. 98% of asking or I cut my commission. Weekly updates or $500 credit. Professional photos or $1,000 back. Your previous agent made promises. I make guarantees with real consequences.
                  </p>
                </div>

                <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                  <h2 className="text-3xl font-black mb-4">30-DAY GUARANTEE</h2>
                  <p className="text-2xl font-bold mb-2">
                    Sold in 30 Days or I Work Free
                  </p>
                  <p className="text-lg opacity-90">
                    No excuses. No exceptions. If your home doesn't sell in 30 days, I continue working at no additional cost until it sells. That's how confident I am in my system.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  READY TO WORK WITH THE EXPERT?
                </h2>
                <LeadForm source="about_page" buttonText="GET STARTED NOW" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

