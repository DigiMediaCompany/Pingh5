// Cấu hình API
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com',
  TIMEOUT: 5000,
  RETRY_ATTEMPTS: 3
}

// API Endpoints
export const ENDPOINTS = {
  GAMES: {
    FEATURED: '/api/games/featured',
    ALL: '/api/games',
    BY_ID: (id) => `/api/games/${id}`,
    SEARCH: '/api/games/search'
  },
  CATEGORIES: '/api/categories',
  AUTHORS: '/api/authors'
}

// Request headers
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}