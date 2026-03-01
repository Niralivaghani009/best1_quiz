"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search, Brain } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Quiz", href: "/quiz" },
  // { name: "Blog", href: "/blog" },
  { name: "Articles", href: "/articles" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results page or perform search
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setIsSearchOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-[#8B9456]" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#8B9456] leading-tight">
                  Best1Quiz
                </span>
                <span className="text-[10px] text-gray-500 leading-tight">
                  Quiz Game Start
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#8B9456] ${
                  pathname === link.href
                    ? "text-[#8B9456]"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-[#8B9456] transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              
              {/* Search Dropdown */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4"
                  >
                    <form onSubmit={handleSearch} className="space-y-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search articles, blogs, quizzes..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B9456] focus:border-transparent"
                          autoFocus
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 bg-[#8B9456] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#7A8450] transition-colors"
                        >
                          Search
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsSearchOpen(false)
                            setSearchQuery("")
                          }}
                          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/quiz"
              className="bg-[#8B9456] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#7A8450] transition-all duration-300 hover:scale-105"
            >
              START QUIZ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, blogs, quizzes..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B9456] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8B9456] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#7A8450] transition-colors"
                >
                  Search
                </button>
              </form>
              
              <div className="border-t pt-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      pathname === link.href
                        ? "bg-[#8B9456]/10 text-[#8B9456]"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pt-3 border-t">
                <Link
                  href="/quiz"
                  className="block w-full bg-[#8B9456] text-white px-6 py-3 rounded-lg text-sm font-semibold text-center hover:bg-[#7A8450] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  START QUIZ
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
