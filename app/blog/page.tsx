import Header from '@/app/components/header'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
import FAQSchema from '@/app/components/faq-schema'
import Link from 'next/link'

export const metadata = {
  title: 'Las Vegas Real Estate Blog | Market Insights & Selling Tips',
  description:
    'Expert insights on Las Vegas real estate, market trends, selling tips, and neighborhood guides. Stay informed with the latest from Summerlin real estate specialist.',
  alternates: {
    canonical: 'https://www.drjanduffy.com/blog',
  },
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drjanduffy.com/blog',
    title: 'Las Vegas Real Estate Blog | Market Insights & Selling Tips',
    description: 'Expert insights on Las Vegas real estate, market trends, selling tips, and neighborhood guides.',
  },
  twitter: {
    card: 'summary',
    title: 'Las Vegas Real Estate Blog',
    description: 'Expert insights on Las Vegas real estate, market trends, and selling tips.',
  },
}

// Blog posts will be stored here - for now showing placeholder structure
const blogPosts = [
  {
    slug: 'why-house-wont-sell-las-vegas',
    title: 'Why Your House will not Sell in Las Vegas: 7 Common Mistakes',
    excerpt: 'Data-driven analysis of why homes do not sell in Las Vegas. Common agent failures and how to avoid them.',
    date: '2026-01-15',
    category: 'Selling Tips',
  },
  {
    slug: 'how-to-sell-house-fast-las-vegas',
    title: 'How to Sell Your House Fast in Las Vegas: Complete 2026 Guide',
    excerpt: 'Complete guide to selling your house fast in Las Vegas. Timeline, checklist, and local considerations.',
    date: '2026-01-10',
    category: 'Selling Tips',
  },
  {
    slug: 'summerlin-market-report-january-2026',
    title: 'Summerlin Real Estate Market Report January 2026',
    excerpt: 'Current Summerlin market insights: inventory, prices, days on market, trends, and predictions.',
    date: '2026-01-05',
    category: 'Market Reports',
  },
]

export default function BlogPage() {
  const faqs = [
    {
      question: 'What real estate topics does Dr. Jan Duffy cover in her Las Vegas blog?',
      answer:
        'Dr. Jan Duffy\'s Las Vegas real estate blog covers market trends, selling tips, neighborhood guides, market reports for Summerlin and Henderson, why homes do not sell, how to sell fast, and expert insights on Las Vegas real estate. She provides data-driven analysis and actionable advice for sellers in Las Vegas, Summerlin, and Henderson.',
    },
    {
      question: 'How can I stay updated on Las Vegas real estate market trends?',
      answer:
        'Stay updated by reading Dr. Jan Duffy\'s Las Vegas real estate blog, which covers market trends, Summerlin and Henderson market reports, selling tips, and neighborhood guides. Subscribe for market updates and expert insights on Las Vegas real estate.',
    },
    {
      question: 'What selling tips does Dr. Jan Duffy share in her blog?',
      answer:
        'Dr. Jan Duffy shares selling tips including why homes do not sell, how to sell fast, strategic pricing, professional marketing, her 97-point system, and proven strategies for Las Vegas, Summerlin, and Henderson. Her blog provides actionable advice based on her proven results: 19-day average time to contract and 98.7% of asking price.',
    },
    {
      question: 'Where can I find neighborhood guides for Las Vegas?',
      answer:
        'Dr. Jan Duffy provides neighborhood guides for Las Vegas, Summerlin, Henderson, and other areas in her blog. These guides cover market trends, amenities, lifestyle, and real estate insights for each neighborhood to help sellers understand their local market.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' }
      ]} />
      <FAQSchema faqs={faqs} />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center mb-6">
                Las Vegas Real Estate Blog
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Expert insights on Las Vegas real estate, market trends, selling tips, and neighborhood guides
              </p>

              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.slug} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-semibold text-primary">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-3xl font-black mb-4">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block text-primary font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 mb-4">
                  More blog posts coming soon. Subscribe to stay updated.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[var(--color-cta)] text-[var(--color-cta-foreground)] px-8 py-4 rounded-lg font-bold hover:bg-[var(--color-cta-hover)] transition-colors"
                >
                  Get Market Updates
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

