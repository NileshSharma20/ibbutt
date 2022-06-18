import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Choice from './components/Choice/Choice';
import ClassyButt from './components/ClassyButt/ClassyButt';
import Failed from './components/ClassyButt/Failed';


function App() {
  // const [landingFlag, setLandingFlag] = useState(true)

  return (
    <>
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/choice' element={<Choice />} />
          <Route path='/failed' element={<Failed />} />
          <Route path='/welcome' element={<ClassyButt />} />
        </Routes>
        {/* {landingFlag && <LandingPage passLandingFlag={setLandingFlag}/>}
        <Choice />
        <ClassyButt /> */}
      </div>
      </Router>
    </>
  );
}

export default App;
