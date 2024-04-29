import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";
import c1 from "../context/TourContext";

export default function Navbar(props) {
  let item = localStorage.getItem("user");
  let item1 = JSON.parse(item).user;
  let login1 = JSON.parse(item).login;
  let { setClick, click } = props;
  const value = useContext(c1);
  const { change } = value;
  return (
    <div className="cont">
      <div
        className="data"
        onClick={() => {
          click === 0 ? setClick(1) : setClick(0);
        }}
      >
        {" "}
        Travello{" "}
      </div>
      <div className="nav_cont">
        <NavLink className="nav1" to="/">
          Home
        </NavLink>
        <NavLink className="nav1" to="/Packages">
          Packages
        </NavLink>

        <NavLink className="nav1" to="/Payment">
          Payment
        </NavLink>

        <NavLink className="nav1" to="/contact">
          Contact Us
        </NavLink>
        {login1 ? null : (
          <NavLink className="nav1" to="/user">
            Login
          </NavLink>
        )}

        {item1 ? (
          <NavLink
            className="nav1"
            to="/user"
            onClick={() => {
              change(item1);
            }}
          >
            Logout
          </NavLink>
        ) : null}
        <div className="user"> {item1}</div>
      </div>

      <div className="search">
        <input type="search" className="input" />
        <input type="button" value="submit" className="btn btn-primary" />
      </div>
    </div>
  );
}
