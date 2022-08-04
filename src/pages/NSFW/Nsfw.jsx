import { useNavigate } from 'react-router-dom'
import './Nsfw.css'

function Nsfw({passMusicFlag}) {
    const navigate = useNavigate();

    const handleClick = ()=>{
        passMusicFlag(true)
        // console.log(`nsfw music flag: true`)
        navigate('/light-it-up')
    }

  return (
    <div className='nsfw-container'>
        <div className="enter-btn"
            onClick={()=>handleClick()} >
            Enter at your own risk
        </div>
    </div>
  )
}

export default Nsfw