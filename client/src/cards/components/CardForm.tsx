import React, { ChangeEvent, FC } from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";
import Joi from "joi";
import {
  CardFromClientType,
  CreateCardErrors,
} from "../models/types/cardTypes";

type Props = {
  title?: string;
  onSubmit: () => void;
  onReset: () => void;
  onFormChange: () => Joi.ValidationError | null;
  errors: CreateCardErrors;
  data: CardFromClientType;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CardForm: FC<Props> = ({
  onSubmit,
  onReset,
  onFormChange,
  title,
  errors,
  data,
  onInputChange,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      onFormChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}
      spacing={1}
      to={ROUTES.CARDS}
    >
      <Input
        name="title"
        label="title"
        error={errors.title}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="subtitle"
        label="subtitle"
        error={errors.subtitle}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="description"
        label="description"
        error={errors.description}
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
        name="webUrl"
        label="web"
        error={errors.webUrl}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="imageUrl"
        label="image url"
        error={errors.imageUrl}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="imageAlt"
        label="image alt"
        error={errors.imageAlt}
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
        name="country"
        label="country"
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
        label="houseNumber"
        type="number"
        error={errors.houseNumber}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="zip"
        label="zip"
        type="number"
        error={errors.zip}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
    </Form>
  );
};

export default React.memo(CardForm);

// import React, { ChangeEvent, FC } from "react";
// import Form from "../../forms/components/Form";
// import Input from "../../forms/components/Input";
// import ROUTES from "../../routes/routesModel";
// import Joi from "joi";
// import {
//   CardFromClientType,
//   CreateCardErrors,
// } from "../models/types/cardTypes";

// type Props = {
//   title?: string;
//   onSubmit: () => void;
//   onReset: () => void;
//   onFormChange: () => Joi.ValidationError | null;
//   errors: CreateCardErrors;
//   data: CardFromClientType;
//   onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
// };

// const UserForm: FC<Props> = ({
//   onSubmit,
//   onReset,
//   onFormChange,
//   title,
//   errors,
//   data,
//   onInputChange,
// }) => {
//   return (
//     <Form // :יקבל Form השדות ש
//       onSubmit={onSubmit} // והטופס ישלח submit מטודה שתפעל כאשר המשתמש ילחץ על הכפתור
//       onReset={onReset} // מטודה שתאפס את שדות התופס לריקים
//       onFormChange={onFormChange}
//       // submit מטודה שתופעל כאשר יהיה שינוי בכל שדות האינפוט ואז ישתחרר הכפתור
//       styles={{ maxWidth: "800px" }}
//       title={title} // form הכותרת ב
//       spacing={1}
//       to={ROUTES.CARDS} // הדף שאליו יועבר המשתמש אחרי שהטופס ישלח
//     >
//       <Input
//         name="title"
//         label="title"
//         error={errors.title} // אותם הודעות שגיאה שיופיעו מתחת לשדה ויצבעו אותו באדום
//         onInputChange={onInputChange} // מטודה שתופעל כאשר יהיה שינוי בשדה הספציפי
//         data={data} // (user או card) data מייצר שדה באובייקט של
//         breakPoints={{ sm: 6 }}
//       />
//       <Input
//         name="subtitle"
//         label="subtitle"
//         error={errors.subtitle}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//       />
//       <Input
//         name="description"
//         label="description"
//         error={errors.description}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//       />
//       <Input
//         name="phone"
//         label="phone"
//         type="phone"
//         error={errors.phone}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//       />
//       <Input
//         name="email"
//         label="email"
//         type="email"
//         error={errors.email}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//       />
//       <Input
//         name="webUrl"
//         label="web"
//         error={errors.webUrl}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//         required={false}
//       />
//       <Input
//         name="imageUrl"
//         label="image url"
//         error={errors.imageUrl}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//         required={false}
//       />
//       <Input
//         name="imageAlt"
//         label="image alt"
//         error={errors.imageAlt}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//         required={false}
//       />
//       <Input
//         name="state"
//         label="state"
//         error={errors.state}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//         required={false}
//       />
//       <Input
//         name="country"
//         label="country"
//         error={errors.country}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//       />
//       <Input
//         name="city"
//         label="city"
//         error={errors.city}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//       />
//       <Input
//         name="street"
//         label="street"
//         error={errors.street}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//       />
//       <Input
//         name="houseNumber"
//         label="houseNumber"
//         type="number"
//         error={errors.houseNumber}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//       />
//       <Input
//         name="zip"
//         label="zip"
//         type="number"
//         error={errors.zip}
//         onInputChange={onInputChange}
//         data={data}
//         breakPoints={{ sm: 6 }}
//       />
//     </Form>
//   );
// };

// export default React.memo(UserForm);
