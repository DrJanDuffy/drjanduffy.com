'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import LeadForm from './lead-form'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  const messages = [
    { text: "Still expired? Let's talk 🔥", delay: 3000 },
    { text: "Your agent wasted 63 days. I need 30.", delay: 30000 },
    { text: "Leaving? Your house is still expired...", delay: 60000 },
  ]

  useEffect(() => {
    if (isOpen) return

    const timers = messages.map((msg, index) => {
      return setTimeout(() => {
        setMessageIndex(index)
      }, msg.delay)
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [isOpen])

  const currentMessage = messages[messageIndex]

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:bg-primary/90 transition-colors z-40"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-2xl border-2 border-gray-200 z-50">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold text-lg">Chat with Dr. Jan</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4">
            {currentMessage && (
              <div className="mb-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm font-semibold">{currentMessage.text}</p>
              </div>
            )}

            <LeadForm
              source="chat_widget"
              buttonText="GET HELP NOW"
              showAddress={false}
            />
          </div>
        </div>
      )}
    </>
  )
}

