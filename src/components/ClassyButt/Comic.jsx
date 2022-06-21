import React from 'react'
import {isMobile} from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'
import './Make.css'

function Comic() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  return (
    <div className='make-container'>
        {/* <div className={`make-heading ${isMobile?"make-heading-mobile":""}`}>
            <h1>Comic</h1>
        </div> */}
        <div className={`make-generator ${isMobile?"make-generator-mobile":""}`}>
          <img className='comic-img' src='images/Comic.png' alt="comic"/>
        </div>
    </div>
  )
}

export default Comic