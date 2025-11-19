import { NextRequest, NextResponse } from 'next/server'
import { calculateHomeValue } from '@/lib/utils/calculations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { originalListPrice, daysOnMarket, priceDrops, address } = body

    if (originalListPrice === undefined || daysOnMarket === undefined) {
      return NextResponse.json(
        { error: 'Original list price and days on market are required' },
        { status: 400 },
      )
    }

    const result = calculateHomeValue({
      originalListPrice: Number(originalListPrice),
      daysOnMarket: Number(daysOnMarket),
      priceDrops: priceDrops ? Number(priceDrops) : 0,
      address,
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Error calculating value:', error)
    return NextResponse.json(
      { error: 'Failed to calculate value' },
      { status: 500 },
    )
  }
}

