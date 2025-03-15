import { useState, useEffect, useRef } from "react";
import { easeIn, motion, useAnimation, useInView } from 'framer-motion';

const GFGProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://portfolio-bi16.onrender.com/gfg");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GFG data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      {profile && (
        <Highlight>
          <span style={{fontFamily:"Bebas Neue, sans-serif", fontSize:"4rem"}}>Geeks<span style={{color:"#2F8D46"}}>For</span>Geeks.</span>
        </Highlight>
        
      )}
    </div>
  );
};


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
          background: "#2F8D46",
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

export default GFGProfile;