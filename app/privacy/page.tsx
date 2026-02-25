import { Metadata } from 'next'
import { Shield, Eye, Lock, User, Database, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Best1Quiz',
  description: 'Privacy Policy for Best1Quiz - Learn how we protect your personal information and privacy.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#8B9456] to-[#7A8B50] rounded-2xl mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500">Last updated: June 30, 2025</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                At BestQuiz(https://bestlquiz.com), we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Information We Collect</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Information:</h3>
                <p className="text-gray-700">When you contact us or sign up, we may collect your name, email, and other contact details.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Quiz Data:</h3>
                <p className="text-gray-700">If you take a quiz, we may store your answers and results for analysis and feedback.</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies:</h3>
                <p className="text-gray-700">We use cookies to understand how visitors use our site and improve experience.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B9456] mt-1">•</span>
                  <span className="text-gray-700">Provide and improve quiz features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B9456] mt-1">•</span>
                  <span className="text-gray-700">Respond to inquiries and provide support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B9456] mt-1">•</span>
                  <span className="text-gray-700">Monitor usage through analytics tools</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <div className="bg-orange-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                We may use third-party tools like Google Analytics or quiz plugins that collect limited, anonymized data. These tools may set their own cookies or track behavior anonymously.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <div className="bg-pink-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                You can request access to or deletion of your personal data by contacting us at: <a href="mailto:support@bestlquiz.com" className="text-[#8B9456] hover:underline">support@bestlquiz.com</a>.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                We implement reasonable security measures to protect your data from unauthorized access.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                We may update this policy from time to time. We will post updated version on this page.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <div className="bg-gradient-to-r from-[#8B9456]/10 to-[#7A8B50]/10 rounded-xl p-6 border border-[#8B9456]/20">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, contact us at: <a href="mailto:support@bestlquiz.com" className="text-[#8B9456] hover:underline font-semibold">support@bestlquiz.com</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}