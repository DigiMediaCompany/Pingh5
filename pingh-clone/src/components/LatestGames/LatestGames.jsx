import React from 'react'
import LatestGameCard from './LatestGameCard'
import Loading from '../Loading/Loading'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { useLatestGames } from '../../hooks/useGames'

/**
 * LatestGames Component - Section hiển thị latest games
 */
const LatestGames = () => {
  const { latestGames, loading, error } = useLatestGames()

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Loading type="cards" count={8} />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-12 bg-white">
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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Latest Games
          </h2>
          <p className="text-gray-600">
            Discover the newest releases and trending games
          </p>
        </div>

        {/* Games Grid - 4x2 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {latestGames.map((game) => (
            <LatestGameCard
              key={game.id}
              title={game.title}
              image={game.image}
              rating={game.rating}
              onClick={() => {
                // Navigate to game detail page
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default LatestGames