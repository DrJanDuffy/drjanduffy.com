import Header from '@/app/components/header'
import { successStories } from '@/lib/data/success-stories'
import { formatCurrency } from '@/lib/utils'
import { TrendingUp, Clock, DollarSign, Home } from 'lucide-react'
export const metadata = {
  title: 'Results & Statistics | Dr. Jan Duffy',
  description:
    "Real results from Dr. Jan Duffy: 47 homes that didn't sell - now sold, 19 day average, 98.7% of asking price.",
}
export default function ResultsPage() {
  const stats = [
    {
      icon: Home,
      number: '47',
      label: 'homes that didn't sell - now sold',
      description: 'Real results from frustrated sellers',
    },
    {
      icon: Clock,
      number: '19',
      label: 'Days Average',
      description: 'From listing to contract',
    },
    {
      icon: DollarSign,
      number: '98.7%',
      label: 'Of Asking Price',
      description: 'Average sale price percentage',
    },
    {
      icon: TrendingUp,
      number: '$127M+',
      label: 'Total Sales Volume',
      description: 'In Summerlin properties',
    },
  ]
  const totalValue = successStories.reduce((sum, story) => sum + story.soldPrice, 0)
  const avgDays = Math.round(
    successStories.reduce((sum, story) => sum + story.daysSold, 0) /
      successStories.length,
  )
  const avgPercentage = (
    successStories.reduce((sum, story) => sum + story.soldPercentage, 0) /
    successStories.length
  ).toFixed(1)
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
                REAL RESULTS
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Actual statistics from homes that didn't sell - now sold by Dr. Jan Duffy
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={index}
                      className="bg-primary text-primary-foreground p-6 rounded-lg text-center"
                    >
                      <Icon className="w-12 h-12 mx-auto mb-4" />
                      <p className="text-4xl font-black mb-2">{stat.number}</p>
                      <p className="text-lg font-bold mb-1">{stat.label}</p>
                      <p className="text-sm opacity-90">{stat.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="bg-gray-100 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-black mb-6 text-center">
                  DETAILED STATISTICS
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-black text-primary mb-2">
                      {formatCurrency(totalValue)}
                    </p>
                    <p className="text-lg font-semibold">Total Value Sold</p>
                    <p className="text-sm text-gray-600">
                      From {successStories.length} documented sales
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary mb-2">
                      {avgDays} Days
                    </p>
                    <p className="text-lg font-semibold">Average Time to Sell</p>
                    <p className="text-sm text-gray-600">
                      From expired to sold
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary mb-2">
                      {avgPercentage}%
                    </p>
                    <p className="text-lg font-semibold">Average of Asking</p>
                    <p className="text-sm text-gray-600">
                      Sale price percentage
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-3xl font-black mb-6 text-center">
                  INDIVIDUAL RESULTS
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {successStories.map((story) => (
                    <div
                      key={story.id}
                      className="bg-white border-2 border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">{story.neighborhood}</h3>
                          <p className="text-gray-600 text-sm">
                            Previous Agent: {story.previousAgent}
                          </p>
                        </div>
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
                          EXPIRED: {story.daysExpired} Days
                        </span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Expired:</span>
                          <span className="font-bold text-red-600">
                            {story.daysExpired} days
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sold:</span>
                          <span className="font-bold text-green-600">
                            {story.daysSold} days
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Asking:</span>
                          <span className="font-bold">
                            {formatCurrency(story.askingPrice)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sold:</span>
                          <span className="font-bold text-green-600">
                            {formatCurrency(story.soldPrice)} ({story.soldPercentage}%)
                          </span>
                        </div>
                      </div>
                      {story.testimonial && (
                        <div className="border-t pt-4">
                          <p className="text-sm text-gray-700 italic">
                            "{story.testimonial}"
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
                <h2 className="text-3xl font-black mb-4">
                  READY TO GET THESE RESULTS?
                </h2>
                <p className="text-xl mb-6">
                  Call (702) 500-1064 or fill out the form below
                </p>
                <a
                  href="tel:7025001064"
                  className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
                >
                  CALL NOW: (702) 500-1064
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
