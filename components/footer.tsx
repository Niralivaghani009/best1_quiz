import Link from "next/link"
import { Twitter, Linkedin, Instagram, Facebook, Youtube, Brain } from "lucide-react"

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Quiz", href: "/quiz" },
  // { name: "Blog", href: "/blog" },
  { name: "Articles", href: "/articles" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
]

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name:  "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-[#8B9456]" />
            <div className="flex flex-col">
              <>
              <p>how will you get the answers</p> 
              </>
              <span className="text-lg font-bold text-[#8B9456] leading-tight">
                Best1Quiz
              </span>
              <span className="text-[10px] text-gray-400 leading-tight">
                Quiz Game Start
              </span>
              </div>
          </Link>
        </div>
      

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-[#8B9456] transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2026 best1quiz.com | Powered by best1quiz.com</p>
        </div>
      </div>
    </footer>
  )
}