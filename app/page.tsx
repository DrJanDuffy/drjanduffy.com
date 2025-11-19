import HeroSection from './components/hero-section'
import WhyExpiredSection from './components/why-expired-section'
import ProofSection from './components/proof-section'
import CostCalculator from './components/cost-calculator'
import StickyHeader from './components/sticky-header'
import ExitIntentPopup from './components/exit-intent-popup'
import ChatWidget from './components/chat-widget'

export default function HomePage() {
  return (
    <>
      <StickyHeader />
      <HeroSection />
      <WhyExpiredSection />
      <ProofSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CostCalculator />
          </div>
        </div>
      </section>

      <ExitIntentPopup />
      <ChatWidget />
    </>
  )
}
