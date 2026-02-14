"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Bookmark, Heart, MessageCircle, Eye, ArrowRight, ChevronRight } from "lucide-react"
import { getArticle, getAllArticles } from "@/lib/article-data"
import ReactMarkdown from "react-markdown"

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const article = getArticle(resolvedParams.slug)
  const allArticles = getAllArticles()

  if (!article) {
    notFound()
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = allArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section - Fixed Layout */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-100">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center w-full">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors text-sm font-medium relative z-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-12"
            >
                
              <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
                <span className="inline-block px-4 py-2 bg-[#8B9456] text-white text-sm font-semibold rounded-full">
                  {article.category}
                </span>
                {article.featured && (
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                    <Bookmark className="h-4 w-4 fill-current" />
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-center gap-6 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content - Full Width */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Main Content - Full Width */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-16"
          >
            <div className="prose prose-xl prose-gray max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-8 prose-headings:mt-12
              prose-h1:text-4xl prose-h1:text-center prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-6
              prose-h2:text-3xl prose-h2:border-l-4 prose-h2:border-[#8B9456] prose-h2:pl-6 prose-h2:bg-[#8B9456]/5 prose-h2:py-4 prose-h2:rounded-r-lg
              prose-h3:text-2xl prose-h3:text-[#8B9456] prose-h3:mt-10 prose-h3:mb-6
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-xl prose-p:mb-8 prose-p:max-w-none
              prose-strong:text-gray-900 prose-strong:font-bold prose-strong:text-xl
              prose-ul:my-8 prose-ul:space-y-4 prose-li:text-gray-700 prose-li:text-xl prose-li:leading-relaxed
              prose-ol:my-8 prose-ol:space-y-4
              prose-blockquote:border-l-4 prose-blockquote:border-[#8B9456] prose-blockquote:bg-[#8B9456]/10 prose-blockquote:p-8 prose-blockquote:rounded-xl prose-blockquote:not-italic prose-blockquote:my-12 prose-blockquote:text-xl
              prose-code:text-[#8B9456] prose-code:bg-[#8B9456]/10 prose-code:px-3 prose-code:py-2 prose-code:rounded-lg prose-code:font-semibold prose-code:text-lg
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-8 prose-pre:my-16 prose-pre:text-lg
              prose-a:text-[#8B9456] prose-a:no-underline prose-a:font-semibold prose-a:text-xl prose-a:hover:underline
              prose-hr:border-gray-200 prose-hr:my-16 prose-hr:border-t-2
              prose-table:border prose-table:border-gray-200 prose-table:rounded-xl prose-table:overflow-hidden prose-table:my-16 prose-table:w-full
              prose-thead:bg-gray-50 prose-th:text-gray-900 prose-th:font-bold prose-th:p-4 prose-th:text-lg
              prose-td:p-4 prose-td:border-t prose-td:border-gray-200 prose-td:text-xl prose-td:text-gray-700
            ">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Article Actions */}
            <div className="mt-16 pt-8 border-t-2 border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-3 px-6 py-3 bg-[#8B9456] text-white rounded-xl hover:bg-[#8B9456]/90 transition-colors shadow-lg">
                    <Heart className="h-5 w-5" />
                    <span className="font-semibold">Helpful</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">42</span>
                  </button>
                  <button className="flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                    <Bookmark className="h-5 w-5" />
                    <span className="font-semibold">Save</span>
                  </button>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-600">
                  <span className="font-medium">Was this article helpful?</span>
                  <button className="text-green-600 hover:text-green-700 font-bold text-xl">Yes</button>
                  <span className="text-gray-400">/</span>
                  <button className="text-red-600 hover:text-red-700 font-bold text-xl">No</button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sidebar - Below Content */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg">
                <Share2 className="h-5 w-5 text-[#8B9456]" />
                Share Article
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  className="flex items-center justify-center gap-2 p-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors"
                  aria-label="Copy link"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Copy</span>
                </button>
              </div>
            </motion.div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#8B9456] to-[#8B9456] rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-white/90 mb-6">Get the latest articles and insights delivered to your inbox weekly.</p>
              <button className="w-full px-6 py-3 bg-white text-[#8B9456] rounded-xl hover:bg-gray-100 transition-colors font-bold">
                Subscribe Now
              </button>
            </motion.div>

            {/* Article Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg">
                <Eye className="h-5 w-5 text-[#8B9456]" />
                Article Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Category</span>
                  <span className="font-bold text-gray-900">{article.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Read Time</span>
                  <span className="font-bold text-gray-900">{article.readTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Published</span>
                  <span className="font-bold text-gray-900">{article.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Views</span>
                  <span className="font-bold text-gray-900">1,234</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore more insights on similar topics
              </p>
            </motion.div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/articles/${relatedArticle.slug}`} className="block">
                    <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-[#8B9456] group-hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-4 py-2 bg-[#8B9456] text-white text-sm font-semibold rounded-full">
                            {relatedArticle.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4" />
                          {relatedArticle.date}
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#8B9456] transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="flex items-center text-[#8B9456] font-semibold text-sm group-hover:text-[#8B9456]/80 transition-colors">
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
    </div>
  )
}
