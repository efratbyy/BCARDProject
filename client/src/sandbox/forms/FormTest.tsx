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

  // מה שהכניס המשתמש בשדות) ומדפיסה אותו לקונסול) data מקבלת אובייקט של
  const handleSubmit = (data: Data) => {
    console.log(data);
    handleReset(); // לאחר שליחת הטופס זה מאפס את השדות של הטופס ונועל את הכפתור
  };

  //העברת אובייקט עם כל המפתחות והוולידציות שארצה לעשות לכל שדה (זו לא הפעלה של הוולידציה אלא רק היצירה שלה)
  const SCHEMA = {
    first: Joi.string()
      .min(2)
      .required(),
    last: Joi.string()
      .min(2)
      .required(),
  };

  //קובע שהערך הראשוני של השדות יהיה ריק
  const INITIAL_FORM = {
    first: "",
    last: "",
  };

  // ואין משמעות לשמות השדות אלא למיקום שלהם (ראשון, שני, שלישי) useForm.js-המשתנים עוברים ל
  // מחזירה useForm הוא האובייקט שהתקבל ממה שהמטודה value
  // value אני מחלצת רק את useForm-במקום לרשום את כל השמות מ
  // (חוסך במקום וברישום קוד) מייצאת useForm-מכניסה בעצם את כל המטודות ש ...rest לתוך
  // ואז שם הפונקציה שרוצה לחלץ ממנו rest.-ולכן משתמשת ב
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
        title="Form Test" // כותרת הטופס
        onSubmit={onSubmit} // submit מטודה זו תפעל כאשר המשתמש ילחץ על
        onReset={handleReset} // reset-מטודה זו תופעל כאשר המשתמש ילחץ על כפתור ה
        styles={{ maxWidth: "450px" }}
        onFormChange={validateForm} // המטודה הזו אחראית האם לשחרר לי את הכפתור או לא
        to={ROUTES.SANDBOX}
      >
        <Input
          label="first name" // הכיתוב על השדה
          name="first" // שם השדה לזיהוי שלו בהמשך
          data={data} // useForm-שחילצנו ב data אובייקט
          error={errors.first} // errors המפתח בתוך אובייקט
          onInputChange={handleInputChange} // כל שינוי שיוכנס ע״י המשתמש המטודה הזו תפעל
        />
        <Input
          label="last name"
          name="last"
          data={data}
          error={errors.last}
          onInputChange={handleInputChange} // כל שינוי שיוכנס ע״י המשתמש המטודה הזו תפעל
        />
      </Form>
    </Container>
  );
};

export default FormTest;
