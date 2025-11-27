import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Experience from './pages/Experience'
import Blog from './pages/Blog'
import Post from './pages/Post'
import About from './pages/About'
import { AppShell } from './components/AppShell'
import { ChatResponse } from './components/ChatResponse'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return null
}

function NotFound() {
  return (
    <div className="container page">
      <ChatResponse
        prompt="Can you find that page?"
        answer="I looked around but couldn’t find it. Let’s head back to the main routes."
        richAnswer={'<p>I looked around but couldn’t find that page.</p><p><a href="/">Return home</a> or hop into the nav links above.</p>'}
      />
      <div className="eyebrow">Not found</div>
      <h2>Page missing</h2>
      <p className="muted">The page you were looking for does not exist.</p>
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<AppShell />}>
            <Route index element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
