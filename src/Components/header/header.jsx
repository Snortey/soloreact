import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/Soloprofile.png'
import HeaderSocial from './HeaderSocials'
// import TextAnimation from '../Animation/TextAnimation'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Solomon Nortey</h1>
        <h2 className="text-light"></h2>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header