import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/Soloprofile.png'
import HeaderSocial from './HeaderSocials'
import {motion,variants} from "framer-motion"
import{useTypewriter, Cursor} from 'react-simple-typewriter'

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
const scrollAnimate = {
  offscreen:{y:-100, opacity: 0},
  onscreen:{ y : 0, opacity: 1
    ,rotate:[90]
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:3}
  }
}
const imageAnimate = {
  offscreen:{y:-100, opacity: 0},
  onscreen:{ y : 0
    , opacity: 1
    //,rotate:[0,90,0]}
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:3}
  }
}

const Header = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer','Embedded Systems Engineer','Graphic Designer', 'UI/UX Designer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:80,
  });

  return (
    <header id='home'>
      <motion.div className="container header_container"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}} // 1 makes the animation to run several times on scroll. but when set to true, it runs once
        // animate={"onscreen"}
        transition={{staggerChildren:0}} //0.5
      >
        <motion.h5
          variants = {textAnimate}
        >Hello I'm</motion.h5>
        <motion.h1
          variants = {textAnimate}
        >Solomon Nortey</motion.h1>

        <span className="text-light" style={{fontWeight:'bold', color:'#367ffb', fontSize: '28px'}}>
          {text}
        </span>
        <span style={{color:'#014fd5', fontSize: '28px', fontWeight: 'bold'}}>
          <Cursor cursorStyle ='|' />
        </span>
        <CTA />
        <HeaderSocial />

        <motion.div className="me"
          // initial={{x:-100}}  
          // animate={{ x : 0
          //   //,rotate:[0,90,0]
          // }} 
          // transition={{
          //   type:"spring",
          //   bounce:0.8,
          //   duration:.6
          // }}
          variants = {imageAnimate}
        >
          <motion.img src={ME} alt=""
            animate={{y: [0, -10, 0],}}
            transition={{
              repeat: Infinity, // Infinite loop
              duration: 1.2, // Total duration for each bounce cycle
              ease: "easeInOut", // You can change the easing function
            }}
           />
        </motion.div>

        <motion.a href="#contact" className='scroll_down'
          variants = {scrollAnimate}
        >Scroll Down</motion.a>
      </motion.div>
    </header>
  )
}

export default Header