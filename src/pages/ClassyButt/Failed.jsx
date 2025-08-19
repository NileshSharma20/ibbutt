import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


function Failed() {
  const navigate = useNavigate();
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const classButtSrc = "https://ik.imagekit.io/qljqw3tvn/ibbutt/mr-ass-flipped-removebg-preview_vGf4T262S.png"
  const failedBackBg = "https://ik.imagekit.io/qljqw3tvn/ibbutt/bg/rays_Focus...__a0i2nl_gVG.png"

  const [returnTrue, setReturnTrue] = useState(false)

  useEffect(()=>{
    if(returnTrue){
      navigate('/choice')
      // navigate('/', { replace: true })
    }
  },[returnTrue])

  return (
    <>
    <div className='failed-back'>

      <img src={failedBackBg} alt="" className="failed-back-bg-img" />
      <p className='failed-text-box'>Get the fuck outta here you uncultured swine!</p>
    
      <img className={`classy-butt ${isPortrait ? "classy-butt-mobile":"classy-butt-tab"}`} 
        src={classButtSrc} alt = "test"/>
    
      <div className={` ${isPortrait?"return-btn-mobile":"return-btn"}`} >

          <button className='primary-btn' type='button'  onClick={()=>setReturnTrue(true)}>Try Again</button>
      </div>
    </div>
    </>
  )
}

export default Failed