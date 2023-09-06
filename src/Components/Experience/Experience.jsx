import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Lottie from 'lottie-react'
import animationData from '../../Assets/animation_lk5p5d0a.json'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What skills I have</h5>
    <h2>My Experience</h2>
    <div className="animation_container">
      
    
      <div className="container experience_container">
      {/* Programming Languages */}
    
      <div className="experience_frontend">
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
    </div>

    {/* Others */}
    <div className="experience_backend">
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
    </div>

    </div>
    <div className="Animation_content">
        <Lottie animationData={animationData} />
      </div>
    </div>
    
    </section>
  )
}

export default Experience