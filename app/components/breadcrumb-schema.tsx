import Script from 'next/script'

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'
  
  // Ensure URLs are properly formatted
  const formatUrl = (url: string) => {
    if (url.startsWith('http')) return url
    if (url.startsWith('/')) return `${baseUrl}${url}`
    return `${baseUrl}/${url}`
  }
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: formatUrl(item.url),
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

