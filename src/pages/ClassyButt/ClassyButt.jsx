import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom'
import './Make.css'
import Socials from '../../components/Socials';
import "./ClassyButt.css"

function ClassyButt() {
  const navigate = useNavigate();

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const [mintFlag, setMintFlag] = useState(false)

  useEffect(()=>{
      if(mintFlag){
        navigate('/mint')
      }
    },[mintFlag])

  return (
    <>
    <div className='make-container'>
      <div className="grid-layout">
          <div className="poster-container poster-info">
            <img className={`comic-img poster-img ${isPortrait?"comic-img-portrait":""}`}  
              src='images/nft-show.gif' alt="comic"/>
            
            <div className={`goto-mint-btn ${isMobile? "goto-mint-btn-mobile":""}`} 
              onClick={()=>setMintFlag(true)}>
                Get your ass
            </div>
          </div>
        
        <img className={`failed-text ${isPortrait?"failed-text-mobile-success":""}`} 
            src="https://ik.imagekit.io/qljqw3tvn/ibb/splendor-small.gif" 
            alt = "test"/>
          
                
        <img className={`classy-butt ${isPortrait ? "classy-butt-mobile":""}`} 
          src="https://ik.imagekit.io/qljqw3tvn/ibb/MrButt_418OwtD8k.png" alt = "test"/>
      </div>
      {/* <Socials /> */}
    </div>

    {/* <div className='make-container'>
        <div className="grid-layout">
          
          <div className="poster-container">
            <img className={`comic-img ${isPortrait?"comic-img-portrait":""}`} src='images/Comic.png' alt="comic"/>
            
          </div>
          <div className="poster-container">
            <img className={`failed-text ${isPortrait?"failed-text-mobile":""}`} 
              src="images/splendour.gif" 
              alt = "test"/>
          
                
            <img className={`classy-butt ${isPortrait ? "classy-butt-mobile":""}`} src="images/B.t .2.png" alt = "test"/>
          </div>

          <div className="poster-container">
            <img className={`comic-img ${isPortrait?"comic-img-portrait":""}`} src='images/nft-show.gif' alt="comic"/>
          </div>
          
          <div className="poster-container poster-info"> 
            
            <img className={`comic-img poster-img ${isPortrait?"comic-img-portrait":""}`} 
              src='images/Poster.png' 
              alt="comic"/>
            
            <div className={`goto-mint-btn ${isMobile? "goto-mint-btn-mobile":""}`} 
              onClick={()=>setMintFlag(true)}>
                Get your ass
            </div>
            
          </div>
        </div>
        
        <Socials />
    </div> */}
    </>
  )
}

export default ClassyButt