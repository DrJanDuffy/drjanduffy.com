'use client'

import { useState } from 'react'
import { calculateExpiredCosts, type CostCalculationResult } from '@/lib/utils/calculations'
import { formatCurrency } from '@/lib/utils'
import { trackCalculatorUsed } from '@/lib/config/analytics'
import { Button } from '@/components/ui/button'

export default function CostCalculator() {
  const [daysExpired, setDaysExpired] = useState(63)
  const [monthlyMortgage, setMonthlyMortgage] = useState(2847)
  const [monthlyHOA, setMonthlyHOA] = useState(385)
  const [monthlyInsurance, setMonthlyInsurance] = useState(287)
  const [monthlyUtilities, setMonthlyUtilities] = useState(245)
  const [result, setResult] = useState<CostCalculationResult | null>(null)

  const handleCalculate = () => {
    const calculation = calculateExpiredCosts({
      daysExpired,
      monthlyMortgage,
      monthlyHOA,
      monthlyInsurance,
      monthlyUtilities,
    })
    setResult(calculation)
    
    // Track calculator usage
    trackCalculatorUsed(daysExpired, calculation.totalWasted)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200">
      <h2 className="text-3xl font-black mb-6 text-center">
        STILL EXPIRED? HERE'S WHAT IT'S COSTING YOU
      </h2>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Days Expired
          </label>
          <input
            type="number"
            value={daysExpired}
            onChange={(e) => setDaysExpired(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Monthly Mortgage
          </label>
          <input
            type="number"
            value={monthlyMortgage}
            onChange={(e) => setMonthlyMortgage(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Monthly HOA
          </label>
          <input
            type="number"
            value={monthlyHOA}
            onChange={(e) => setMonthlyHOA(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Monthly Insurance
          </label>
          <input
            type="number"
            value={monthlyInsurance}
            onChange={(e) => setMonthlyInsurance(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Monthly Utilities
          </label>
          <input
            type="number"
            value={monthlyUtilities}
            onChange={(e) => setMonthlyUtilities(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <Button
        onClick={handleCalculate}
        className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90"
      >
        CALCULATE YOUR LOSS
      </Button>

      {result && (
        <div className="mt-8 p-6 bg-red-50 border-2 border-red-500 rounded-lg">
          <h3 className="text-2xl font-black text-red-800 mb-4 text-center">
            YOUR FINANCIAL BLEEDING
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Daily Loss:</span>
              <span className="text-2xl font-black text-red-600">
                {formatCurrency(result.dailyLoss)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total Wasted So Far:</span>
              <span className="text-2xl font-black text-red-600">
                {formatCurrency(result.totalWasted)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Projected 30-Day Loss:</span>
              <span className="text-2xl font-black text-red-600">
                {formatCurrency(result.projected30DayLoss)}
              </span>
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Monthly Total:</span>
                <span className="text-xl font-bold">
                  {formatCurrency(result.monthlyTotal)}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="tel:7022221964"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
            >
              STOP THE BLEEDING NOW - CALL 702-222-1964
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

