'use client'

import { useState, useEffect } from 'react'

export default function LiveCounter() {
  const [count, setCount] = useState(3)

  // Simulate live updates (in production, this would come from API)
  useEffect(() => {
    const interval = setInterval(() => {
      // Random updates between 3-5 for demo purposes
      setCount(Math.floor(Math.random() * 3) + 3)
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 bg-red-100 border-2 border-red-500 rounded-lg px-4 py-2">
      <span className="text-red-600 font-bold text-lg">{count}</span>
      <span className="text-red-800 font-semibold">
        homes that didn't sell - now sold This Week
      </span>
    </div>
  )
}

