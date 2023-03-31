import React from "react";
import { Link } from "react-router-dom";
import Login from "components/Login/Login";
import "./page.scss";

const LoginPage = () => {
  return (
    <div className="page">
      <h1>Login</h1>
      <Login />
      <p>
        Or{" "}
        <Link className="link" to="/register">
          register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
