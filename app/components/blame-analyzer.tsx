'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { trackQuizCompleted } from '@/lib/config/analytics'
import LeadForm from './lead-form'

interface Question {
  id: string
  question: string
  options: { label: string; value: number }[]
}

const questions: Question[] = [
  {
    id: 'photos',
    question: 'How many professional photos?',
    options: [
      { label: 'Under 25', value: 20 },
      { label: '25-35', value: 50 },
      { label: '35+', value: 100 },
    ],
  },
  {
    id: 'openHouses',
    question: 'How many open houses?',
    options: [
      { label: '0-1', value: 20 },
      { label: '2-3', value: 60 },
      { label: '4+', value: 100 },
    ],
  },
  {
    id: 'updates',
    question: 'Weekly marketing updates?',
    options: [
      { label: 'Never', value: 0 },
      { label: 'Sometimes', value: 50 },
      { label: 'Always', value: 100 },
    ],
  },
  {
    id: 'priceStrategy',
    question: 'Price strategy discussions?',
    options: [
      { label: '"Drop it"', value: 20 },
      { label: 'Data-driven', value: 100 },
      { label: 'None', value: 0 },
    ],
  },
]

export default function BlameAnalyzer() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [score, setScore] = useState<number | null>(null)
  const [showForm, setShowForm] = useState(false)

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate final score
      const totalScore =
        Object.values(newAnswers).reduce((sum, val) => sum + val, 0) /
        questions.length
      setScore(Math.round(totalScore))
      trackQuizCompleted(Math.round(totalScore))
      setShowForm(true)
    }
  }

  if (showForm && score !== null) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black mb-4">YOUR AGENT SCORE</h2>
          <div
            className={`text-6xl font-black mb-4 ${
              score < 50 ? 'text-red-600' : score < 75 ? 'text-yellow-600' : 'text-green-700'
            }`}
          >
            {score}/100
          </div>
          <p className="text-2xl font-bold mb-2">
            {score < 50
              ? 'FAILURE'
              : score < 75
                ? 'BELOW AVERAGE'
                : 'GOOD'}
          </p>
          <p className="text-lg text-gray-600">
            Here's what they should have done...
          </p>
        </div>

        <LeadForm
          source="blame_analyzer"
          buttonText="GET MY SUCCESS STRATEGY"
        />
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200">
      <h2 className="text-3xl font-black mb-6 text-center">
        WHO KILLED YOUR SALE?
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Take the 60-Second Assessment
      </p>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm font-semibold">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6">{currentQ.question}</h3>
        <div className="space-y-4">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(currentQ.id, option.value)}
              className="w-full p-4 text-left border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors font-semibold"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

