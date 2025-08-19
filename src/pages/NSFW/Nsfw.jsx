import { useNavigate } from 'react-router-dom'
import './Nsfw.css'
import { useState } from 'react';

function Nsfw({passMusicFlag}) {
    const navigate = useNavigate();

    const bgImg = "https://ik.imagekit.io/qljqw3tvn/ibbutt/bg/rainbow%20gradient_M_%20Feeling%20Lucky!__VIzKr1PEAe.png"
    const jointImg = "https://ik.imagekit.io/qljqw3tvn/ibbutt/joint-removebg-preview_3HLzNU2cK.png"
    const lighter = "https://ik.imagekit.io/qljqw3tvn/ibbutt/lighter/Lighton_unbranded_kdgd4CLcv.png?updatedAt=1755585892130"
    const smokeImg= "https://ik.imagekit.io/qljqw3tvn/ibbutt/white_cough%20cough__VdGIYUmW4.png?updatedAt=1755421824410"
    const [lighterVisible, setLighterVisible] = useState(false)

    const handleClick = ()=>{
        passMusicFlag(true)
        setLighterVisible(true)

        setTimeout(()=>{
            navigate('/choice')
        },2800)
    }

  return (
    <>
    <div className='nsfw-container'>
        <img src={bgImg} alt="" className="nsfw-bg-img" />
        <h1>420Butts</h1>

        <div className="nsfw-img-box">

            <img 
                className='jointImg'
                style={lighterVisible?{transform:"scale(1.1) rotate(-5deg)"}:{}} 
                src={jointImg} alt="Joint"
                onClick={()=>handleClick()} 
            />

            {lighterVisible && <img className='lighter-nsfw' src={lighter} alt="lighter" />}
            {lighterVisible && <img className='smoke-nsfw' src={smokeImg} alt="smoke" />}
        </div>

        <h2 style={lighterVisible ? {animation:'disappear-text 2s ease-in-out forwards'}:{}} >
            NSFW: Enter at your own risk!
        </h2>


    </div>
     
    </>
  )
}

export default Nsfw