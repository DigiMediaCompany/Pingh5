import { useState, useEffect } from 'react'
import GameService from '../services/GameService'

export const useGames = (page = 1, limit = 10, category = null) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await GameService.getGames(page, limit, category)
        
        if (response.success) {
          setGames(response.data)
          setPagination(response.pagination)
        } else {
          setError('Failed to fetch games')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [page, limit, category])

  return { games, loading, error, pagination }
}


export const useFeaturedGames = () => {
  const [featuredGames, setFeaturedGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFeaturedGames = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await GameService.getFeaturedGames()
        
        if (response.success) {
          setFeaturedGames(response.data)
        } else {
          setError('Failed to fetch featured games')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedGames()
  }, [])

  return { featuredGames, loading, error }
}

export const useGameSearch = () => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchGames = async (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    try {
      setLoading(true)
      setError(null)
      
      const response = await GameService.searchGames(query)
      
      if (response.success) {
        setSearchResults(response.data)
      } else {
        setError('Failed to search games')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { searchResults, loading, error, searchGames }
}

export const useGame = (id) => {
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const fetchGame = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await GameService.getGameById(id)
        
        if (response.success) {
          setGame(response.data)
        } else {
          setError('Game not found')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGame()
  }, [id])

  return { game, loading, error }
}

export const useLatestGames = () => {
  const [latestGames, setLatestGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLatestGames = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await GameService.getLatestGames()
        
        if (response.success) {
          setLatestGames(response.data)
        } else {
          setError('Failed to fetch latest games')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestGames()
  }, [])

  return { latestGames, loading, error }
}

