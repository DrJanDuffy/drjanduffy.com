import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
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
  title: 'Your Agent Failed | Dr. Jan Duffy - Expired Listing Expert',
  description:
    'Your house didn\'t fail. Your agent did. Dr. Jan Duffy has sold 47 expired Summerlin listings in 19 days average at 98.7% of asking. Get your failed listing fixed now.',
  keywords: [
    'expired listing las vegas',
    'summerlin expired homes',
    'house won\'t sell vegas',
    'fire my real estate agent',
    'failed listing help',
    'expired MLS vegas',
  ],
  openGraph: {
    title: 'Your Agent Failed | Dr. Jan Duffy - Expired Listing Expert',
    description:
      'Your house didn\'t fail. Your agent did. Dr. Jan Duffy has sold 47 expired Summerlin listings in 19 days average at 98.7% of asking.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Agent Failed | Dr. Jan Duffy',
    description:
      'Your house didn\'t fail. Your agent did. Get your expired listing sold in 30 days or less.',
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
        {/* Schema Markup */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Dr. Janet Duffy',
            specialty: 'Expired Listings',
            areaServed: {
              '@type': 'City',
              name: 'Summerlin West',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '47',
            },
            priceRange: '$400K-$10M+',
            award: 'Expired Listing Expert 2025',
          })}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
