'use client'

import { useState, useEffect } from 'react'

export default function LiveCounter() {
  const [count, setCount] = useState(7)

  // Simulate live updates (in production, this would come from API)
  useEffect(() => {
    const interval = setInterval(() => {
      // Show 7 homes (total sold) - can vary slightly for urgency
      setCount(7)
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 bg-blue-50/90 border-2 border-blue-600/50 rounded-lg px-4 py-2 backdrop-blur-sm">
      <span className="text-blue-700 font-bold text-lg">{count}</span>
      <span className="text-blue-800 font-semibold">
        homes that did not sell - now sold
      </span>
    </div>
  )
}

