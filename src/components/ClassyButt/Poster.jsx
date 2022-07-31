import {useState, useEffect} from 'react'
import {isMobile} from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import './Make.css'

function Poster() {
  const navigate = useNavigate();

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const [mintFlag, setMintFlag] = useState(false)

  useEffect(()=>{
      if(mintFlag){
        navigate('/mint')
      }
    },[mintFlag])
    
  return (
    <div className='make-container'>
        <div className="grid-layout">
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

        <div className="social-grid">
          <img className={`mint-img ${isPortrait ?"mint-img-mobile":""}`} 
            src ="images/Discord_j.png" 
            alt="discord" />
          
          <img className={`mint-img ${isPortrait ?"mint-img-mobile":""}`}
            src ="images/Twitter_j.png" 
            alt="twitter" />
          
          <img className={`mint-img ${isPortrait ?"mint-img-mobile":""}`}
            src ="images/Opensea_j.png" 
            alt="opeansea" />
      </div>
    </div>
  )
}

export default Poster