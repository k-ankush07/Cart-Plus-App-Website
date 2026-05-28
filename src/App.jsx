import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Blog from './pages/Blog'
import Articles from './pages/Articles'
import Contact from './pages/Contact'

export default function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
