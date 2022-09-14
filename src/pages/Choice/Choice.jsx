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

  return (
    <>
    <video autoPlay muted loop 
          className='vid-back'
          poster="https://ik.imagekit.io/qljqw3tvn/ibb/psy-back-still.webp">
            <source src='images/psy-light-back.mp4' 
          type="video/mp4" />
      </video>
    
    <div className='choice-container'>
      
      <div className="choice-box">
      <img className='choice-img boobs' 
        src="https://ik.imagekit.io/qljqw3tvn/ibb/Chest.png"
        onClick={()=>setFailedFlag(true)} 
        alt = "test"/>

      <img className='choice-img line' src='https://ik.imagekit.io/qljqw3tvn/ibb/line.png'/>
      
      <img className='choice-img butt' 
        src="https://ik.imagekit.io/qljqw3tvn/ibb/choice-butt_9UFmYrnB4.png" 
        onClick={()=>setPassedFlag(true)}
        alt = "test"/>
      </div>
      <div className="choice-text">
        <img  className='choose-img-text' 
          srcset="https://ik.imagekit.io/qljqw3tvn/tr:w-600/ibb/choice.gif 400w,
          https://ik.imagekit.io/qljqw3tvn/tr:w-800/ibb/choice.gif 600w,
          https://ik.imagekit.io/qljqw3tvn/tr:w-900/ibb/choice.gif 800w,"
          sizes='400px, 600px, 800px'
          src='https://ik.imagekit.io/qljqw3tvn/tr:w-800/ibb/choice.gif' alt="text" />
      </div>
    </div>

    <audio 
      src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" 
      ref={audioRef} />
    </>
  )
}

export default Choice