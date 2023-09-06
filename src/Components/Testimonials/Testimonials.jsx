import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../Assets/1671269279613.jpg'
import AVATAR2 from '../../Assets/1671269279621.jpg'
import AVATAR3 from '../../Assets/1671269279638.jpg'
import AVATAR4 from '../../Assets/1671269279647.jpg'

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
    name: 'Joseph Delali',
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
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
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
    </section>
  )
}

export default Testimonials