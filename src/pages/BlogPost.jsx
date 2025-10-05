import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { MOCK_BLOG_POSTS } from '../data/mockData'

const BlogPost = () => {
  const { id } = useParams()
  const post = MOCK_BLOG_POSTS.find(p => p.id === parseInt(id))

  // Redirect nếu không tìm thấy post
  if (!post) {
    return <Navigate to="/blog" replace />
  }

  // Lấy các bài viết liên quan (cùng category, khác id)
  const relatedPosts = MOCK_BLOG_POSTS
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src={post.image} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            {/* Breadcrumb */}
            <nav className="mb-4">
              <Link to="/" className="text-white/80 hover:text-white">Home</Link>
              <span className="mx-2 text-white/60">→</span>
              <Link to="/blog" className="text-white/80 hover:text-white">Blog</Link>
              <span className="mx-2 text-white/60">→</span>
              <span className="text-white">{post.category}</span>
            </nav>
            
            {/* Category Badge */}
            <div className="mb-4">
              <span className={`px-3 py-1 text-sm font-semibold text-white rounded-full
                ${post.category === 'NEWS' ? 'bg-green-500' :
                  post.category === 'TOP APPS' ? 'bg-blue-500' :
                  post.category === 'TOP GAMES' ? 'bg-purple-500' :
                  post.category === 'HOW TO' ? 'bg-orange-500' :
                  post.category === 'TIPS & GUIDES' ? 'bg-red-500' :
                  'bg-gray-500'}`}>
                {post.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex items-center text-white/90 text-sm">
              <span>{post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* Excerpt */}
          <div className="text-xl text-gray-600 leading-relaxed mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            {post.excerpt}
          </div>
          
          {/* Main Content */}
          <div 
            className="prose-headings:text-gray-800 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:hover:text-blue-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">{relatedPost.category}</div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <div className="text-xs text-gray-400">
                      {relatedPost.date} • {relatedPost.readTime} min read
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Want to read more articles?</h2>
          <p className="mb-6 opacity-90">
            Explore our complete collection of gaming articles, reviews, and guides.
          </p>
          <Link 
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Browse All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost