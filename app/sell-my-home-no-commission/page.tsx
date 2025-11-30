import Header from '@/app/components/header'
import LeadForm from '@/app/components/lead-form'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Real Estate Agent Who Brings Buyers | Dr. Jan Duffy | Las Vegas',
  description:
    'Real estate agent who brings buyers. Dr. Jan Duffy attracts qualified buyers with aggressive marketing. 19-day average to contract, 98.7% of asking price. Free consultation: 702-500-1064',
  keywords: [
    'real estate agent who brings buyers',
    'agent that brings buyers',
    'realtor who brings buyers',
    'real estate agent attracts buyers',
    'agent gets buyers',
    'realtor brings qualified buyers',
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
      question: 'How does Dr. Jan Duffy bring buyers?',
      answer:
        'Dr. Jan Duffy brings buyers through aggressive marketing, strategic pricing, and relentless follow-up. She invests $5,000+ in professional marketing per listing: professional photography ($3,700), premium staging, 97-point marketing system, strategic pricing analysis, multi-channel advertising, and aggressive follow-up on every showing. She doesn\'t list and wait - she actively brings qualified buyers who are ready to make offers. This is why she averages 19 days to contract and 98.7% of asking price.',
    },
    {
      question: 'What makes Dr. Jan Duffy different from other agents who bring buyers?',
      answer:
        'Most agents list and wait. Dr. Jan Duffy brings buyers through aggressive marketing ($5,000+ investment per listing), strategic pricing that attracts qualified buyers, and relentless follow-up that converts interest into offers. She follows up on every showing within 2 hours. She calls agents. She texts buyers. She converts interest into offers. She\'s sold 7 homes that did not sell with previous agents. She brings buyers, and homes sell.',
    },
    {
      question: 'How quickly does Dr. Jan Duffy bring buyers?',
      answer:
        'Dr. Jan Duffy averages 19 days from listing to contract. She brings buyers quickly through aggressive marketing, strategic pricing, and relentless follow-up. She doesn\'t wait for buyers to find your listing - she actively markets your home across multiple channels, prices it strategically to attract qualified buyers, and follows up relentlessly to convert interest into offers. This comprehensive approach brings buyers fast.',
    },
    {
      question: 'What marketing does Dr. Jan Duffy use to bring buyers?',
      answer:
        'Dr. Jan Duffy invests $5,000+ in professional marketing per listing to bring buyers: professional photography ($3,700) that increases showing requests by 300%, premium staging that showcases your home\'s potential, 97-point marketing system across multiple channels, strategic pricing that positions your home competitively, multi-channel advertising that reaches qualified buyers where they\'re looking, and aggressive follow-up on every showing. This comprehensive marketing approach brings qualified buyers who are ready to make offers.',
    },
    {
      question: 'Why should I choose an agent who brings buyers?',
      answer:
        'Most agents list and wait. An agent who brings buyers actively markets your home, prices it strategically, and follows up relentlessly to convert interest into offers. Dr. Jan Duffy brings buyers through aggressive marketing, strategic pricing, and relentless follow-up. She averages 19 days to contract and 98.7% of asking price. She\'s sold 7 homes that did not sell with previous agents. If your home didn\'t sell, you need an agent who brings buyers. Call 702-500-1064 to learn more.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Real Estate Agent Who Brings Buyers', url: '/sell-my-home-no-commission' },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                REAL ESTATE AGENT WHO BRINGS BUYERS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Dr. Jan Duffy brings qualified buyers with aggressive marketing. 19-day average to contract. 98.7% of asking price. Homes that didn't sell - now sold.
              </p>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Looking for a <strong>real estate agent who brings buyers</strong>? Most agents list your home and wait. They post to MLS and hope buyers find it. I don't wait. I bring buyers. I use aggressive marketing, strategic pricing, and relentless follow-up to attract qualified buyers who are ready to make offers. I average 19 days to contract and 98.7% of asking price.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I've sold 7 homes that did not sell with previous agents. The difference? I bring buyers. I invest $5,000+ in professional marketing per listing: professional photography ($3,700), premium staging, 97-point marketing system, strategic pricing analysis, multi-channel advertising, and aggressive follow-up on every showing. This comprehensive approach attracts qualified buyers who are ready to buy. Learn more about <Link href="/services" className="text-primary font-semibold hover:underline">my complete services</Link> and <Link href="/process" className="text-primary font-semibold hover:underline">my 30-day selling process</Link>.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Most agents don't bring buyers - they list and wait. I bring buyers through aggressive marketing, strategic pricing, and relentless follow-up. I invest heavily in marketing that attracts qualified buyers. I follow up on every showing within 2 hours. I negotiate aggressively to get you top dollar. This is why I average 19 days to contract and 98.7% of asking price. I bring buyers, and homes sell.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">How I Bring Buyers</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents list and wait. I bring buyers through aggressive marketing, strategic pricing, and relentless follow-up.
                </p>
                <h3 className="text-2xl font-bold mb-3">Aggressive Marketing That Attracts Buyers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I invest $5,000+ in professional marketing per listing to bring buyers: professional photography ($3,700) that increases showing requests by 300%, premium staging that showcases your home's potential, 97-point marketing system across multiple channels, strategic pricing that positions your home competitively, and multi-channel advertising that reaches qualified buyers where they're looking. This comprehensive marketing approach brings buyers who are ready to make offers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Relentless Follow-Up That Converts Interest</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I follow up on every showing within 2 hours. I call agents. I text buyers. I email updates. I answer questions immediately. Most agents don't follow up. They list and wait. I bring buyers by converting interest into offers through relentless follow-up. This is why I average 19 days to contract - I don't wait for buyers to come to me, I bring them and convert their interest into offers.
                </p>
                <h3 className="text-2xl font-bold mb-3">Strategic Pricing That Attracts Qualified Buyers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  I price your home strategically based on market analysis, comparable sales, and buyer behavior. Strategic pricing attracts qualified buyers who are ready to make offers. I don't overprice and wait. I price competitively to bring buyers quickly. This is why I average 98.7% of asking price - strategic pricing brings qualified buyers who pay top dollar.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-4">Why I Bring Buyers When Others Don't</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents list and wait. I bring buyers through aggressive marketing, strategic pricing, and relentless follow-up.
                </p>
                <h3 className="text-2xl font-bold mb-3">I Invest in Marketing That Brings Buyers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents invest $37 in iPhone photos and post to MLS. I invest $5,000+ per listing in professional marketing that brings buyers: professional photography ($3,700), premium staging, 97-point marketing system, strategic pricing, multi-channel advertising, and aggressive follow-up. This comprehensive marketing approach brings qualified buyers who are ready to make offers. This is why I average 19 days to contract - I bring buyers, not wait for them.
                </p>
                <h3 className="text-2xl font-bold mb-3">I Follow Up Relentlessly</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents don't follow up. They list and wait. I follow up on every showing within 2 hours. I call agents. I text buyers. I email updates. I answer questions immediately. I convert interest into offers through relentless follow-up. This is how I bring buyers - I don't wait for them to come to me, I actively pursue them and convert their interest into offers.
                </p>
                <h3 className="text-2xl font-bold mb-3">I Price Strategically to Attract Buyers</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Most agents overprice and wait. I price strategically based on market analysis to attract qualified buyers quickly. Strategic pricing brings buyers who are ready to make offers. I don't wait for buyers to negotiate down - I price competitively from day one to bring buyers quickly. This is why I average 98.7% of asking price - strategic pricing brings qualified buyers who pay top dollar.
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
                  I bring buyers through aggressive marketing, strategic pricing, and relentless follow-up. See <Link href="/success-stories" className="text-primary font-semibold hover:underline">real success stories</Link> from homes that did not sell with previous agents - now sold because I brought buyers.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h2 className="text-3xl font-black mb-4 text-center">
                  READY FOR AN AGENT WHO BRINGS BUYERS?
                </h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                  If your home didn't sell and you need an agent who brings buyers, call me now at (702) 500-1064 or fill out the form below for a free consultation. I bring buyers through aggressive marketing, strategic pricing, and relentless follow-up. 19-day average to contract. 98.7% of asking price.
                </p>
                <LeadForm source="brings_buyers" buttonText="GET AN AGENT WHO BRINGS BUYERS" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

