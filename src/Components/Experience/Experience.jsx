import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Lottie from 'lottie-react'
import animationData from '../../Assets/animation_lk5p5d0a.json'
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

const contentAnimate = {
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

const Experience = () => {
  return (
    <motion.section id='experience'
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0}}
    >
    <motion.h5 variants = {textAnimate}>What skills I have</motion.h5>
    <motion.h2 variants = {textAnimate}>My Experience</motion.h2>
    <motion.div className="animation_container"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      
    
    <div className="container experience_container">
      {/* Programming Languages */}
    
    <motion.div className="experience_frontend" variants = {contentAnimate}>
        <h3>Programming</h3>
        <div className="experience_content">
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>Python</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>C++</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>Arduino</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>MySQL/Tableau</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
          <h4>HTML</h4>
          <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>JavaScript</h4>
          <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>React</h4>
          <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </motion.div>

    {/* Others */}
    <motion.div className="experience_backend" variants = {contentAnimate}>
    <h3>Others</h3>
      <div className="experience_content">
      <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div><h4>UI/UX(Figma)</h4>
          <small className="text-light">Intermediate</small></div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Illustrator</h4>
          <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>Photoshop</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>3D Design (Blender)</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </motion.div>

    </div>
    <motion.div className="Animation_content" variants = {contentAnimate}>
        <Lottie animationData={animationData} />
      </motion.div>
    </motion.div>
    
    </motion.section>
  )
}

export default Experience