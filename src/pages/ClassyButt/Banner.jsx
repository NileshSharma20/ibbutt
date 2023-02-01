import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Poster from '../../components/Poster'
import "./Utilities.css"

export const Scribble = ({top,left,imgSrc, tilt})=>{
  return(
    <div className="scribble" style={{top:top,left:left, transform:tilt}}>
        <img src={imgSrc}
          alt="scribble" />
      </div>
  )
}

function Banner() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const scribble1 =  "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_2_xeyvoXKVT.png"
    const scribble2 =  "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_12_dBJUEI89ek.png"
    const scribble3 =  "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_11__TJTjK0waQ.png"
    const scribble4 =  "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_10_Of7brJRIgv.png"
    const scribble5 =  "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_3_JSHD1qUH0.png"
    const scribble6 =  "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_4_VKuTUm6hI.png"
    const scribble7 =  "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_13_Cy_qz8nfY7.png"
    const scribble8 =  "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_9_EV6K2Ms6y.png"
    const scribble9 =  "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_5_Qh7_T8B4Q.png"
    const scribble10 = "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_7_JTaRHbPqf.png"
    const scribble11 = "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_6_xemn2j7jZ_.png"
    const scribble12 = "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_W39oJyvTSN.png"
    const scribble13 = "https://ik.imagekit.io/qljqw3tvn/ibb/Untitled_Artwork_8_iq2RbvBBt3.png"

  return (
    <>
    <div className='util-container'>
       
      <Scribble top="50%" left="85%" imgSrc={scribble1} tilt="" />
      <Scribble top="10%" left="10%" imgSrc={scribble2} tilt="rotate(-10deg)" />
      <Scribble top="60%" left="5%" imgSrc={scribble3} tilt="rotate(-10deg)" />
      <Scribble top="80%" left="85%" imgSrc={scribble4} tilt="rotate(-10deg)" />

      <div className="poster-container poster-info">
        <img className={`comic-img poster-img ${isPortrait ? "comic-img-portrait":""}`}  
          src="https://ik.imagekit.io/qljqw3tvn/ibb/BP_GIF-compressed_nRloJfKq6.gif" 
          alt="comic"/>
      </div>

      <div className="banner-text">
        <h2>About the Project</h2>
        Creating a unique community within the NFT space, focused on the stoner community. We aim to build the StonerVerse, an ecosystem for individuals with a passion for cannabis culture. This universe will include virtual spaces such as the Strip Club, Nuclear-Proof Bunker, and Toilet, where members can explore and discover new opportunities.

      </div>

      <div className="banner-text" style={{marginTop:"2rem", transform: "rotate(1deg)"}}>
        <h2>About the Art</h2>
        The artwork is straightforward, featuring images of butts smoking joints. This is a dream come true for cannabis enthusiasts. 80 different elements, including the Butt, Roach, Rolling Paper, Ingredients, Smoke, and Background, are featured in the artwork.
      </div>

    </div>
        
    <div className='util-container'>
      <Scribble top="20%" left="5%" imgSrc={scribble5} tilt="rotate(-10deg)" />
      <Scribble top="30%" left="90%" imgSrc={scribble6} tilt="rotate(-10deg)" />
      <Scribble top="60%" left="10%" imgSrc={scribble11} tilt="" />
      <Scribble top="70%" left="80%" imgSrc={scribble12} tilt="" />
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

    {/* Roadmap */}
    <div className="util-container">
      <Scribble top="60%" left="10%" imgSrc={scribble7} tilt="" />
      <Scribble top="60%" left="80%" imgSrc={scribble8} tilt="" />
      <Scribble top="80%" left="87%" imgSrc={scribble9} tilt="" />
      <Scribble top="10%" left="15%" imgSrc={scribble10} tilt="" />
      <Scribble top="15%" left="85%" imgSrc={scribble13} tilt="" />
      
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