import {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import "./Choice.css"
// import ReactHowler from 'react-howler'

function Choice() {
  const navigate = useNavigate();
  const [failedFlag, setFailedFlag] = useState(false)
  const [passedFlag, setPassedFlag] = useState(false)

  const bgImg = "https://ik.imagekit.io/qljqw3tvn/ibbutt/bg/psychedelic_I%20feel%20dizzy...__t08q8NcPB9.png"
  const boobImgSrc="https://ik.imagekit.io/qljqw3tvn/ibbutt/boob-Photoroom-enlarged-upscaled-2_CdsBmt3a7E.png"
  const buttImgSrc = "https://ik.imagekit.io/qljqw3tvn/ibbutt/butt-Photoroom-enlarged-upscaled_QorIY_hvy.png"

  const audioRef = useRef();

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  useEffect(()=>{
    if(failedFlag){
      navigate('/failed')
    }
  },[failedFlag])

  useEffect(()=>{
    if(passedFlag){
      navigate('/welcome')
    }
  },[passedFlag])

  return (
    <>
    {/* <video autoPlay muted loop 
          className='vid-back'
          poster="https://ik.imagekit.io/qljqw3tvn/ibb/psy-back-still.webp">
            <source src="https://ik.imagekit.io/qljqw3tvn/ibb/psy-back.mp4"
              type="video/mp4"/>
    </video> */}
    
    <div className='choice-container'>

      <img src={bgImg} alt="backgroundImg" className="choice-bg-img" />
      
      <div className="choice-box">
        <img className='choice-img boobs' 
          src={boobImgSrc}
          onClick={()=>setFailedFlag(true)} 
          alt = "boobs"/>

        {/* <img className='choice-img line' src='https://ik.imagekit.io/qljqw3tvn/ibbutt/line-bulb_AsVq-xxT5D.PNG' alt="line"/> */}
      
        <img className='choice-img butt' 
          src={buttImgSrc}
          onClick={()=>setPassedFlag(true)}
          alt = "butts"/>
      </div>

      <div className="choice-text">
        <p>Choose wisely!</p>
      </div>
    </div>

    <audio 
      src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" 
      ref={audioRef} />
    </>
  )
}

export default Choice