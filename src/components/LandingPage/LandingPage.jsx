import {useState, useRef, useEffect} from 'react'
import './LandingPage.css'
import {motion} from "framer-motion"

function LandingPage() {
  const leftCheekRef = useRef(null)
  

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


  useEffect(()=>{
    const mouseMove= e =>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove",mouseMove)

    return () => { 
      window.removeEventListener("mousemove",mouseMove)
    }
  },[])

  return (
    <div className='landing-container'>
        <img className='landing-img butt-land' src="images/bluebutt.png" alt = "bluebutt"/>
        <img className='landing-img butt-half-land' ref={leftCheekRef} src="images/bluebutt_left.png" alt = "bluebutt-half"/>
        {/* <motion.div className='fake-drag'
               > */}
          <motion.img 
              drag="x" 
              // dragConstraints={leftCheekRef}
              dragElastic={0} 
              whileDrag={{scale: 0.9}}
              className='joint-land' 
              src="images/Only_joint(1).png" 
              alt = "joint"/>
          {/* </motion.div> */}

        <motion.img
          src='images/L.t.1(1).png' 
          className='cursor'
          variants={variants}
          animate="default"
        />

        {/* <div className='cursor'/> */}
    </div>
  )
}

export default LandingPage