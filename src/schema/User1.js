import { object, string } from "yup";

export const signup = object({
  username1: string()
    .trim()
    .matches(
      "^(?=.*[a-zA-Z])(?=.*[0-9])",
      "** Username Should Contains Alphanumeric Characters **"
    )
    .min(6)
    .max(30)
    .required("** Required **"),
  email: string()
    .trim()
    .email("** Email Not Valid **")
    .min(12, "** Email Should Contains Minimum 12 Characters **")
    .max(40, "** Email Should Contains Maximum 40 Characters **")
    .required("** Required **"),
  password1: string()
    .trim()
    .matches(
      "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%&])",
      "** Password Should Contains Alphanumeric And Special Characters **"
    )
    .min(6, "** Password Should Contains Minimum 6 Characters **")
    .max(30, "** Password Should Contains Maximum 30 Characters **")
    .required("** Required **"),
  login: Boolean(),
});

export const signin = object({
  username: string()
    .trim()
    .matches(
      "^(?=.*[a-zA-Z])(?=.*[0-9])",
      "** Username Should Contains Alphanumeric Characters **"
    )
    .min(6, "** Username Should Contains Minimum 6 Characters **")
    .max(30, "** Username Should Contains Maximum 30 Characters **")
    .required("** Required **"),
  password: string()
    .trim()
    .matches(
      "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%&])",
      "** Password Should Contains Alphanumeric And Special Characters **"
    )
    .min(6, "** Password Should Contains Minimum 6 Characters **")
    .max(30, "** Password Should Contains Minimum 30 Characters **")
    .required("** Required **"),
  login: Boolean(),
});
