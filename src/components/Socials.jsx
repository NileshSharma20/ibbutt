import { useMediaQuery } from 'react-responsive'

function Socials() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div className="social-grid">
          <img className={`mint-img ${isPortrait ?"mint-img-mobile":""}`} 
            src ="images/Discord_j.png" 
            alt="discord" />
          
          <img className={`mint-img ${isPortrait ?"mint-img-mobile":""}`}
            src ="images/Twitter_j.png" 
            alt="twitter" />
          
          <img className={`mint-img ${isPortrait ?"mint-img-mobile":""}`}
            src ="images/Opensea_j.png" 
            alt="opeansea" />
    </div>
  )
}

export default Socials