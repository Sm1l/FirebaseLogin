import React from "react";
import "app.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
    </div>
  );
};

export default App;
