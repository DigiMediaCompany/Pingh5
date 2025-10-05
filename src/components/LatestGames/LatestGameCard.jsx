import React from 'react'
import StarRating from '../StarRating/StarRating'

/**
 * LatestGameCard Component - Card cho latest games với rating
 * 
 * @param {Object} props
 * @param {string} props.title - Tên game
 * @param {string} props.image - URL hình ảnh
 * @param {number} props.rating - Đánh giá (1-5 sao)
 * @param {function} props.onClick - Hàm xử lý click
 */
const LatestGameCard = ({ title, image, rating, onClick }) => {
  return (
    <div 
      className="group cursor-pointer transition-all duration-300 transform hover:scale-105"
      onClick={onClick}
    >
      {/* Game Image */}
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Game Info */}
      <div className="mt-3">
        <h3 className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 text-sm mb-2">
          {title}
        </h3>
        
        {/* Rating Stars */}
        <StarRating rating={rating} />
      </div>
    </div>
  )
}

export default LatestGameCard