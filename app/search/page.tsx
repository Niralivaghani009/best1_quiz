"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, ArrowRight } from "lucide-react"
import { getAllArticles } from "@/lib/article-data"

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (query) {
      setIsSearching(true)
      const allArticles = getAllArticles()
      // const allArticleGiven = getAllArticleGiven()
      
      // Simple search implementation - searches in title, excerpt, and content
      const results = allArticles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase())
      )
      
      // Simulate search delay for better UX
      setTimeout(() => {
        setSearchResults(results)
        setIsSearching(false)
      }, 300)
    }
  }, [query])

  if (!query) {
    return (
      <div className="text-center py-16">
        <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">No search query</h2>
        <p className="text-gray-600">Please enter a search term to find results.</p>
      </div>
    )
  }

  if (isSearching) {
    return (
      <div className="text-center py-16">
        <div className="animate-spin h-8 w-8 border-4 border-[#8B9456] border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600">Searching...</p>
      </div>
    )
  }

  if (searchResults.length === 0) {
    return (
      <div className="text-center py-16">
        <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">No results found</h2>
        <p className="text-gray-600 mb-6">
          We couldn't find any results for "{query}"
        </p>
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-[#8B9456] hover:text-[#7A8450] font-medium"
        >
          Browse all articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Search Results
        </h1>
        <p className="text-gray-600">
          Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{query}"
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((article, index) => (
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
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B9456]/3 via-transparent to-[#7A8B50]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="text-center py-16">
              <div className="animate-spin h-8 w-8 border-4 border-[#8B9456] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Loading...</p>
            </div>
          }>
            <SearchResults />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
