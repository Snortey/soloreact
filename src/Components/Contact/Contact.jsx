import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
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
const leftAnimate = {
  offscreen:{x:-100, opacity: 0},
  onscreen:{ x : 0, opacity: 1
    //,rotate:[0,90,0]}
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:2}
  }
}
const rightAnimate = {
  offscreen:{x:100, opacity: 0},
  onscreen:{ x : 0, opacity: 1
    //,rotate:[0,90,0]}
    ,transition:{
      type:"spring",
      bounce:0.4,
      duration:2}
  }
}

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ssnzhr3', 'template_bw55nvg', form.current, 'Bk5ip5loLXBxrnC2j')

    e.target.reset()
  };

  return (
    <motion.section id='contact'
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0}}
    >
    <motion.h5 variants = {textAnimate}>Get in Touch</motion.h5>
    <motion.h2 variants = {textAnimate}>Contact Me</motion.h2>

    <div className="container contact_container"    >
      <motion.div className="contact_options"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0.5}}
      >
        <motion.article className="contact_option" variants = {leftAnimate}>
          <MdOutlineEmail className='contact-icon' />
          <h4>Email</h4>
          <h5>sammyzane100@gmail.com</h5>
          <a href="mailto:kelvinnortey100@gmail.com" target='_blank'> Send a message</a>
        </motion.article>
        <motion.article className="contact_option" variants = {leftAnimate}>
          <BiLogoLinkedin className='contact-icon'/>
          <h4>LinkedIn</h4>
          <h5>Message me on linkedin</h5>
          <a href="https://www.linkedin.com/in/solomon-nortey-7a9bb3198/message" target='_blank'> Send a message</a>
        </motion.article>
        <motion.article className="contact_option" variants = {leftAnimate}>
          <BsWhatsapp className='contact-icon'/>
          <h4>Whatsapp</h4>
          <h5>+233 454 4677</h5>
          <a href="https://api.whatsapp.com/send?phone=+233551031778" target='_blank'> Send a message</a>
        </motion.article>
      </motion.div>
      <motion.form ref={form} onSubmit={sendEmail}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0.5}}
      >
        <motion.input type="text" name='name' placeholder='Your Full name'required variants = {rightAnimate}/>
        <motion.input type="text" name='email' placeholder='Your Email'required variants = {rightAnimate}/>
        <motion.textarea name="message"  rows="7" placeholder='Your message' required variants = {rightAnimate}></motion.textarea>
        <motion.div className="btn-cta" variants = {rightAnimate}>
          <button type='submit' className='btn btn-primary'>Send</button>
        </motion.div>
      </motion.form>
    </div>
    </motion.section>
  )
}

export default Contact