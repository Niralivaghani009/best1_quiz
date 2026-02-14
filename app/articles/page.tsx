"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, Calendar, BookOpen, TrendingUp, Award, Zap, ArrowRight, Tag, Eye, FileText, BarChart, Star, User } from "lucide-react"
import { getPaginatedArticles, getFeaturedArticles } from "@/lib/article-data"

export default function ArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { articles, totalPages } = getPaginatedArticles(currentPage, 9)
  const featuredArticles = getFeaturedArticles()

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-[#8B9456]/10 p-3">
              <BookOpen className="h-8 w-8 text-[#8B9456]" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Articles & Insights
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              Discover in-depth articles, expert insights, and comprehensive guides on the latest technology trends and innovations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <TrendingUp className="mr-2 h-4 w-4 text-[#8B9456]" />
                <span>18+ Articles</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 h-4 w-4 text-[#8B9456]" />
                <span>Expert Written</span>
              </div>
              <div className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-[#8B456]" />
                <span>Regular Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {currentPage === 1 && featuredArticles.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#8B9456] to-[#8B9456] mx-auto rounded-full" />
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/articles/${article.slug}`} className="block">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-[#8B9456]">
                      {/* Featured Badge */}
                      <div className="absolute top-6 left-6 z-10">
                        <span className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[#8B9456] to-[#8B9456] text-white text-sm font-semibold rounded-full shadow-lg">
                          <Star className="h-4 w-4 fill-current" />
                          Featured
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Category on image */}
                        <div className="absolute bottom-6 left-6">
                          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-lg">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {article.author}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#8B9456] transition-colors">
                          {article.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                          {article.excerpt}
                        </p>

                        {/* Read More */}
                        <div className="flex items-center text-[#8B9456] font-semibold group-hover:text-[#8B9456] transition-colors">
                          Read Full Article
                          <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clean Professional Articles Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Clean Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#8B9456]/10 rounded-xl mb-4">
              <FileText className="h-6 w-6 text-[#8B9456]" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentPage === 1 ? "Articles" : `Articles - Page ${currentPage}`}
            </h2>
            <div className="w-24 h-0.5 bg-[#8B9456] mx-auto rounded-full mb-6" />
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Expert insights and analysis across technology and business
            </p>
            <div className="flex justify-center items-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <BarChart className="h-4 w-4 text-[#8B9456]" />
                <span>{totalPages * 9} Articles</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-2 h-2 bg-[#8B9456] rounded-full"></div>
                <span>Page {currentPage} of {totalPages}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Clean Card Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <Link href={`/articles/${article.slug}`} className="block h-full">
                  <div className="bg-white border border-gray-200 rounded-xl hover:border-[#8B9456] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-lg">
                          <Tag className="h-3 w-3 text-[#8B9456]" />
                          {article.category}
                        </div>
                      </div>
                      
                      {/* Reading Time Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-lg">
                          <Calendar className="h-3 w-3 text-[#8B9456]" />
                          {article.date}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#8B9456] transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-[#8B9456] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                          <span>Read Article</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-[#8B9456] transition-colors duration-300">
                          <Eye className="h-4 w-4" />
                          <span className="text-xs font-medium">View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pb-16 bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              {/* Pagination Info */}
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Page {currentPage} of {totalPages}
                </p>
                <div className="w-16 h-0.5 bg-[#8B9456] mx-auto rounded-full"></div>
              </div>
              
              {/* Clean Pagination Controls */}
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-[#8B9456] transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    if (
                      page === 1 || 
                      page === totalPages || 
                      page === currentPage || 
                      page === currentPage - 1 || 
                      page === currentPage + 1
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-8 h-8 rounded-md text-sm font-medium transition-colors duration-200 ${
                            currentPage === page
                              ? "bg-[#8B9456] text-white"
                              : "text-gray-600 hover:bg-gray-100 hover:text-[#8B9456]"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    } else if (
                      page === currentPage - 2 || 
                      page === currentPage + 2
                    ) {
                      return (
                        <span key={page} className="w-8 h-8 flex items-center justify-center text-gray-400 text-sm">
                          ...
                        </span>
                      )
                    }
                    return null
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-[#8B9456] transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              
              {/* Quick Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-[#8B9456] font-medium transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  First
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-[#8B9456] font-medium transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Last
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
