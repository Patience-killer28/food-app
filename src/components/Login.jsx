import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div class="container1">
      <form>
        <h1>Login to Hustle</h1>
        <div class="form-control">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div class="form-control">
          <input type="password" required />
          <label>Password</label>
        </div>
        <button class="btn">LOGIN</button>
        <p class="text">
          Don't have your account?
          <a href="" class="signup">
            REGISTER
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
