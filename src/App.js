import { useState, useEffect, useRef } from 'react';
import { BsPlay, BsPause } from 'react-icons/bs'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { BrowserView, MobileView, isMobile  } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'
import LandingPage from './components/LandingPage/LandingPage';
import Choice from './components/Choice/Choice';
import ClassyButt from './components/ClassyButt/ClassyButt';
import Failed from './components/ClassyButt/Failed';
import Mint from './components/Mint/Mint';


function App() {
  // const [isMuted, setIsMuted] = useState(false)

  // const audioRef = useRef();

  // useEffect(()=>{
  //   if(isMuted){
  //     audioRef.current.muted(false)
  //   }
  //   else{
  //     audioRef.current.muted(true)
  //   }
  //   console.log(`${isMuted}`)
  // },[isMuted])

  return (
    <>
    <Router>
      <div className="container">
      {/* <audio 
        autoPlay
        muted={isMuted}
        src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" 
        ref={audioRef} />

      <div className="btn" 
          onClick={()=>setIsMuted(!isMuted)}>
            {isMuted? "Unmute":"Mute"}
      </div> */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/choice' element={<Choice />} />
          <Route path='/failed' element={<Failed />} />
          <Route path='/welcome' element={<ClassyButt />} />
          <Route path='/mint' element={<Mint />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
