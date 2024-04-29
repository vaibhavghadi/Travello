import { object, string, date, array, number } from "yup";

const Valid = object({
  valid_form: array(
    object({
      first_name: string()
        .trim()
        .matches(/^[A-Za-z]*$/, "** First Name Should Be Alphabetical Value **")
        .min(3, "** First Name Should Contains Minimum 3 Characters **")
        .max(30, "** First Name Should Contains Maximum 30 Characters **")
        .required("** Required **"),
      last_name: string()
        .trim()
        .matches(/^[A-Za-z]*$/, "** Last Name Should Be Alphabetical Value **")
        .min(3, "** Last Name Should Contains Minimum 3 Characters **")
        .max(30, "** Last Name Should Contains Maximum 30 Characters **")
        .required("** Required **"),
      age: number().min(1).max(100).required("** Required **"),
      city: string().trim().min(3).max(30).required("** Required **"),
    })
  ),
});

export default Valid;
