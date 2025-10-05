import React from 'react'
import welcomeBg from '../../assets/welcome-bg_desktop.jpg'

const AnimatedHero = () => {
  return (
    <section className="relative overflow-hidden text-white min-h-[500px] flex items-center">
      <div className="absolute inset-0">
        <img 
          src={welcomeBg}
          alt="Animated Background"
          className="w-full h-full object-cover animate-gradient"
        />

        <div className="absolute inset-0 bg-black/20"></div>
        
     {/* ánh sáng di chuyển */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-wave transform -skew-x-12"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-400/10 to-transparent animate-wave-reverse transform skew-x-12"></div>
        </div>
        
        {/* hiệu ứng floating */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-pink-400/15 to-purple-600/15 rounded-full blur-lg animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-orange-600/10 rounded-full blur-md animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl">
            <h1 className="text-lg md:text-1xl lg:text-2xl font-bold mb-6 leading-tight">
              <span className="block text-white drop-shadow-lg">
                IMPROVE YOUR GAMING AND APP EXPERIENCE:
              </span>
              <span className="block text-white drop-shadow-lg mt-2">
                VISIT OUR PLATFORM FOR NEWS, REVIEWS, AND UPDATES!
              </span>
            </h1>
            
            <button className="bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl text-base uppercase tracking-wide">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedHero