import { NextRequest, NextResponse } from 'next/server'
import { calculateExpiredCosts } from '@/lib/utils/calculations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { daysExpired, monthlyMortgage, monthlyHOA, monthlyInsurance, monthlyUtilities } = body

    if (
      daysExpired === undefined ||
      monthlyMortgage === undefined ||
      monthlyHOA === undefined ||
      monthlyInsurance === undefined
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const result = calculateExpiredCosts({
      daysExpired: Number(daysExpired),
      monthlyMortgage: Number(monthlyMortgage),
      monthlyHOA: Number(monthlyHOA),
      monthlyInsurance: Number(monthlyInsurance),
      monthlyUtilities: monthlyUtilities ? Number(monthlyUtilities) : 0,
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Error calculating cost:', error)
    return NextResponse.json(
      { error: 'Failed to calculate cost' },
      { status: 500 },
    )
  }
}

