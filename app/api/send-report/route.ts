import { NextRequest, NextResponse } from 'next/server'
import { sendExpiredReport } from '@/lib/utils/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 },
      )
    }

    await sendExpiredReport(email, name)

    return NextResponse.json({
      success: true,
      message: 'Report sent successfully',
    })
  } catch (error) {
    console.error('Error sending report:', error)
    return NextResponse.json(
      { error: 'Failed to send report' },
      { status: 500 },
    )
  }
}

