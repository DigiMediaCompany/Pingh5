import { API_CONFIG, DEFAULT_HEADERS } from '../config/apiConfig'

// HTTP request wrapper với error handling và retry
export class ApiClient {
  static async request(url, options = {}) {
    const config = {
      timeout: API_CONFIG.TIMEOUT,
      headers: { ...DEFAULT_HEADERS, ...options.headers },
      ...options
    }

    for (let attempt = 1; attempt <= API_CONFIG.RETRY_ATTEMPTS; attempt++) {
      try {
        const response = await fetch(url, config)
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        
        return await response.json()
      } catch (error) {
        console.warn(`API request attempt ${attempt} failed:`, error.message)
        
        if (attempt === API_CONFIG.RETRY_ATTEMPTS) {
          throw error
        }
        
        // Chờ trước khi thử lại
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
      }
    }
  }

  static async get(endpoint, params = {}) {
    const url = this.buildUrl(endpoint, params)
    return this.request(url, { method: 'GET' })
  }

  static async post(endpoint, data = {}) {
    const url = this.buildUrl(endpoint)
    return this.request(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  static buildUrl(endpoint, params = {}) {
    const url = new URL(endpoint, API_CONFIG.BASE_URL)
    
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined) {
        url.searchParams.append(key, params[key])
      }
    })
    
    return url.toString()
  }
}

// Hàm Utility 
export const formatApiResponse = (data, meta = {}) => ({
  success: true,
  data,
  meta,
  timestamp: new Date().toISOString()
})

export const formatApiError = (error, code = 'UNKNOWN_ERROR') => ({
  success: false,
  error: error.message || 'An error occurred',
  code,
  timestamp: new Date().toISOString()
})

// Pagination helper
export const paginate = (items, page = 1, limit = 10) => {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedItems = items.slice(startIndex, endIndex)
  
  return {
    data: paginatedItems,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: items.length,
      totalPages: Math.ceil(items.length / limit),
      hasNext: endIndex < items.length,
      hasPrev: page > 1
    }
  }
}

// Search helper
export const searchItems = (items, query, fields = ['title', 'description']) => {
  if (!query || !query.trim()) return items
  
  const lowercaseQuery = query.toLowerCase()
  
  return items.filter(item => {
    return fields.some(field => {
      const fieldValue = item[field]
      if (typeof fieldValue === 'string') {
        return fieldValue.toLowerCase().includes(lowercaseQuery)
      }
      if (Array.isArray(fieldValue)) {
        return fieldValue.some(val => 
          val.toLowerCase().includes(lowercaseQuery)
        )
      }
      return false
    })
  })
}