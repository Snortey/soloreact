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
    review: 'My collaboration with Solomon left me thoroughly impressed. Ensuring our project looked fantastic and functioned flawlessly. Solomon is the ultimate creative technologist.',
  },
  {
    avatar: AVATAR2,
    name: 'Gilbert Amo',
    review: '"Having worked alongside Solomon for several years, I am continuously amazed by his versatility. creating stunning and functional interfaces. His impact on every project is undeniable.',
  },
  {
    avatar: AVATAR3,
    name: 'Isaac Kwarteng',
    review: "I've had the pleasure of witnessing Solomon's exceptional skills firsthand. He sets the standard high in every domain he touches.He is truly a rare talent",
  },
  {
    avatar: AVATAR4,
    name: 'Papa Arhin',
    review: "As someone passionate about UX, I'm in awe of Solomon's ability to craft simple, user-centric designs. Creating experiences that are both elegant and functional.",
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