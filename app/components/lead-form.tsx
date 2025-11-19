'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { trackLead, trackCompleteRegistration } from '@/lib/config/analytics'

interface LeadFormProps {
  source: string
  onSubmit?: (data: LeadFormData) => void
  buttonText?: string
  showAddress?: boolean
}

export interface LeadFormData {
  name: string
  email: string
  phone: string
  address?: string
}

export default function LeadForm({
  source,
  onSubmit,
  buttonText = 'GET MY FAILED LISTING FIXED',
  showAddress = true,
}: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Track lead
      trackLead(source)

      // Submit to API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      })

      if (response.ok) {
        trackCompleteRegistration(source)
        setSubmitted(true)
        if (onSubmit) {
          onSubmit(formData)
        }
      }
    } catch (error) {
      console.error('Error submitting lead:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We'll contact you within 24 hours to discuss your HOME THAT DID NOT SELL.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Your Phone"
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
        />
      </div>
      {showAddress && (
        <div>
          <input
            type="text"
            placeholder="Property Address (Optional)"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>
      )}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        {isSubmitting ? 'SUBMITTING...' : buttonText}
      </Button>
    </form>
  )
}

