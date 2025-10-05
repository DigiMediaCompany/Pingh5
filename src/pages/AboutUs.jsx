import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Welcome to Pingh Gaming Platform
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Pingh is your ultimate destination for discovering and exploring the world of gaming. 
              We are passionate gamers who understand the thrill of finding that perfect game that 
              keeps you engaged for hours.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to create a comprehensive platform where gamers can discover new games, 
              read honest reviews, and connect with a community of like-minded players. We believe 
              that every gamer deserves to find their next favorite game easily and efficiently.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              What We Offer
            </h3>
            <ul className="text-gray-600 mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Curated collection of the latest and greatest games</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Honest reviews and ratings from real gamers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Featured gaming content and recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Easy-to-use platform with intuitive navigation</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Team
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a diverse team of gaming enthusiasts, developers, and content creators who 
              are dedicated to bringing you the best gaming discovery experience. Our team combines 
              years of gaming expertise with cutting-edge technology to deliver a platform that 
              truly serves the gaming community.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                Join Our Community
              </h4>
              <p className="text-blue-700">
                Whether you're a casual gamer or a hardcore enthusiast, Pingh welcomes you to 
                join our growing community. Discover new games, share your experiences, and 
                connect with fellow gamers from around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs