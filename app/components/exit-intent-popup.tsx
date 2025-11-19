'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import LeadForm from './lead-form'
import { trackLead } from '@/lib/config/analytics'

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    if (hasShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0) {
        setIsOpen(true)
        setHasShown(true)
        trackLead('exit_intent')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-black mb-2">
            WAIT! STILL TRUSTING THE AGENT WHO FAILED YOU?
          </h2>
          <p className="text-lg font-semibold mb-4">
            Get My Free Report:
          </p>
          <p className="text-xl font-bold text-primary mb-2">
            "7 Reasons your home did not sell
          </p>
          <p className="text-xl font-bold text-primary mb-4">
            (And How to Fix Them in 30 Days)"
          </p>
          <p className="text-sm text-gray-600 italic">
            *Average reader sells in 27 days
          </p>
        </div>

        <LeadForm
          source="exit_intent"
          buttonText="GET THE REPORT"
          showAddress={false}
        />
      </div>
    </div>
  )
}

