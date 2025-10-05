import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-green-400">
                Pingh<span className="text-yellow-400">!</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm text-sm leading-relaxed">
              Welcome to pingh.com, your compass for comprehensive coupled with the latest 
              industry news. Our mission is to provide you with insightful analysis and valuable 
              insights, enriching your digital journey.
            </p>
            <p className="text-gray-500 text-xs">
              © 2025 pingh.com - All Rights Reserved
            </p>
          </div>
          {/* Blog */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Blog</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gaming News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industry Insights</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Latest Updates</a></li>
            </ul>
          </div>



          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Latest Reviews</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Super Bear Adventure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Zenless Zone Zero</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roblox: Plants Vs Brainrots</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Delta Force</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UFL™</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LEGO® Voyagers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blood Strike</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Borderlands 4</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roblox: RIVALS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Monument Valley</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Drive Beyond Horizons</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Call of Duty®: Black Ops 7</a></li>
            </ul>
          </div>



          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</Link></li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer