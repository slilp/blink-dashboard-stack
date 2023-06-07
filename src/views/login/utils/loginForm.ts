import * as yup from "yup";

export type LoginFormType = {
  username: string;
  password: string;
};

export const loginFormValidationSchema = () =>
  yup.object({
    username: yup.string().required("Required field"),
    password: yup.string().required("Required field"),
  });
