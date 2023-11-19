import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from './sign';
import "./start.css";

function GetStarted() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className="start">
      <button type="button" onClick={handleGetStartedClick}>
        Get Started
      </button>
      {/* LoginForm component */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default GetStarted;
