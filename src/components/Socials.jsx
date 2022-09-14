import { useMediaQuery } from 'react-responsive'

function Socials() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div className="social-grid">
          <img className={`mint-img ${isPortrait ?"mint-img-mobile":""}`} 
            src ="https://ik.imagekit.io/qljqw3tvn/ibb/Discord_QrGn6JVev.png" 
            alt="discord" />
          
          <img className={`mint-img ${isPortrait ?"mint-img-mobile":""}`}
            src ="https://ik.imagekit.io/qljqw3tvn/ibb/twitter_HQCpnrZ21.png" 
            alt="twitter" />
          
          <img className={`mint-img ${isPortrait ?"mint-img-mobile":""}`}
            src ="https://ik.imagekit.io/qljqw3tvn/ibb/Opensea__YzUYcuK2.png" 
            alt="opeansea" />
    </div>
  )
}

export default Socials