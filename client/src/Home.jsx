import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 style={{ color: "#57008E" }}>Welcome to the App!</h1>
          <p style={{ color: "#57008E" }}>
            Click the button below to log in to your account.
          </p>
          <button
            className="btn"
            style={{ backgroundColor: "#57008E", color: "#fff", borderColor: "#57008E" }}
            onClick={handleLoginRedirect}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
