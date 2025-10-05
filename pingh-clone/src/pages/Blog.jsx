import React, { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GridLayout from '../components/GridLayout/GridLayout'
import BlogFilter from '../components/Blog/BlogFilter'
import Pagination from '../components/Blog/Pagination'
import { CATEGORIES, MOCK_BLOG_POSTS } from '../data/mockData'

const Blog = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState('ALL')
  const postsPerPage = 9 // Grid layout: 1 large + 8 small items

  // Filter posts theo category
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'ALL') {
      return MOCK_BLOG_POSTS
    }
    return MOCK_BLOG_POSTS.filter(post => post.category === activeCategory)
  }, [activeCategory])

  // Paginate filtered posts
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  // Add onClick handler for posts
  const postsWithClick = currentPosts.map(post => ({
    ...post,
    onClick: () => navigate(`/blog/${post.id}`)
  }))

  // Xử lý thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to top khi chuyển trang
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Xử lý thay đổi category
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setCurrentPage(1) // Reset về trang 1 khi đổi category
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
            Discover Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team made a great research and handpicked the best Android and iOS apps 
            so that you could enjoy your experience with any of them.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Filter */}
        <BlogFilter 
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Results Info */}
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            Showing {startIndex + 1}-{Math.min(startIndex + postsPerPage, filteredPosts.length)} of {filteredPosts.length} articles
            {activeCategory !== 'ALL' && (
              <span className="ml-1">in "{CATEGORIES.find(cat => cat.id === activeCategory)?.name}"</span>
            )}
          </p>
        </div>

        {/* Blog Posts Grid using GridLayout component */}
        {currentPosts.length > 0 ? (
          <>
            <GridLayout games={postsWithClick} />
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">No articles found</h3>
            <p className="text-gray-400">Try selecting a different category or check back later for new content.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog