import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faHandPointRight, faHouseUser, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './CodeNav.module.css';

const CodeNav = () => {
  const tabs = [
    "https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000", 
    "https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000", 
  ];
  const paths = ["/leetcode", "/gfg", "/"];
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

  return (
    <div className={style.container}>
      {/* <div className={style.nav}>
        <ul className={style.tabContainer}>
          {tabs.map((tab, index) => (
            <li key={index} className={style.tab}>
              <Link
                to={paths[index]}
                onClick={() => setSelectedTab(tab)}
                className={style.link}
              >
                <img src={tab} style={{height:"25px", width:"25px"}}/>
                {tab === selectedTab && (
                  <motion.div
                    className={style.underline}
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
      <div className={style.code}>
        <motion.div
            initial={{x:-5}}
            animate={{x:0}}
            transition={{repeat:Infinity, repeatType:"reverse", duration:0.5}}>
            <FontAwesomeIcon icon={faHandPointRight} style={{fontSize:"16px", color:"#DC143C"}}/>
        </motion.div>
        <div>
            <Link to={{pathname: '/'}}>
                <FontAwesomeIcon icon={faHouseUser} style={{cursor:"pointer", color:"#fff"}}/>
            </Link> 
        </div>
      </div>
    </div>
  );
};

export default CodeNav;