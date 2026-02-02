"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Users, Target, Award, BookOpen } from "lucide-react"

const features = [
  "Short and engaging quizzes you can play anytime",
  "Helps improve knowledge, speed, and accuracy",
  "Covers multiple categories for all age groups",
  "Perfect for students, professionals, and quiz lovers",
  "Learn, compete, and grow—every day",
]

const stats = [
  { number: "100+", label: "Civics Questions" },
  { number: "1000+", label: "Happy Learners" },
  { number: "3", label: "Quiz Categories" },
  { number: "Free", label: "Forever" },
]

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#8B9456]/10 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8B9456] mb-6 text-balance">
              Welcome to Best1Quiz.com, your one-stop destination for fun, learning, and brain-boosting challenges!
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-600 leading-relaxed"
          >
            <p className="text-lg">
              At Best1Quiz, we believe that learning should be exciting, accessible, and rewarding. Whether you are preparing for the U.S. Citizenship Test, brushing up on American history, or simply looking to challenge yourself with trivia, we have got you covered.
            </p>
            <p className="text-lg">
              Our mission is simple: to make knowledge fun. We offer a wide range of quizzes designed to test your intellect, expand your understanding, and keep your mind sharp—all without the need for downloads or subscriptions. Just open your browser and start playing!
            </p>
            <p className="text-lg">
              Best1Quiz was created with the vision of providing high-quality educational content that is both engaging and effective. We understand that learning is most effective when it is enjoyable, and we have designed our platform with this principle at its core.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#8B9456] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              What Makes Best1Quiz Special?
            </h2>

            <div className="bg-[#8B9456]/10 rounded-2xl p-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-[#8B9456] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our commitment to education, accessibility, and engagement.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Education First",
                description: "We prioritize accurate, well-researched content that truly helps you learn.",
              },
              {
                icon: Users,
                title: "Accessible to All",
                description: "Free, no downloads required, and works on any device with a browser.",
              },
              {
                icon: Target,
                title: "Focused Learning",
                description: "Quizzes designed to target specific knowledge areas for effective studying.",
              },
              {
                icon: Award,
                title: "Celebrating Growth",
                description: "We believe every quiz completed is a step toward personal growth.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#8B9456]/10 mb-4">
                  <value.icon className="h-6 w-6 text-[#8B9456]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-8">
              Play. Learn. Challenge Yourself.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of learners who are using Best1Quiz to prepare for success.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-[#8B9456] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7A8450] transition-all duration-300 hover:scale-105"
            >
              Start Your Quiz Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
