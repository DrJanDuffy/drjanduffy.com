import CostCalculator from '@/app/components/cost-calculator'
import Header from '@/app/components/header'
import FAQSchema from '@/app/components/faq-schema'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
export const metadata = {
  title: 'cost when your home will not sell Calculator | Dr. Jan Duffy',
  description:
    'Calculate how much money you are losing every day your listing sits expired. Stop the bleeding now.',
}
export default function CostCalculatorPage() {
  const faqs = [
    {
      question: 'How much money am I losing every day my Las Vegas home does not sell?',
      answer:
        'Every day your Las Vegas home does not sell, you lose money on mortgage payments, property taxes, insurance, utilities, maintenance, and opportunity cost. Dr. Jan Duffy\'s cost calculator shows your daily loss. She specializes in selling homes fast (19-day average) in Las Vegas, Summerlin, and Henderson to minimize your losses.',
    },
    {
      question: 'What is the true cost of a home that did not sell in Las Vegas?',
      answer:
        'The true cost includes mortgage payments, property taxes, insurance, utilities, maintenance, price reductions, and opportunity cost. Dr. Jan Duffy\'s cost calculator reveals your total loss. She uses her 97-point marketing system to sell homes fast (19-day average) in Las Vegas, Summerlin, and Henderson.',
    },
    {
      question: 'How can I stop losing money on my Las Vegas home that did not sell?',
      answer:
        'Stop losing money by hiring Dr. Jan Duffy, who uses her proven 97-point marketing system, invests $5,000+ per listing in professional marketing, and achieves 19-day average time to contract. She specializes in selling homes that did not sell in Las Vegas, Summerlin, and Henderson.',
    },
    {
      question: 'Why is my Las Vegas home costing me money every day?',
      answer:
        'Your Las Vegas home costs money every day through mortgage payments, property taxes, insurance, utilities, maintenance, and price reductions. Dr. Jan Duffy helps minimize losses by selling homes fast (19-day average) using her 97-point marketing system. She serves Las Vegas, Summerlin, and Henderson.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Tools', url: '/tools' },
        { name: 'Cost Calculator', url: '/tools/cost-calculator' },
      ]} />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                cost when your home will not sell CALCULATOR
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
