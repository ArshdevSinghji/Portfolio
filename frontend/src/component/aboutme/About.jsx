import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import image from '../../assets/freepik__adjust__26199.png'
import myimage from '../../assets/image.jpg'
import style from './About.module.css'

const About = () => {
  const [intro, setIntro] = useState(true);
  const [touch, setTouch] = useState(true);

  const handleIntro = () => {
    setIntro(!intro);
  }

  const handleTouch = () => {
    setTouch(!touch);
  }

  const [name] = useTypewriter({
    words: ['अर्शदेव सिंह।', 'Arshdev Singh.'],
    loop:1,
    typeSpeed:120,
  })

  return (
    <div className={style.bigcontainer}>
      <div className={style.container}>
        <motion.div
        initial={{rotate: -90, transformOrigin: "left" }}
        animate={{rotate: 0}}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.25
        }}
         className={style.imageContainer}>
          <img src={myimage} alt="myimage"/>
          <div className={style.textOverlay}>
            <div>Hello,</div>
            <div><span>My name</span></div>
            <div>
              <span>is {name}</span>
              <Cursor cursorStyle="<"/>
            </div>
          </div>
          <div className={style.textOverlay2}>
            <p>
            I am a creative and detail-oriented individual who enjoys bringing ideas to life. 
            Passionate about problem-solving and continuous learning, 
            I thrive in dynamic environments. I value teamwork, adaptability, 
            and persistence, always striving to improve and make a meaningful impact.
            </p>
          </div>
        </motion.div>
        <motion.div 
        className={style.details}>
          <motion.div
          initial={{y:-180}}
          animate={{y:0}}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.25
          }}
          className={style.theDets}>
            <div className={style.introDetails}>
              <span style={{fontWeight: 700, fontSize: "2rem"}}>Introduction</span>
              {
                intro ?
                <FontAwesomeIcon icon={faChevronUp} onClick={handleIntro} style={{cursor:"pointer"}}/>
                :
                <FontAwesomeIcon icon={faChevronDown} onClick={handleIntro} style={{cursor:"pointer"}}/>
              }
            </div>
            {intro && 
              <div className={style.intro}>
                <div style={{fontWeight: 700, fontSize: "1.5rem", display: "flex", justifyContent:"center", paddingTop:"10px"}}>A Full Stack Developer Based In India</div>
                <div className={style.introText}>
                  <div>
                      <span>I’m a full-stack developer passionate about building 
                        scalable and <b>user-friendly applications.</b> I work with<span className={style.underline}>Java, 
                        JavaScript, React, Node.js, Express, MongoDB</span>, and I have experience in <span className={style.underline}>Spring Boot, RESTful APIs, and database management.</span> 
                        I enjoy <b>solving problems</b>, learning new technologies, 
                        and working in collaborative environments to create efficient and meaningful solutions.</span>
                  </div>
                  <div className={style.illustration}>
                    <img src={image} alt="illustration"/>
                  </div>
                </div>
              </div>
            }
          </motion.div>
          <hr style={{border:"1px solid #808080", width:"100%", marginTop:"10px"}}/>
          <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.25
          }}
          className={style.touch}>
            <span style={{fontWeight: 700, fontSize:'2rem'}}>Get In Touch</span>
            {touch ?
              <FontAwesomeIcon icon={faChevronUp} onClick={handleTouch} style={{cursor:"pointer"}}/>
              :
              <FontAwesomeIcon icon={faChevronDown} onClick={handleTouch} style={{cursor:"pointer"}}/>
            }
          </motion.div>
          {touch && 
            <div className={style.touchDetails}>
              <motion.div 
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                bounce: 0.25
              }}
              className={style.email}>
                <div className={style.logo}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <hr style={{border:"1px solid #fff", padding:"0 2px 0 2px", width:"100%"}}/>
                <div className={style.linkText}>
                    arshdevrajput@gmail.com
                </div>
              </motion.div>
              <motion.div
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                bounce: 0.25
              }}
              className={style.linkedIn}>
                <div className={style.logo}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <hr style={{border:"1px solid #fff", padding:"0 2px 0 2px", width:"100%"}}/>
                <div className={style.linkText}>
                  linkedin.com/in/arshdevsingh
                </div>
              </motion.div>
              <motion.div
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.3,
                type: "spring",
                bounce: 0.25
              }}
              className={style.email} style={{background:"#2b3137"}}>
                <div className={style.logo}>
                    <FontAwesomeIcon icon={faSquareGithub} />
                  </div>
                  <hr style={{border:"1px solid #fff", padding:"0 2px 0 2px", width:"100%"}}/>
                  <div className={style.linkText}>
                    github.com/ArshdevSinghji
                  </div>
              </motion.div>
            </div>
          }
        </motion.div>
      </div>
    </div>
  )
}

export default About
