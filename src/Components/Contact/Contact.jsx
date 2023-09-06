import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ssnzhr3', 'template_bw55nvg', form.current, 'Bk5ip5loLXBxrnC2j')

    e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail className='contact-icon' />
          <h4>Email</h4>
          <h5>sammyzane100@gmail.com</h5>
          <a href="mailto:kelvinnortey100@gmail.com" target='_blank'> Send a message</a>
        </article>
        <article className="contact_option">
          <BiLogoLinkedin className='contact-icon'/>
          <h4>LinkedIn</h4>
          <h5>Message me on linkedin</h5>
          <a href="https://www.linkedin.com/in/solomon-nortey-7a9bb3198/message" target='_blank'> Send a message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp className='contact-icon'/>
          <h4>Whatsapp</h4>
          <h5>+233 454 4677</h5>
          <a href="https://api.whatsapp.com/send?phone=+233551031778" target='_blank'> Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full name'required />
        <input type="text" name='email' placeholder='Your Email'required />
        <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
        <div className="btn-cta">
          <button type='submit' className='btn btn-primary'>Send</button>
        </div>
      </form>
    </div>
    </section>
  )
}

export default Contact