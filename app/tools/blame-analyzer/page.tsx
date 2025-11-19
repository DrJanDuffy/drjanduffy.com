import BlameAnalyzer from '@/app/components/blame-analyzer'
import StickyHeader from '@/app/components/sticky-header'

export const metadata = {
  title: 'Blame Analyzer Quiz | Dr. Jan Duffy',
  description:
    'Take the 60-second assessment to find out why your listing expired. Get your agent score and discover what went wrong.',
}

export default function BlameAnalyzerPage() {
  return (
    <>
      <StickyHeader />
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

