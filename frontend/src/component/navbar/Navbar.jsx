import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import style from './Navbar.module.css';

const Navbar = () => {
    const tabs = ["About me", "Resume", "Experience"];
    const paths = ["/", "/resume", "/experience"];
    const location = useLocation();

    const [selectedTab, setSelectedTab] = useState(() => {
      const savedTab = localStorage.getItem('selectedTab');
      return savedTab ? savedTab : tabs[0];
    });
  
    useEffect(() => {
      localStorage.setItem('selectedTab', selectedTab);
    }, [selectedTab]);
  
    useEffect(() => {
      const currentPath = location.pathname;
      const currentTab = tabs[paths.indexOf(currentPath)];
      if (currentTab) {
        setSelectedTab(currentTab);
      }
    }, [location.pathname]);

    useEffect(()=>{
        if(selectedTab === "Experience"){
            document.body.classList.add(style.darkTheme);
        }else{
            document.body.classList.remove(style.darkTheme);
        }
        return () => {
            document.body.classList.remove(style.darkTheme);
        }
    },[selectedTab]);

    return (
        <div className={style.container}>
            <div className={style.nav}>
                <ul className={style.tabContainer}>
                    {tabs.map((tab, index) => (
                        <li key={index} className={style.tab}>
                            <Link 
                                to={paths[index]}
                                onClick={() => setSelectedTab(tab)} 
                                className={style.link}
                            >
                                {tab}
                                {tab === selectedTab && <motion.div className={style.underline} layoutId="underline" />}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.code}>
                <motion.div
                    initial={{x:-5}}
                    animate={{x:0}}
                    transition={{repeat:Infinity, repeatType:"reverse", duration:0.5}}>
                    <FontAwesomeIcon icon={faHandPointRight} style={{fontSize:"16px", color:"#DC143C"}}/>
                </motion.div>
                <div>
                    <Link to={{pathname: '/leetcode'}}>
                        <FontAwesomeIcon icon={faSquarePollVertical} style={{cursor:"pointer"}}/>
                    </Link> 
                </div>
            </div>
        </div>
    );
}

export default Navbar;
