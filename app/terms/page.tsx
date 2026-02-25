import { Metadata } from 'next'
import { FileText, Shield, Users, AlertTriangle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Best1Quiz',
  description: 'Terms and Conditions for Best1Quiz - Learn about our terms of service and usage policies.',
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center j\ustify-center w-16 h-16 bg-gradient-to-r from-[#8B9456] to-[#7A8B50] rounded-2xl mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our website.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500">Last updated: February 2025</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                By accessing or using bestquiz.com, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of the terms, you should not use this website.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                You must be at least 13 years of age to use this website. If you are under 18, you must have parental or guardian consent to use the site.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Conduct</h2>
            <div className="bg-yellow-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="space-y-2 ml-6 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B9456] mt-1">•</span>
                  <span className="text-gray-700">Use the site for any unlawful or harmful purpose.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B9456] mt-1">•</span>
                  <span className="text-gray-700">Attempt to access restricted areas or interfere with site functionality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B9456] mt-1">•</span>
                  <span className="text-gray-700">Post or share offensive, misleading, or harmful content.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                All content, including quizzes, graphics, logos, and text, is the property of [bestquiz.com] or its licensors. You may not reproduce, distribute, or use any part of the site's content without written permission.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Quiz Results</h2>
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Quiz results are meant for fun and engagement. They are not scientifically validated and should not be taken as factual assessments or diagnostics.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
            <div className="bg-teal-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                The materials on bestquiz.com are provided on an 'as is' basis. bestquiz.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
            <div className="bg-cyan-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h2>
            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page, and your continued use of the site constitutes acceptance of any changes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                bestquiz.com is not liable for any damages arising from your use of the site, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy</h2>
            <div className="bg-orange-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <div className="bg-pink-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                We may suspend or terminate your access to the site at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <div className="bg-gradient-to-r from-[#8B9456]/10 to-[#7A8B50]/10 rounded-xl p-6 border border-[#8B9456]/20">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us at: <a href="mailto:support@bestquiz.com" className="text-[#8B9456] hover:underline font-semibold">support@bestquiz.com</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
