import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          // Handle successful login
        } else {
          setErrors({ api: data.message || "Login failed" });
        }
      } catch (error) {
        setErrors({ api: "An error occurred, please try again." });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ borderColor: "#57008E" }}>
            <div className="card-body">
              <h2 className="text-center mb-4" style={{ color: "#57008E" }}>
                Login
              </h2>
              <form onSubmit={handleSubmit}>
                {errors.api && (
                  <div className="alert alert-danger">{errors.api}</div>
                )}
                <div className="form-group mb-3">
                  <label htmlFor="email" style={{ color: "#57008E" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: "#57008E" }}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" style={{ color: "#57008E" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ borderColor: "#57008E" }}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    backgroundColor: "#57008E",
                    color: "#fff",
                    borderColor: "#57008E",
                  }}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </form>
              <p className="text-center mt-3" style={{ color: "#57008E" }}>
                Don't have an account?{" "}
                <a
                  href="/signup"
                  style={{ color: "#57008E", fontWeight: "bold" }}
                >
                  Signup
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
