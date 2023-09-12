import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {motion,variants} from "framer-motion"

const textAnimate = {
  offscreen:{y:-100, opacity: 0},
  onscreen:{ y : 0, opacity: 1
    //,rotate:[0,90,0]}
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:3}
  }
}
const textAnimate2 = {
  offscreen:{y:100, opacity: 0},
  onscreen:{ y : 0, opacity: 1
    //,rotate:[0,90,0]}
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:3}
  }
}

const footer = () => {
  return (
    <motion.footer
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.a href="#" className='footer_logo' variants = {textAnimate}>Solomon</motion.a>
      <motion.ul className="permalinks" variants = {textAnimate}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </motion.ul>

      <motion.div className="footer_socials">
        <motion.a href="https://Instagram" variants = {textAnimate}><BsInstagram /></motion.a>
        <motion.a href="https://twitter" variants = {textAnimate}><BsTwitter /></motion.a>
        <motion.a href="https://facebook" variants = {textAnimate}><FaFacebook /></motion.a>
      </motion.div>

      <motion.div className="footer_copyright" variants = {textAnimate2}>
        <small>
          &copy; Portfolio.All rights reserver @2023.
        </small>
      </motion.div>
    </motion.footer>
  )
}

export default footer