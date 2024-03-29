import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Custom components
import Header from './components/Header'
import ContentRegion from './components/ContentRegion'
import Footer from './components/Footer'
import About from './components/About'
import Terms from './components/Terms'

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ContentRegion />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
