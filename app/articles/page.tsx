"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, Calendar, BookOpen, TrendingUp, Award, Zap, ArrowRight, Tag, Eye, FileText, BarChart, Star, User } from "lucide-react"
import { getPaginatedArticles } from "@/lib/article-data"

export default function ArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { articles, totalPages } = getPaginatedArticles(currentPage, 9)

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-2 px-4 sm:px-6 lg:px-8">
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

      {/* Clean Professional Articles Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Modern Header */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          > */}
            {/* Title Section */}
            {/* <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B9456] to-[#7A8B50] rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {currentPage === 1 ? "Explore Articles" : `Discover Insights - Page ${currentPage}`}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Expert analysis and comprehensive guides
                  </p>
                </div>
              </div>
            </div> */}

            {/* Stats Bar */}
            {/* <div className="inline-flex items-center gap-8 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-[#8B9456] rounded-full"></div>
                <span className="text-gray-700 font-medium">{totalPages * 9} Articles</span>
              </div>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="flex items-center gap-2 text-sm">
                <BarChart className="h-4 w-4 text-[#8B9456]" />
                <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
              </div>
            </div> */}
          {/* </motion.div> */}
          
          {/* Content-Focused Card Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Link href={`/articles/${article.slug}`} className="block h-full">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    {/* Top Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-[#8B9456] via-[#7A8B50] to-[#8B9456]"></div>
                    
                    {/* Card Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B9456]/10 text-[#8B9456] text-xs font-bold rounded-full border border-[#8B9456]/20 mb-4">
                        <div className="w-1.5 h-1.5 bg-[#8B9456] rounded-full"></div>
                        {article.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#8B9456] transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed line-clamp-4 text-sm">
                        {article.excerpt}
                      </p>

                      {/* Meta Information  */}
                      {/* <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        Read More Button
                        <button className="flex items-center gap-2 text-[#8B9456] hover:text-[#7A8B50] font-semibold text-sm transition-all duration-300 group/btn">
                          <span>Read</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                      </div> */}
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B9456]/3 via-transparent to-[#7A8B50]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
