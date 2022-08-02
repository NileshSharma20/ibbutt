import { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { BrowserView, MobileView, isMobile  } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'
import Player from './components/Player';
import LandingPage from './components/LandingPage/LandingPage';
import Choice from './components/Choice/Choice';
import ClassyButt from './components/ClassyButt/ClassyButt';
import Failed from './components/ClassyButt/Failed';
import Mint from './components/Mint/Mint';


function App() {
  const url = "https://soundcloud.com/dejasolis/breathofhope?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  const yturl = "music/sample.mp3"
  return (
    <>
    <Router>
      <div className="container">

      {/* <Player url={url} /> */}
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
