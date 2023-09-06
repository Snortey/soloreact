import React from 'react'
import Header from './Components/header/header'
import Nav from './Components/nav/nav'
import About from './Components/About/About'
import ImageSlider from './Components/ImageSlider/ImageSlider'
import Experience from './Components/Experience/Experience'
import Services from './Components/services/services'
import Portfolio from './Components/portfolio/portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <ImageSlider />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App