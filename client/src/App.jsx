import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="container mt-5">
      {isLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default App;
