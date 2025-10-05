import React from 'react'

/**
 * BlogFilter Component - Bộ lọc danh mục blog
 * 
 * @param {Object} props
 * @param {Array} props.categories - Danh sách các danh mục
 * @param {string} props.activeCategory - Danh mục đang được chọn
 * @param {function} props.onCategoryChange - Hàm xử lý khi đổi danh mục
 */
const BlogFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2
            ${activeCategory === category.id
              ? `${category.bgColor} ${category.textColor} ${category.borderColor} transform scale-105`
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-md'}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default BlogFilter