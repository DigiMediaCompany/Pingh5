import { ENDPOINTS } from '../config/apiConfig'
import { MOCK_FEATURED_GAMES, MOCK_ALL_GAMES, MOCK_LATEST_GAMES, MOCK_APP_REVIEWS } from '../data/mockData'
import { ApiClient, formatApiResponse, paginate, searchItems } from '../utils/apiUtils'

/**
 * Service class để quản lý dữ liệu game/bài viết
 * Cung cấp các phương thức để fetch dữ liệu từ API hoặc fallback về mock data
 */
class GameService {
  /**
   * Lấy danh sách game/bài viết nổi bật
   * @returns {Promise} Danh sách các game featured
   */
  static async getFeaturedGames() {
    try {
      const response = await ApiClient.get(ENDPOINTS.GAMES.FEATURED)
      return formatApiResponse(response.data || response)
    } catch (error) {
      // API không khả dụng, sử dụng mock data
      return formatApiResponse(MOCK_FEATURED_GAMES)
    }
  }

  /**
   * Lấy tất cả games với phân trang và lọc theo category
   * @param {number} page - Trang hiện tại
   * @param {number} limit - Số lượng items per page
   * @param {string|null} category - Danh mục để lọc
   * @returns {Promise} Danh sách games với pagination
   */
  static async getGames(page = 1, limit = 10, category = null) {
    try {
      const params = { page, limit }
      if (category) params.category = category
      
      const response = await ApiClient.get(ENDPOINTS.GAMES.ALL, params)
      return formatApiResponse(response.data || response, response.pagination)
    } catch (error) {
      console.log('API không khả dụng, sử dụng mock data')
      
      // Lọc theo danh mục nếu cần
      let games = MOCK_ALL_GAMES
      if (category) {
        games = games.filter(game => game.category === category)
      }
      
      // Áp dụng phân trang
      const paginatedResult = paginate(games, page, limit)
      return formatApiResponse(paginatedResult.data, paginatedResult.pagination)
    }
  }

  /**
   * Tìm kiếm games theo từ khóa
   * @param {string} query - Từ khóa tìm kiếm
   * @returns {Promise} Kết quả tìm kiếm
   */
  static async searchGames(query) {
    try {
      const response = await ApiClient.get(ENDPOINTS.GAMES.SEARCH, { q: query })
      return formatApiResponse(response.data || response, { query, total: response.total })
    } catch (error) {
      console.log('API không khả dụng, sử dụng mock data')
      
      // Tìm kiếm trong mock data
      const searchResults = searchItems(MOCK_ALL_GAMES, query, ['title', 'description', 'tags'])
      return formatApiResponse(searchResults, { query, total: searchResults.length })
    }
  }

  /**
   * Lấy thông tin chi tiết của một game theo ID
   * @param {number|string} id - ID của game
   * @returns {Promise} Thông tin chi tiết game
   */
  static async getGameById(id) {
    try {
      const response = await ApiClient.get(ENDPOINTS.GAMES.BY_ID(id))
      return formatApiResponse(response.data || response)
    } catch (error) {
      console.log('API không khả dụng, sử dụng mock data')
      
      const game = MOCK_ALL_GAMES.find(g => g.id === parseInt(id))
      if (game) {
        return formatApiResponse(game)
      } else {
        return {
          success: false,
          error: 'Không tìm thấy game',
          code: 'GAME_NOT_FOUND'
        }
      }
    }
  }

  /**
   * Lấy games theo danh mục cụ thể
   * @param {string} category - Tên danh mục
   * @param {number} page - Trang hiện tại
   * @param {number} limit - Số lượng items per page
   * @returns {Promise} Danh sách games theo category
   */
  static async getGamesByCategory(category, page = 1, limit = 10) {
    return this.getGames(page, limit, category)
  }

  /**
   * Lấy danh sách games phổ biến/trending
   * @param {number} limit - Số lượng games trả về
   * @returns {Promise} Danh sách games popular
   */
  static async getPopularGames(limit = 10) {
    try {
      const response = await ApiClient.get('/games/popular', { limit })
      return formatApiResponse(response.data || response)
    } catch (error) {
      console.log('API không khả dụng, sử dụng mock data')
      
      // Trả về một số games đầu tiên làm "popular"
      const popularGames = MOCK_ALL_GAMES.slice(0, limit)
      return formatApiResponse(popularGames)
    }
  }

  /**
   * Lấy danh sách games mới nhất
   * @param {number} limit - Số lượng games trả về
   * @returns {Promise} Danh sách games mới nhất
   */
  static async getLatestGames(limit = 8) {
    try {
      const response = await ApiClient.get('/games/latest', { limit })
      return formatApiResponse(response.data || response)
    } catch (error) {
      console.log('API không khả dụng, sử dụng mock data')
      
      // Sử dụng MOCK_LATEST_GAMES và sắp xếp theo ngày xuất bản
      const latestGames = [...MOCK_LATEST_GAMES]
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, limit)
      
      return formatApiResponse(latestGames)
    }
  }

  /**
   * Lấy danh sách app reviews với phân trang và lọc theo category
   * @param {number} page - Trang hiện tại
   * @param {number} limit - Số lượng items per page
   * @param {string|null} category - Danh mục để lọc ('ALL' hoặc category cụ thể)
   * @returns {Promise} Danh sách app reviews với pagination
   */
  static async getAppReviews(page = 1, limit = 8, category = 'ALL') {
    try {
      const params = { page, limit }
      if (category && category !== 'ALL') params.category = category
      
      const response = await ApiClient.get(ENDPOINTS.APP_REVIEWS.ALL, params)
      return formatApiResponse(response.data || response, response.pagination)
    } catch (error) {
      console.log('API không khả dụng, sử dụng mock data cho app reviews')
      
      // Lọc theo danh mục nếu cần
      let reviews = [...MOCK_APP_REVIEWS]
      if (category && category !== 'ALL') {
        reviews = reviews.filter(review => review.category === category)
      }
      
      // Sắp xếp theo ngày xuất bản (mới nhất trước)
      reviews.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      
      // Áp dụng phân trang
      const paginatedResult = paginate(reviews, page, limit)
      
      return formatApiResponse(paginatedResult.data, paginatedResult.pagination)
    }
  }

  /**
   * Lấy chi tiết một app review theo ID
   * @param {number} id - ID của app review
   * @returns {Promise} Chi tiết app review
   */
  static async getAppReviewById(id) {
    try {
      const response = await ApiClient.get(ENDPOINTS.APP_REVIEWS.BY_ID(id))
      return formatApiResponse(response.data || response)
    } catch (error) {
      console.log('API không khả dụng, sử dụng mock data cho app review detail')
      
      const review = MOCK_APP_REVIEWS.find(review => review.id === parseInt(id))
      if (!review) {
        throw new Error('App review không tìm thấy')
      }
      
      return formatApiResponse(review)
    }
  }

  /**
   * Lấy danh sách app reviews nổi bật
   * @param {number} limit - Số lượng items muốn lấy
   * @returns {Promise} Danh sách app reviews featured
   */
  static async getFeaturedAppReviews(limit = 4) {
    try {
      const response = await ApiClient.get(ENDPOINTS.APP_REVIEWS.FEATURED, { limit })
      return formatApiResponse(response.data || response)
    } catch (error) {
      console.log('API không khả dụng, sử dụng mock data cho featured app reviews')
      
      // Lấy các app reviews featured
      const featuredReviews = MOCK_APP_REVIEWS
        .filter(review => review.featured)
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, limit)
      
      return formatApiResponse(featuredReviews)
    }
  }


}

export default GameService
