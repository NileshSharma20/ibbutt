import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Player from './components/Player';
import Nsfw from './pages/NSFW/Nsfw';
import LandingPage from './pages/LandingPage/LandingPage';
import Choice from './pages/Choice/Choice';
import ClassyButt from './pages/ClassyButt/ClassyButt';
import Failed from './pages/ClassyButt/Failed';
import Mint from './pages/Mint/Mint';


function App() {
  const music_url = "/music/web_music.mp3"

  const [playMusicFlag, setPlayMusicFlag] = useState(false)
  
  // useEffect(()=>{
  //   console.log(`App music flag: ${playMusicFlag}`)
  // },[playMusicFlag])

  return (
    <>
    <Router>
      <div className="container">

      <Player url={music_url} playFlag={playMusicFlag} />
        <Routes>
          <Route path="/" element={<Nsfw passMusicFlag={setPlayMusicFlag} />} />
          <Route path='/light-it-up' element={<LandingPage />} />
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
