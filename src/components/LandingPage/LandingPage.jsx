import {useState, useRef, useEffect} from 'react'
import './LandingPage.css'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { BrowserView, MobileView, isMobile  } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'

function LandingPage({iM}) {
  const navigate = useNavigate();

  const leftCheekRef = useRef()
  const jointRef = useRef()
  const fakeFillerRef = useRef()
  const lconRef = useRef()
  
  const [cheekWidth, setCheekWidth] = useState(0);
  const [wrapperStart, setWrapperStart] = useState(0)
  const [lconWidth, setLconWidth] = useState();
  const [diff, setDiff] = useState(0)
  const [logicCounter, setLogicCounter] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [smoke, setSmoke] = useState(false)

  const [cursorVarint, setCursorVariant] = useState("default")

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  })

  const variants = {
    default: {
      x: mousePosition.x+ 5,
      y: mousePosition.y - 16
    }
  }

  const getLconWidth = () => {
    const lw = lconRef.current.offsetWidth
    console.log(`lw: ${lw}`)
    
    setLconWidth(lw)
  }

  const handleImgClick=()=>{
    setIsAnimating(true)
    if(logicCounter!==0){
      setLogicCounter(logicCounter-1)
    }
    else(
      setSmoke(true)
    )
    
  }

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    setCheekWidth(offsetWidth)
    console.log(offsetHeight, offsetWidth);
    console.log(`diff: ${lconWidth/2 - cheekWidth}`)
    if(isPortrait){
      setDiff(lconWidth/2 - cheekWidth - lconWidth*0.25-50)
    }
    else{
      setDiff(lconWidth/2 - cheekWidth - lconWidth*0.25)
    }
    
  };


  ///////////////////////////////////////////////////////
  useEffect(()=>{
    if(smoke){
      setTimeout(()=>{
        navigate('/choice')
      },2300)
      
    }
  },[smoke])


  useEffect(()=>{
    console.log(`cheek width: ${leftCheekRef.current.offsetWidth}`)
    setCheekWidth(leftCheekRef.current.offsetWidth)
  },[cheekWidth])


  useEffect(()=>{
    const mouseMove= e =>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    getLconWidth()

    window.addEventListener("mousemove",mouseMove)

    window.addEventListener("resize", getLconWidth);

    return () => { 
      window.removeEventListener("mousemove",mouseMove)
      window.removeEventListener("resize", getLconWidth);
  }
  },[])

 

  return (
    <>
   <BrowserView>
   <video autoPlay muted loop 
    className='vid-back'
    alt="background">
      <source src='images/trippy-weed.mp4' 
    type="video/mp4" />
    </video>

    <div className='landing-container' ref={lconRef}>
        {!isAnimating && 
        <div className='text-box'>
          Click to put it in!
        </div>}

        {isAnimating && !smoke && 
        <div className='text-box'>
          Click again to Light it up, bitch!
        </div>}
        
        <img className='landing-img butt-land' 
          src="images/lightbutt.png" 
          alt = "lightbutt"/>
          
          <img className='butt-half-land' 
            ref={leftCheekRef} 
            onLoad={onImgLoad}
            src="images/lightbutt_left.png" 
            alt = "lightbutt-half"/>

          
          <div className="fake-filler" ref={fakeFillerRef}></div>

        <motion.div className="img-wrapper"
          initial={{x:0}}
          animate={{
            x:isAnimating?-diff:0, 
            }}
          transition={{type:"tween", duration:2}}
          onClick={()=>handleImgClick()}
          ref = {jointRef}
        >
        <img className='joint-land' 
            src="images/Only_joint(1).png" 
            alt = "joint"
            />
          
        
          {isAnimating&&smoke?
          <div className="smoke-box">
            <motion.img className='smoke-img' 
              src= "images/smoke.png" 
              alt="smoke"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
            
            <motion.img className='burnt-img' 
              src= "images/BurntPart.png" 
              alt="burnt"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
          </div>
            :<></>}

        
        </motion.div>
        {isAnimating?
        <motion.img
          src='images/L.t.2(1).png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />
        :
        <motion.img
          src='images/L.t.1(1).png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />}
    </div>
    </BrowserView>
      

    <MobileView>
      {isPortrait? 
      <>
      
      <video autoPlay muted loop 
            className='vid-back'
            poster="images/psy-back-still.png">
              <source src='images/trippy-weed.mp4' 
            type="video/mp4" />
        </video>
      {/* <div className='landing-container-mobile-cover'> */}
        
        <div className="landing-container" ref={lconRef}>
       
        {!isAnimating && 
        <div className='text-box text-mobile'>
          Tap to put it in!
        </div>}

        {isAnimating && !smoke && 
        <div className='text-box text-mobile'>
          Tap again to light it up, bitch!
        </div>}
        
        <img className={`landing-img butt-land ${isPortrait? "butt-land-mobile":""}`} 
          src="images/lightbutt.png" 
          alt = "lightbutt"/>
          
          <img className={`butt-half-land ${isPortrait? "butt-half-mobile":""}`} 
            ref={leftCheekRef} 
            onLoad={onImgLoad}
            src="images/lightbutt_left.png" 
            alt = "lightbutt-half"/>

          
          <div className="fake-filler" ref={fakeFillerRef}></div>

        <motion.div className={`img-wrapper ${isPortrait?"img-wrapper-mobile":""}`}
          initial={{x: 0}}
          animate={{
            x:isAnimating?-diff:0, 
            }}
          transition={{type:"tween", duration:2}}
          onClick={()=>handleImgClick()}
          ref = {jointRef}
        >
        <img className={`joint-land ${isPortrait?"joint-land-mobile":""}`} 
            src="images/Only_joint(1).png" 
            alt = "joint"
            />
          
        
          {isAnimating&&smoke?
          <div className={`${isPortrait?"smoke-box-mobile":"smoke-box"}`}>
            <motion.img className={`smoke-img ${isPortrait?"smoke-img-mobile":""}`} 
              src= "images/smoke.png" 
              alt="smoke"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
            
            <motion.img className={`burnt-img ${isPortrait?"burnt-img-mobile":""}`} 
              src= "images/BurntPart.png" 
              alt="burnt"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
          </div>
            :<></>}

        
        </motion.div>
        {isAnimating?
        <motion.img
          src='images/L.t.2(1).png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />
        :
        <motion.img
          src='images/L.t.1(1).png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />}
    </div>
      {/* </div> */}
      </>
      : 
    <>
      <video autoPlay muted loop 
          className='vid-back'
          poster="images/psy-back-still.png">
            <source src='images/trippy-weed.mp4' 
          type="video/mp4" />
      </video>
    <div className={`landing-container  ${isPortrait? "landing-mobile":""}`} ref={lconRef}>
        {!isAnimating && 
        <div className='text-box'>
          Tap to put it in!
        </div>}

        {isAnimating && !smoke && 
        <div className='text-box'>
          Tap again to Light it up, bitch!
        </div>}
        
        <img className={`landing-img butt-land ${isPortrait? "butt-land-mobile":""}`} 
          src="images/lightbutt.png" 
          alt = "lightbutt"/>
          
          <img className={`butt-half-land ${isPortrait? "butt-half-mobile":""}`} 
            ref={leftCheekRef} 
            onLoad={onImgLoad}
            src="images/lightbutt_left.png" 
            alt = "lightbutt-half"/>

          
          <div className="fake-filler" ref={fakeFillerRef}></div>

        <motion.div className={`img-wrapper ${isPortrait?"img-wrapper-mobile":""}`}
          initial={{x: 0}}
          animate={{
            x:isAnimating?-diff:0, 
            }}
          transition={{type:"tween", duration:2}}
          onClick={()=>handleImgClick()}
          ref = {jointRef}
        >
        <img className={`joint-land ${isPortrait?"joint-land-mobile":""}`} 
            src="images/Only_joint(1).png" 
            alt = "joint"
            />
          
        
          {isAnimating&&smoke?
          <div className={`${isPortrait?"smoke-box-mobile":"smoke-box"}`}>
            <motion.img className={`smoke-img ${isPortrait?"smoke-img-mobile":""}`} 
              src= "images/smoke.png" 
              alt="smoke"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
            
            <motion.img className={`burnt-img ${isPortrait?"burnt-img-mobile":""}`} 
              src= "images/BurntPart.png" 
              alt="burnt"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
          </div>
            :<></>}

        
        </motion.div>
        {isAnimating?
        <motion.img
          src='images/L.t.2(1).png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />
        :
        <motion.img
          src='images/L.t.1(1).png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />}
    </div>
    </>
     } 
     </MobileView>
  </>
  )
}

export default LandingPage