import * as yup from "yup";

export type LoginFormType = {
  username: string;
  password: string;
};

export const loginFormValidationSchema = (t: any) =>
  yup.object({
    username: yup
      .string()
      .required(t("Required field"))
      .email(t("Invalid format")),
    password: yup.string().required(t("Required field")),
  });
