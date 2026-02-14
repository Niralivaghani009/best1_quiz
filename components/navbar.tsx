"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search, Brain } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Quiz", href: "/quiz" },
  { name: "Blog", href: "/blog" },
  { name: "Articles", href: "/articles" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-[#8B9456] transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
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
