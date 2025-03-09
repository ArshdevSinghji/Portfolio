import React from 'react'
import {  motion, useTime, useTransform } from 'framer-motion'
import express from "../../assets/expressJS.svg";
import style from './Experience.module.css'
const Experience = () => {

  const time=useTime();

  const rotate = useTransform(time,[0,3000],[0,360],{clamp:false});
  const rotatingBg= useTransform(rotate, (r)=>{
    return `conic-gradient(from  ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`
  })
  
  const languages = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", color: "#7f52ff" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#f0db4f" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", color: "#f89820" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#4db33d" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line.svg", color: "#68a063" },
  ];

  const tools = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg", color: "#1D76DB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#f34f29" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", color: "#3ddc84" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", color: "#ff6c37" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", color: "#0078d7" },      
  ];

  const frameWorks = [
    { src: "../../assets/icons8-express-js.svg", color: "#fff" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61dafb" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", color: "#6db33f" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", color: "#ff2d20" },
  ];

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.3}}
    className={style.container}>
      <div className={style.vignette}/>
      <div className={style.framerRow}>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
      </div>
      <div className={style.framerRow}>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={frameWorks[1].src} alt="react"/>
          </div>
          <motion.div 
        className={style.gradient}
        style={{background: rotatingBg}}/>
        </motion.div> 
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={frameWorks[2].src} alt="spring"/>
          </div>
          <motion.div 
          className={style.gradient}
          style={{background: rotatingBg}}/>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={express} alt="express"/>
          </div>
          <motion.div 
          className={style.gradient}
          style={{background: rotatingBg}}/>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={frameWorks[3].src} alt="laravel"/>
          </div>
          <motion.div 
          className={style.gradient}
          style={{background: rotatingBg}}/>
        </motion.div>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
      </div>
      <div className={style.framerRow}>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={languages[0].src} alt="kotlin"/>
          </div>
          <motion.div 
        className={style.gradient}
        style={{background: rotatingBg}}/>
        </motion.div> 
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={languages[1].src} alt="javascript"/>
          </div>
          <motion.div 
        className={style.gradient}
        style={{background: rotatingBg}}/>
        </motion.div> 
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={languages[2].src} alt="java"/>
          </div>
          <motion.div 
        className={style.gradient}
        style={{background: rotatingBg}}/>
        </motion.div> 
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={languages[3].src} alt="mongodb"/>
          </div>
          <motion.div 
        className={style.gradient}
        style={{background: rotatingBg}}/>
        </motion.div> 
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={languages[4].src} alt="nodejs"/>
          </div>
          <motion.div 
        className={style.gradient}
        style={{background: rotatingBg}}/>
        </motion.div> 
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
      </div>
      <div className={style.framerRow}>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={tools[0].src} alt="intellij"/>
          </div>
          <motion.div 
        className={style.gradient}
        style={{background: rotatingBg}}/>
        </motion.div> 
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={tools[1].src} alt="git"/>
          </div>
          <motion.div 
          className={style.gradient}
          style={{background: rotatingBg}}/>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={tools[2].src} alt="androidstudio"/>
          </div>
          <motion.div 
          className={style.gradient}
          style={{background: rotatingBg}}/>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={tools[3].src} alt="postman"/>
          </div>
          <motion.div 
          className={style.gradient}
          style={{background: rotatingBg}}/>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1, cursor:"pointer"}}
        transition={{duration:0.3, ease:"easeInOut"}} 
        className={style.box}>
          <div className={style.gBox}>
            <img src={tools[4].src} alt="vscode"/>
          </div>
          <motion.div 
        className={style.gradient}
        style={{background: rotatingBg}}/>
        </motion.div> 
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
      </div>
      <div className={style.framerRow}>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
        <div className={style.divBox}/>
      </div>
      <div className={style.text}>
        <div>Ideas into code,</div>
        <div>dreams into reality.</div>
      </div>
    </motion.div> 
  )
}

export default Experience
