import { isMobile } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'

function Socials() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const twitterLink = "https://twitter.com/BootyPuffs"

  return (
    <>
    {isMobile?
    <div className={`${isPortrait?"social-grid":"social-grid-mobile"}`}>
      {/* <a href="https://discord.gg/vf8Kf5zsej"
        target="_blank" rel="noreferrer"> 
        <img className={`${isPortrait?"mint-img dc mint-img-mobile":"mint-img-hori dc-mobile"}`} 
          src ="https://ik.imagekit.io/qljqw3tvn/ibb/dcIcon_k7h69j_3L.png" 
          alt="discord" />
        </a> */}
      
      <a href={twitterLink} 
        // className={`mint-img ${isPortrait ?"mint-img-mobile":""}`}
      target="_blank" rel="noreferrer">
      <img 
      // className={`mint-img twitter ${isPortrait ?"mint-img-mobile":""}`}
        className={`${isPortrait?"mint-img twitter mint-img-mobile":"mint-img-hori twitter-mobile"}`}
        src ="https://ik.imagekit.io/qljqw3tvn/ibb/twitterIcon_7o7iXiuwo.png" 
        alt="twitter" />
      </a>
      
      {/* <img className={`mint-img open-sea ${isPortrait ?"mint-img-mobile":""}`}
        src ="https://ik.imagekit.io/qljqw3tvn/ibb/openseaIcon_-_ROVZaKjg.png" 
        alt="opeansea" /> */}
    </div>
    :
    <div className="social-grid">
          {/* <a href="https://discord.gg/vf8Kf5zsej"
            target="_blank" rel="noreferrer"> 
            <img className={`mint-img dc ${isPortrait ?"mint-img-mobile":""}`} 
              src ="https://ik.imagekit.io/qljqw3tvn/ibb/dcIcon_k7h69j_3L.png" 
              alt="discord" />
            </a> */}
          
          <a href={twitterLink}
           target="_blank" rel="noreferrer">
          <img className={`mint-img twitter ${isPortrait ?"mint-img-mobile":""}`}
            src ="https://ik.imagekit.io/qljqw3tvn/ibb/twitterIcon_7o7iXiuwo.png" 
            alt="twitter" />
          </a>
          
          {/* <img className={`mint-img open-sea ${isPortrait ?"mint-img-mobile":""}`}
            src ="https://ik.imagekit.io/qljqw3tvn/ibb/openseaIcon_-_ROVZaKjg.png" 
            alt="opeansea" /> */}
    </div>
    }
    </>
  )
}

export default Socials