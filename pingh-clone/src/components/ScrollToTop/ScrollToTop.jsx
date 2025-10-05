import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop Component - Tự động cuộn về đầu trang khi chuyển route
 * 
 * Component này sẽ lắng nghe sự thay đổi của location (route) 
 * và tự động cuộn về đầu trang (top: 0, left: 0)
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Cuộn về đầu trang khi route thay đổi
    window.scrollTo(0, 0)
  }, [pathname])

  // Component này không render gì cả
  return null
}

export default ScrollToTop