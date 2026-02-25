"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "American Government",
    image: "https://images.unsplash.com/photo-1569025743873-ea3a9ber55ae?w=600&h=400&fit=crop",
    href: "/quiz/american-government",
  },
  {
    title: "American History",
    image: "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?w=600&h=400&fit=crop",
    href: "/quiz/american-history",
  },
  {
    title: "Integrated Civics",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop",
    href: "/quiz/integrated-civics",
  },
  {
    title: "Blog",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    href: "/blog",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute left-0 top-0 w-64 h-64 opacity-10">
          <div className="grid grid-cols-8 gap-2 p-4">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={`dot-${i}`} className="w-2 h-2 rounded-full bg-[#8B9456]" />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-[#E07A6C]">Ace the U.S.</span>{" "}
                <span className="text-[#E07A6C]">Civics Test</span>
              </h1>
              <p className="mt-4 text-xl font-medium text-gray-700">
                Practice Today, Pass with Confidence
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Welcome to Best Quiz, your reliable partner for mastering the U.S. Naturalization Civics Test. Whether you're beginning your preparation or reviewing before your citizenship interview, our platform is here to support you every step of the way. Explore engaging quizzes, easy-to-use flashcards, and smart study tools—all designed around the{" "}
                <Link href="/quiz" className="text-blue-500 hover:underline">
                  official USCIS 100 civics questions
                </Link>
                {" "}to help you prepare with confidence.
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Discover endless fun and challenge your intellect with Best1Quiz, the ultimate destination for quiz lovers! Dive into a world of engaging trivia that tests your general knowledge, logic, pop culture facts, and more. Best1Quiz brings you a variety of smart, entertaining quizzes that are perfect for everyday brain workouts — whether you're relaxing at home or competing with friends.
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed">
                With Best1Quiz, there's no need to download anything or create an account — simply jump in and play instantly. From quick-fire questions to deeper trivia challenges, the site offers something for everyone. Boost your knowledge, sharpen your memory, and have a great time exploring fun facts.
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed">Get ready to challenge yourself and discover how much you really know — all for free and right in your browser! 🧠✨
              </p>

              <div className="mt-8">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 bg-[#8B9456] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7A8450] transition-all duration-300 hover:scale-105"
                >
                  Start Practicing
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="People studying together"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 lg:py-24 bg-gray-50">
        {/* Decorative dots pattern */}
        <div className="absolute left-0 top-1/4 w-48 h-48 opacity-10">
          <div className="grid grid-cols-6 gap-2 p-4">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={`about-dot-${i}`} className="w-2 h-2 rounded-full bg-[#8B9456]" />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Welcome to Best1Quiz
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Best1Quiz brings you endless fun and challenges to test your
              intellect. Whether you are preparing for your citizenship test or
              just want to expand your knowledge about American history and
              government, our platform has something for everyone. No downloads
              needed - just instant browser play. Start your learning journey
              today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Popular Categories
            </h2>
            <p className="mt-4 text-gray-600">
              Choose a category and start learning today
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={category.href}
                  className="group block relative h-64 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-[#8B9456] group-hover:text-[#A5B36A] transition-colors">
                      {category.title}
                    </h3>
                    <span className="inline-flex items-center text-sm text-white/80 mt-2 group-hover:text-white transition-colors">
                      Explore
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#8B9456]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Take your first quiz today and prepare for success in your
              citizenship interview.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-white text-[#8B9456] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Start Quiz Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
