"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import ReactMarkdown from "react-markdown"

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const post = getBlogPost(resolvedParams.slug)
  const allPosts = getAllBlogPosts()

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <span className="inline-block px-3 py-1 bg-[#8B9456] text-white text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg prose-gray max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-strong:text-gray-900
                prose-ul:my-4 prose-li:text-gray-600
                prose-ol:my-4"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Share */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Share2 className="h-5 w-5" />
                  Share this article
                </h3>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#8B9456] rounded-xl p-6 text-white"
              >
                <h3 className="font-semibold text-lg mb-2">Ready to Test Your Knowledge?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Put what you have learned into practice with our interactive quizzes.
                </p>
                <Link
                  href="/quiz"
                  className="inline-block w-full bg-white text-[#8B9456] py-3 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
                >
                  Start Quiz
                </Link>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block">
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4" />
                          {relatedPost.date}
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#8B9456] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
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
