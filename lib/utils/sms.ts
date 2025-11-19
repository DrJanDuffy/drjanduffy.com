// SMS automation utilities
// These will integrate with Twilio API when configured

export interface SMSLead {
  phone: string
  name: string
  source: string
  metadata?: Record<string, any>
}

export async function sendSMS(phone: string, message: string) {
  // TODO: Integrate with Twilio API
  // For now, this is a placeholder
  console.log(`Sending SMS to ${phone}: ${message}`)
  
  // When Twilio is configured:
  // await twilioClient.messages.create({
  //   body: message,
  //   to: phone,
  //   from: process.env.TWILIO_PHONE_NUMBER,
  // })
}

export async function sendInstantConfirmation(phone: string, name: string) {
  await sendSMS(
    phone,
    `Hi ${name}! Report sent! Check your email. Questions? Call (702) 500-1064`,
  )
}

export async function sendFollowUpSMS(
  phone: string,
  name: string,
  day: number,
  reason?: string,
) {
  const messages: Record<number, string> = {
    2: `Hi ${name}, your listing failed because ${reason || 'of poor marketing'}. Let's fix it. (702) 500-1064`,
    5: `Open houses this weekend. Your house could be showing. Ready? (702) 500-1064`,
    10: `Spring buyers arriving in 37 days. Ready or waiting? (702) 500-1064`,
  }

  const message = messages[day]
  if (message) {
    await sendSMS(phone, message)
  }
}

