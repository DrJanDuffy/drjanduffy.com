// Analytics configuration for Facebook Pixel, GA4, etc.

declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, any>,
    ) => void
    dataLayer?: any[]
  }
}

export const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ''

export function trackFacebookEvent(
  event: string,
  params?: Record<string, any>,
) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, params)
  }
}

export function trackViewContent(contentType: string, value?: number) {
  trackFacebookEvent('ViewContent', {
    content_type: contentType,
    value,
  })
}

export function trackLead(source: string, value?: number) {
  trackFacebookEvent('Lead', {
    content_name: source,
    value,
  })
}

export function trackCompleteRegistration(source: string) {
  trackFacebookEvent('CompleteRegistration', {
    content_name: source,
    status: 'high_intent',
  })
}

export function trackCalculatorUsed(daysExpired: number, totalWasted: number) {
  trackFacebookEvent('Lead', {
    content_name: 'calculator_used',
    value: totalWasted,
    days_expired: daysExpired,
  })
}

export function trackQuizCompleted(score: number) {
  trackFacebookEvent('Lead', {
    content_name: 'quiz_completed',
    agent_score: score,
  })
}

export function trackValueCheck(address?: string) {
  trackFacebookEvent('Lead', {
    content_name: 'value_check',
    address,
  })
}

