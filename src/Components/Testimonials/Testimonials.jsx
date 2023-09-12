import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../Assets/photo_2023-07-07_22-47-15.jpg'
import AVATAR2 from '../../Assets/photo_2023-07-07_22-47-22.jpg'
import AVATAR3 from '../../Assets/photo_2023-07-07_22-47-29.jpg'
import AVATAR4 from '../../Assets/photo_2023-07-07_22-47-33.jpg'
import {motion,variants} from "framer-motion"

// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data =[
  {
    avatar: AVATAR1,
    name: 'Joseph Etse',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum suscipit minima hic illo dolor saepe repellendus, iusto magnam, placeat rerum ducimus consequuntur rem distinctio velit vel perferendis enim veniam.',
  },
  {
    avatar: AVATAR2,
    name: 'Gilbert Amo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum suscipit minima hic illo dolor saepe repellendus, iusto magnam, placeat rerum ducimus consequuntur rem distinctio velit vel perferendis enim veniam.',
  },
  {
    avatar: AVATAR3,
    name: 'Isaac Kwarteng',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum suscipit minima hic illo dolor saepe repellendus, iusto magnam, placeat rerum ducimus consequuntur rem distinctio velit vel perferendis enim veniam.',
  },
  {
    avatar: AVATAR4,
    name: 'Papa Arhin',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum suscipit minima hic illo dolor saepe repellendus, iusto magnam, placeat rerum ducimus consequuntur rem distinctio velit vel perferendis enim veniam.',
  }
]

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
const Testimonials = () => {
  return (
    <motion.section id='testimonials'
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0}}
    >
      <motion.h5 variants = {textAnimate}>Review from clients</motion.h5>
      <motion.h2 variants = {textAnimate}>Testimonials</motion.h2>
      <Swiper modules={[ Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="container testimonials_container">
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </motion.section>
  )
}

export default Testimonials