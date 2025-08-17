import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


function Failed() {
  const navigate = useNavigate();
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const classButtSrc = "https://ik.imagekit.io/qljqw3tvn/ibbutt/mr-ass-flipped-removebg-preview_vGf4T262S.png"

  const [returnTrue, setReturnTrue] = useState(false)

  useEffect(()=>{
    if(returnTrue){
      navigate('/choice')
      // navigate('/', { replace: true })
    }
  },[returnTrue])

  return (
    <>
    {/* <video autoPlay muted loop 
          className='vid-back'
          poster="images/psy-back-still.png">
            <source src="https://ik.imagekit.io/qljqw3tvn/ibb/psy-back.mp4"
              type="video/mp4"/>
    </video> */}
    <div className='cb-container failed-back'>
        {/* <img className={`failed-text-swine ${isPortrait?"failed-text-mobile":""}`} 
          src="https://ik.imagekit.io/qljqw3tvn/ibb/swine-small.gif" alt = "test"/> */}
        <p className='failed-text-box'>Get the fuck outta here you uncultured swine!</p>
    
      <img className={`classy-butt ${isPortrait ? "classy-butt-mobile":""}`} 
        src={classButtSrc} alt = "test"/>
    
      {/* <div className={` ${isPortrait?"return-btn-mobile":"return-btn"}`} 
        onClick={()=>setReturnTrue(true)}>
        <img className='try-again' src='https://ik.imagekit.io/qljqw3tvn/ibb/tryAgain_i_oNCA_sp.gif' alt='try again' />    
      </div>   */}
      <div className={` ${isPortrait?"return-btn-mobile":"return-btn"}`} >

          <button className='primary-btn' type='button'  onClick={()=>setReturnTrue(true)}>Try Again</button>
      </div>
    </div>
    </>
  )
}

export default Failed