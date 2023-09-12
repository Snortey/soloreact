import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
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
const middleAnimate = {
  offscreen:{y:-0, opacity: 0, },
  onscreen:{ y : 0, opacity: 1
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:6}
  }
}

const leftAnimate = {
  offscreen:{x:100, opacity: 0},
  onscreen:{ x : 0
    , opacity: 1
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:3}
  }
}
const rightAnimate = {
  offscreen:{x:-100, opacity: 0},
  onscreen:{ x : 0
    , opacity: 1
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:3}
  }
}


const services = () => {
  return (
    <motion.section id='services'
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0}}
    >
      <motion.h5 variants = {textAnimate}>What I offer</motion.h5>
      <motion.h2 variants = {textAnimate}>Services</motion.h2>

      <motion.div className="container service_container">
      {/* UI/UX */}
        <motion.article className="service" variants = {rightAnimate}>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Interface (UI) Prototyping</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireframing and Information Architecture</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mobile App UI/UX</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Usability Audit and Analysis</p>
            </li>
          </ul>
        </motion.article>
      {/* web development */}
        <motion.article className="service" variants = {middleAnimate}>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>HTML5/CSS3 Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>JavaScript Programming</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Frontend Frameworks</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Single Page Applications (SPAs)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Cross-Browser Compatibility</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Version Control/Git</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Performance Optimization</p>
            </li>
          </ul>
        </motion.article>
      {/* Embedded Systems */}
        <motion.article className="service" variants = {leftAnimate}>
          <div className="service_head">
            <h3>Embedded Systems</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>IoT Solutions</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Sensor Integration</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireless Communication</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Real-time Data Acquisition</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Arduino Firmware Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Prototyping and Testing</p>
            </li>
          </ul>
        </motion.article>
      </motion.div>
    </motion.section>
  )
}

export default services