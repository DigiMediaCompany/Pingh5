import React from 'react'
import { Link } from 'react-router-dom'

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Disclaimer
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Please read this disclaimer carefully before using our services
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              General Information
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              The information on Pingh Gaming Platform is provided on an "as is" basis. 
              To the fullest extent permitted by law, Pingh excludes all representations, 
              warranties, obligations, and liabilities arising out of or in connection with 
              the information provided on this platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Game Reviews and Ratings
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All game reviews, ratings, and recommendations on our platform are based on 
              community feedback and editorial opinions. These reviews are subjective and 
              may not reflect your personal gaming preferences or experience. We encourage 
              users to research games independently before making purchase decisions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Third-Party Content
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our platform may contain links to third-party websites, games, or services. 
              Pingh is not responsible for the content, accuracy, or practices of these 
              third-party sites. Access to such sites is at your own risk.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Limitation of Liability
            </h2>
            
            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <p className="text-amber-800 font-medium">
                <strong>Important Notice:</strong> Pingh will not be liable for any damages 
                arising from the use of this platform or reliance on the information provided.
              </p>
            </div>

            <ul className="text-gray-600 mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">•</span>
                <span>Direct, indirect, incidental, or consequential damages</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">•</span>
                <span>Loss of profits, data, or business opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">•</span>
                <span>Damages resulting from game purchases or downloads</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">•</span>
                <span>Technical issues or platform downtime</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Age Restrictions
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Some games featured on our platform may contain mature content. We rely on 
              official age ratings (ESRB, PEGI, etc.) but are not responsible for ensuring 
              age-appropriate content consumption. Parents and guardians should supervise 
              minors' use of our platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Accuracy of Information
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              While we strive to provide accurate and up-to-date information about games, 
              prices, availability, and features, we cannot guarantee the completeness or 
              accuracy of all information. Game details, prices, and availability may change 
              without notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Changes to Disclaimer
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Pingh reserves the right to modify this disclaimer at any time without prior 
              notice. Continued use of our platform after any changes constitutes acceptance 
              of the modified disclaimer.
            </p>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mt-8">
              <h4 className="text-lg font-semibold text-red-800 mb-3">
                ⚠️ Important Reminder
              </h4>
              <p className="text-red-700">
                By using Pingh Gaming Platform, you acknowledge that you have read, 
                understood, and agree to be bound by this disclaimer. If you do not 
                agree with any part of this disclaimer, please discontinue use of our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer