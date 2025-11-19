'use client'
import { useState } from 'react'
import { calculateHomeValue, type ValueCheckResult } from '@/lib/utils/calculations'
import { formatCurrency } from '@/lib/utils'
import { trackValueCheck } from '@/lib/config/analytics'
import { Button } from '@/components/ui/button'
import LeadForm from '@/app/components/lead-form'
import Header from '@/app/components/header'
export default function ValueCheckPage() {
  const [address, setAddress] = useState('')
  const [originalListPrice, setOriginalListPrice] = useState('')
  const [daysOnMarket, setDaysOnMarket] = useState('')
  const [priceDrops, setPriceDrops] = useState('')
  const [result, setResult] = useState<ValueCheckResult | null>(null)
  const [showForm, setShowForm] = useState(false)
  const handleCalculate = () => {
    if (!originalListPrice || !daysOnMarket) return
    const calculation = calculateHomeValue({
      originalListPrice: Number(originalListPrice),
      daysOnMarket: Number(daysOnMarket),
      priceDrops: Number(priceDrops) || 0,
      address,
    })
    setResult(calculation)
    trackValueCheck(address)
    setShowForm(true)
  }
  if (showForm && result) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200 mb-8">
                <h2 className="text-3xl font-black mb-6 text-center">
                  REALITY CHECK
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Market Value</div>
                    <div className="text-3xl font-black text-blue-600">
                      {formatCurrency(result.marketValue)}
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Quick Sale Value</div>
                    <div className="text-3xl font-black text-green-600">
                      {formatCurrency(result.quickSaleValue)}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      (3% discount for 30-day sale)
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Spring Market Potential</div>
                    <div className="text-3xl font-black text-yellow-600">
                      {formatCurrency(result.springMarketPotential)}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      (2% potential increase)
                    </div>
                  </div>
                  {result.estimatedPriceDrop > 0 && (
                    <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Estimated Price Drop Needed</div>
                      <div className="text-2xl font-black text-red-600">
                        {formatCurrency(result.estimatedPriceDrop)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-black mb-4 text-center">
                  GET DETAILED ANALYSIS
                </h3>
                <LeadForm
                  source="value_check"
                  buttonText="GET DETAILED ANALYSIS"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                WHAT'S YOUR HOME REALLY WORTH?
              </h1>
              <p className="text-xl text-gray-600">
                (Not the Fantasy Number)
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Property Address (Optional)
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main St, Las Vegas, NV"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Original List Price *
                  </label>
                  <input
                    type="number"
                    required
                    value={originalListPrice}
                    onChange={(e) => setOriginalListPrice(e.target.value)}
                    placeholder="850000"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Days on Market *
                  </label>
                  <input
                    type="number"
                    required
                    value={daysOnMarket}
                    onChange={(e) => setDaysOnMarket(e.target.value)}
                    placeholder="63"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Number of Price Drops
                  </label>
                  <input
                    type="number"
                    value={priceDrops}
                    onChange={(e) => setPriceDrops(e.target.value)}
                    placeholder="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <Button
                onClick={handleCalculate}
                disabled={!originalListPrice || !daysOnMarket}
                className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90"
              >
                CALCULATE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
