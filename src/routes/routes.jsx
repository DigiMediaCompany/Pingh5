import { Routes, Route } from 'react-router-dom'
import AnimatedHero from '../components/AnimatedHero/AnimatedHero'
import GridLayout from '../components/GridLayout/GridLayout'
import LatestGames from '../components/LatestGames/LatestGames'
import AboutUs from '../pages/AboutUs'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Disclaimer from '../pages/Disclaimer'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'

// Home Page Component
const HomePage = () => (
  <>
    <AnimatedHero />
    <GridLayout />
    <LatestGames />
  </>
)

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  )
}

export default AppRoutes