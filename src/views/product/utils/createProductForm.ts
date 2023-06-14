import * as yup from "yup";

export type CreateProductFormType = {
  name: string;
  desc: string;
  stock: number;
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

export const createProductFormValidationSchema = () =>
  yup.object({
    name: yup.string().required("Required field"),
    desc: yup.string().required("Required field"),
    stock: yup.string().required("Required field"),
    color: yup.string().required("Required field"),
    warranty: yup.boolean().required("Required field"),
    brand: yup.string().required("Required field"),
    status: yup.string().required("Required field"),
    img: yup.mixed().required("Required field"),
    promotions: yup
      .array()
      .of(
        yup.object().shape({
          promotionId: yup.string().required("Required field"),
          label: yup.string().required("Required field"),
        })
      )
      .required("Minimum one")
      .min(1, "Minimum one"),
  });
