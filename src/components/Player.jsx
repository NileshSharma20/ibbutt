import { useState, useEffect } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'


const useAudio = ({url,playFlag}) => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)

    const toggle = ()=> {
        setPlaying(!playing)
    }

    const autoPlayMusic=() =>{
        setPlaying(true)
        audio.play()
    }

    useEffect(()=>{
        if(playFlag){
            setPlaying(true)
            audio.play()
            // console.log(`player music flag: ${playFlag}`)
        }
    },[playFlag])

    useEffect(()=>{
        playing? audio.play() : audio.pause();
    },[playing])

    useEffect(()=>{
        audio.addEventListener('ended', ()=> autoPlayMusic())

        return ()=>{
            audio.removeEventListener('ended', ()=> autoPlayMusic())
        }
    },[])

    return [playing, toggle]
}

const Player=({url, playFlag})=> {
    const [playing, toggle] = useAudio({url,playFlag})

  return (
    <div>
        <div className="btn"
            onClick={toggle}>
                {playing? <FaPause />:<FaPlay />}
        </div>
    </div>
  )
}

export default Player