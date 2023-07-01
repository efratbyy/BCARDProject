import Joi from "joi";
import React from "react";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";

export const FormTest = () => {
  type Data = {
    first: string;
    last: string;
  };

  const handleSubmit = (data: Data) => {
    handleReset();
  };

  const SCHEMA = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).required(),
  };

  const INITIAL_FORM = {
    first: "",
    last: "",
  };

  const { value, ...rest } = useForm(INITIAL_FORM, SCHEMA, handleSubmit);
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;
  const { data, errors } = value;

  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="Form Test"
        onSubmit={onSubmit}
        onReset={handleReset}
        styles={{ maxWidth: "450px" }}
        onFormChange={validateForm}
        to={ROUTES.SANDBOX}
      >
        <Input
          label="first name"
          name="first"
          data={data}
          error={errors.first}
          onInputChange={handleInputChange}
        />
        <Input
          label="last name"
          name="last"
          data={data}
          error={errors.last}
          onInputChange={handleInputChange}
        />
      </Form>
    </Container>
  );
};

export default FormTest;
