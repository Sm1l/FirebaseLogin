import React from "react";
import { Link } from "react-router-dom";
import SignUp from "components/SignUp/SignUp";
import "./page.scss";

const RegisterPage = () => {
  return (
    <div className="page">
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account?{" "}
        <Link className="link" to="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
