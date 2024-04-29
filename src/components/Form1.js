import React, { useContext } from "react";
import c1 from "../context/TourContext";
import "../style/form.css";
import { Field, ErrorMessage } from "formik";

export default function Form1(props) {
  const { help, index, dest } = props;

  return (
    <div className="pass_details1">
      <div className="pass_div">
        <Field
          type="text"
          id={`valid_form.${index}.first_name`}
          name={`valid_form.${index}.first_name`}
          placeholder="Enter First Name"
          className="pass_input"
        />
        <div className="error">
          <ErrorMessage name={`valid_form.${index}.first_name`} />
        </div>
      </div>

      <div className="pass_div">
        <Field
          type="text"
          id={`valid_form.${index}.last_name`}
          name={`valid_form.${index}.last_name`}
          placeholder="Enter Last Name"
          className="pass_input"
        />
        <div className="error">
          <ErrorMessage name={`valid_form.${index}.last_name`} />
        </div>
      </div>

      <div className="pass_div">
        <Field
          type="number"
          id={`valid_form.${index}.age`}
          name={`valid_form.${index}.age`}
          placeholder="Enter Age"
          className="pass_input"
        />
        <div className="error">
          <ErrorMessage name={`valid_form.${index}.age`} />
        </div>
      </div>

      {/* <input
            type="date"
            id="date"
            name="date"
            placeholder="Enter Date"
            value={values.date}
            onChange={form.handleChange}
            onBlur={handleBlur}
          />
          {errors.date && touched.date ? (
            <p className="error"> {errors.date.toUpperCase()}</p>
          ) : null} */}

      <div className="pass_div">
        <Field
          type="text"
          id={`valid_form.${index}.city`}
          name={`valid_form.${index}.city`}
          className="pass_input"
          disabled
        />
        <div className="error">
          <ErrorMessage name={`valid_form.${index}.city`} />
        </div>
      </div>
      <div className="pass_div button">
        <input
          type="button"
          className="btn btn-primary add"
          value="Add"
          onClick={() => {
            help.insert(help.form.values.valid_form.length + 1, {
              first_name: "",
              last_name: "",
              age: null,
              city: dest.city,
              payment: dest.payment,
              pay_done: 0,
            });
          }}
        />
        {help.form.values.valid_form.length < 2 ? null : (
          <input
            type="button"
            className="btn btn-primary remove"
            value="Remove"
            onClick={() => {
              help.remove(index);
            }}
          />
        )}
      </div>
    </div>
  );
}
