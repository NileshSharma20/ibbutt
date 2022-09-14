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
            <source src='images/psy-light-back.mp4' 
          type="video/mp4" />
      </video>
    <div className='cb-container failed-back'>
        <img className={`failed-text-swine ${isPortrait?"failed-text-mobile":""}`} 
          src="https://ik.imagekit.io/qljqw3tvn/ibb/swine.gif" alt = "test"/>
    
      <img className={`classy-butt ${isPortrait ? "classy-butt-mobile":""}`} 
        src="https://ik.imagekit.io/qljqw3tvn/ibb/MrButt_418OwtD8k.png" alt = "test"/>
    
      <div className={` ${isPortrait?"return-btn-mobile":"return-btn"}`} 
        onClick={()=>setReturnTrue(true)}>
        <img className='try-again' src='https://ik.imagekit.io/qljqw3tvn/ibb/tryAgain.gif' alt='try again' />    
      </div>  
    </div>
    </>
  )
}

export default Failed