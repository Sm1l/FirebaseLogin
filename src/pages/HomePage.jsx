import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { removeUser } from "store/slices/userSlice";
import "./page.scss";

const HomePage = () => {
  // const [user, setUser] = useState(null);
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <div className="page">
      <h1>
        HomePage <br />
        {`Welcome, ${email}`}
      </h1>
      <button className="button" onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to={"/register"} />
  );
};

export default HomePage;
