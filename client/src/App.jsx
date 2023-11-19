import './App.css'
import {Route, Routes} from "react-router-dom";
import LandingPage from './component/landingpage';
import SignupForm from './component/sign'; 

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element= {<LandingPage />}/>
          <Route exact path ="login" element ={<SignupForm />}/>
        </Routes>
       </div>
    </>
  )
}

export default App
