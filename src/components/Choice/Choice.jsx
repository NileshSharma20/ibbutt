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
        <img  className='choose-img-text' src='images/chooseText.png' alt="text" />
      </div>
    </div>
  )
}

export default Choice