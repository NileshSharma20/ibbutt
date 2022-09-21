import React from 'react'
import "./Poster.css"

function Poster() {
  return (
    <div className='poster-box'>
        
        <div className='poster-mid-section'>
            <h1 style={{fontWeight:"600", fontFamily:"Didot"}} >The whole concept was made on drugs.</h1>
            <div className="underline"></div>
        </div>

        <div className='poster-mid-section' style={{alignItems:"center"}}>
            
            <div className="poster-details-img">
                <img style={{objectFit:"contain", width:"100%", height:"auto"}} src='https://ik.imagekit.io/qljqw3tvn/ibb/poster-butt.png' alt="" />
            </div>

            <div className="poster-details">
                <div className="poster-details-para">
                    <span style={{fontWeight:"600", fontFamily:"Didot"}}>We are reserving 210 asses (4.2%).</span> Because we like getting high and getting fucked.
                    
                    <div className="underline"></div>
                </div>
                
                <div className="poster-details-para">
                <span style={{fontWeight:"600", fontFamily:"Didot"}}>CCO.</span> Discord available for those baked out of their minds lol.
                </div>
            </div>
            <div className='underline'></div>

        </div>

        
        <div className='poster-mid-section'>
            <h1 style={{fontFamily:"Didot", fontWeight:"400"}}><a style={{fontWeight:"600", fontFamily:"Didot", color:"blue", cursor:"pointer"}}>Contract</a> was actually written after our developer mixed LSD and Coke and boomed the fuck outta it.</h1>
        </div>
    </div>
  )
}

export default Poster