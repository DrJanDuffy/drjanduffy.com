import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import GoogleBusinessLink from './google-business-link'

interface NAPSectionProps {
  variant?: 'default' | 'compact' | 'detailed'
  showMap?: boolean
  showHours?: boolean
  className?: string
}

export default function NAPSection({
  variant = 'default',
  showMap = false,
  showHours = true,
  className = '',
}: NAPSectionProps) {
  const businessName = 'Dr. Janet Duffy Real Estate'
  const phone = '(702) 500-1064'
  const email = 'info@drjanduffy.com'
  const address = {
    street: '1180 North Town Center Drive',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89144',
    full: '1180 North Town Center Drive, Las Vegas, NV 89144',
  }
  const hours = {
    weekdays: '8:00 AM - 8:00 PM',
    weekend: '8:00 AM - 8:00 PM',
    note: 'Available 7 days a week',
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gray-50 border-2 border-gray-200 rounded-lg p-6 ${className}`}>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <Phone className="w-6 h-6 mx-auto mb-2 text-primary" />
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-lg font-bold hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
          <div>
            <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-sm text-gray-700">{address.city}, {address.state}</p>
          </div>
          <div>
            <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-sm text-gray-700">{hours.weekdays}</p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className={`bg-white border-2 border-primary rounded-lg p-8 ${className}`}>
        <h2 className="text-3xl font-black mb-6 text-center">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">{businessName}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-lg font-bold text-primary hover:underline">
                      {phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href={`mailto:${email}`} className="text-lg font-bold text-primary hover:underline">
                      {email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-gray-700">{address.street}</p>
                    <p className="text-gray-700">{address.city}, {address.state} {address.zip}</p>
                  </div>
                </div>
                {showHours && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Business Hours</p>
                      <p className="text-gray-700">Monday - Sunday: {hours.weekdays}</p>
                      <p className="text-sm text-gray-600 mt-1">{hours.note}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="pt-4 border-t">
              <GoogleBusinessLink variant="button" />
            </div>
          </div>
          {showMap && (
            <div>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.1234567890!2d-115.3030!3d36.1579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYsLTE1NS4zMDMw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Janet Duffy Real Estate Location"
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={`bg-primary text-primary-foreground rounded-lg p-8 ${className}`}>
      <h2 className="text-3xl font-black mb-6 text-center">Contact Dr. Janet Duffy</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div className="text-center">
          <Phone className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Call Now</h3>
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="text-3xl font-black hover:underline block mb-2"
          >
            {phone}
          </a>
          <p className="text-sm opacity-90">Available 7 days a week</p>
        </div>
        <div className="text-center">
          <MapPin className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Visit Us</h3>
          <p className="text-lg mb-1">{address.street}</p>
          <p className="text-lg">{address.city}, {address.state} {address.zip}</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm underline hover:no-underline"
          >
            Get Directions →
          </a>
        </div>
      </div>
      {showHours && (
        <div className="text-center pt-6 border-t border-primary-foreground/20">
          <Clock className="w-6 h-6 mx-auto mb-2" />
          <p className="font-semibold mb-1">Business Hours</p>
          <p className="text-lg">Monday - Sunday: {hours.weekdays}</p>
          <p className="text-sm opacity-90 mt-1">{hours.note}</p>
        </div>
      )}
      <div className="mt-6 text-center">
        <GoogleBusinessLink variant="button" />
      </div>
    </div>
  )
}

