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
  const classButtSrc = "https://ik.imagekit.io/qljqw3tvn/ibbutt/mr-ass-flipped-removebg-preview_vGf4T262S.png"

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
      {/* <div className="grid-layout"> */}
          {/* <div className="poster-container poster-info">
            <img className={`comic-img poster-img ${isPortrait?"comic-img-portrait":""}`}  
              src='images/nft-show.gif' alt="comic"/>
            
            <div className={`goto-mint-btn ${isMobile? "goto-mint-btn-mobile":""}`} 
              onClick={()=>setMintFlag(true)}>
                Get your ass
            </div>
          </div> */}
        
        {/* <img className={`failed-text-swine ${isPortrait?"failed-text-mobile-success":""}`} 
            src="https://ik.imagekit.io/qljqw3tvn/ibb/splendor-small.gif" 
            alt = "test"/> */}
        <p className='failed-text-box' style={{fontSize:'3rem',wordSpacing:'0.2rem'}}>
          Splendid! Finally a man of impeccable taste!
        </p>
          
                
        <img className={`classy-butt ${isPortrait ? "classy-butt-mobile":""}`} 
          src={classButtSrc} alt = "test"/>
      
      
      <Socials />
    </div>
    
    <div  ref={posterRef}>
      <Banner />
    </div>

    <Utilities />

    <div className="scroll" 
      onClick={()=>handleScroll()}
    >
    </div>
    
    </>
  )
}

export default ClassyButt