"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, ArrowRight, Tag } from "lucide-react"
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

      <div className="grid gap-6">
        {searchResults.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-xl hover:border-[#8B9456] hover:shadow-lg transition-all duration-300"
          >
            <Link href={`/articles/${article.slug}`} className="block p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Image */}
                <div className="lg:w-48 h-48 lg:h-auto relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Category and Date */}
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#8B9456]/10 text-[#8B9456] text-xs font-semibold rounded-lg">
                      <Tag className="h-3 w-3" />
                      {article.category}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-[#8B9456] transition-colors">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-[#8B9456] font-medium text-sm hover:text-[#7A8450] transition-colors">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
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
