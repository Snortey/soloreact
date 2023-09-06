import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Solomon</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://Instagram"><BsInstagram /></a>
        <a href="https://twitter"><BsTwitter /></a>
        <a href="https://facebook"><FaFacebook /></a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Portfolio.All rights reserver @2023.
        </small>
      </div>
    </footer>
  )
}

export default footer