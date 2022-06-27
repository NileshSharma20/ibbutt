import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Choice.css"

function Choice() {
  const navigate = useNavigate();
  const [failedFlag, setFailedFlag] = useState(false)
  const [passedFlag, setPassedFlag] = useState(false)

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
        {/* <video autoPlay muted loop 
            className='choice-back'
            poster="images/images/chooseText.png">
              <source src='images/choice.mp4' 
            type="video/mp4" />
        </video> */}
        <img  className='choose-img-text' src='images/choose.gif' alt="text" />
      </div>
    </div>
    </>
  )
}

export default Choice