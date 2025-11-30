import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Sell My Home No Commission | No Commission Real Estate Agent | Dr. Jan Duffy',
  description:
    'Sell my home no commission? Get 98.7% of asking price with Dr. Jan Duffy. No upfront fees, no commission until sold. 19-day average. Free consultation: 702-500-1064',
  keywords: [
    'sell my home no commission',
    'no commission real estate agent',
    'sell house no commission',
    'no commission realtor',
    'sell home without commission',
    'flat fee real estate agent',
  ],
  alternates: {
    canonical: '/sell-my-home-no-commission',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/sell-my-home-no-commission',
    title: 'Sell My Home No Commission | No Commission Real Estate Agent',
    description: 'Sell your home with no upfront commission. Get 98.7% of asking price. No fees until sold. 19-day average.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell My Home No Commission | Dr. Jan Duffy',
    description: 'No commission until sold. Get 98.7% of asking price. 19-day average.',
  },
}

export default function SellMyHomeNoCommissionPage() {
  const faqs = [
    {
      question: 'Can I sell my home with no commission upfront?',
      answer:
        'Yes! I work on a performance-based model - no commission until your home sells. Unlike traditional agents who charge upfront fees or take large commissions regardless of results, I only get paid when you get paid. I invest $5,000+ in professional marketing per listing (photography, staging, advertising) with zero upfront cost to you. You pay nothing until your home sells, and I average 98.7% of asking price with a 19-day average to contract.',
    },
    {
      question: 'How does no commission real estate work?',
      answer:
        'No commission real estate means you don\'t pay anything upfront. I invest in professional marketing ($5,000+ per listing), handle all marketing costs, and only get paid a commission when your home successfully sells. This aligns my interests with yours - I only succeed when you succeed. I\'ve sold 7 homes that did not sell with previous agents using this model, averaging 19 days to contract and 98.7% of asking price.',
    },
    {
      question: 'What is the difference between no commission and flat fee real estate?',
      answer:
        'No commission means you pay nothing upfront - I invest in marketing and only get paid when you sell. Flat fee typically means you pay a fixed amount upfront regardless of results. My model is better because: 1) Zero upfront cost, 2) I only get paid when you get paid, 3) I invest $5,000+ in professional marketing per listing, 4) I average 98.7% of asking price vs flat fee agents who often get lower prices. You get professional marketing and results without upfront fees.',
    },
    {
      question: 'Do I still get professional marketing with no commission?',
      answer:
        'Absolutely! I invest $5,000+ in professional marketing per listing, including: professional photography ($3,700), premium staging, 97-point marketing system, strategic pricing analysis, multi-channel advertising, and aggressive follow-up. All of this is included with zero upfront cost to you. I only get paid when your home sells, so I have every incentive to invest in marketing that gets results. This is why I average 19 days to contract and 98.7% of asking price.',
    },
    {
      question: 'Why choose a no commission real estate agent?',
      answer:
        'No commission agents align their success with yours - they only get paid when you get paid. This means: 1) No upfront fees or costs, 2) Maximum investment in marketing to get results, 3) Focus on selling fast at top dollar, 4) No risk to you if the home doesn\'t sell. I\'ve sold 7 homes that did not sell with previous agents using this model. You get professional marketing, proven results, and zero upfront cost. Call 702-500-1064 to learn more.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Sell My Home No Commission', url: '/sell-my-home-no-commission' },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                SELL MY HOME NO COMMISSION
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                No upfront fees. No commission until sold. Professional marketing included. 98.7% of asking price average.
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Looking to <strong>sell my home no commission</strong>? You're not alone. Many sellers want to avoid upfront fees and only pay when their home sells. I offer a performance-based model: <strong>zero upfront costs, no commission until your home sells, and $5,000+ invested in professional marketing per listing</strong>. I average 19 days to contract and 98.7% of asking price.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Unlike traditional agents who charge upfront fees or take large commissions regardless of results, I only get paid when you get paid. This aligns my interests with yours - I only succeed when you succeed. I've sold 7 homes that did not sell with previous agents using this model. You get professional marketing, proven results, and zero upfront cost.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  My no commission model includes: professional photography ($3,700 investment), premium staging, 97-point marketing system, strategic pricing analysis, multi-channel advertising, aggressive follow-up, and complete transaction management. All with zero upfront cost to you. Learn more about <Link href="/services" className="text-primary font-semibold hover:underline">my complete services</Link> and <Link href="/process" className="text-primary font-semibold hover:underline">my 30-day selling process</Link>.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">How No Commission Real Estate Works</h2>
                <p className="text-lg text-gray-700 mb-4">
                  My no commission model is simple: you pay nothing upfront, I invest in marketing, and I only get paid when your home sells.
                </p>
                <h3 className="text-2xl font-bold mb-3">Zero Upfront Costs</h3>
                <p className="text-lg text-gray-700 mb-4">
                  You pay nothing upfront. No listing fees. No marketing costs. No staging fees. No photography fees. I invest $5,000+ in professional marketing per listing with zero upfront cost to you. This includes professional photography ($3,700), premium staging, 97-point marketing system, and complete transaction management.
                </p>
                <h3 className="text-2xl font-bold mb-3">Commission Only When Sold</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I only get paid a commission when your home successfully sells. This aligns my interests with yours - I only succeed when you succeed. I have every incentive to invest in marketing that gets results, price your home competitively, and negotiate aggressively to get you top dollar. I average 98.7% of asking price with a 19-day average to contract.
                </p>
                <h3 className="text-2xl font-bold mb-3">Professional Marketing Included</h3>
                <p className="text-lg text-gray-700 mb-4">
                  My no commission model includes complete professional marketing: professional photography ($3,700 investment), premium staging, 97-point marketing system, strategic pricing analysis, multi-channel advertising, aggressive follow-up, and complete transaction management. All included with zero upfront cost. You get professional marketing and results without upfront fees.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why Choose No Commission Real Estate?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  No commission real estate offers several advantages over traditional agents and flat fee services.
                </p>
                <h3 className="text-2xl font-bold mb-3">No Risk to You</h3>
                <p className="text-lg text-gray-700 mb-4">
                  With no upfront costs, you have zero risk. If your home doesn't sell, you don't pay anything. I invest in marketing and only get paid when you get paid. This means I'm highly motivated to get results - I only succeed when you succeed. I've sold 7 homes that did not sell with previous agents using this model.
                </p>
                <h3 className="text-2xl font-bold mb-3">Maximum Marketing Investment</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Because I only get paid when you sell, I invest heavily in marketing that gets results. I invest $5,000+ per listing in professional photography, staging, advertising, and marketing systems. This is why I average 19 days to contract and 98.7% of asking price. You get professional marketing without upfront fees.
                </p>
                <h3 className="text-2xl font-bold mb-3">Better Than Flat Fee</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Flat fee agents charge upfront regardless of results. My model is better because: 1) Zero upfront cost, 2) I only get paid when you get paid, 3) I invest $5,000+ in professional marketing, 4) I average 98.7% of asking price vs flat fee agents who often get lower prices. You get professional marketing and results without upfront fees.
                </p>
              </div>

              <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-black mb-4">My No Commission Results</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I've sold 7 homes that did not sell with previous agents using my no commission model. Here's what you can expect:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-4xl font-black text-primary mb-2">19</div>
                    <div className="text-lg font-bold text-gray-700">Days Average to Contract</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-4xl font-black text-primary mb-2">98.7%</div>
                    <div className="text-lg font-bold text-gray-700">Of Asking Price Average</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-4xl font-black text-primary mb-2">$0</div>
                    <div className="text-lg font-bold text-gray-700">Upfront Cost to You</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  You get professional marketing, proven results, and zero upfront cost. I only get paid when you get paid. See <Link href="/success-stories" className="text-primary font-semibold hover:underline">real success stories</Link> from homes that did not sell with previous agents.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY TO SELL WITH NO COMMISSION?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If you want to sell your home with no upfront commission, call me now at (702) 500-1064 or fill out the form below for a free consultation. Zero upfront cost. Professional marketing included. Commission only when sold.
                </p>
                <LeadForm source="no_commission" buttonText="GET STARTED - NO COMMISSION UNTIL SOLD" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

