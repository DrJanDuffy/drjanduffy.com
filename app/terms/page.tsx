import StickyHeader from '@/app/components/sticky-header'
import Navigation from '@/app/components/navigation'

export const metadata = {
  title: 'Terms of Service | Dr. Jan Duffy',
  description: 'Terms of service for Dr. Janet Duffy real estate website.',
}

export default function TermsPage() {
  return (
    <>
      <StickyHeader />
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h1 className="text-4xl md:text-5xl font-black mb-8">
                Terms of Service
              </h1>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                  <p>
                    By accessing and using this website, you agree to be bound by these Terms of Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Real Estate Services</h2>
                  <p>
                    Dr. Janet Duffy is a licensed real estate agent. All real estate services are subject to
                    separate written agreements and applicable real estate laws and regulations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Guarantees</h2>
                  <p>
                    All guarantees (30-day sale, 98% of asking, etc.) are subject to market conditions,
                    property condition, and seller cooperation. Specific terms will be outlined in the
                    listing agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Website Content</h2>
                  <p>
                    All content on this website is for informational purposes only. Results may vary.
                    Statistics and testimonials are based on actual results but individual results may differ.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact</h2>
                  <p>
                    For questions about these terms, contact:
                  </p>
                  <p>
                    <strong>Dr. Janet Duffy</strong>
                    <br />
                    Phone: <a href="tel:7025001064" className="text-primary">(702) 500-1064</a>
                    <br />
                    Email: <a href="mailto:drjan@drjanduffy.com" className="text-primary">drjan@drjanduffy.com</a>
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">
                    Last updated: November 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

