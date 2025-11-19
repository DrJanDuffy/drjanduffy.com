'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/tools/cost-calculator', label: 'Tools' },
    { href: '/comparison', label: 'Comparison' },
  ]

  return (
    <nav className="bg-white border-b-2 border-gray-200 sticky top-[60px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold hover:text-primary transition-colors ${
                  pathname === item.href ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="tel:7022221964"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">702-222-1964</span>
            <span className="sm:hidden">CALL</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

