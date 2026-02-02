"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Target, Award, Lightbulb } from "lucide-react"

const categories = [
  {
    title: "AMERICAN GOVERNMENT",
    href: "/quiz/american-government",
    color: "#8B9456",
  },
  {
    title: "AMERICAN HISTORY",
    href: "/quiz/american-history",
    color: "#E85D55",
  },
  {
    title: "INTEGRATED CIVICS",
    href: "/quiz/integrated-civics",
    color: "#5B9BD5",
  },
]

export default function QuizPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Category Buttons */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={category.href}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: category.color }}
                >
                  {category.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-balance">
              USA Citizenship Test Quiz: Prepare for Your Naturalization Exam
            </h1>

            <p className="text-gray-600 leading-relaxed mb-8">
              Preparing for the United States Citizenship Test can feel overwhelming, but with the right resources, you can approach your naturalization interview with confidence. Our comprehensive quiz platform is designed to help you master the 100 official USCIS civics questions that may appear on your test.
            </p>

            {/* Why Take a Citizenship Quiz */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-6 w-6 text-[#8B9456]" />
                Why Take a Citizenship Quiz?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#8B9456]" />
                  <span><strong>Test Your Knowledge:</strong> Identify areas where you need more study time before your actual interview.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#8B9456]" />
                  <span><strong>Build Confidence:</strong> Regular practice helps reduce test anxiety and builds familiarity with question formats.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#8B9456]" />
                  <span><strong>Track Progress:</strong> Monitor your improvement over time and celebrate your achievements.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#8B9456]" />
                  <span><strong>Learn at Your Pace:</strong> Study whenever and wherever works best for you.</span>
                </li>
              </ul>
            </div>

            {/* Topics Covered */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-[#E85D55]" />
                Topics Covered in a Citizenship Quiz
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#E85D55]" />
                  <span><strong>American Government:</strong> Constitution, branches of government, rights and responsibilities</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#E85D55]" />
                  <span><strong>American History:</strong> Colonial period, 1800s, recent history and major events</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#E85D55]" />
                  <span><strong>Integrated Civics:</strong> Geography, symbols, and national holidays</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#E85D55]" />
                  <span><strong>Current Officials:</strong> Names of current government officials at federal and state levels</span>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-[#5B9BD5]" />
                Benefits of Online Citizenship Quizzes
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#5B9BD5]" />
                  <span><strong>Immediate Feedback:</strong> Know right away whether your answer is correct with detailed explanations.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#5B9BD5]" />
                  <span><strong>Free and Accessible:</strong> Practice anytime without any cost or registration required.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#5B9BD5]" />
                  <span><strong>Mobile-Friendly:</strong> Study on your phone, tablet, or computer whenever you have free time.</span>
                </li>
              </ul>
            </div>

            {/* Tips */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-amber-500" />
                Tips to Pass the Citizenship Test
              </h2>
              <ol className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-semibold">1</span>
                  <span><strong>Start Early:</strong> Begin your preparation at least 3-6 months before your interview date.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-semibold">2</span>
                  <span><strong>Study Consistently:</strong> Practice a little bit every day rather than cramming before the test.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-semibold">3</span>
                  <span><strong>Focus on Weak Areas:</strong> Spend extra time on topics you find challenging.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-semibold">4</span>
                  <span><strong>Take Practice Tests:</strong> Simulate the real test experience by timing yourself.</span>
                </li>
              </ol>
            </div>

            {/* Closing */}
            <div className="bg-[#8B9456]/10 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Our citizenship quizzes are an invaluable resource for anyone preparing for their naturalization interview. With comprehensive coverage of all required topics, immediate feedback, and the flexibility to study at your own pace, you will be well-prepared to pass your civics test with flying colors. Start practicing today and take the first step toward becoming a U.S. citizen!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
