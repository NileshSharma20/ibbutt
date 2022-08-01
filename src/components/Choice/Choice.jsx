import {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { BsPlay, BsPause } from 'react-icons/bs'
import "./Choice.css"
// import ReactHowler from 'react-howler'

function Choice() {
  const navigate = useNavigate();
  const [failedFlag, setFailedFlag] = useState(false)
  const [passedFlag, setPassedFlag] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

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

  useEffect(()=>{
    if(isPlaying){
      audioRef.current.play()
    }
    else{
      audioRef.current.pause()
    }
    console.log(`${isPlaying}`)
  },[isPlaying])

  return (
    <>
    <video autoPlay muted loop 
          className='vid-back'
          poster="images/psy-back-still.png">
            <source src='images/psy-light-back.mp4' 
          type="video/mp4" />
      </video>
    
    <div className='choice-container'>
      
      <div className="choice-box">
      <img className='choice-img boobs' 
        src="images/Chesticles(1).png"
        onClick={()=>setFailedFlag(true)} 
        alt = "test"/>

      <img className='choice-img line' src='images/line.png'/>
      
      <img className='choice-img butt' 
        src="images/B.t(1).png" 
        onClick={()=>setPassedFlag(true)}
        alt = "test"/>
      </div>
      <div className="choice-text">
        <img  className='choose-img-text' src='images/choose.gif' alt="text" />
      </div>
    </div>

    <audio 
      src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" 
      ref={audioRef} />

    {/* <div className={` ${isPortrait?"return-btn-mobile":"return-btn"}`} 
        onClick={()=>setIsPlaying(!isPlaying)}>
          {isPlaying? <BsPause />:<BsPlay />}
    </div> */}
    </>
  )
}

export default Choice