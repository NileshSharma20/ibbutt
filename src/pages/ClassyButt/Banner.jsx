import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Poster from '../../components/Poster'
import "./Utilities.css"

function Banner() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <>
    <div className='util-container'>

        {/* <div className="banner-content"> */}

            <div className="poster-container poster-info">
              <img className={`comic-img poster-img ${isPortrait ? "comic-img-portrait":""}`}  
                src="https://ik.imagekit.io/qljqw3tvn/ibbutt/BP_GIF-compressed_i1m0lhnJZ.gif" 
                alt="comic"/>
            </div>

            <div className="banner-text">
              <h2>About the Project</h2>
              Creating a unique community within the NFT space, focused on the stoner community. We aim to build the StonerVerse, an ecosystem for individuals with a passion for cannabis culture. This universe will include virtual spaces such as the Strip Club, Nuclear-Proof Bunker, and Toilet, where members can explore and discover new opportunities.

            </div>

            <div className="banner-text" style={{marginTop:"2rem "}}>
              <h2>About the Art</h2>
              The artwork is straightforward, featuring images of butts smoking joints. This is a dream come true for cannabis enthusiasts. 80 different elements, including the Butt, Roach, Rolling Paper, Ingredients, Smoke, and Background, are featured in the artwork.
            </div>

            {/* The first stoner-only community in the NFT space. Building a stonerverse, and an ecosystem for the stoned-minds. The stonerverse will consist of rooms like the toilet where stoners can come and explore the possibilities. Building a dope Lifestyle with our native token $BUTT. */}

        {/* </div> */}
    </div>
        
    <div className='util-container'>
          <div className="util-cover">
              The High Minds behind Booty Puffs 
          </div>

          {/* <div className="poster-container poster-info"> */}
              <img className={`comic-img poster-img ${isPortrait ? "comic-img-portrait":""}`} 
                style={{width:"60vw",transform:"rotate(-2deg)"}} 
                src="https://ik.imagekit.io/qljqw3tvn/ibb/The_High_Minds_behind_Booty_Puffs.jpg" 
                alt="comic"/>
            {/* </div> */}
        <div className="banner-text">
        Founded by <a href="https://twitter.com/snoopthatshit" target="_blank" rel="noreferrer">
           Snoopthatshit</a>
        </div>
    </div>

    <div className="util-container">
      <div className="util-cover">
        Roadmap
      </div>
      <img className={`comic-img poster-img ${isPortrait ? "comic-img-portrait":""}`} 
                style={{width:"40vw", transform:"rotate(2deg)"}} 
                src="https://ik.imagekit.io/qljqw3tvn/ibb/02_5yPdVBHHPk.jpg" 
                alt="comic"/>
    </div>
  </>
  )
}

export default Banner