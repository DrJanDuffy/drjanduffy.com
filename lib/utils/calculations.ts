export interface CostCalculationInputs {
  daysExpired: number
  monthlyMortgage: number
  monthlyHOA: number
  monthlyInsurance: number
  monthlyUtilities?: number
}

export interface CostCalculationResult {
  dailyLoss: number
  totalWasted: number
  projected30DayLoss: number
  monthlyTotal: number
}

export function calculateExpiredCosts(
  inputs: CostCalculationInputs,
): CostCalculationResult {
  const monthlyUtilities = inputs.monthlyUtilities || 0
  const monthlyTotal =
    inputs.monthlyMortgage +
    inputs.monthlyHOA +
    inputs.monthlyInsurance +
    monthlyUtilities

  const dailyLoss = monthlyTotal / 30
  const totalWasted = dailyLoss * inputs.daysExpired
  const projected30DayLoss = dailyLoss * 30

  return {
    dailyLoss: Math.round(dailyLoss * 100) / 100,
    totalWasted: Math.round(totalWasted * 100) / 100,
    projected30DayLoss: Math.round(projected30DayLoss * 100) / 100,
    monthlyTotal: Math.round(monthlyTotal * 100) / 100,
  }
}

export interface ValueCheckInputs {
  originalListPrice: number
  daysOnMarket: number
  priceDrops: number
  address?: string
}

export interface ValueCheckResult {
  marketValue: number
  quickSaleValue: number
  springMarketPotential: number
  estimatedPriceDrop: number
}

export function calculateHomeValue(inputs: ValueCheckInputs): ValueCheckResult {
  // Conservative market adjustment based on DOM and price drops
  const domAdjustment = Math.min(inputs.daysOnMarket * 0.001, 0.1) // Max 10% for 100+ days
  const priceDropAdjustment = inputs.priceDrops * 0.02 // 2% per price drop

  const totalAdjustment = domAdjustment + priceDropAdjustment
  const marketValue = inputs.originalListPrice * (1 - totalAdjustment)
  const quickSaleValue = marketValue * 0.97 // 3% discount for quick sale
  const springMarketPotential = inputs.originalListPrice * 1.02 // 2% potential increase
  const estimatedPriceDrop = inputs.originalListPrice - marketValue

  return {
    marketValue: Math.round(marketValue),
    quickSaleValue: Math.round(quickSaleValue),
    springMarketPotential: Math.round(springMarketPotential),
    estimatedPriceDrop: Math.round(estimatedPriceDrop),
  }
}

