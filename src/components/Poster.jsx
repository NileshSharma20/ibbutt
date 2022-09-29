import React from 'react'
import { isMobile } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'
import "./Poster.css"

function Poster() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <>
    {isMobile?
    <div className='poster-box'>
        
        <div className={`${isPortrait?"poster-mid-section":"poster-mid-section-mobile"}`}>
            <h1 style={{ fontFamily:"Didot", marginTop:"5px"}} >A new StonerVerse that gives our community a place to chill and get high together.</h1>
            <div className="underline"></div>
        </div>

        <div className={`${isPortrait?"poster-mid-section":"poster-mid-section-mobile"}`} style={{alignItems:"center"}}>
            
            <div className="poster-details-img">
                <img style={{objectFit:"contain", width:"100%", height:"auto"}} src='https://ik.imagekit.io/qljqw3tvn/ibb/poster-butt.png' alt="" />
            </div>

            <div className="poster-details">
                <div className={`${isPortrait?"poster-details-para":"poster-details-para-mobile"}`}>
                    <span style={{ fontFamily:"Didot"}}>Launching Grinders, Rolling Paper, and Rolling Cones with the IBBP brand and the NFTs.</span> 
                    {/* Because we like getting high and getting fucked. */}
                    
                    <div className="underline"></div>
                </div>
                
                <div className={`${isPortrait?"poster-details-para":"poster-details-para-mobile"}`}>
                    <span style={{ fontFamily:"Didot"}}>CCO.</span> Discord available for those baked out of their minds lol.
                </div>
            </div>
            <div className='underline'></div>

        </div>

        
        <div className={`${isPortrait?"poster-mid-section":"poster-mid-section-mobile"}`}>
            <h1 style={{fontFamily:"Didot", fontWeight:"400"}}><a style={{fontWeight:"600", fontFamily:"Didot",}}>Contract</a> was actually written after our developer mixed LSD and Coke and boomed the fuck outta it.</h1>
        </div>
    </div>
    :
    <div className='poster-box'>
        
        <div className='poster-mid-section'>
            <h1 style={{ fontFamily:"Didot", marginTop:"5px"}} >A new StonerVerse that gives our community a place to chill and get high together.</h1>
            <div className="underline"></div>
        </div>

        <div className='poster-mid-section' style={{alignItems:"center"}}>
            
            <div className="poster-details-img">
                <img style={{objectFit:"contain", width:"100%", height:"auto"}} src='https://ik.imagekit.io/qljqw3tvn/ibb/poster-butt.png' alt="" />
            </div>

            <div className="poster-details">
                <div className="poster-details-para">
                    <span style={{ fontFamily:"Didot"}}>Launching Grinders, Rolling Paper, and Rolling Cones with the IBBP brand and the NFTs.</span> 
                    {/* Because we like getting high and getting fucked. */}
                    
                    <div className="underline"></div>
                </div>
                
                <div className="poster-details-para">
                    <span style={{ fontFamily:"Didot"}}>CCO.</span> Discord available for those baked out of their minds lol.
                </div>
            </div>
            <div className='underline'></div>

        </div>

        
        <div className='poster-mid-section'>
            <h1 style={{fontFamily:"Didot", fontWeight:"400"}}><a style={{fontWeight:"600", fontFamily:"Didot",}}>Contract</a> was actually written after our developer mixed LSD and Coke and boomed the fuck outta it.</h1>
        </div>
    </div>
    }
    </>
  )
}

export default Poster