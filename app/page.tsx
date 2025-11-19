import HeroSection from './components/hero-section'
import WhyExpiredSection from './components/why-expired-section'
import ProofSection from './components/proof-section'
import CostCalculator from './components/cost-calculator'
import StickyHeader from './components/sticky-header'
import Navigation from './components/navigation'
import ExitIntentPopup from './components/exit-intent-popup'
import ChatWidget from './components/chat-widget'

export default function HomePage() {
  return (
    <>
      <StickyHeader />
      <Navigation />
      <HeroSection />
      <WhyExpiredSection />
      <ProofSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                CALCULATE YOUR LOSS
              </h2>
              <p className="text-xl text-gray-600">
                See exactly how much money you're losing every day your listing sits expired
              </p>
            </div>
            <CostCalculator />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            READY TO FIRE YOUR AGENT?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your house didn't fail. Your agent did. Let's fix this in 30 days or less.
          </p>
          <a
            href="tel:7022221964"
            className="inline-block bg-primary text-primary-foreground px-12 py-6 rounded-lg font-bold text-2xl hover:bg-primary/90 transition-colors"
          >
            CALL NOW: 702-222-1964
          </a>
        </div>
      </section>

      <ExitIntentPopup />
      <ChatWidget />
    </>
  )
}
