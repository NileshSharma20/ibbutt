import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './Mint.css'

function Mint() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div className='mint-container'>
      
      <div className="mint-content">
        <div className="mint-info">Mint-info</div>
        <div className="mint-btn">Mint</div>
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

export default Mint