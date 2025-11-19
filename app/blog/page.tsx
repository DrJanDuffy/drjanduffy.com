import Header from '@/app/components/header'
import BreadcrumbSchema from '@/app/components/breadcrumb-schema'
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
    title: 'Why Your House Won\'t Sell in Las Vegas: 7 Common Mistakes',
    excerpt: 'Data-driven analysis of why homes don\'t sell in Las Vegas. Common agent failures and how to avoid them.',
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
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' }
      ]} />
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
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
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

