import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                PRIVACY AND DATA POLICY
              </h2>
              <p className="text-gray-600 font-medium">
                ISSUED BY Free for BRAVEBITS PTE. LTD.
              </p>
            </div>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                1. INTRODUCTION AND GENERAL TERMS
              </h3>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  These terms apply to the use of games and other products developed by BRAVEBITS PTE. LTD. 
                  (TS/ 'we' / 'us'). Our registered office is at 7030 Ang Mo Kio Avenue 5, #09-46 Northstar @ AMK, 
                  Singapore (569880)
                </p>
                <p>
                  This privacy and data policy ("Privacy Policy") applies and has effect in respect of all games, 
                  related online services (including online network play connectivity and interactivity) and other 
                  software and products made available by us (together the "Game(s)"), as well as any other online 
                  features relating to the Games including our website (the "Website"). Together the Game(s), and 
                  Website are referred to as the "Online Services".
                </p>
                <p>
                  If you have any questions or comments about this Privacy Policy, please contact us at 
                  <a href="mailto:ceo@bravebitsglobal.com" className="text-green-600 hover:text-green-800"> 
                    ceo@bravebitsglobal.com
                  </a>
                </p>
                <p>
                  We are committed to protecting and respecting your privacy. The Privacy Policy explains the basis 
                  on which personal information we collect from you will be processed by us or on our behalf. Where 
                  we decide the purpose or means for which personal data you supply through these Online Services is 
                  processed, we are the "data controller." We will comply with all applicable data protection laws, 
                  including the General Data Protection Regulation 2016/679.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                2. INFORMATION WE MAY COLLECT ABOUT YOU
              </h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-700 mb-3">
                  a) Information provided by you when using the Games ("Basic Information")
                </h4>
                <p className="text-gray-600 mb-3">We may collect the following information from you when you play our Games:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>your mobile device's unique device ID (Device ID);</li>
                  <li>your user preferences; and</li>
                  <li>Core information related to your gameplay, such as your overall progression to a particular level or stage, your virtual currency stores or the completion of certain activities during your gameplay (for example, completing a tutorial, passing a level, making a purchase or viewing a video ad).</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-700 mb-3">
                  b) Information used for the purposes of serving advertisements ("Advertising Data")
                </h4>
                <p className="text-gray-600 mb-3">Through our third party advertising network partners, we may gather information about your devices when you install or play our Games, depending on the permissions you've granted. This may include:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>the make, model and operating system of your device;</li>
                  <li>properties of your device, such as screen size and orientation, audio volume and battery;</li>
                  <li>the mobile network operator linked to your device;</li>
                  <li>the Games played;</li>
                  <li>the country, time zone and locale settings on your device;</li>
                  <li>network connection type and speed;</li>
                  <li>IP Address; MAC address;</li>
                  <li>internet browser used to access the Games; and</li>
                  <li>the advertiser ID, which is an identifier unique to you if you use an Apple or Android device, but which doesn't reveal your name.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                3. WHY WE COLLECT INFORMATION ABOUT YOU
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">a) To provide our Games to you</h4>
                  <p>We will use information about you for delivering our Games to you under the terms of use agreed between us. The processing of information in this way is necessary for us to record your progress and current status within a Game.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">b) To help us improve the Online Services and fix any problems</h4>
                  <p>We may process information about you so that we can analyse and improve our Games and Online Services.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">c) For advertising purposes</h4>
                  <p>We may process Advertising Data to show you advertisements for third party services; including advertising that may reward you with benefits during your use of the Games.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                4. DATA SHARING
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We will share your information with third parties only in the ways that are described in this Privacy Policy
              </p>
              <div className="space-y-3 text-gray-600">
                <p><strong>Group members, personnel, suppliers or subcontractors:</strong> We keep your information confidential, but may disclose it to any member of our group insofar as it is reasonably necessary for the purposes set out in this Privacy Policy.</p>
                <p><strong>Required by law:</strong> We may disclose your information to the extent that we are required to do so by law.</p>
                <p><strong>Enforcement:</strong> We may also disclose your personal information to third parties in order to enforce or apply the terms of agreements.</p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                5. YOUR RIGHTS
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the following rights over the way we process personal data relating to you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Ask for a copy of data we are processing about you and have inaccuracies corrected</li>
                <li>Object to us processing data about you</li>
                <li>Obtain a machine readable copy of your personal data</li>
                <li>Make a complaint to a Supervisory Authority</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                6. SECURITY
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We will take all reasonable technical and organisational precautions to prevent the loss misuse or 
                alteration of your personal information. Our databases are password protected and limited to essential 
                employees only.
              </p>
            </section>

            <section className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                CONTACT INFORMATION
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All questions, comments or enquiries should be directed to CEO at 
                <a href="mailto:ceo@bravebitsglobal.com" className="text-green-600 hover:text-green-800 font-medium ml-1">
                  ceo@bravebitsglobal.com
                </a>. We will endeavour to respond to any query or questions within three business days.
              </p>
            </section>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              How We Use Your Information
            </h2>
            
            <ul className="text-gray-600 mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span>Provide personalized game recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span>Improve our platform and user experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span>Send you updates about new games and features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span>Analyze usage patterns to enhance our services</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Information Sharing
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share aggregated, non-personal information with partners to improve 
              our gaming content and recommendations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Data Security
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You have the right to access, update, or delete your personal information. 
              You may also opt-out of certain communications from us. To exercise these rights, 
              please contact us using the information provided below.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h4 className="text-lg font-semibold text-green-800 mb-3">
                Contact Us
              </h4>
              <p className="text-green-700 mb-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-green-700">
                <strong>Email:</strong> privacy@pingh.com<br/>
                <strong>Address:</strong> 140 Le Trong Tan, Tan Phu, HCM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy