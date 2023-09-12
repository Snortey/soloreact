import React from 'react'
import './About.css'
import ME from '../../Assets/Frontimage.JPG'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'
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
const paragraphAnimate = {
  offscreen:{x:100, opacity: 0},
  onscreen:{ x : 0, opacity: 1
    ,transition:{
      duration:2}
  }
}
const contentAnimate = {
  offscreen:{y:-100, opacity: 0},
  onscreen:{ y : 0, opacity: 1
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:2}
  }
}

const imageAnimate = {
  offscreen:{x:-100, opacity: 0},
  onscreen:{ x : 0
    , opacity: 1
    ,rotate:[0,352]
    ,transition:{
      // type:"spring",
      // bounce:0.4,
      duration:2}
  }
}
const imageAnimate2 = {
  offscreen:{x:-100, opacity: 0},
  onscreen:{ x : 0
    , opacity: 1
    ,rotate:[0,180]
    ,transition:{
      // type:"spring",
      // bounce:0.4,
      duration:3}
  }
}



const About = () => {
  return (
    <motion.section id="about"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:true, amount:0.5}} // 1 makes the animation to run several times on scroll. but when set to true, it runs once
      // animate={"onscreen"}
      transition={{staggerChildren:0}} //0.5
    >
      <motion.h5 variants = {textAnimate}>Get to know</motion.h5>
      <motion.h2 variants = {textAnimate}>About Me</motion.h2>

      <motion.div className="container about_container"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}} 
        transition={{staggerChildren:0.5}} //0.5
      >
        <motion.div className="about_me" variants = {imageAnimate2}>
            <motion.div className="about_me-image" variants = {imageAnimate}>
                <img src={ME} alt="About Image"/>
            </motion.div>
        </motion.div>
        <div className="about_content">
            <motion.div className="about_cards">
              <motion.article className='about_card' variants = {contentAnimate}>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>2+ years working</small>
              </motion.article>

              <motion.article className='about_card'variants = {contentAnimate}>
                <FaUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>10+ worldwide</small>
              </motion.article>

              <motion.article className='about_card'variants = {contentAnimate}>
                <FaFolderOpen className='about_icon'/>
                <h5>Projects</h5>
                <small>10+ completed</small>
              </motion.article>
            </motion.div>

            <motion.p variants = {paragraphAnimate}>
            I am a positive and dedicated individual with a passion for learning and achieving my goals. I have a special combination of knowledge, skills, and talents that I've acquired through both my studies and real-world experiences. I pursued a bachelor's degree in computer science at Kwame Nkrumah University of Science and Technology (<a href="https://www.knust.edu.gh/">KNUST</a>).During my time at KNUST, I learned various programming languages such as Python, C++, Java, and React, and I also gained hands-on experience with Arduino. It was an exciting journey, and I had the opportunity to work on interesting projects for SeveighTech and other individuals.
            </motion.p>

            <motion.a href="#contact" className='btn btn-primary'variants = {paragraphAnimate}>Let's Talk</motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default About