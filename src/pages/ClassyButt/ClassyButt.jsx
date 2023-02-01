import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom'
import './Make.css'
import Socials from '../../components/Socials';
import "./ClassyButt.css"
import Poster from '../../components/Poster';
import Utilities from './Utilities';
import Banner from './Banner';

function ClassyButt() {
  const navigate = useNavigate();

  const posterRef = useRef(null);

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const [mintFlag, setMintFlag] = useState(false)

  const handleScroll =()=>{
    window.scrollTo({top:posterRef.current.offsetTop, behavior:"smooth"})
  }

  useEffect(()=>{
      if(mintFlag){
        navigate('/mint')
      }
    },[mintFlag])

  return (
    <>
    <div className='make-container'>
        
        <img className={`failed-text-swine ${isPortrait?"failed-text-mobile-success":""}`} 
            src="https://ik.imagekit.io/qljqw3tvn/ibb/splendor-small.gif" 
            alt = "test"/>
          
                
        <img className={`classy-butt ${isPortrait ? "classy-butt-mobile":""}`} 
          src="https://ik.imagekit.io/qljqw3tvn/ibb/MrButt_418OwtD8k.png" alt = "test"/>
      
      
      <Socials />
    </div>

    <div  ref={posterRef}>
    <Banner />
    </div>
    <Utilities />
    <div className="scroll" 
        onClick={()=>handleScroll()}
        ></div>
    </>
  )
}

export default ClassyButt