import React, { ChangeEvent, FC } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";
import Joi from "joi";
import {
  RegisterType,
  RegistrationFormErrors,
} from "../models/types/userTypes";
import FormLink from "../../forms/components/FormLink";

type Props = {
  title?: string;
  onSubmit: () => void;
  onReset: () => void;
  onFormChange: () => Joi.ValidationError | null;
  errors: any | RegistrationFormErrors;
  data: RegisterType;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setData: (data: RegisterType) => void;
};

const UserForm: FC<Props> = ({
  onSubmit,
  onReset,
  onFormChange,
  title,
  errors,
  data,
  onInputChange,
  setData,
}) => {
  return (
    <Form // :יקבל Form השדות ש
      onSubmit={onSubmit} // והטופס ישלח submit מטודה שתפעל כאשר המשתמש ילחץ על הכפתור
      onReset={onReset} // מטודה שתאפס את שדות התופס לריקים
      onFormChange={onFormChange}
      // submit מטודה שתופעל כאשר יהיה שינוי בכל שדות האינפוט ואז ישתחרר הכפתור
      styles={{ maxWidth: "800px" }}
      title={title} // form הכותרת ב
      to={ROUTES.CARDS} // הדף שאליו יועבר המשתמש אחרי שהטופס ישלח
    >
      <Input
        name="first"
        label="first name"
        error={errors.first} // אותם הודעות שגיאה שיופיעו מתחת לשדה ויצבעו אותו באדום
        onInputChange={onInputChange} // מטודה שתופעל כאשר יהיה שינוי בשדה הספציפי
        data={data} // (user או card) data מייצר שדה באובייקט של
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="middle"
        label="middle name"
        error={errors.middle}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false} // במידה וזה לא שדה חובה לא ארצה שתופיע * ולכן אוסיף שורה זו
        // * ותופיע required={true} במידה ולא מוסיפה שורה אז ברירת המחדל היא
        // defaultProps בחלק של ה Input קבענו את זה בקומפוננטה
      />
      <Input
        name="last"
        label="last name"
        error={errors.last}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="password"
        label="password"
        type="password"
        error={errors.password}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="url"
        label="image url"
        error={errors.url}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="alt"
        label="image alt"
        error={errors.alt}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="state"
        label="state"
        error={errors.state}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        label="country"
        name="country"
        error={errors.country}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="city"
        label="city"
        error={errors.city}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="street"
        label="street"
        error={errors.street}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="houseNumber"
        label="house Number"
        type="number"
        error={errors.houseNumber}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="zip"
        label="zip"
        error={errors.zip}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Grid item>
        <FormControlLabel // MUI או לא - קומפוננטה של isBusiness הקובייה שבה יסמן המשתמש אם הוא
          // initialSignupForm בצ׳אק בוקס. את זה הגדרנו בקומפוננטה V ברירת המחדל היא שמשתמש הוא לא ביזנס אלא אם סימן
          name="isBusiness"
          control={
            <Checkbox
              value={data.isBusiness}
              color="primary"
              // isBusiness בערך data שלו מתקבל מהאובייקט של value הצ׳ק בוקס שה
              onChange={
                (e) =>
                  // בצ׳אק בוקס V המטודה שתופעל כאשר יסמנו
                  // V זה האירוע של הסימון ב e
                  setData({ ...data, isBusiness: !!e.target.checked })
                // data-כי בעצם העתקתי את ה isBusiness ב V לא ימחקו לי כל השדות שמלאתי בטופס כאשר אסמן ...data בזכות
                // !!e.target.checked-ולתת לא ערך חדש שאותו יקבל מ isBusiness אחכ אמרתי לו ללכת למפתח הספציפי
                // false ובמידה ולא יהיה true הופך לערך בוליאני. במידה ומסומן יהיה - !!e.target.checked
                // יש לו באירוע האם סימנו אותו או לא Checkbox-ב
              }
            />
          }
          label="Signup as business" // הכיתוב שיופיע ליד הצ׳אק בוקס
        />
      </Grid>
      <FormLink text="Already registered?" to={ROUTES.LOGIN} />
    </Form>
  );
};

export default React.memo(UserForm);
