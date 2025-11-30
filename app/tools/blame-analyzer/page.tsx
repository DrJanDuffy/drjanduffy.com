import BlameAnalyzer from '@/app/components/blame-analyzer'
import Header from '@/app/components/header'
import FAQSchema from '@/app/components/faq-schema'
export const metadata = {
  title: 'Blame Analyzer Quiz | Dr. Jan Duffy',
  description:
    'Take the 60-second assessment to find out why your home did not sell. Get your agent score and discover what went wrong.',
}
export default function BlameAnalyzerPage() {
  const faqs = [
    {
      question: 'Why did my Las Vegas home not sell?',
      answer:
        'Most Las Vegas homes fail to sell due to poor marketing, overpricing, lack of professional photography, or lack of follow-up. Dr. Jan Duffy\'s Blame Analyzer quiz reveals what went wrong. She specializes in selling homes that did not sell in Las Vegas, Summerlin, and Henderson using her 97-point marketing system.',
    },
    {
      question: 'What is the Blame Analyzer quiz for Las Vegas homes?',
      answer:
        'The Blame Analyzer is a 60-second assessment that reveals why your Las Vegas home did not sell. It evaluates your previous agent\'s marketing, pricing, photography, and follow-up. Dr. Jan Duffy uses this to identify issues and fix them for homes in Las Vegas, Summerlin, and Henderson.',
    },
    {
      question: 'How can Dr. Jan Duffy fix what went wrong with my Las Vegas home sale?',
      answer:
        'Dr. Jan Duffy fixes what went wrong by using her proven 97-point marketing system, investing $5,000+ per listing in professional marketing, strategic pricing, and aggressive follow-up. She has achieved 19-day average time to contract and 98.7% of asking price for homes in Las Vegas, Summerlin, and Henderson.',
    },
    {
      question: 'What should I do if my Las Vegas home did not sell?',
      answer:
        'If your Las Vegas home did not sell, take Dr. Jan Duffy\'s Blame Analyzer quiz to identify what went wrong, then hire her to fix it. She specializes in selling homes that did not sell using her 97-point marketing system and has proven results in Las Vegas, Summerlin, and Henderson.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                WHO KILLED YOUR SALE?
              </h1>
              <p className="text-xl text-gray-600">
                Take the 60-Second Assessment
              </p>
            </div>
            <BlameAnalyzer />
          </div>
        </div>
      </div>
    </>
  )
}
