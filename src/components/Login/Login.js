import React, { useState } from "react";
import "./login.scss";
const Login = (props) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="login">
      <h1 className="title">Log In</h1>
      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="first-name"
            placeholder="First Name"
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            type="text"
            name="last-name"
            placeholder="Last Name"
          />
        </div>
        <div className="field">
          <label>City</label>
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            placeholder="City"
          />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabIndex="0" className="hidden" />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <div
          onClick={() => {
            props.saveUserAction(name, lastname, city);
          }}
          className="ui inverted green button"
        >
          Submit
        </div>
      </form>
    </div>
  );
};

export default Login;
