import React from 'react'
import CV from "../../Assets/Solomon Nortey CV.pdf"
import {motion,variants} from "framer-motion"

const leftButton = {
  offscreen:{x:-100, opacity: 0},
  onscreen:{ x : 0, opacity: 1
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:3}
  }
}

const rightButton = {
  offscreen:{x:100, opacity: 0},
  onscreen:{ x : 0, opacity: 1
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:3}
  }
}

const CTA = () => {
  return (
    <motion.div className="cta"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}} 
        transition={{staggerChildren:0.5}} //0.5
    >
        <motion.a href={CV} download className='btn'
          variants = {leftButton}
        >Download CV</motion.a>
        <motion.a href="#contact" className='btn btn-primary'
          variants = {rightButton}
        >Chat with me</motion.a>
    </motion.div>
  )
}

export default CTA