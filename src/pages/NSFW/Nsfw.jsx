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
    <>
    <div className='nsfw-container'></div>
     
            <img className='jointImg' src="https://ik.imagekit.io/qljqw3tvn/ibb/nsfw_joint.png" alt="Joint"
            onClick={()=>handleClick()} />
       {/* <img className="nsfw-img" src='images/rad.png' alt='' /> */}
    </>
  )
}

export default Nsfw