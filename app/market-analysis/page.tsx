import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
export const metadata = {
  title: 'Market Analysis | Las Vegas Real Estate Market | Dr. Jan Duffy',
  description:
    'Current Las Vegas real estate market analysis: inventory, pricing trends, and what it means for HOMES THAT DIDN'T SELL.',
}
export default function MarketAnalysisPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                LAS VEGAS MARKET ANALYSIS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Current market conditions and what they mean for HOMES THAT DIDN'T SELL
              </p>
              <div className="space-y-8 mb-12">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                  <h2 className="text-3xl font-black mb-4">Current Market Conditions</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Inventory</p>
                      <p className="text-2xl font-bold">7,500+ Active Listings</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Months of Supply</p>
                      <p className="text-2xl font-bold">4.8 Months</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Average Days on Market</p>
                      <p className="text-2xl font-bold">63+ Days</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Expired Rate</p>
                      <p className="text-2xl font-bold">20-30%</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
                  <h2 className="text-2xl font-black mb-4 text-red-800">
                    What This Means for HOMES THAT DIDN'T SELL
                  </h2>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>1,500-2,250 listings will fail to sell</strong> - Massive opportunity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Increased competition</strong> - Buyers have more options, need better marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Price sensitivity</strong> - Data-driven pricing is critical</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Stigma risk</strong> - HOMES THAT DIDN'T SELL need aggressive reset</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
                  <h2 className="text-2xl font-black mb-4 text-green-800">
                    Why HOMES THAT DIDN'T SELL Can Still Sell Fast
                  </h2>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Fresh start eliminates stigma</strong> - Complete reset removes "expired" label</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Motivated sellers</strong> - Ready to price competitively and be flexible</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Professional marketing stands out</strong> - Most listings have poor marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Buyers are still active</strong> - Just need the right property at the right price</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                  <h2 className="text-3xl font-black mb-4 text-center">
                    MY RESULTS IN THIS MARKET
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-4xl font-black mb-2">19 Days</p>
                      <p className="text-lg">Average Time to Sell</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black mb-2">98.7%</p>
                      <p className="text-lg">Of Asking Price</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black mb-2">47</p>
                      <p className="text-lg">homes that didn't sell - now sold</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-black mb-4 text-center">
                  GET YOUR MARKET ANALYSIS
                </h2>
                <LeadForm source="market_analysis" buttonText="GET ANALYSIS" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
