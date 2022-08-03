import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './Mint.css'
import Socials from '../../components/Socials'

function Mint() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div className='mint-container'>
      
      <div className="mint-content">
        <div className="mint-info">Mint-info</div>
        <div className="mint-btn">Mint</div>
      </div>
      
      <Socials />
    </div>
  )
}

export default Mint