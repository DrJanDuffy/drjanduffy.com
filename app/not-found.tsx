import Link from 'next/link'
import { Button } from '@/components/ui/button'
import StickyHeader from './components/sticky-header'

export default function NotFound() {
  return (
    <>
      <StickyHeader />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-black mb-4 text-primary">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/">Go to Homepage</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <a href="tel:7025001064">Call (702) 500-1064</a>
            </Button>
          </div>
          <div className="mt-12 space-y-4">
            <p className="text-lg font-semibold">Popular Pages:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/success-stories"
                className="text-primary hover:underline font-semibold"
              >
                Success Stories
              </Link>
              <Link
                href="/why-expire"
                className="text-primary hover:underline font-semibold"
              >
                Why homes fail to sell
              </Link>
              <Link
                href="/tools/cost-calculator"
                className="text-primary hover:underline font-semibold"
              >
                Cost Calculator
              </Link>
              <Link
                href="/comparison"
                className="text-primary hover:underline font-semibold"
              >
                Your Agent vs Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

