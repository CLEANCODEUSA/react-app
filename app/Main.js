import React from 'react'
import ReactDOM from 'react-dom/client'

// Custom components
import Header from './components/Header'
import ContentRegion from './components/ContentRegion'
import Footer from './components/Footer'

function ExampleComponent() {
  return (
    <>
      <Header />
      <ContentRegion />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<ExampleComponent />)

if (module.hot) {
  module.hot.accept()
}
