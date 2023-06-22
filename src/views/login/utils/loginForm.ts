import * as yup from "yup";

export type LoginFormType = {
  username: string;
  password: string;
};

export const loginFormValidationSchema = (t: any) =>
  yup.object({
    username: yup.string().required(t("Required field")),
    password: yup.string().required(t("Required field")),
  });
