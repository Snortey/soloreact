import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/AfricaArt.png'
import IMG2 from '../../Assets/20230727_180943.jpg'
import IMG3 from '../../Assets/WaterlevelManagement_system12345566.jpg'
import IMG4 from '../../Assets/snake game.png'
import IMG5 from '../../Assets/Screenshot 2023-08-02 085036.png'
import IMG6 from '../../Assets/csedu.png'
import IMG7 from '../../Assets/Assembled component.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Illustration Of Africa - ClipsStudio',
    github: 'https://github.com',
    demo: '../../Assets/AfricaArt.png'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Votex365 frontend',
    github: 'https://github.com',
    demo: 'https://www.votex365.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Arduino Water level management system',
    github: 'https://github.com/Snortey/water-level-managment-system',
    demo: '../../Assets/WaterlevelManagement_system.jpg'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Snake game with Python',
    github: 'https://github.com/Snortey/Snake-game',
    demo: '../../Assets/snake game.png'
  },
  {
    id: 5,
    image: IMG5,
    title: 'DogCo-frontend',
    github: 'https://github.com/Snortey/DogCo-frontend',
    demo: '../../Assets/Screenshot 2023-08-02 085036.png'
  },
  {
    id: 6,
    image: IMG6,
    title: 'CSEDU Frontend',
    github: 'https://github.com/Snortey/CSEDU',
    demo: '../../Assets/csedu.png'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Automated Obstacle Avoidance and Path Following Robot',
    github: 'https://github.com/Snortey/Obstacle-avoidance-and-path-following-robot',
    demo: '../../Assets/Assembled component.jpg'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
              <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
              </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio