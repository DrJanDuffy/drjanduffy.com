import Script from 'next/script'

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

