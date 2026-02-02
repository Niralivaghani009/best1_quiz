"use client"

import Link from "next/link"
import { useParams, redirect } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Target, BookOpen } from "lucide-react"
import { getCategory } from "@/lib/quiz-data"

const difficultyColors = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-red-100 text-red-700",
}

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.category as string
  const category = getCategory(categorySlug)

  if (!category) {
    redirect("/quiz")
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section 
        className="py-12 lg:py-16"
        style={{ backgroundColor: `${category.color}15` }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Quiz Categories
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: category.color }}
            >
              {category.name}
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quizzes Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.quizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/quiz/${categorySlug}/${quiz.id}`}
                  className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Card Header */}
                  <div 
                    className="h-2"
                    style={{ backgroundColor: category.color }}
                  />
                  
                  <div className="p-6">
                    {/* Difficulty Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${difficultyColors[quiz.difficulty]}`}>
                      {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#8B9456] transition-colors">
                      {quiz.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {quiz.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {quiz.estimatedTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {quiz.questions.length} questions
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {quiz.passingScore}% to pass
                      </span>
                    </div>

                    {/* Start Button */}
                    <div className="mt-6">
                      <span 
                        className="inline-flex items-center justify-center w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 group-hover:scale-[1.02]"
                        style={{ backgroundColor: category.color }}
                      >
                        Start Quiz
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
