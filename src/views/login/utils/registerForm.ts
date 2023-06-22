import * as yup from "yup";

export type RegisterFormType = {
  username: string;
  password: string;
  confirmPassword: string;
};

export const registerFormValidationSchema = (t: any) =>
  yup.object({
    username: yup.string().required(t("Required field")),
    password: yup.string().required(t("Required field")),
    confirmPassword: yup
      .string()
      .required(t("Required field"))
      .oneOf([yup.ref("password"), ""], t("Passwords must match")),
  });
