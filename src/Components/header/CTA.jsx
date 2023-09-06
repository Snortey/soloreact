import React from 'react'
import CV from "../../Assets/Solomon Nortey CV.pdf"


const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Chat with me</a>
    </div>
  )
}

export default CTA