import React, { useState } from "react";
import "./form.scss";

const Form = ({ title, handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div
      className="form"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   handleSubmit(email, pass);
      // }}
    >
      <input
        type="email"
        className="form__input form__input-email"
        value={email}
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        className="form__input form__input-password"
        value={pass}
        placeholder="password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <button className="button form__button" onClick={() => handleSubmit(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export default Form;
