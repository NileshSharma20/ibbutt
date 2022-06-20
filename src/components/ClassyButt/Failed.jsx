import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Failed() {
  const navigate = useNavigate();
  const [returnTrue, setReturnTrue] = useState(false)

  useEffect(()=>{
    if(returnTrue){
      navigate('/choice')
      // navigate('/', { replace: true })
    }
  },[returnTrue])
  return (
    <div className='cb-container failed-back'>
        <img className='failed-text' src="images/Text 1.png" alt = "test"/>
    
        <img className='classy-butt' src="images/B.t .2.png" alt = "test"/>
      <div className="return-btn" onClick={()=>setReturnTrue(true)}>Try Again</div>  
    </div>
  )
}

export default Failed