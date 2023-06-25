import { useState, useCallback, useMemo, ChangeEvent } from "react";
import Joi, { PartialSchemaMap } from "joi";

type HandleSubmit = (data: any) => void | Promise<void>;

const useForm = <TForm extends Record<string, unknown>>(
  initialForm: TForm,
  schema: PartialSchemaMap<any>,
  handleSubmit: HandleSubmit
) => {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);

  type TargetType = { name: string; value: string };

  const validateProperty = useCallback(
    ({ name, value }: TargetType) => {
      const obj = { [name]: value };
      const generateSchema = Joi.object({ [name]: schema[name] });
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleInputChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = target;
      const errorMessage = validateProperty(target);
      if (errorMessage)
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      else
        setErrors((prev) => {
          let obj: Record<string, string> = { ...prev };
          delete obj[name];
          return obj;
        });

      setData((prev) => ({ ...prev, [name]: value }));
    },
    [validateProperty]
  );

  const validateForm = useCallback(() => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    console.log(schema);
    console.log(schemaForValidate);
    console.log(data);
    console.log(error);
    if (error) return error;
    return null;
  }, [schema, data]);

  const onSubmit = useCallback(() => {
    handleSubmit(data);
  }, [handleSubmit, data]);

  const value = useMemo(() => {
    return { data, errors };
  }, [data, errors]);

  return {
    value,
    onSubmit,
    handleInputChange,
    handleReset,
    validateForm,
    setData,
  };
};

export default useForm;

// import { useState, useCallback, useMemo, ChangeEvent } from "react";
// import Joi, { PartialSchemaMap } from "joi";

// // זהו הוק שיעזור בניהול הטפסים
// type HandleSubmit = (data: any) => void | Promise<void>;

// const useForm = <TForm extends Record<string, unknown>>(
//   // מגדיר איזה סוג ערכים יסכים לקבל TForm
//   // FormTest.tsx שלושת הפרמטרים האלו מגיעים ונוצרו בקובץ
//   initialForm: TForm, // מאפס את שדות הטופס לריקים
//   schema: PartialSchemaMap<any>, // שתעזור בביצוע ולידציות על הנתונים שיוכנסו בשדות הטופס joi סכמה של
//   // יסכים לקבל כל סכמה שיקבל PartialSchemaMap<any>
//   handleSubmit: HandleSubmit // פונקציה שתופעל כאשר הטופס ישלח
// ) => {
//   const [data, setData] = useState(initialForm); //אומר שכל השדות יאותחלו לשדות ריקים initialForm מקבל
//   // זה מה שהמשתמש כתב באינפוטים data
//   const [errors, setErrors] = useState<Record<string, string>>({}); // errors משנה את הערך האובייקט של

//   // מאפס את שדות הטופס handleReset
//   const handleReset = useCallback(() => {
//     // תפעיל את המטודה הזו reset לחיצה על הכפתור
//     setData(initialForm); // שזה אובייקט של שדות ריקים initialForm עם מה שקיבלנו ב data מאפסת את האובייקט של
//     setErrors({}); // עם אובייקט ריק error מאפסת את
//   }, [initialForm]);

//   type TargetType = { name: string; value: string };

//   // מחזיר אם יש שגיאה או לא validateProperty
//   const validateProperty = useCallback(
//     // פונקציה שאחראית על יצירת סכמה של ג׳וי ובדיקת הערכים שהוכנסו לשדות הטופס. היא תחזיר מחרוזת תווים עם השגיאה או null שתחזיר
//     ({ name, value }: TargetType) => {
//       // מהאובייקט שהועבר לנו value-ו name מחלצים את המפתחות
//       // זה מה שהמשתמש הכניס בשדה value-זה השם שנתתי לשדה הטופס ו name
//       const obj = { [name]: value };
//       // זה מה שהמשתמש כתב value-שזה שם השדה אינפוט וה name הוא אובייקט שמפתח שלו הוא obj
//       // value-והערך יהיה הערך שהעברנו ב name-יצירת אובייקט עם מה שקיבלתי בשהמפתח שלו יהיה הערך שהעברנו ב
//       const generateSchema = Joi.object({ [name]: schema[name] });
//       //   פה יוצרת את הסכמה שבעזרתה נבנה את האובייקט שיצרנו
//       // Joi.object הפעלת מטודת
//       // זה שם המפתח לבדיקה שזה שם השדה בטופס name
//       // name-שיעבור דרך הסכמה שמתאימה לאותו השדה/לאותו ה value-זה בעצם ה schema[name]
//       const { error } = generateSchema.validate(obj);
//       // שזה האובייקט לבדיקה obj ומעבירים לה את generateSchema-עם הסכמה שיצרנו ב validate הפעלת מטודת
//       return error ? error.details[0].message : null;
//       // הנתייה שאומרת שבמידה ויש לי שגיאה אז תחזירי לי אותה (המיקום הוא אובייקט של ג׳וי-הודעת השגיאה מופיעה
//       // nall מתחת לאינפוט בטופס באדום) ואם לא אז תחזירי
//     },
//     [schema]
//   );

//   // מטודה שאחראית על הודעות השגיאה האדומות שנכתבות מתחת לשדות האינפוטים במידה והמשתמש מכניס שדות לא חוקיים
//   const handleInputChange = useCallback(
//     // מטודה שתופעל בכל פעם שיוקלד משהו באחד השדות בטופס
//     // היא תיצור את השגיאה כשהמשתמש מכניס אינפוט שלא עומד בדרישות הסכמה ותמחק אותה ברגע שיתקן
//     ({ target }: ChangeEvent<HTMLInputElement>) => {
//       // זה אירוע ההקלדה של המשתמש בשדה אינפוט target
//       // target והיא מחלצת ממנו את ה event-המטודה מקבלת את ה
//       // הוא מה שהמשתמש הקליד בטופס event-ה
//       const { name, value } = target;
//       // value-ו name את target-מחלצת מ
//       // זה מה שהמשתמש הכניס בשדה value-זה השם שנתתי לשדה הטופס ו name
//       const errorMessage = validateProperty(target);
//       // אם הכל תקין null והיא מבצעת עליו ולידציה ומחזירה לי או הודעת שגיאה או target את האובייקט validateProperty מעבירה למטודת
//       if (errorMessage)
//         setErrors((prev) => ({ ...prev, [name]: errorMessage }));
//       // ותוסיף לו errors היא תקח את המשתנה ,setErrors הוא הודעת שגיאה אז תפעיל את מטודת errorMessage התניה שאומרת שאם
//       // name-את הודעת השגיאה במפתח המתאים לפי שם השדה
//       // מעתיק את כל המפתחות הקיימים ומוסיף אליהם את המפתח החדש עם הודעת השגיאה ...prev
//       else
//         setErrors((prev) => {
//           // כאשר מתחילה לכתוב בשדה האינפוט נרשמת לי הודעת שגיאה באדום שנעלמת כאשר מכניסה את התו השני. ואז אני רוצה למחוק את ההודעת שגיאה שיצרתי בשורה 57
//           let obj: Record<string, string> = { ...prev };
//           // יוצרת אובייקט חדש ומעתיקה לו את כל השגיאות האחרות שעדיין רלוונטיות
//           delete obj[name]; // מחיקת המפתח שיצרנו עם הודעת השגיאה בשורה 58
//           // errors ואז מוחקת רק את המפתח הספציפי שיצרתי בשורה 43 מהאובייקט
//           return obj;
//           // מחזירה את האובייקט החדש ללא הודעת השגיאה
//           // מפתחות האובייקט הם שמות שדות האינפוט בטופס והערכים שלהם זה מה שהמשתמש כתב באינפוטים
//         });

//       setData((prev) => ({ ...prev, [name]: value }));
//       // באובייקט החדש שהוא ללא הודעת השגיאה errors מעדכנת את האובייקט
//     },
//     [validateProperty]
//   );

//   // מטודה שאחראית האם הכפתור ישוחרר או לא
//   const validateForm = useCallback(() => {
//     // בודקת האם כל השדות מולאו כמו שצריך או לא
//     // מטודה שאחראית על אם הכפתור יהיה ניתן ללחיצה או לא
//     const schemaForValidate = Joi.object(schema);
//     // Joi.object זו הסכמה של schemaForValidate
//     // useForm-התקבלה כמפרמטר ל schema
//     // שתעזור בביצוע ולידציות על הנתונים שיוכנסו בשדות הטופס joi זוהי סכמה של היא schema
//     // יצירת הסכמה של ג׳וי. מקבלת אובייקט עם מפתחות וערכים
//     const { error } = schemaForValidate.validate(data);
//     // זה מה שהמשתמש כתב באינפוט data
//     // data ומעבירה לה את validate זו הסכמה שעליה מפעילה את מטודת schemaForValidate
//     // validate הסכמה של ג׳וי שנוצרה בשורה מעל מפעילה את המטודה שלה
//     // והיא מקבלת את האובייקט שצריכה לבדוק
//     // error והיא מחזירה לי אובייקט של ג׳וי שממנו אני מחלצת את המפתח
//     // או אובייקט עם השגיאה והמקום שלה  nall מחזירה לי או validate מטודת
//     if (error) return error;
//     // (true-שווה ערך ל) תחזיר לי את השגיאה schemaForValidate.validate(data)-במידה ותחזור לי שגיאה מ
//     return null; // false-שזה שווה ל nall במידה ואין שגיאה יוחזר לי
//     // לא יפעיל true יפעיל את הכפתור ו false .Form.tsx שמקבל ערך בוליאני להפעלה או לא בקובץ disable זה יפעיל את הכפתור
//     // הכוונה שיש שגיאות true-הכוונה שאין שגיאות ו false
//   }, [schema, data]);

//   // handleSubmit(data) מטודה שמפעילה את
//   const onSubmit = useCallback(() => {
//     // Form.tsx שמופיע בקובץ submit מטודה שתפעל כאשר המשתמש ילחץ על הכפתור
//     // (שזה אחד הפרמטרים שקיבלה למעלה) handleSubmit המטודה הזו מפעילה את
//     // data היא תפעיל אותה עם המפתח
//     handleSubmit(data);
//   }, [handleSubmit, data]);

//   //
//   const value = useMemo(() => {
//     return { data, errors }; // errors ואת data מטודה שתחזיר לי את
//   }, [data, errors]); // error או ב data מטודה שתפעל כאשר יהיה שינוי ב

//   // (מה שיוכנס לתוך השדות) data ,(מה שיופיע לי בקונסול) error
//   return {
//     value, //  (נוצר בשורה 112)
//     onSubmit, //  (נוצר בשורה 104)
//     handleInputChange, //  (נוצר בשורה 47)
//     handleReset, //  (נוצר בשורה 17)
//     validateForm, //  (נוצר בשורה 82)
//     setData, //  (נוצר בשורה 13)
//   };
// };

// export default useForm;
