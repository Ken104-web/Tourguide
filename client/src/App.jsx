import './App.css'
import {Route, Routes} from "react-router-dom";
import LandingPage from './component/landingpage';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element= {<LandingPage />}/>

        </Routes>
       </div>
    </>
  )
}

export default App
