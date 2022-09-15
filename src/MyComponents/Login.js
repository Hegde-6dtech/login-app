import { Alert } from "bootstrap";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Welcome } from "./Welcome";

export const Login = () => {
  let myStyle = {
    minHeight: "70vh",
    margin: "100px 400px",
  };

  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [flag, setFlag] = useState("");
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let email = localStorage.getItem("Email").replace(/"/g, "");
    let password = localStorage.getItem("Password").replace(/"/g, "");

    if (!emailLog || !passwordLog) {
      setFlag(true);
    } else if (emailLog !== email || passwordLog !== password) {
      setFlag(true);
      
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  return (
    <div className="container" style={myStyle} >
      {home ?(
      <form onSubmit={handleLogin} autoComplete="off" >
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control my-3"
            style={{ width: "250px" }}
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmailLog(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control my-3"
            style={{ width: "250px" }}
            id="password"
            placeholder="Enter Password"
            onChange={(e) => setPasswordLog(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg my-3" >
          Submit
        </button>
        <p>
          Don't have an account?
          <Link to="/signup">Sign up</Link>
        </p>
        {flag && (
          <Alert color="primary" variant="dangr">
            Unauthorized
          </Alert>
        )}
      </form>
      ):(
        <Welcome/>
      )}
    </div>
  );
};
