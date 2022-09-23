import {useState, useRef, useEffect} from 'react'
import './LandingPage.css'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'

function LandingPage() {
  const navigate = useNavigate();

  const leftCheekRef = useRef()
  const jointRef = useRef()
  const fakeFillerRef = useRef()
  const lconRef = useRef()
  
  const [cheekWidth, setCheekWidth] = useState(0);
  // const [wrapperStart, setWrapperStart] = useState(0)
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
    // console.log(`lw: ${lw}`)
    
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
    // console.log(offsetHeight, offsetWidth);
    // console.log(`diff: ${lconWidth/2 - cheekWidth}`)
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
    // console.log(`cheek width: ${leftCheekRef.current.offsetWidth}`)
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
    poster="https://ik.imagekit.io/qljqw3tvn/ibb/psy-still.webp"
    alt="background">
      <source src="https://ik.imagekit.io/qljqw3tvn/ibb/psy-back.mp4"
              type="video/mp4"/>
    </video>

    <div className='landing-container' ref={lconRef}>
        {!isAnimating && 
        <div className='text-box'>
          <img className='text-box-img' src='https://ik.imagekit.io/qljqw3tvn/ibb/click-to-put-opt.gif' alt='Put it in'/>
        </div>}

        {isAnimating && !smoke && 
        <div className='text-box'>
          <img className='text-box-img' src='https://ik.imagekit.io/qljqw3tvn/ibb/light-it-up-opt_YEsJ9qYPZp.gif' alt='Light it up, bitches'/>
        </div>}
        
        <img className='landing-img butt-land' 
          src="https://ik.imagekit.io/qljqw3tvn/ibb/full-butt.png" 
          alt = "lightbutt"/>
          
          <img className='butt-half-land' 
            ref={leftCheekRef} 
            onLoad={onImgLoad}
            src="https://ik.imagekit.io/qljqw3tvn/ibb/butt-half.png" 
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
            src="https://ik.imagekit.io/qljqw3tvn/ibb/joint.png" 
            alt = "joint"
            />
          
        
          {isAnimating&&smoke?
          <div className="smoke-box">
            <motion.img className='smoke-img' 
              src= "https://ik.imagekit.io/qljqw3tvn/tr:w-400/ibb/smoke.png" 
              alt="smoke"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
            
            <motion.img className='burnt-img' 
              src= "https://ik.imagekit.io/qljqw3tvn/ibb/burnt-part.png" 
              alt="burnt"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
          </div>
            :<></>}

        
        </motion.div>
        {isAnimating?
        <motion.img
          src='https://ik.imagekit.io/qljqw3tvn/ibb/puffs-lit.png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />
        :
        <motion.img
          src='https://ik.imagekit.io/qljqw3tvn/ibb/puffs-unlit.png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />}
    </div>
    </BrowserView>
      

    <MobileView>
      {isPortrait? 
      <>
      
      {/* <video autoPlay muted loop playsinline
            className='vid-back'
            poster="https://ik.imagekit.io/qljqw3tvn/ibb/psy-still.webp">
              <source src="https://ik.imagekit.io/qljqw3tvn/ibb/psy-back.mp4"
              type="video/mp4"/>
        </video> */}
        
        <div className="landing-container" ref={lconRef}
        style={{background:"url(https://ik.imagekit.io/qljqw3tvn/ibb/psy-still.webp) no-repeat center fixed"}} 
        >
       
        {!isAnimating && 
        <div className='text-box text-mobile'>
          <img className='text-box-img-mobile' src='https://ik.imagekit.io/qljqw3tvn/ibb/click-to-put-opt.gif' alt='Put it in'/>
        </div>}

        {isAnimating && !smoke && 
        <div className='text-box text-mobile'>
          <img className='text-box-img-mobile' src='https://ik.imagekit.io/qljqw3tvn/ibb/light-it-up-opt_YEsJ9qYPZp.gif' alt='Light it up, bitches'/>
        </div>}
        
        <img className={`landing-img butt-land ${isPortrait? "butt-land-mobile":""}`} 
          src="https://ik.imagekit.io/qljqw3tvn/ibb/full-butt.png" 
          alt = "lightbutt"/>
          
          <img className={`butt-half-land ${isPortrait? "butt-half-mobile":""}`} 
            ref={leftCheekRef} 
            onLoad={onImgLoad}
            src="https://ik.imagekit.io/qljqw3tvn/ibb/butt-half.png" 
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
            src="https://ik.imagekit.io/qljqw3tvn/ibb/joint.png" 
            alt = "joint"
            />
          
        
          {isAnimating&&smoke?
          <div className={`${isPortrait?"smoke-box-mobile":"smoke-box"}`}>
            <motion.img className={`smoke-img ${isPortrait?"smoke-img-mobile":""}`} 
              src= "https://ik.imagekit.io/qljqw3tvn/tr:w-400/ibb/smoke.png" 
              alt="smoke"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
            
            <motion.img className={`burnt-img ${isPortrait?"burnt-img-mobile":""}`} 
              src= "https://ik.imagekit.io/qljqw3tvn/ibb/burnt-part.png" 
              alt="burnt"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
          </div>
            :<></>}

        
        </motion.div>
        {isAnimating?
        <motion.img
          src='https://ik.imagekit.io/qljqw3tvn/ibb/puffs-lit.png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />
        :
        <motion.img
          src='https://ik.imagekit.io/qljqw3tvn/ibb/puffs-unlit.png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />}
    </div>
      </>
      : 
    <>
      {/* <video autoPlay muted loop playsinline
          className='vid-back'
          poster="https://ik.imagekit.io/qljqw3tvn/ibb/psy-still.webp">
            <source src="https://ik.imagekit.io/qljqw3tvn/ibb/psy-back.mp4"
              type="video/mp4"/>
      </video> */}
    <div className="landing-container"
    style={{background:"url(https://ik.imagekit.io/qljqw3tvn/ibb/psy-still.webp) no-repeat center fixed"}}
    ref={lconRef}>
        {!isAnimating && 
        <div className='text-box'>
          <img className='text-box-img' src='https://ik.imagekit.io/qljqw3tvn/ibb/click-to-put-opt.gif' alt='Put it in'/>
        </div>}

        {isAnimating && !smoke && 
        <div className='text-box'>
          <img className='text-box-img' src='https://ik.imagekit.io/qljqw3tvn/ibb/light-it-up-opt_YEsJ9qYPZp.gif' alt='Light it up, bitches!'/>
        </div>}
        
        <img className={`landing-img butt-land ${isPortrait? "butt-land-mobile":""}`} 
          src="https://ik.imagekit.io/qljqw3tvn/ibb/full-butt.png" 
          alt = "lightbutt"/>
          
          <img className={`butt-half-land ${isPortrait? "butt-half-mobile":""}`} 
            ref={leftCheekRef} 
            onLoad={onImgLoad}
            src="https://ik.imagekit.io/qljqw3tvn/ibb/butt-half.png" 
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
            src="https://ik.imagekit.io/qljqw3tvn/ibb/joint.png" 
            alt = "joint"
            />
          
        
          {isAnimating&&smoke?
          <div className={`${isPortrait?"smoke-box-mobile":"smoke-box"}`}>
            <motion.img className={`smoke-img ${isPortrait?"smoke-img-mobile":""}`} 
              src= "https://ik.imagekit.io/qljqw3tvn/tr:w-400/ibb/smoke.png" 
              alt="smoke"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
            
            <motion.img className={`burnt-img ${isPortrait?"burnt-img-mobile":""}`} 
              src= "https://ik.imagekit.io/qljqw3tvn/ibb/burnt-part.png" 
              alt="burnt"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}} />
          </div>
            :<></>}

        
        </motion.div>
        {isAnimating?
        <motion.img
          src='https://ik.imagekit.io/qljqw3tvn/ibb/puffs-lit.png' 
          className='cursor'
          variants={variants}
          animate={cursorVarint}
          />
        :
        <motion.img
          src='https://ik.imagekit.io/qljqw3tvn/ibb/puffs-unlit.png' 
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