import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const headersocials = () => {
  return (
    <div className="header_social">
        <a href="https://www.linkedin.com/in/solomon-nortey-7a9bb3198/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Snortey" target="_blank"><BsGithub/></a>
        <a href="https://api.whatsapp.com/send?phone=+233551031778"target="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default headersocials
