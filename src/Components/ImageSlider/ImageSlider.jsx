import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import IMG1 from '../../Assets/1670487955908.jpg'
import IMG2 from '../../Assets/1670487956180.jpg'
import IMG3 from '../../Assets/1670487957049.jpg'
import IMG4 from '../../Assets/1670487957332.jpg'
import IMG5 from '../../Assets/1670487959827 (1).jpg'


const data =[
  {
    image:IMG1 
  },
  {
    image:IMG2 
  },
  {
    image:IMG3 
  },
  {
    image:IMG4 
  },
  {
    image:IMG5
  },
]
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay,setAutoPlay] = useState(true);
  let timeOut = null

  useEffect (()=>{
    timeOut = autoPlay && setTimeout(()=>{
      slideRight()
    },2000)
  })

  const slideRight = () =>{
    setCurrent (current ===data.length-1? 0 : current+1)
  };
  // const slideLeft = () =>{
  //   setCurrent (current ===0 ? data.length-1: current-1)
  // };

  return (
    <section className="carousel" id='carousel'>
      <div className="carousel_wrapper" >{
        data.map(({image},index) =>{
        return(
          <div className={index === current? "carousel_card carousel_card-active" : "carousel_card"} key={index} onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave={() => {setAutoPlay(true)}}>
            <img className="carousel_image" src={image} alt=''/>
          </div>
        )
      })
      }
      </div>  
    </section>
  )
}

export default ImageSlider