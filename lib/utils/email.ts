// Email automation utilities
// These will integrate with Resend API when configured

export interface EmailLead {
  email: string
  name: string
  phone?: string
  address?: string
  source: string
  metadata?: Record<string, any>
}

export async function sendExpiredReport(email: string, name: string) {
  // TODO: Integrate with Resend API
  // For now, this is a placeholder
  console.log(`Sending expired report to ${email} for ${name}`)
  
  // When Resend is configured:
  // await resend.emails.send({
  //   from: 'Dr. Jan <drjan@example.com>',
  //   to: email,
  //   subject: 'Your Free Expired Listing Report',
  //   html: getExpiredReportEmail(name),
  // })
}

export async function sendFollowUpEmail(
  email: string,
  name: string,
  day: number,
) {
  console.log(`Sending day ${day} follow-up to ${email} for ${name}`)
  
  // TODO: Implement email sequences
}

function getExpiredReportEmail(name: string): string {
  return `
    <html>
      <body>
        <h1>Hi ${name},</h1>
        <p>Here's your free report: "7 Reasons Your Listing Expired (And How to Fix Them in 30 Days)"</p>
        <!-- Email content -->
      </body>
    </html>
  `
}

