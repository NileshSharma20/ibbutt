import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Poster from '../../components/Poster'
import "./Utilities.css"

function Banner() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <>
    <div className='util-container' >
        <div className="banner-content">
            <div className="poster-container poster-info">
              <img className={`comic-img poster-img ${isPortrait && "comic-img-portrait"}`}  
                src="https://ik.imagekit.io/qljqw3tvn/ibb/Multi_Frame_Art_Video_XIHK0nLPu.gif" 
                alt="comic"/>
            </div>

            <div className="banner-text">
            The first stoner-only community in the NFT space. Building a stonerverse, and an ecosystem for the stoned-minds. The stonerverse will consist of rooms like the toilet where stoners can come and explore the possibilities. Building a dope Lifestyle with our native token $BUTT.
            </div>

            
        </div>
        </div>
        <div className='util-container'  style={{backgroundColor:"#8338ec"}} >
        <div className="util-cover">
            The High Minds behind Itty Bitty Booty Puffs 
        </div>
        <div className="banner-text">Img here</div>
    </div>
  </>
  )
}

export default Banner