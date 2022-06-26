import React from 'react'
import Make from './Make'
import Comic from './Comic'
import Poster from './Poster'
import { useMediaQuery } from 'react-responsive'
import "./ClassyButt.css"

function ClassyButt() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <>
    <div className='cb-container'>
      <img className={`failed-text ${isPortrait?"failed-text-mobile":""}`} 
        src="images/Text 2.png" 
        alt = "test"/>
    
          
      <img className={`classy-butt ${isPortrait ? "classy-butt-mobile":""}`} src="images/B.t .2.png" alt = "test"/>
    </div>
    <Comic />
    {/* <Make /> */}
    <Poster />
    </>
  )
}

export default ClassyButt