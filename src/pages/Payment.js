import React from "react";
import Navbar from "../components/Navbar";
import "../style/Payment.css";
import Pay from "../schema/Pay";
import c1 from "../context/TourContext";
import { useContext } from "react";
import { Form, Field, ErrorMessage, Formik, useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const value = useContext(c1);
  const { card } = value;
  const navigate = useNavigate();

  const initialValues = {
    valid_form: [
      {
        Card_Number: 0,
        Expiry_Date: 0,
        CVV: 0,
        Holder_Name: "",
      },
    ],
  };

  const validationSchema = Pay;

  const onsub = (values, actions) => {
    card(values);
    alert("Card Details Are Successfully Analyzed....!!!!");
    navigate("/");
  };

  return (
    <div>
      <h1> payment page</h1>
      <Navbar />
      <div className="container bg-light d-md-flex align-items-center pay_cont">
        {" "}
        <div className="card box2 shadow-sm">
          {" "}
          <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
            {" "}
            <span className="h5 fw-bold m-0">Payment methods</span>{" "}
          </div>{" "}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onsub}
          >
            <Form>
              {" "}
              <div className="row">
                {" "}
                <div className="col-12">
                  {" "}
                  <div className="d-flex flex-column px-md-5 px-4 mb-4">
                    {" "}
                    <span>Credit Card</span>{" "}
                    <div className="inputWithIcon">
                      {" "}
                      <div className="pay_div">
                        <span className="">
                          {" "}
                          <img
                            src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                            alt=""
                            className="p_card"
                          />
                        </span>{" "}
                        <Field
                          className="form-control"
                          type="number"
                          id="Card_Number"
                          name="Card_Number"
                        />{" "}
                        <div className="error">
                          <ErrorMessage name="Card_Number" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-md-6">
                  {" "}
                  <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                    {" "}
                    <span>
                      Expiration<span className="ps-1">Date</span>
                    </span>{" "}
                    <div className="inputWithIcon">
                      {" "}
                      <div className="pay_div">
                        <Field
                          type="month"
                          className="form-control"
                          id="Expiry_Date"
                          name="Expiry_Date"
                        />{" "}
                        <div className="error">
                          <ErrorMessage name="Expiry_Date" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-md-6">
                  {" "}
                  <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                    {" "}
                    <span>Code CVV</span>{" "}
                    <div className="inputWithIcon">
                      {" "}
                      <div className="pay_div">
                        <Field
                          type="number"
                          className="form-control"
                          id="CVV"
                          name="CVV"
                        />{" "}
                        <span className="fas fa-lock icon1"></span>{" "}
                        <div className="error">
                          <ErrorMessage name="CVV" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-12">
                  {" "}
                  <div className="d-flex flex-column px-md-5 px-4 mb-4">
                    {" "}
                    <span>First Name</span>{" "}
                    <div className="inputWithIcon">
                      {" "}
                      <div className="pay_div">
                        <Field
                          className="form-control text-uppercase"
                          type="text"
                          id="Holder_Name"
                          name="Holder_Name"
                        />{" "}
                        <span className="far fa-user icon1"></span>{" "}
                        <div className="error">
                          <ErrorMessage name="Holder_Name" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-12 px-md-5 px-4 mt-3">
                  {" "}
                  <input
                    type="submit"
                    className="btn btn-primary w-100 "
                    value="Pay Now"
                  />{" "}
                </div>{" "}
              </div>{" "}
            </Form>
          </Formik>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
