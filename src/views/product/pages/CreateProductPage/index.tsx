import React from "react";
import {
  createProductFormValidationSchema,
  CreateProductFormType,
} from "../../utils/createProductForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import CreateProductForm from "views/product/components/CreateProductForm";

function CreateProductPage() {
  const { t } = useTranslation("product");
  const resolver: Resolver<CreateProductFormType> = yupResolver(
    createProductFormValidationSchema(t)
  );
  const {
    handleSubmit,
    register,
    watch,
    control,
    reset,
    resetField,
    setValue,
  } = useForm<CreateProductFormType>({ resolver });

  return <CreateProductForm handleSubmit={handleSubmit} control={control} />;
}

export default CreateProductPage;
