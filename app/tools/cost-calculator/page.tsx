import CostCalculator from '@/app/components/cost-calculator'
import StickyHeader from '@/app/components/sticky-header'

export const metadata = {
  title: 'Expired Listing Cost Calculator | Dr. Jan Duffy',
  description:
    'Calculate how much money you\'re losing every day your listing sits expired. Stop the bleeding now.',
}

export default function CostCalculatorPage() {
  return (
    <>
      <StickyHeader />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                EXPIRED LISTING COST CALCULATOR
              </h1>
              <p className="text-xl text-gray-600">
                See exactly how much money you're losing every day
              </p>
            </div>
            <CostCalculator />
          </div>
        </div>
      </div>
    </>
  )
}

