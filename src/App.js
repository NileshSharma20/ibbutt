import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Choice from './components/Choice/Choice';
import ClassyButt from './components/ClassyButt/ClassyButt';

function App() {
  return (
    <div className="container">
      <LandingPage />
      <Choice />
      <ClassyButt />
      {/* <img className='classy-butt' src="images/B.t .2.png" alt = "test"/> */}
    </div>
  );
}

export default App;
