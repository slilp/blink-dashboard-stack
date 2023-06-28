import * as yup from "yup";

export type CreateProductFormType = {
  name: string;
  desc: string;
  stock: string;
  color: string;
  warranty: boolean;
  brand: string;
  status: string;
  promotions: {
    promotionId: string;
    label: string;
  }[];
  img: File | null | string;
};

export const createProductFormValidationSchema = (t: any) =>
  yup.object({
    name: yup.string().required(t("Required field")),
    desc: yup.string().required(t("Required field")),
    stock: yup.string().required(t("Required field")),
    color: yup.string().required(t("Required field")),
    warranty: yup.boolean().required(t("Required field")),
    brand: yup.string().required(t("Required field")),
    status: yup.string().required(t("Required field")),
    img: yup.mixed().required(t("Required field")),
    promotions: yup
      .array()
      .of(
        yup.object().shape({
          promotionId: yup.string().required(t("Required field")),
          label: yup.string().required(t("Required field")),
        })
      )
      .required(t("Minimum one"))
      .min(1, t("Minimum one")),
  });
