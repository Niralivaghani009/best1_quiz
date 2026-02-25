import { Metadata } from 'next'
import { AlertTriangle, Shield, ExternalLink, Users, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Disclaimer - Best1Quiz',
  description: 'Disclaimer for Best1Quiz - Important information about our quiz content and usage.',
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#8B9456] to-[#7A8B50] rounded-2xl mb-6">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read this disclaimer carefully before using our website and quiz content.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500">Last updated: February 2025</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                The content on https://bestquiz.com/ is provided for general informational and entertainment purposes only. The information and materials contained on this website are not intended to constitute professional advice.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Professional Advice</h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                The quizzes, articles, and content available on bestquiz.com are not a substitute for professional advice, diagnosis, or treatment. Always seek the advice of qualified professionals regarding any questions you may have.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our quiz results are generated using algorithms and are meant for entertainment purposes only. They should not be used as the basis for making important life decisions.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibility</h2>
            <div className="bg-yellow-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It is your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Through this website you may be able to link to other websites which are not under the control of bestquiz.com. We have no control over the nature, content, and availability of those sites.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Disclosure</h2>
            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                bestquiz.com may contain affiliate links. If you click on these links and make a purchase, we may earn a commission at no additional cost to you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We only recommend products or services that we believe will add value to our users. Our editorial content is not influenced by affiliate partnerships.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                In no event shall bestquiz.com be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of this website or the information contained therein.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Information</h2>
            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Every effort is made to keep the website up and running smoothly. However, bestquiz.com takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="bg-gradient-to-r from-[#8B9456]/10 to-[#7A8B50]/10 rounded-xl p-6 border border-[#8B9456]/20">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this disclaimer, please contact us at: <a href="mailto:support@bestquiz.com" className="text-[#8B9456] hover:underline font-semibold">support@bestquiz.com</a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will respond to your inquiry within 24-48 hours.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
