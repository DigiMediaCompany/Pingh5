import React from 'react'
import GridCard from '../GridCard/GridCard'
import Loading from '../Loading/Loading'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { useFeaturedGames } from '../../hooks/useGames'


const GridLayout = ({ games }) => {
  // If games prop is provided, use it; otherwise fetch from API
  const { featuredGames, loading, error } = useFeaturedGames()
  const gamesToRender = games || featuredGames

  if (!games && loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Loading type="cards" count={9} />
        </div>
      </section>
    )
  }

  if (!games && error) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorMessage 
            message={error} 
            type="card"
            onRetry={() => window.location.reload()}
          />
        </div>
      </section>
    )
  }

  return (
    <section className={`py-12 ${!games ? 'bg-gray-50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chỉ hiển thị header khi không có games prop (tức là trang Home) */}
        {!games && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Gaming Content
            </h2>
            <p className="text-gray-600">
              Latest reviews, guides, and gaming news
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[320px] gap-6">
          {gamesToRender.slice(0, 9).map((game, index) => {
            // Card đầu tiên (index 0) sẽ lớn hơn
            const size = index === 0 ? 'large' : 'small'
            
            return (
              <GridCard
                key={game.id}
                title={game.title}
                description={game.description}
                image={game.image}
                category={game.category}
                size={size}
                author={game.author}
                readTime={game.readTime}
                publishedAt={game.publishedAt}
                onClick={game.onClick || (() => {
                  // Navigate to game detail page
                })}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default GridLayout