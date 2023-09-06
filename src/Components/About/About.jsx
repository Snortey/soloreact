import React from 'react'
import './About.css'
import ME from '../../Assets/Frontimage.JPG'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'
import { render } from 'react-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
                <img src={ME} alt="About Image"/>
            </div>
        </div>
        <div className="about_content">
            <div className="about_cards">
              <motion.article animate={{rotate: [0,200,200,0]}} transition={{repeat:2, duration:4}}className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ years working</small>
              </motion.article>

              <article className='about_card'>
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>10+ worldwide</small>
              </article>

              <article className='about_card'>
              <FaFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
              </article>
            </div>

            <p>
            I am a positive and dedicated individual with a passion for learning and achieving my goals. I have a special combination of knowledge, skills, and talents that I've acquired through both my studies and real-world experiences. I pursued a bachelor's degree in computer science at Kwame Nkrumah University of Science and Technology (<a href="https://www.knust.edu.gh/">KNUST</a>).During my time at KNUST, I learned various programming languages such as Python, C++, Java, and React, and I also gained hands-on experience with Arduino. It was an exciting journey, and I had the opportunity to work on interesting projects for SeveighTech and other individuals.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About