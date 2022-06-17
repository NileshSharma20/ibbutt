import {useState, useRef, useEffect} from 'react'
import './LandingPage.css'
import {motion} from "framer-motion"

function LandingPage() {
  const leftCheekRef = useRef(null)
  const jointRef = useRef(null)
  const fakeFillerRef = useRef(null)
  
  const [cheekWidth, setCheekWidth] = useState(0);
  const [jointX, setJointX] = useState();
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  })

  const variants = {
    default: {
      x: mousePosition.x+ 2,
      y: mousePosition.y - 16
    }
  }

  const getJointPosition=()=>{
    var x = jointRef.current.offsetLeft;
    setJointX(x);
  }



  useEffect(()=>{
    console.log(`cheek width: ${leftCheekRef.current.offsetWidth}`)
    setCheekWidth(leftCheekRef.current.offsetWidth)
  },[cheekWidth])

  useEffect(()=>{
    console.log(`jointX: ${jointX}`)
    getJointPosition();
  },[jointX])

  useEffect(()=>{
    const mouseMove= e =>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    getJointPosition();

    window.addEventListener("mousemove",mouseMove, getJointPosition)

    window.addEventListener("resize", getJointPosition);

    return () => { 
      window.removeEventListener("mousemove",mouseMove, getJointPosition)
    }
  },[])

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    setCheekWidth(offsetWidth)
    console.log(offsetHeight, offsetWidth);
  };

  return (
    <div className='landing-container'>
        
        <img className='landing-img butt-land' 
          src="images/lightbutt.png" 
          alt = "bluebutt"/>
        
        <div className="fake-space">
          
          <img className='butt-half-land' 
            ref={leftCheekRef} 
            onLoad={onImgLoad}
            src="images/lightbutt_left.png" 
            alt = "lightbutt-half"/>
          
          <div className="fake-filler" ref={fakeFillerRef}></div>
        
        </div>
        
        <motion.img 
            drag="x" 
            dragConstraints={fakeFillerRef}
            dragElastic={0} 
            dragMomentum={false}
            whileDrag={{scale: 0.95}}
            className='joint-land' 
            ref = {jointRef}
            src="images/Only_joint(1).png" 
            alt = "joint"/>

        <motion.img
          src='images/L.t.1(1).png' 
          className='cursor'
          variants={variants}
          animate="default"/>

        {/* <div className='cursor'/> */}
    </div>
  )
}

export default LandingPage