import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Valid from "../schema/Valid";
import { Formik, FieldArray, Form, Field } from "formik";
import c1 from "../context/TourContext";
import "../style/Passenger.css";
import Form1 from "../components/Form1";
import { useNavigate } from "react-router-dom";

export default function Passenger() {
  const value = useContext(c1);
  const { dest, passenger } = value;
  const [len, setLen] = useState(1);
  const navigate = useNavigate();

  const initialValues = {
    valid_form: [
      {
        first_name: "",
        last_name: "",
        age: null,
        // date: new Date().toUTCString,
        city: dest.city,
        payment: dest.payment,
        pay_done: 0,
      },
    ],
  };

  const validationSchema = Valid;

  const onsub = (values, action) => {
    passenger(values);
    alert("Passenger Details Are Successfully Saved....!!!!");
    navigate("/tour_description/passenger_list/:name/Payment");
  };

  return (
    <div>
      <Navbar />
      <div className="pass_form">
        <div className="p_head">Passenger Details</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onsub}
        >
          <Form className="pass_details">
            <FieldArray
              name="valid_form"
              render={(arrayHelpers) => {
                return (
                  <div className="field">
                    {arrayHelpers.form.values.valid_form.map(
                      (values, index) => {
                        return (
                          <Form1
                            value={values}
                            key={index}
                            help={arrayHelpers}
                            index={index}
                            dest={dest}
                          />
                        );
                      }
                    )}
                  </div>
                );
              }}
            ></FieldArray>

            <input type="submit" className="btn btn-primary" value="Submit" />
          </Form>
        </Formik>
      </div>
    </div>
  );
}
