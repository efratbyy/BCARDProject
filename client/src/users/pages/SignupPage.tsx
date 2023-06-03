import React from "react";
import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useHandleUsers from "../hooks/useHandleUsers";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import { useUser } from "../providers/UserProvider";
import UserForm from "../components/UserForm";

const SignupPage = () => {
  const { user } = useUser();
  const { handleSignup } = useHandleUsers();

  const { value, ...rest } = useForm(
    // פונקציה שאחראית על ההתחברות
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  // const { data, errors } = value;
  // // זה אובייקט התשובה שחוזר מהשרת data
  // // זה במידה ויש שגיאה זו ההודעה שתחזור מהשרת errors
  // const {
  //   handleInputChange,
  //   handleReset,
  //   onSubmit,
  //   validateForm,
  //   setData,
  // } = rest; // המטודות שיטפלו בטופס רישום המשתמש

  // במידה והמשתמש מחובר הוא יועבר לדף הכרטיסים
  if (user) return <Navigate replace to={ROUTES.CARDS} />;
  // -לא מאפשר למשתמש לחזור דף אחורה replace
  // במידה והעביר את המשתמש לדף הכרטיסים כי הוא כבר ביצע כניסה לאתר הוא לא יאפשר לו לחזור לעמוד הקודם
  // SignupPage במידה והמשתמש לא מחובר הוא יועבר לדף

  return (
    <Container
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        title="Signup Page"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleInputChange}
        data={value.data} // const data: {_id: string; isBusiness: boolean; isAdmin: boolean}
        errors={value.errors}
        setData={rest.setData}
      />
    </Container>
  );
};

export default SignupPage;
