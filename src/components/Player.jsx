import { useState, useEffect } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

const useAudio = url => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)

    const toggle = ()=> setPlaying(!playing)

    useEffect(()=>{
        playing? audio.play() : audio.pause();
    },[playing])

    useEffect(()=>{
        audio.addEventListener('ended', ()=> setPlaying(false))

        return ()=>{
            audio.removeEventListener('ended', ()=> setPlaying(false))
        }
    },[])

    return [playing, toggle]
}

const Player=({url})=> {
    const [playing, toggle] = useAudio(url)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         toggle()
    //     },1000)
    // },[])

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