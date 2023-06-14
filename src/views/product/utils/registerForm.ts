import * as yup from "yup";

export type RegisterFormType = {
  username: string;
  password: string;
  confirmPassword: string;
};

export const registerFormValidationSchema = () =>
  yup.object({
    username: yup.string().required("Required field"),
    password: yup.string().required("Required field"),
    confirmPassword: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password"), ""], "Passwords must match"),
  });
