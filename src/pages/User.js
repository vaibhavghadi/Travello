import React, { useContext, useEffect, useState } from "react";
import "../style/User.css";
import { NavLink, useNavigate } from "react-router-dom";
import c1 from "../context/TourContext";
import { signin } from "../schema/User1";
import { signup } from "../schema/User1";
import Navbar from "../components/Navbar";
import { Formik, ErrorMessage, Form, Field } from "formik";

export default function User() {
  const { signin1, signup1 } = useContext(c1);
  let navigate = useNavigate();

  const sign_initial = {
    username: "",
    password: "",
    login: true,
  };

  const signup_initial = {
    username1: "",
    password1: "",
    email: "",
    login: false,
  };

  const onSub1 = (values, action) => {
    signin1(values);
    setTimeout(() => {
      let obj = localStorage.getItem("user");
      let obj1 = JSON.parse(obj);
      if (obj1.login === false) {
        navigate("/user");
      } else {
        navigate("/");
      }
    }, 1000);

    action.resetForm();
  };

  const onSub2 = (values, action) => {
    signup1(values);
    action.resetForm();
  };

  return (
    <>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={require("../images/login.png")} alt="" />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <Formik
                initialValues={sign_initial}
                validationSchema={signin}
                onSubmit={onSub1}
              >
                <Form>
                  <div className="input-boxes">
                    <div className="input-box mb-3 my-3">
                      <i className="fas fa-envelope"></i>
                      <Field
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                      />
                      <div className="error">
                        <ErrorMessage name="username" />
                      </div>
                    </div>

                    <div className="input-box mb-3 my-3">
                      <i className="fas fa-lock"></i>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                      <div className="error">
                        <ErrorMessage name="password" />
                      </div>
                    </div>

                    <div className="text">
                      <NavLink to="/user">Forgot password?</NavLink>
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">
                      Don't have an account?{" "}
                      <label htmlFor="flip">Sigup now</label>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <Formik
                initialValues={signup_initial}
                validationSchema={signup}
                onSubmit={onSub2}
              >
                <Form>
                  <div className="input-boxes">
                    <div className="input-box mb-3 my-3">
                      <i className="fas fa-user"></i>
                      <Field
                        type="text"
                        id="username1"
                        name="username1"
                        placeholder="Enter Your Username"
                      />
                      <div className="error">
                        <ErrorMessage name="username1" />
                      </div>
                    </div>

                    <div className="input-box mb-3 my-3">
                      <i className="fas fa-envelope"></i>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                      />
                      <div className="error">
                        <ErrorMessage name="email" />
                      </div>
                    </div>

                    <div className="input-box mb-3 my-3">
                      <i className="fas fa-lock"></i>
                      <Field
                        type="password"
                        id="password1"
                        name="password1"
                        placeholder="Enter your password"
                      />
                      <div className="error">
                        <ErrorMessage name="password1" />
                      </div>
                    </div>

                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>

                    <div className="text sign-up-text">
                      Already have an account?{" "}
                      <label htmlFor="flip">Login now</label>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
