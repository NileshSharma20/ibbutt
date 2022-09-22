import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom'
import './Make.css'
import Socials from '../../components/Socials';
import "./ClassyButt.css"
import Poster from '../../components/Poster';

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
      {/* <div className="grid-layout"> */}
          {/* <div className="poster-container poster-info">
            <img className={`comic-img poster-img ${isPortrait?"comic-img-portrait":""}`}  
              src='images/nft-show.gif' alt="comic"/>
            
            <div className={`goto-mint-btn ${isMobile? "goto-mint-btn-mobile":""}`} 
              onClick={()=>setMintFlag(true)}>
                Get your ass
            </div>
          </div> */}
        
        <img className={`failed-text-swine ${isPortrait?"failed-text-mobile-success":""}`} 
            src="https://ik.imagekit.io/qljqw3tvn/ibb/splendor-small.gif" 
            alt = "test"/>
          
                
        <img className={`classy-butt ${isPortrait ? "classy-butt-mobile":""}`} 
          src="https://ik.imagekit.io/qljqw3tvn/ibb/MrButt_418OwtD8k.png" alt = "test"/>
      
      
      {/* </div> */}
      
      
      <Socials />
    </div>

    <div className='make-container' ref={posterRef}>
        <div className="grid-layout">
          
          <div className="poster-container poster-info">
            {/* <img className={`comic-img poster-img ${isPortrait?"comic-img-portrait":""}`}  
                src="https://ik.imagekit.io/qljqw3tvn/ibb/poster_zp_z6LwlR.png" 
                alt="comic"/> */}
            <Poster />
            {/* mintButton */}
            {/* <div className={`goto-mint-btn ${isMobile? "goto-mint-btn-mobile":""}`} 
                onClick={()=>setMintFlag(true)}>
                  <img className='try-again' src='https://ik.imagekit.io/qljqw3tvn/ibb/getYourAssBtn_80wwRhfcw.gif' alt='Get your ass' />
            </div> */}
              
            </div>

            <div className="poster-container poster-info">
              <img className={`comic-img poster-img ${isPortrait?"comic-img-portrait":""}`}  
                // src='images/nft-show.gif'
                src="https://ik.imagekit.io/qljqw3tvn/ibb/Multi_Frame_Art_Video_XIHK0nLPu.gif" 
                alt="comic"/>
            
            </div>

        </div>
    </div>

    <div className="scroll" 
        onClick={()=>handleScroll()}
        ></div>
    </>
  )
}

export default ClassyButt