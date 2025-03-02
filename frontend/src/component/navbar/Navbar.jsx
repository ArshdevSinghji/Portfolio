import React,{ useState } from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    const nav=["About me", "Resume", "Experience"];

    return (
        <div className={style.navbar}>
            <div className={style.navlinks}>
                {nav.map((item, index)=>{
                    return (
                        <Link to={index==0 ? "/" : index==1 ? "/resume" : "/experience"} 
                        className={style.link}>
                            <div key={index} 
                            onClick={() => handleClick(index)} 
                            className={activeIndex==index ? style.border : ""}>{item}</div>
                        </Link>
                    )
                })}
            </div>
        </div>
      )
}

export default Navbar
