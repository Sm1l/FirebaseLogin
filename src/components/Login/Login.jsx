import Form from "components/Form/Form";
import { useNavigate } from "react-router-dom";

import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        goHome();
      })
      .catch(() => {
        // console.error;
        alert("Invalid user");
      });
  };
  return (
    <div>
      <Form title="sign in" handleSubmit={handleLogin} />
    </div>
  );
};

export default Login;
