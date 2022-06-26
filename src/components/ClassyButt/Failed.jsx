import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


function Failed() {
  const navigate = useNavigate();
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const [returnTrue, setReturnTrue] = useState(false)

  useEffect(()=>{
    if(returnTrue){
      navigate('/choice')
      // navigate('/', { replace: true })
    }
  },[returnTrue])
  return (
    <>
    <video autoPlay muted loop 
          className='vid-back'
          poster="images/psy-back-still.png">
            <source src='images/trippy-weed.mp4' 
          type="video/mp4" />
      </video>
    <div className='cb-container failed-back'>
        <img className={`failed-text ${isPortrait?"failed-text-mobile":""}`} 
          src="images/Text 1.png" alt = "test"/>
    
        <img className='classy-butt' src="images/B.t .2.png" alt = "test"/>
      <div className={` ${isPortrait?"return-btn-mobile":"return-btn"}`} 
        onClick={()=>setReturnTrue(true)}>Try Again</div>  
    </div>
    </>
  )
}

export default Failed