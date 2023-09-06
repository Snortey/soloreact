import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserSecret} from 'react-icons/fa'
import {FaBookReader} from 'react-icons/fa'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav ==='#home' ? 'active' : ''}><ImHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><FaUserSecret /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><FaBookReader /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiCustomerService2Fill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><BiSolidPhoneCall /></a>
    </nav>
  )
}

export default Nav

