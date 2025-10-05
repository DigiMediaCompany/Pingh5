import React from 'react'

const GridCard = ({
  title,
  description,
  image,
  category,
  size = 'small',
  author,
  readTime,
  publishedAt,
  onClick
}) => {
  const sizeClasses = {
    large: 'col-span-2 row-span-2',
    medium: 'col-span-2 row-span-1',
    small: 'col-span-1 row-span-1'
  }

  const categoryColors = {
    "NEWS": "bg-emerald-600",
    "TIPS & GUIDES": "bg-amber-600", 
    "HOW TO": "bg-blue-600",
    "TOP GAMES": "bg-purple-600",
    "REVIEW": "bg-red-600"
  }

  const textSizes = {
    large: {
      title: 'text-2xl md:text-3xl',
      description: 'text-base',
      meta: 'text-sm'
    },
    medium: {
      title: 'text-xl md:text-2xl', 
      description: 'text-sm',
      meta: 'text-xs'
    },
    small: {
      title: 'text-lg md:text-xl',
      description: 'text-xs',
      meta: 'text-xs'
    }
  }

  const currentTextSize = textSizes[size]
  const gridClass = sizeClasses[size]
  const categoryColor = categoryColors[category] || 'bg-gray-600'

  return (
    <div 
      className={`
        relative group cursor-pointer overflow-hidden rounded-lg shadow-lg 
        hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]
        ${size === 'large' ? 'h-full' : 'h-80'} ${gridClass}
      `}
      onClick={onClick}
    >
      <div className="relative h-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute top-4 left-4">
          <span className={`
            ${categoryColor} text-white text-xs font-semibold px-3 py-1 
            rounded-full uppercase tracking-wide
          `}>
            {category}
          </span>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
        <h3 className={`
          font-bold leading-tight mb-2 group-hover:text-blue-300 
          transition-colors ${currentTextSize.title}
        `}>
          {title}
        </h3>
        
        {description && size !== 'small' && (
          <p className={`
            text-gray-200 leading-relaxed mb-3 line-clamp-2
            ${currentTextSize.description}
          `}>
            {description}
          </p>
        )}

        <div className={`
          flex items-center justify-between text-gray-300
          ${currentTextSize.meta}
        `}>
          <div className="flex items-center space-x-3">
            {author && (
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {author}
              </span>
            )}
            {readTime && (
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {readTime}
              </span>
            )}
          </div>
          {publishedAt && (
            <span>
              {new Date(publishedAt).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

export default GridCard
