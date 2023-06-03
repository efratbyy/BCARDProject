import React, { ChangeEvent, FC } from "react";
import TextField from "@mui/material/TextField";
import { makeFirstLetterCapital } from "../utils/algoMethods";
import Grid from "@mui/material/Grid";

type BreakPoints = "xs" | "sm" | "md" | "lg" | "xl";
type VariantType = "filled" | "outlined" | "standard";
type BreakPointValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  variant?: VariantType;
  type?: string;
  name: string;
  data: Record<string, unknown>;
  label: string;
  required?: boolean;
  error?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  breakPoints?: Partial<Record<BreakPoints, BreakPointValueType>>;
};

const Input: FC<Props> = ({
  variant = "outlined",
  type = "text",
  name,
  data,
  label,
  required = true,
  error,
  onInputChange,
  breakPoints = { xs: 12 },
}) => {
  return (
    <Grid item {...breakPoints}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={onInputChange}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
};

export default React.memo(Input);

// import React, { ChangeEvent, FC } from "react";
// import TextField from "@mui/material/TextField";
// import { makeFirstLetterCapital } from "../utils/algoMethods";
// import Grid from "@mui/material/Grid";

// // ותנהל את הנתונים שיוכנסו אליה ויקלטו ממנה MUI של TextField קומפוננטה שתעטוף את הקומפוננטה
// type BreakPoints = "xs" | "sm" | "md" | "lg" | "xl";
// type VariantType = "filled" | "outlined" | "standard";
// type BreakPointValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// type Props = {
//   variant?: VariantType; // סוג העיצוב של השדה
//   type?: string; // TextField קביעת סוג אלמנט האינפוט שנמצא בבסיסו של הקומפוננט
//   name: string; // בזיהוי השדה name, id, value ישמש את המאפיינים
//   data: Record<string, unknown>;
//   // זהו טייפ שמצפה לקבל אובייקט ששם המפתח הוא מסוג סטרינג ושם הערך לא ידוע הסוג
//   // מצפה לקבל אובייקט או מערך מסוג לא ידוע Record
//   // הערך הראשון קובע את סוג המפתח והערך השני קובע את סוג הערך <string, unknown>
//   // שיקבל כל סוג any-ברגע שקיבל ערך מסוג מסויים הוא יתקבע על הסוג הזה ורק אותו יקבל. בניגוד ל-unknown
//   //  בלי להתקבע על סוג מסויים
//   label: string; // השם שיופיע על תווית השדה
//   required?: boolean; // האם להוסיף כוכבית בתווית השם מבחינה עיצובית בלבד
//   error?: string; // true יהיה error במידה והמאפיין helperText מחרוזת התווים שתוצג במאפיין
//   onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   breakPoints?: Partial<Record<BreakPoints, BreakPointValueType>>;
//   // לוקח את כל המפתחות של האובייקט והופך אותם לאופציונליים Partial
//   // מצפה לקבל אובייקט או מערך מסוג לא ידוע Record
//   // שבשורה 7 והערך הוא מסוג מספר type BreakPoints זהו טייפ שמצפה לקבל אובייט  שהמפתח הוא מסוג
// };

// const Input: FC<Props> = ({
//   // ברירות המחדל של שדות האינפוט
//   variant = "outlined",
//   type = "text",
//   name,
//   data,
//   label,
//   required = true,
//   error,
//   onInputChange,
//   breakPoints = { xs: 12 },
// }) => {
//   return (
//     <Grid
//       item
//       {...breakPoints} // breakPoints-קובע שכל הדברים האחרים שיעבירו לי שקשורים לרספונסיביות יכנסו ל
//       // breakPoints-כל עיצוב נוסף שאעביר לו בשורה 31 יכנס ל
//     >
//       <TextField // mui זה שדה האינפוט של
//         variant={variant}
//         label={makeFirstLetterCapital(label)} // שם השדה שיופיע בטופס
//         // דואג שהשם של השדה שמופיע בטופס תמיד יתחיל באות גדולה (First name :לדוגמא) makeFirstLetterCapital המטודה שאחראית על זה היא
//         type={type} // סוג שדה האינפוט (טלפון, מייל, טקסט, צ׳ק בוקס וכו׳)
//         id={name}
//         name={name} // שם שדה האינפוט
//         value={data[name] ? data[name] : ""}
//         // (name עם שדה בשם data אובייקט בשם) data במידה ויש את אז תציג אותו ואם אין אז אל תציג כלום. הווליו הוא מה שהמשתמש הכניס באינפוט
//         required={required} // false או true אחראי על סימוון הכוכבית בטופס רק מבחינה עיצובית. יקבל
//         helperText={error} // אחראי על הודעת השגיאה שמתקבלת מתחת לשדה האינפוט
//         error={Boolean(error)}
//         // ובהתאם ימחק או לא את הודעת השגיאה שמתחת לשורת האינפוט בטופס true-יקבל מג׳וי או סטרינג ריק (שווה לערך שלילי) או סטרינג עם הודעת שגיאה ששוה ל
//         onChange={onInputChange} // מטודה שתופעל כשהמשתמש יקליד משהו בשדות האינפוט
//         fullWidth // תופס את כל רוחב הטופס
//         autoComplete="off"
//       />
//     </Grid>
//   );
// };

// export default React.memo(Input);
