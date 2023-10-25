import React from "react";
import "./portfolio.css";
import IMG1 from "../../Assets/AfricaArt.png";
import IMG2 from "../../Assets/20230727_180943.jpg";
import IMG3 from "../../Assets/WaterlevelManagement_system12345566.jpg";
import IMG4 from "../../Assets/snake game.png";
import IMG5 from "../../Assets/Screenshot 2023-08-02 085036.png";
import IMG6 from "../../Assets/csedu.png";
import IMG7 from "../../Assets/Assembled component.jpg";
import IMG8 from "../../Assets/Wedding invitation From Sammy and Joan.png";
import { motion, variants } from "framer-motion";

const contentAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    //,rotate:[0,90,0]}
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

const textAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    //,rotate:[0,90,0]}
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Illustration Of Africa - ClipsStudio",
    github: "https://github.com/Snortey/Africa-Illustration",
    demo: "https://github.com/Snortey/Africa-Illustration/blob/main/AfricaArt.png",
  },
  {
    id: 2,
    image: IMG2,
    title: "Votex365 frontend",
    github: "https://github.com/Snortey/VotexFrontend",
    demo: "https://www.votex365.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Arduino Water level management system",
    github: "https://github.com/Snortey/water-level-managment-system",
    demo: "https://github.com/Snortey/water-level-managment-system/blob/main/Screenshots/IMG_20220924_183034_078.jpg",
  },
  {
    id: 4,
    image: IMG4,
    title: "Snake game with Python",
    github: "https://github.com/Snortey/Snake-game",
    demo: "https://github.com/Snortey/Snake-game/blob/main/snake%20game.png",
  },
  {
    id: 5,
    image: IMG5,
    title: "DogCo-frontend",
    github: "https://github.com/Snortey/DogCo-frontend",
    demo: "https://github.com/Snortey/DogCo-frontend/blob/main/Screenshot%202023-08-02%20085036.png",
  },
  {
    id: 6,
    image: IMG6,
    title: "CSEDU Frontend",
    github: "https://github.com/Snortey/CSEDU",
    demo: "https://github.com/Snortey/CSEDU/blob/main/csedu.png",
  },
  {
    id: 7,
    image: IMG7,
    title: "Automated Obstacle Avoidance and Path Following Robot",
    github:
      "https://github.com/Snortey/Obstacle-avoidance-and-path-following-robot",
    demo: "https://github.com/Snortey/Obstacle-avoidance-and-path-following-robot/blob/main/Assembled%20component.jpg",
  },
  {
    id: 8,
    image: IMG8,
    title: "Wedding Invitation Card - Illustrator",
    github: "",
    demo: "",
  },
];

const portfolio = () => {
  return (
    <section
      id="portfolio"
      // initial={"offscreen"}
      // whileInView={"onscreen"}
      // viewport={{once:false, amount:0.5}}
      // transition={{staggerChildren:0}}
    >
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
