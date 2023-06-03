import React from "react";
import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useHandleUsers from "../hooks/useHandleUsers";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import FormLink from "../../forms/components/FormLink";
import { useUser } from "../providers/UserProvider";

const LoginPage = () => {
  const { user } = useUser(); // UserProvider.ts-מ
  // // UserProvider/Context מטודה שבעזרתה נוכל לצרוך את התוכן של
  const { handleLogin } = useHandleUsers();

  const { value, ...rest } = useForm(
    // פונקציה שאחראית על ההתחברות
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (user) return <Navigate to={ROUTES.ROOT} />;
  // כלומר המשתמש כבר מחובר אז נעביר אותו לדף הכרטיסים ,UserProvider-שייבאנו מ user-התניה שאומרת שאם יש ערך ל

  return (
    <Container
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="login"
        onSubmit={rest.onSubmit} // אשר תופעל כאשר המשתמש ילחץ לשליחת הטופס useForm-שחילצנו מ onSubmit
        onReset={rest.handleReset} // cancel-אשר תופעל כאשר המשתמש ילחץ על כפתור ה useForm-שחילצנו מ handleReset
        styles={{ maxWidth: "450px" }}
        spacing={1}
        onFormChange={rest.validateForm} // אשר אחראי האם הכפתור ישוחרר או לא useForm-שחילצנו מ validateForm
        to={ROUTES.CARDS}
      >
        <Input
          label="email"
          name="email"
          type="email" // בטלפונים יפתח מקלדת שמתאימה לאימייל
          data={value.data} // const data: {email: string; password: string;}
          error={value.errors.email}
          onInputChange={rest.handleInputChange} // מטודה שתופעל בכל הקלדה של המשתמש באינפוט
        />
        <Input
          label="password"
          name="password"
          type="password" // בטלפונים יפתח מקלדת שמתאימה
          // יסיר את הסיסמא בעיגולים שחורים שלא ניתן לראות אותה
          data={value.data} // const data: {email: string; password: string;}
          error={value.errors.password}
          onInputChange={rest.handleInputChange}
        />
        <FormLink text="Not registered yet?" to={ROUTES.SIGNUP} />
      </Form>
    </Container>
  );
};

export default LoginPage;
