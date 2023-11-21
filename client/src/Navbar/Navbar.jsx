import react from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <div className="Nav">
            <div className="bar">
            <i className="fa-solid fa-plane"></i>
            <h3>Tour guide</h3>
            </div>
            <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/world'>Our World</Link>
        <Link to='/contact'>Contact</Link>
      </div>
  
        </div>
    )

}

export default Navbar;