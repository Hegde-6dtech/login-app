import React from "react";

export const Login = () => {
  return (
    <form >
        <h1> Login</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Username:
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          required
        />
        <br />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"

        />
        <br />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button><br />
      <p>Don't have an account?
      <a href="#">Sign Up</a>
      </p>
    </form>
  );
};
