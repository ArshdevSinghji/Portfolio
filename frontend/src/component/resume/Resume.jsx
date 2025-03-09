import React, { useState } from 'react'
import style from './Resume.module.css'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faCircleCheck, faAward, faRotate } from '@fortawesome/free-solid-svg-icons'
const Resume = () => {
  const [projects, setProjects] = useState(true);
  const [expertise, setExpertise] = useState(true);
  const [education, setEducation] = useState(true);
  const [achievements, setAchievements] = useState(true);
  const [internship, setInternship] = useState(true);

  const handleProjects = () => {
    setProjects(!projects);
  }

  const handleInternship = () => {
    setInternship(!internship);
  }

  const handleAchieve = () => {
    setAchievements(!achievements);
  }

  const handleEdu = () => {
    setEducation(!education);
  }

  const handleExpertise = () => {
    setExpertise(!expertise);
  }

  const softskill = ["Creativity", "Teamwork", "Problem_Solving", "Adaptability", "Leadership","Work_Ethic", "Communication", "Attention_to_Detail"];
  const achieve=
  [
    <span><b><u>300+ Data Structure & Algorithm</u></b> problems solved.</span>,
    <span>1<sup>st</sup> Runner Up in <b><u>One India</u></b> ,2024.</span>,
    <span>Winner of <b><u>Concoction</u></b>, 2023 (<i>Reel Making</i>).</span>,
    <span>Winner of <b><u>Pithu Tournament</u></b>, 2025.</span>,
    <span>Finalist in <b><u>24hr Hackathon</u></b>, 2024.</span>
  ];
  return (
    <div>
      <div className={style.container}>
        <motion.div
        initial={{x:-100, opacity:0}}
        animate={{x:0, opacity:1}}
         className={style.detailContainer} style={{borderRight:"1px solid #808080", paddingRight:"30px"}}>  
        <div className={style.title}>
              <h1>Projects</h1>
              {
                projects ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleProjects} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleProjects} style={{cursor:"pointer"}}/>
              }
            </div>
              {
                projects && 
                <div>
                  <div className={style.projectDetail}>
                    <div className={style.projectYear}>
                      <span>2025</span>
                      <FontAwesomeIcon icon={faRotate} spin style={{fontSize:"22px"}}/>
                    </div>
                    <div>
                      <div style={{color:"#4d4d4d", fontSize:"14px"}}><i>Skills: ReactJS, NodeJS, ExpressJS, MongoDB</i></div>
                      <div style={{fontSize:"1.3rem", fontWeight:"600"}}>Role Based Access Control UI</div>
                      <div style={{fontSize:"14px"}}>(Click Me!)</div>
                    </div>
                  </div>
                  <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>
                  <div className={style.projectDetail}>
                    <div className={style.projectYear}>
                      <span>2024</span>
                      <FontAwesomeIcon icon={faRotate} spin style={{fontSize:"22px"}}/>
                    </div>
                    <div>
                      <div style={{color:"#4d4d4d", fontSize:"14px"}}><i>Skills: Javascript, ReactJS</i></div>
                      <div style={{fontSize:"1.3rem", fontWeight:"600"}}>Virtual Bookshelf</div>
                      <div style={{fontSize:"14px"}}>(Click Me!)</div>
                    </div>
                  </div>
                  <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>
                  <div className={style.projectDetail}>
                    <div className={style.projectYear}>
                      <span>2025</span>
                      <FontAwesomeIcon icon={faRotate} spin style={{fontSize:"22px"}}/>
                    </div>
                    <div>
                      <div style={{color:"#4d4d4d", fontSize:"14px"}}><i>Skills: ReactJS, Spring Boot, H2 Database, Spring Web, JPA, Lombok</i></div>
                      <div style={{fontSize:"1.3rem", fontWeight:"600"}}>E-Commerce Platform</div>
                      <div style={{fontSize:"14px"}}>(Click Me!)</div>
                    </div>
                  </div>
                </div>
              }
        </motion.div>
        <motion.div 
        initial={{y:-100, opacity:0}}
        animate={{y:0, opacity:1}}
        className={style.detailContainer}>
          <div className={style.title}>
              <h1>Softskill</h1>
              {
                expertise ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleExpertise} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleExpertise} style={{cursor:"pointer"}}/>
              }
            </div>
            {
              expertise &&
              <div className={style.expertise}>
                {
                  softskill.map((skill, index) => {
                    return (
                      <div key={index} className={(index === 2 || index === 6) ? style.color : style.skill}>
                        <span>#{skill}</span>
                      </div>
                    )
                  })
                }
              </div>
            }

            <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>

            <div className={style.title}>
              <h1 style={{marginTop:"0"}}>Internship</h1>
              {
                internship ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleInternship} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleInternship} style={{cursor:"pointer"}}/>
              }
            </div>
            {
              internship &&
              <div className={style.intern}>
                <div className={style.internDetail}>
                    <div className={style.internYear}>
                      <span>2023</span>
                      <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"22px"}}/>
                    </div>
                    <div>
                      <div style={{color:"#666666", fontSize:"14px"}}>Ranjit Bakshi Jankalyan Foundation, Jassur</div>
                      <div style={{fontSize:"1.3rem", fontWeight:"500"}}>Social Worker</div>
                      <div style={{fontSize:"14px"}}>(Duration: 30 hours)</div>
                    </div>
                  </div>
              </div>
            }

            <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>

            <div className={style.title}>
              <h1 style={{marginTop:"0"}}>Achievements</h1>
              {
                achievements ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleAchieve} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleAchieve} style={{cursor:"pointer"}}/>
              }
            </div>
            {
              achievements &&
              <div className={style.achievement}>
                {
                  achieve.map((ach, index) => {
                    return (
                      <div key={index} className={style.achieve}>
                        <FontAwesomeIcon icon={faAward} style={{marginRight:"10px"}}/>
                        <span>{ach}</span>
                      </div>
                    )
                  })
                }
              </div>
            }

        </motion.div>
        <motion.div 
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        className={style.detailContainer} style={{borderLeft:"1px solid #808080", paddingLeft:"30px"}}>
            <div className={style.title}>
              <h1>Education</h1>
              {
                education ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleEdu} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleEdu} style={{cursor:"pointer"}}/>
              }
            </div>
              {
                education && 
                <div className={style.education}>
                  <div className={style.eduDetail}>
                    <div className={style.year}>
                      <span>2022-present</span>
                      <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"22px"}}/>
                    </div>
                    <div className={style.eduContent}>
                      <div style={{color:"#d3d3d3", fontSize:"14px"}}>Lovely Professional University, Punjab</div>
                      <div style={{fontSize:"1.3rem", fontWeight:"500"}}>Computer Science Engineer</div>
                      <div style={{fontSize:"14px"}}>(CGPA: 7.78/10)</div>
                    </div>
                  </div>
                  <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>
                  <div className={style.eduDetail}>
                    <div className={style.year}>
                      <span>2021-2022</span>
                      <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"22px"}}/>
                    </div>
                    <div className={style.eduContent}>
                      <div style={{color:"#d3d3d3", fontSize:"14px"}}>GSSS Baranda, Himachal Pradesh</div>
                      <div style={{fontSize:"1.3rem", fontWeight:"500"}}>XII<sup>th</sup></div>
                      <div style={{fontSize:"14px"}}>(Percentage: 89/100)</div>
                    </div>
                  </div>
                  <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>
                  <div className={style.eduDetail}>
                    <div className={style.year}>
                      <span>2019-2020</span>
                      <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"22px"}}/>
                    </div>
                    <div className={style.eduContent}>
                      <div style={{color:"#d3d3d3", fontSize:"14px"}}>Modern Sandeepni School, Punjab</div>
                      <div style={{fontSize:"1.3rem", fontWeight:"500"}}>X<sup>th</sup></div>
                      <div style={{fontSize:"14px"}}>(Percentage: 88.2/100)</div>
                    </div>
                  </div>
                </div>
              }
        </motion.div>
      </div>      
    </div>
  )
}

export default Resume
