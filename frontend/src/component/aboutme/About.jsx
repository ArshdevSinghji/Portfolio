import React, { useState } from 'react'
import style from './About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
const About = () => {
  const [intro, setIntro] = useState(false);
  const [touch, setTouch] = useState(false);

  const handleIntro = () => {
    setIntro(!intro);
  }

  const handleTouch = () => {
    setTouch(!touch);
  }

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>image</div>
      <div className={style.details}>
        <div className={`${style.theDets}`}>
          <div className={style.introDetails}>
            <span style={{fontWeight: 600}}>Introduction</span>
            {
              intro ?
              <FontAwesomeIcon icon={faChevronUp} onClick={handleIntro}/>
              :
              <FontAwesomeIcon icon={faChevronDown} onClick={handleIntro}/>
            }
          </div>
          {intro && 
            <div className={style.intro}>
              <p>
                I am a full-stack web developer with a passion for creating beautiful and functional websites.
                I have experience working with JavaScript, React, Node.js, Express, and MongoDB.
                I am a quick learner and a team player with a strong work ethic.
              </p>
            </div>
          }
        </div>
        <div className={style.touch}>
          <span style={{fontWeight: 600}}>Get In Touch</span>
          {touch ?
            <FontAwesomeIcon icon={faChevronUp} onClick={handleIntro}/>
            :
            <FontAwesomeIcon icon={faChevronDown} onClick={handleIntro}/>
          }
        </div>
      </div>
    </div>
  )
}

export default About
