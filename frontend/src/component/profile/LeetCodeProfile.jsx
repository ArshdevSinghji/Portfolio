import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { easeIn, motion, useAnimation, useInView } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import me from '../../assets/me.jpeg';
import 'chart.js/auto';
import CodeNav from '../navbar/CodeNav';
import style from './Profile.module.css';
import GFGProfile from './GeeksForGeeks';

const LeetCodeProfile = () => {
  const [profile, setProfile] = useState(null);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ label: "Submissions", data: [], borderColor: "#FFA116", backgroundColor: "#FFA116" }]
  });
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          color: '#fff',
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Submissions',
          color: '#fff',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#fff',
        },
      },
    },
  });

  const username = "Arshdev";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/leetcode", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        });

        const data = await response.json();
        if (!data.data || !data.data.matchedUser) {
          console.error("No matched user found");
          return;
        }

        setProfile(data.data.matchedUser);

        const submissionCalendar = data.data.matchedUser.submissionCalendar;
        if (!submissionCalendar) {
          console.error("No submission calendar found");
          return;
        }

        const parsedCalendar = JSON.parse(submissionCalendar);
        const dates = Object.keys(parsedCalendar).map(ts => 
          new Date(ts * 1000).toISOString().split('T')[0]  // Converts to YYYY-MM-DD format
        );
        
        const counts = Object.values(parsedCalendar); // Submission counts

        setChartData({
          labels: dates,
          datasets: [
            {
              label: "Submissions",
              data: counts,
              fill: false,
              backgroundColor: '#FFA116',
              borderColor: '#FFA116',
            },
          ],
        });

      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    }

    fetchData();
  }, []);

  const colors = ["#fff", "#1CBABA", "#ECA705", "#F63737"]

  return (
    <div>
      <CodeNav />
      <div className={style.container}>
        {profile ? (
          <div className={style.profile}>
            <div className={style.header}>
              <div className={style.title}>
                <Delay>In the world of software, </Delay>
                <Delay>the best way to predict the future is to invent it.</Delay>
              </div>
              <div className={style.intro}>
                <Delay className={style.name}>
                  <div>
                    <p style={{fontSize:"2rem", fontWeight:"500"}}>Arshdev Singh</p>
                  </div>
                  <div className={style.info}>
                    <div className={style.role}>
                      <div style={{fontWeight:"600"}}>Role</div>
                      <p>Coder</p>
                    </div>
                    <div className={style.work}>
                    "Arshdev Singh" is a character in the tech-drama series <u>"Code & Conquer"</u>. 
                    A brilliant full-stack developer, they excel in building seamless 
                    applications while tackling complex DSA challenges, navigating the 
                    ever-evolving world of code with precision and ingenuity.
                    </div>
                  </div>
                </Delay>
                <div className={style.avatar}>
                  <motion.img
                  variants={{
                    hidden: { opacity: 0 , y: 75},
                    visible: { opacity: 1 ,y: 0}
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5 , delay: 0.25}}
                  src={me} className={style.image}/>
                </div>
              </div>
            </div>
            <div className={style.stats}>
              <Highlight>
                <span className={style.font} style={{fontSize:"4rem"}}><span style={{color:'#FFA116'}}>Leet</span>Code.</span>
              </Highlight>
              <div className={style.stat}>
                <div style={{
                  display:"flex",
                  flexDirection:"row-reverse",
                  width: "100%",
                  marginBottom: "1rem",
                }}>
                  <div
                  className={style.count} style={{backgroundColor: "#5EBE76"}}>
                    <div>
                      <span>Solved</span>
                    </div>
                    <div className={style.number}>
                      <AnimatedCount count={profile.submitStats.acSubmissionNum[0].count} style={{color: colors[0]}} />
                    </div>
                  </div>      
                </div>
                <div style={{
                  display:"flex",
                  flexDirection:"row-reverse",
                  width: "100%",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}>
                  <div className={style.count} style={{backgroundColor: colors[3]}}>
                    <div>
                      <span>HARD</span>
                    </div>
                    <div className={style.number}>
                      <AnimatedCount count={profile.submitStats.acSubmissionNum[3].count} style={{color: colors[0]}} />
                    </div>
                  </div>
                  <div className={style.count} style={{backgroundColor: colors[2]}}>
                    <div>
                      <span>MEDIUM</span>
                    </div>
                    <div className={style.number}>
                      <AnimatedCount count={profile.submitStats.acSubmissionNum[2].count} style={{color: colors[0]}} />
                    </div>
                  </div>
                  <div className={style.count} style={{backgroundColor: colors[1]}}>
                    <div>
                      <span>EASY</span>
                    </div>
                    <div className={style.number}>
                      <AnimatedCount count={profile.submitStats.acSubmissionNum[1].count} style={{color: colors[0]}} />
                    </div>
                  </div>
                </div>
                {chartData && (
                  <Highlight>
                    <div className={style.chart}>
                      <Line data={chartData} options={chartOptions} />
                    </div>
                  </Highlight>
                )}
              </div>
              {/* <GFGProfile/> */}
            </div>
          </div>
        ) : (
          <div className={style.loading}>
            <FontAwesomeIcon icon={faGear} spin size='5px'/>
          </div>
        )}
      </div>
    </div>
  );
}

const Delay = ({children}) => {
  return(
    <div>
      <motion.div
      variants={{
        hidden: { opacity: 0 , y: 75},
        visible: { opacity: 1 ,y: 0}
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 , delay: 0.25}}>
        {children}
      </motion.div>
    </div>
  )
}

const Highlight = ({children}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(()=>{
    if(inView){
      mainControls.start("visible");
      slideControls.start("visible");
    }
  },[inView]);

  return (
    <div ref={ref} style={{position:"relative", display:"inline-block", width:"auto", overflow:"hidden"}}>
      <motion.div
        variants={{
          hidden: { opacity: 0 , y: 75},
          visible: { opacity: 1 ,y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5 , delay: 0.25}}>
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { x: "0"},
          visible: { x: "100%"}
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5 , ease: easeIn}}
        style={{
          position:"absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#FFA116",
          zIndex: 20
        }}
      />
    </div>
  );
};

const AnimatedCount = ({ count, style }) => {
  const controls = useAnimation();
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    controls.start({
      count,
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [count, controls]);

  useEffect(() => {
    controls.set({ count: 0 });
    controls.start({
      count,
      transition: { duration: 2, ease: "easeInOut" },
    }).then(() => {
      setDisplayCount(count);
    });
  }, [count, controls]);

  return (
    <motion.span
      initial={{ count: 0 }}
      animate={controls}
      onUpdate={(latest) => setDisplayCount(Math.round(latest.count))}
      style={style}
    >
      {displayCount}
    </motion.span>
  );
};

export default LeetCodeProfile;