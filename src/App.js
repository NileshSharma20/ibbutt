import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Player from './components/Player';
import LandingPage from './pages/LandingPage/LandingPage';
import Choice from './pages/Choice/Choice';
import ClassyButt from './pages/ClassyButt/ClassyButt';
import Failed from './pages/ClassyButt/Failed';
import Mint from './pages/Mint/Mint';


function App() {
  const music_url = "music/web_music.mp3"
  
  return (
    <>
    <Router>
      <div className="container">

      <Player url={music_url} />
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
