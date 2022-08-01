import React from 'react'
import {isMobile} from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'
import './Make.css'

function Comic() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  return (
    <div className='make-container'>
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

        </div>
    </div>
  )
}

export default Comic