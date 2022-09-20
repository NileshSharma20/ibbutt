import { useMediaQuery } from 'react-responsive'

function Socials() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div className="social-grid">
          <img className={`mint-img dc ${isPortrait ?"mint-img-mobile":""}`} 
            src ="https://ik.imagekit.io/qljqw3tvn/ibb/dcIcon_k7h69j_3L.png" 
            alt="discord" />
          
          <a href="https://twitter.com/IBbootypuffs" 
            // className={`mint-img ${isPortrait ?"mint-img-mobile":""}`}
           target="_blank" rel="noreferrer">
          <img className={`mint-img twitter ${isPortrait ?"mint-img-mobile":""}`}
            src ="https://ik.imagekit.io/qljqw3tvn/ibb/twitterIcon_7o7iXiuwo.png" 
            alt="twitter" />
          </a>
          
          {/* <img className={`mint-img open-sea ${isPortrait ?"mint-img-mobile":""}`}
            src ="https://ik.imagekit.io/qljqw3tvn/ibb/openseaIcon_-_ROVZaKjg.png" 
            alt="opeansea" /> */}
    </div>
  )
}

export default Socials