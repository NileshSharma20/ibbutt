import {useState, useEffect} from 'react'
import {isMobile} from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import './Make.css'

function Poster() {
  const navigate = useNavigate();

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const [mintFlag, setMintFlag] = useState(false)

  useEffect(()=>{
      if(mintFlag){
        navigate('/mint')
      }
    },[mintFlag])
    
  return (
    <div className='make-container'>
        <div className="poster-container"> 
          <img className={`comic-img ${isPortrait?"comic-img-portrait":""}`} src='images/Poster.png' alt="comic"/>
          
        </div>
        <div className={`goto-mint-btn ${isMobile? "goto-mint-btn-mobile":""}`} 
          onClick={()=>setMintFlag(true)}>
            Get your ass
        </div>
        
    </div>
  )
}

export default Poster