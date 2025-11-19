import Script from 'next/script'

interface ServiceSchemaProps {
  serviceName: string
  description: string
  provider?: {
    name: string
    url: string
  }
  areaServed?: string | string[]
  serviceType?: string
}

export default function ServiceSchema({
  serviceName,
  description,
  provider,
  areaServed,
  serviceType = 'Real Estate Service',
}: ServiceSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: provider || {
      '@type': 'RealEstateAgent',
      name: 'Dr. Janet Duffy',
      url: baseUrl,
      telephone: '(702) 500-1064',
    },
    serviceType: serviceType,
    areaServed: areaServed
      ? Array.isArray(areaServed)
        ? areaServed.map((area) => ({
            '@type': 'City',
            name: area,
          }))
        : {
            '@type': 'City',
            name: areaServed,
          }
      : {
          '@type': 'City',
          name: 'Las Vegas',
        },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

