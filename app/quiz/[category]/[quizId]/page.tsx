"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Trophy, RotateCcw, Home } from "lucide-react"
import { getQuiz, getCategory } from "@/lib/quiz-data"
import type { Question } from "@/lib/quiz-data"

export default function QuizTakingPage() {
  const params = useParams()
  const categorySlug = params.category as string
  const quizId = params.quizId as string
  const category = getCategory(categorySlug)
  const quiz = getQuiz(categorySlug, quizId)
  const resolvedParams = params; // Declare resolvedParams variable

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number | boolean>>({})
  const [showResults, setShowResults] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  if (!category || !quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Quiz not found</h1>
          <Link href="/quiz" className="text-[#8B9456] hover:underline">
            Return to Quiz page
          </Link>
        </div>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100
  const hasAnswered = answers[question.id] !== undefined

  const handleAnswer = (answer: number | boolean) => {
    setAnswers(prev => ({ ...prev, [question.id]: answer }))
    setShowExplanation(true)
  }

  const handleNext = () => {
    setShowExplanation(false)
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    setShowExplanation(false)
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    quiz.questions.forEach(q => {
      const userAnswer = answers[q.id]
      if (userAnswer === q.correctAnswer) {
        correct++
      }
    })
    return {
      correct,
      total: quiz.questions.length,
      percentage: Math.round((correct / quiz.questions.length) * 100),
    }
  }

  const isCorrect = (q: Question) => answers[q.id] === q.correctAnswer

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setShowExplanation(false)
  }

  // Results View
  if (showResults) {
    const score = calculateScore()
    const passed = score.percentage >= quiz.passingScore

    return (
      <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Result Header */}
            <div 
              className={`py-12 px-6 text-center ${passed ? 'bg-green-500' : 'bg-red-500'}`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-4">
                {passed ? (
                  <Trophy className="h-10 w-10 text-white" />
                ) : (
                  <XCircle className="h-10 w-10 text-white" />
                )}
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {passed ? 'Congratulations!' : 'Keep Practicing!'}
              </h1>
              <p className="text-white/90">
                {passed ? 'You passed the quiz!' : `You need ${quiz.passingScore}% to pass`}
              </p>
            </div>

            {/* Score */}
            <div className="py-8 px-6 text-center border-b">
              <div className="text-6xl font-bold text-gray-900 mb-2">
                {score.percentage}%
              </div>
              <p className="text-gray-600">
                You got {score.correct} out of {score.total} questions correct
              </p>
            </div>

            {/* Question Review */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Question Review</h2>
              <div className="space-y-4">
                {quiz.questions.map((q, index) => (
                  <div 
                    key={q.id}
                    className={`p-4 rounded-lg border ${isCorrect(q) ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect(q) ? (
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">
                          {index + 1}. {q.question}
                        </p>
                        {!isCorrect(q) && (
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-medium">Correct answer: </span>
                            {q.type === "true-false" 
                              ? (q.correctAnswer ? "True" : "False")
                              : q.options?.[q.correctAnswer as number]
                            }
                          </p>
                        )}
                        <p className="text-sm text-gray-500 mt-2">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 bg-gray-50 flex flex-col sm:flex-row gap-4">
              <button
                onClick={restartQuiz}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                Retake Quiz
              </button>
              <Link
                href={`/quiz/${categorySlug}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg text-white font-medium transition-colors"
                style={{ backgroundColor: category.color }}
              >
                <Home className="h-5 w-5" />
                Back to {category.name}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Quiz Taking View
  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/quiz/${categorySlug}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {category.name}
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">{quiz.title}</h1>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: category.color }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.type === "true-false" ? (
                <>
                  {[true, false].map((option) => {
                    const isSelected = answers[question.id] === option
                    const isCorrectAnswer = question.correctAnswer === option
                    const showCorrectness = showExplanation

                    return (
                      <button
                        key={String(option)}
                        onClick={() => !hasAnswered && handleAnswer(option)}
                        disabled={hasAnswered}
                        className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all duration-200 ${
                          showCorrectness
                            ? isCorrectAnswer
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : isSelected
                                ? 'border-red-500 bg-red-50 text-red-700'
                                : 'border-gray-200 text-gray-700'
                            : isSelected
                              ? 'border-[#8B9456] bg-[#8B9456]/10'
                              : 'border-gray-200 hover:border-[#8B9456] hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option ? "True" : "False"}</span>
                          {showCorrectness && isCorrectAnswer && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                          {showCorrectness && isSelected && !isCorrectAnswer && (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      </button>
                    )
                  })}
                </>
              ) : (
                question.options?.map((option, index) => {
                  const isSelected = answers[question.id] === index
                  const isCorrectAnswer = question.correctAnswer === index
                  const showCorrectness = showExplanation

                  return (
                    <button
                      key={option}
                      onClick={() => !hasAnswered && handleAnswer(index)}
                      disabled={hasAnswered}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        showCorrectness
                          ? isCorrectAnswer
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : isSelected
                              ? 'border-red-500 bg-red-50 text-red-700'
                              : 'border-gray-200 text-gray-700'
                          : isSelected
                            ? 'border-[#8B9456] bg-[#8B9456]/10'
                            : 'border-gray-200 hover:border-[#8B9456] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {showCorrectness && isCorrectAnswer && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {showCorrectness && isSelected && !isCorrectAnswer && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    </button>
                  )
                })
              )}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200"
                >
                  <p className="text-sm text-blue-800">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!hasAnswered}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: hasAnswered ? category.color : '#9CA3AF' }}
          >
            {currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
