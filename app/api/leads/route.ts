import { NextRequest, NextResponse } from 'next/server'
import { sendExpiredReport } from '@/lib/utils/email'
import { sendInstantConfirmation } from '@/lib/utils/sms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, source, metadata } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 },
      )
    }

    // TODO: Store lead in database (MongoDB/Vercel Postgres)
    // For now, we'll just log it and send emails/SMS
    console.log('New lead captured:', {
      name,
      email,
      phone,
      address,
      source,
      metadata,
      timestamp: new Date().toISOString(),
    })

    // Send initial email report
    try {
      await sendExpiredReport(email, name)
    } catch (error) {
      console.error('Error sending email:', error)
    }

    // Send SMS confirmation
    try {
      if (phone) {
        await sendInstantConfirmation(phone, name)
      }
    } catch (error) {
      console.error('Error sending SMS:', error)
    }

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
    })
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 },
    )
  }
}

