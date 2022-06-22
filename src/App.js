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
  return (
    <>
    <Router>
      {/* <div className="container"> */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/choice' element={<Choice />} />
          <Route path='/failed' element={<Failed />} />
          <Route path='/welcome' element={<ClassyButt />} />
          <Route path='/mint' element={<Mint />} />
        </Routes>
      {/* </div> */}
      </Router>
    </>
  );
}

export default App;
