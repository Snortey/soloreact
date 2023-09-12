import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {motion,variants} from "framer-motion"

const socialIcons = {
  offscreen:{y:-100, opacity: 0},
  onscreen:{ y : 0, opacity: 1
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:3}
  }
}

const headersocials = () => {
  return (
    <motion.div className="header_social"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}} 
        transition={{staggerChildren:0}} //0.5
    >
        <motion.a href="https://www.linkedin.com/in/solomon-nortey-7a9bb3198/" target="_blank"
          variants = {socialIcons}
        ><BsLinkedin/></motion.a>
        <motion.a href="https://github.com/Snortey" target="_blank"
          variants = {socialIcons}
        ><BsGithub/></motion.a>
        <motion.a href="https://api.whatsapp.com/send?phone=+233551031778"target="_blank"
          variants = {socialIcons}
        ><BsWhatsapp/></motion.a>
    </motion.div>
  )
}

export default headersocials
