import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = (props) => {
  return (
    <div className="header">
      <div className="ui pointing menu container">
        <Link to={"/"} className="item">
          Home
        </Link>
        <div className="right menu">
          <Link to={"/card"} className="card_item item">
            Card <p className="count">{props.sanoq}</p>
          </Link>
          <Link to={"/login"} className="item">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
