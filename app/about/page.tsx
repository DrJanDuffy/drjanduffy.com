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
                  <p className="text-lg">
                    While other agents give up on expired listings, Dr. Jan specializes in turning failed listings into successful sales through aggressive marketing, data-driven pricing, and relentless follow-up.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Credentials</h3>
                    <ul className="space-y-2 text-lg">
                      <li>• Licensed Real Estate Agent</li>
                      <li>• $127M+ in Summerlin Sales</li>
                      <li>• Expired Listing Specialist</li>
                      <li>• 135+ Domain Portfolio</li>
                      <li>• Top 1% of Las Vegas Agents</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Specialties</h3>
                    <ul className="space-y-2 text-lg">
                      <li>• Expired Listings</li>
                      <li>• Luxury Properties</li>
                      <li>• Summerlin West</li>
                      <li>• The Ridges</li>
                      <li>• Red Rock Country Club</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 p-8 rounded-lg mb-12">
                  <h3 className="text-2xl font-bold mb-4">Why Expired Listings?</h3>
                  <p className="text-lg mb-4">
                    Most agents avoid expired listings. They see them as damaged goods or too much work. I see them as opportunities.
                  </p>
                  <p className="text-lg mb-4">
                    Expired sellers are frustrated, motivated, and ready to work with someone who actually knows what they're doing. They've already been failed once - they won't accept failure again.
                  </p>
                  <p className="text-lg">
                    That's where I come in. I take the homes that other agents couldn't sell and I sell them. Fast. At top dollar. With zero excuses.
                  </p>
                </div>

                <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
                  <h3 className="text-3xl font-black mb-4">30-DAY GUARANTEE</h3>
                  <p className="text-2xl font-bold">
                    Sold in 30 Days or I Work Free
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

