import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to Our App</h1>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
