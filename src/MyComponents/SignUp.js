import { Alert } from "bootstrap";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  let regStyle = {
    minHeight: "70vh",
    margin: "100px 400px",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [flag, setFlag] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !username) {
      setFlag(true);
      alert("cannot be blank");
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Username", JSON.stringify(username));
    }
    e.target.reset();
    <Alert>Saved</Alert>

  }
  return (
    <div className="container" style={regStyle}>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label my-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control my-3"
            id="exampleInputEmail1"
            style={{ width: "250px" }}
            placeholder="Enter Email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label ">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control my-3"
            id="exampleInputPassword1"
            style={{ width: "250px" }}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputName" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="name"
            className="form-control my-3"
            id="exampleInputName"
            style={{ width: "250px" }}
            aria-describedby="emailHelp"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary my-3 btn-lg">
          Submit
        </button>

        <p>Already have an account?
          <Link to="/">Click Here</Link>
        </p>
        {flag && (
          <Alert color="primary" variant="danger">
            Please Fill Every Field
          </Alert>
        )}
      </form>
    </div>
  );
};
