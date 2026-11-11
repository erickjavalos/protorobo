import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Background from './components/Background'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Blog from './pages/Blog'
import PostPage from './pages/PostPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen font-gagalin">
      <Header />
      <Background />
      <ScrollToTop />
      <main className="flex-1 px-6 md:px-10">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
