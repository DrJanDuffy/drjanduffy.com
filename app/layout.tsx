import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import Footer from './components/footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'),
  title: 'Sell Your House Fast Las Vegas | Summerlin Real Estate Specialist',
  description:
    'Las Vegas real estate specialist for homes that won\'t sell. 500+ families served, $127M+ in sales. Summerlin luxury expert. Free consultation: 702-500-1064',
  keywords: [
    'home that didn\'t sell las vegas',
    'house won\'t sell vegas',
    'couldn\'t sell my house',
    'fire my real estate agent',
    'failed listing help',
    'unsold home las vegas',
    'home that failed to sell',
    're-list my home las vegas',
  ],
  openGraph: {
    title: 'Couldn\'t Sell Your Las Vegas Home? | Dr. Jan Duffy - I Sell Homes That Didn\'t Sell',
    description:
      'Your home didn\'t sell? I\'ve helped 47 Summerlin sellers who couldn\'t sell with their previous agent. Average 19 days to contract, 98.7% of asking.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Couldn\'t Sell Your Home? | Dr. Jan Duffy',
    description:
      'Your house didn\'t sell? Get your home sold in 30 days or less with proven results.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BXTZ077LFQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BXTZ077LFQ');
          `}
        </Script>
        {/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        {/* Hotjar */}
        {process.env.NEXT_PUBLIC_HOTJAR_ID && (
          <Script id="hotjar" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}
        {/* CallRail */}
        {process.env.NEXT_PUBLIC_CALLRAIL_ID && (
          <Script id="callrail" strategy="afterInteractive">
            {`
              (function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.callrail.com/companies/${process.env.NEXT_PUBLIC_CALLRAIL_ID}/12/swap.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();
            `}
          </Script>
        )}
        {/* Schema Markup - Multiple Schemas */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}#agent`,
              name: 'Dr. Janet Duffy',
              alternateName: 'Dr. Jan Duffy',
              description: 'Las Vegas real estate expert specializing in homes that didn\'t sell. Helped 47 Summerlin sellers who couldn\'t sell with their previous agent - 19 day average and 98.7% of asking price.',
              telephone: '(702) 500-1064',
              email: 'info@drjanduffy.com',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com',
              image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}/og-image.png`,
              sameAs: ['https://www.linkedin.com/in/drjanduffy', 'https://www.facebook.com/drjanduffy'],
              specialty: ['Homes That Didn\'t Sell', 'Failed Listing Specialist', 'Unsold Home Expert', 'Luxury Real Estate', 'Summerlin Real Estate'],
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Las Vegas',
                  containedIn: {
                    '@type': 'State',
                    name: 'Nevada',
                  },
                },
                {
                  '@type': 'City',
                  name: 'Summerlin West',
                },
                {
                  '@type': 'City',
                  name: 'Henderson',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '47',
                bestRating: '5',
                worstRating: '1',
              },
              priceRange: '$400K-$10M+',
              award: ['Failed Listing Specialist 2025', 'Good Neighbor Award'],
              credentialCategory: ['Licensed Real Estate Agent - Nevada', 'Failed Listing Specialist', 'Luxury Real Estate Expert'],
              knowsAbout: ['Real Estate', 'Homes That Didn\'t Sell', 'Failed Listings', 'Unsold Homes', 'Re-listing Service', 'Luxury Properties', 'Property Marketing', 'Real Estate Negotiation'],
              memberOf: {
                '@type': 'Organization',
                name: 'Nevada Real Estate Division',
              },
              jobTitle: 'Real Estate Agent & Failed Listing Specialist',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}#business`,
              name: 'Dr. Janet Duffy Real Estate',
              alternateName: 'Dr. Jan Duffy - Failed Listing Specialist',
              description: 'Las Vegas real estate agent specializing in homes that didn\'t sell and luxury properties in Summerlin, The Ridges, and surrounding areas.',
              telephone: '(702) 500-1064',
              email: 'info@drjanduffy.com',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com',
              image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}/og-image.png`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1180 North Town Center Drive',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89144',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '36.1579',
                longitude: '-115.3030',
              },
              priceRange: '$400K-$10M+',
              areaServed: {
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
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}#person`,
              name: 'Dr. Janet Duffy',
              alternateName: 'Dr. Jan Duffy',
              jobTitle: 'Real Estate Agent',
              worksFor: {
                '@type': 'Organization',
                name: 'Dr. Janet Duffy Real Estate',
              },
              telephone: '(702) 500-1064',
              email: 'info@drjanduffy.com',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com',
              image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}/og-image.png`,
              award: ['Failed Listing Specialist 2025', 'Good Neighbor Award'],
              knowsAbout: ['Real Estate', 'Homes That Didn\'t Sell', 'Failed Listings', 'Unsold Homes', 'Luxury Properties', 'Property Marketing'],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}#organization`,
              name: 'Dr. Janet Duffy Real Estate',
              alternateName: 'Dr. Jan Duffy - Failed Listing Specialist',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}/og-image.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '(702) 500-1064',
                contactType: 'Customer Service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              sameAs: [
                process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}#website`,
              name: 'Dr. Janet Duffy - Failed Listing Specialist',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com',
              description: 'Las Vegas real estate expert specializing in homes that didn\'t sell. Helped 47 Summerlin sellers who couldn\'t sell with their previous agent - 19 day average and 98.7% of asking price.',
              publisher: {
                '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}#organization`,
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}/search?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Review',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}#review1`,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Summerlin West Seller',
              },
              reviewBody: 'Dr. Jan sold my home that didn\'t sell in 16 days at 99% of asking. My previous agent had it for 90 days and it expired. The difference was night and day.',
              datePublished: '2024-12-01',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Review',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjanduffy.com'}#review2`,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              author: {
                '@type': 'Person',
                name: 'The Ridges Seller',
              },
              reviewBody: 'I was skeptical after my home didn\'t sell. But Dr. Jan\'s marketing was incredible. Professional photos, aggressive follow-up, strategic negotiation. Sold in 19 days.',
              datePublished: '2024-11-15',
            },
          ])}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme"
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
