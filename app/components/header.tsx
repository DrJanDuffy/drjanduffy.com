'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [condosOpen, setCondosOpen] = useState(false)

  const mainNavItems = [
    { href: '/', label: 'Home' },
    { href: '/sell-house-fast-las-vegas', label: 'Sell Your Home' },
    { href: '/home-wont-sell-las-vegas', label: 'Home Won\'t Sell?' },
    { href: '/summerlin-real-estate-agent', label: 'Summerlin Agent' },
    { href: '/neighborhoods', label: 'Neighborhoods' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const servicesItems = [
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Selling Process' },
    { href: '/marketing-strategy', label: 'Marketing Strategy' },
    { href: '/why-choose-me', label: 'Why Choose Me' },
    { href: '/comparison', label: 'Agent Comparison' },
  ]

  const condosItems = [
    { href: '/condos', label: 'All Condos' },
    { href: '/condos/strip', label: 'Strip Condos' },
    { href: '/condos/luxury', label: 'Luxury Condos' },
    { href: '/condos/high-rise', label: 'High-Rise Condos' },
    { href: '/condos/mid-rise', label: 'Mid-Rise Condos' },
    { href: '/condos/summerlin', label: 'Summerlin Condos' },
    { href: '/condos/henderson', label: 'Henderson Condos' },
  ]

  const resourcesItems = [
    { href: '/resources', label: 'Free Resources' },
    { href: '/tools/cost-calculator', label: 'Cost Calculator' },
    { href: '/tools/blame-analyzer', label: 'Blame Analyzer' },
    { href: '/why-expire', label: 'Why homes fail to sell' },
    { href: '/testimonials', label: 'Testimonials' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Top Stats Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="font-bold">🔥 47 homes that DIDN\'T sell - now sold</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">19 Day Average</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">98.7% of Asking Price</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gray-900 leading-tight">
                  Dr. Jan Duffy
                </span>
                <span className="text-xs text-gray-600 font-semibold">
                  failed listing specialist
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-1 ${
                    pathname.startsWith('/services') || pathname.startsWith('/process') || pathname.startsWith('/marketing-strategy') || pathname.startsWith('/why-choose-me') || pathname.startsWith('/comparison')
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border-2 border-gray-200 rounded-lg shadow-xl py-2">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors ${
                          isActive(item.href) ? 'text-primary font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Condos Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setCondosOpen(true)}
                onMouseLeave={() => setCondosOpen(false)}
              >
                <button
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-1 ${
                    pathname.startsWith('/condos')
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  Condos
                  <ChevronDown className="w-4 h-4" />
                </button>
                {condosOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border-2 border-gray-200 rounded-lg shadow-xl py-2 max-h-96 overflow-y-auto">
                    {condosItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors ${
                          isActive(item.href) ? 'text-primary font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Link */}
              <Link
                href="/resources"
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  pathname.startsWith('/resources') || pathname.startsWith('/tools') || pathname.startsWith('/why-expire') || pathname.startsWith('/testimonials')
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
              >
                Resources
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:7025001064"
                className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>(702) 500-1064</span>
              </a>
              <a
                href="tel:7025001064"
                className="sm:hidden flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div className="pt-2">
                <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase">Services</div>
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10 font-semibold'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Condos Section */}
              <div className="pt-2">
                <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase">Condos</div>
                {condosItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10 font-semibold'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Resources Section */}
              <div className="pt-2">
                <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase">Resources</div>
                {resourcesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10 font-semibold'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:7025001064"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (702) 500-1064</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

