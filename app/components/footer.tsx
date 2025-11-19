import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import GoogleBusinessLink from './google-business-link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white font-black text-xl mb-4">Dr. Janet Duffy</h3>
            <p className="text-sm mb-4">
              Las Vegas Real Estate Expert<br />
              Specializing in HOMES THAT DIDN\'T SELL
            </p>
            <div className="space-y-3">
              <a
                href="tel:7025001064"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (702) 500-1064
              </a>
              <a
                href="mailto:info@drjanduffy.com"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@drjanduffy.com
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>1180 North Town Center Drive<br />Las Vegas, NV 89144<br />Serving Summerlin, The Ridges & Surrounding Areas</span>
              </div>
              <div className="flex items-start gap-2 text-sm mt-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Business Hours:</div>
                  <div>Mon-Sun: 8:00 AM - 8:00 PM</div>
                  <div className="text-xs text-gray-500 mt-1">Available 7 days a week</div>
                </div>
              </div>
              <div className="mt-3">
                <GoogleBusinessLink variant="text" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">
                <strong className="text-white">Awards:</strong><br />
                Failed Listing Specialist 2026<br />
                Good Neighbor Award Recipient
              </p>
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Dr. Jan Duffy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Complete Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-primary transition-colors">
                  Selling Process
                </Link>
              </li>
              <li>
                <Link href="/marketing-strategy" className="hover:text-primary transition-colors">
                  Marketing Strategy
                </Link>
              </li>
              <li>
                <Link href="/why-choose-me" className="hover:text-primary transition-colors">
                  Why Choose Me
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="hover:text-primary transition-colors">
                  Agent Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/success-stories" className="hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/why-expire" className="hover:text-primary transition-colors">
                  Why homes fail to sell
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="/tools/cost-calculator" className="hover:text-primary transition-colors">
                  Cost Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Condos & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Las Vegas Condos</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="/condos" className="hover:text-primary transition-colors">
                  All Las Vegas Condos
                </Link>
              </li>
              <li>
                <Link href="/condos/strip" className="hover:text-primary transition-colors">
                  Strip Condos
                </Link>
              </li>
              <li>
                <Link href="/condos/luxury" className="hover:text-primary transition-colors">
                  Luxury Condos
                </Link>
              </li>
              <li>
                <Link href="/condos/high-rise" className="hover:text-primary transition-colors">
                  High-Rise Condos
                </Link>
              </li>
              <li>
                <Link href="/condos/summerlin" className="hover:text-primary transition-colors">
                  Summerlin Condos
                </Link>
              </li>
              <li>
                <Link href="/condos/henderson" className="hover:text-primary transition-colors">
                  Henderson Condos
                </Link>
              </li>
            </ul>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-500 text-center md:text-left">
              <p>
                © {currentYear} Sell My Home Fast | Homes by Dr Jan Duffy. All rights reserved.
              </p>
              <p className="mt-2 text-xs">
                Dr. Jan Duffy | Nevada Real Estate License #S.0197614
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              {/* Berkshire Hathaway HomeServices Logo */}
              <div className="flex items-center justify-center max-w-[200px]">
                <Image 
                  src="/berkshire-hathaway-logo.png" 
                  alt="Berkshire Hathaway HomeServices Las Vegas Real Estate" 
                  width={200}
                  height={40}
                  className="h-auto w-full max-h-10 object-contain"
                  style={{ maxWidth: '200px', height: 'auto' }}
                />
              </div>
              <p className="text-xs text-gray-400 text-center max-w-[200px]">
                Berkshire Hathaway HomeServices
              </p>
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              <p>
                <strong className="text-white">Results:</strong> 500+ families served | $127M+ in sales | 47 homes that didn't sell - now sold | 19 day average | 98.7% of asking price
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-600 text-center">
            <p>
              This website is not affiliated with or endorsed by any real estate brokerage or organization.
              All property information is subject to change without notice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

