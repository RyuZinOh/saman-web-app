import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to the App</h1>
      <Link to="/login" className="btn btn-primary mt-3">
        Login
      </Link>
    </div>
  );
};

export default Home;
