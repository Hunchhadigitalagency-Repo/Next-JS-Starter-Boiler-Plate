import * as yup from "yup";

// Define validation schema
export const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup
    .string()
    .min(8)
    .max(32)
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});