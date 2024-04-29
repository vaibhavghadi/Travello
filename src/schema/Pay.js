import { object, string, date, number } from "yup";

const Pay = object({
  Card_Number: number()
    .test(
      "len",
      "Card Number Needs To Be Excatly 16 Digits",
      (val) => val.toString().length === 16
    )
    .required("** Required **"),
  Expiry_Date: date().required("** Required **"),
  CVV: number()
    .test(
      "len",
      "CVV Needs To Be Excatly 3 Digits",
      (val) => val.toString().length === 3
    )
    .required("** Required **"),
  Holder_Name: string()
    .trim()
    .matches(/^[A-Za-z]*$/, "** Name Should Be Alphabetical Value **")
    .min(3, "** Name Should Contains Minimum 3 Characters **")
    .max(30, "** Name Should Contains Maximum 30 Characters **")
    .required("** Required **"),
});

export default Pay;
