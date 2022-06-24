import React from 'react'
import './Mint.css'

function Mint() {
  return (
    <div className='mint-container'>
      <div className="mint-content">
        <div className="mint-info">Mint-info</div>
        <div className="mint-btn">Mint</div>
      </div>
      <div className="social-grid">
        <img src ="images/Discord_j.png" alt="discord" />
        <img src ="images/Twitter_j.png" alt="twitter" />
        <img src ="images/Opensea_j.png" alt="opeansea" />
      </div>
    </div>
  )
}

export default Mint