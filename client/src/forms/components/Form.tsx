import React, { FC, CSSProperties, ReactNode } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import LoopIcon from "@mui/icons-material/Loop";
import Joi from "joi";

type Props = {
  title?: string;
  onSubmit: () => void;
  onReset: () => void;
  onFormChange: () => Joi.ValidationError | null;
  to?: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  spacing?: number;
  styles?: CSSProperties;
  children: ReactNode;
};

const Form: FC<Props> = ({
  title = "",
  onSubmit,
  onReset,
  onFormChange,
  to = "/",
  color = "inherit",
  spacing = 1,
  styles,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      color={color}
      sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate
    >
      <Typography align="center" variant="h5" component="h1" mb={2}>
        {title.toUpperCase()}
      </Typography>

      <Grid container spacing={spacing}>
        {children}
      </Grid>

      <Grid container spacing={1} my={2} direction="row" width="100">
        <Grid item xs={12} sm={6}>
          <FormButton
            children="cancel"
            color="error"
            component="div"
            variant="outlined"
            onClick={() => navigate(to)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormButton
            children={<LoopIcon />}
            variant="outlined"
            component="div"
            onClick={onReset}
          />
        </Grid>
        <Grid item xs={12}>
          <FormButton
            children="Submit"
            onClick={onSubmit}
            disabled={!!onFormChange()}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(Form);

// import React, { FC, CSSProperties, ReactNode } from "react";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import FormButton from "./FormButton";
// import { useNavigate } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import LoopIcon from "@mui/icons-material/Loop";
// import Joi from "joi";

// // בצורה מיטבית FormButton.tsx-ו Input.tsx קומפוננטה שתקבע עיצוב אחיד לטפסים ותעבוד עם הקומפוננטות
// type Props = {
//   title?: string;
//   onSubmit: () => void;
//   onReset: () => void;
//   onFormChange: () => Joi.ValidationError | null;
//   to?: string;
//   color?:
//     | "inherit"
//     | "primary"
//     | "secondary"
//     | "success"
//     | "error"
//     | "info"
//     | "warning";
//   spacing?: number;
//   styles?: CSSProperties; // css טייפ של ריאקט שיודע לאפשר רק דברים של
//   children: ReactNode; // או סטרינג או קומפוננטה html יכול להיות אלמנט
// };

// const Form: FC<Props> = ({
//   // FormTest.jsx את כל הערכים הקומפוננטה תקבל מהקובץ
//   title = "", // הכותרת של הטופס
//   onSubmit, // submit המטודה שתופעל כשנלחץ על הכפתור
//   onReset, // reset המטודה שתופעל כשנלחץ על הכפתור
//   onFormChange, // פונקציה שתופעל בכל פעם שיכניסו נתונים לאחד השדות אינפוט בטופס. הערך שחוזר ממנה הוא בוליאני ויחליט האם לשחרר את הכפתור או לא
//   to = "/", // cancel קובע לאן להעביר את המשתמש כשילחץ על כפתור ה
//   color = "inherit", // צבע האלמנטים שבתוך הקומפוננטה
//   spacing = 1, // הרווח בין השדות בטופס
//   styles, // במקרה ומעוניינים לשנות את עיצוב הטופס css מקבל אובייקט עם פרמטרים של
//   children, // אותם אינפוטים וכפתורים שיופיעו בטופס
// }) => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       component="form" // form מסוג html הקומפוננטה היא אלמנט
//       color={color}
//       sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }} // style -כל פרמטר נוסף מלבד מה שהקומפוננטה אמורה לקבל יכנס ל
//       onSubmit={onSubmit} // כשישתחרר הכפתור המטודה שהעברתי לה תופעל
//       autoComplete="off"
//       noValidate
//     >
//       <Typography align="center" variant="h5" component="h1" mb={2}>
//         {title.toUpperCase() // פה תיכנס כותרת הטופס
//         }
//       </Typography>

//       <Grid
//         container // Input.tsx  בקומפוננטת item-והאינפוטים הוגדרו כ container כאן מופיע
//         spacing={spacing}
//       >
//         {
//           children //פה יכנסו שדות האינפוטים
//         }
//       </Grid>

//       <Grid container spacing={1} my={2} direction="row" width="100">
//         <Grid item xs={12} sm={6}>
//           <FormButton
//             children="cancel"
//             color="error"
//             component="div" // כדי שלא יוכל לשלוח את הטופס
//             variant="outlined"
//             onClick={() => navigate(to)}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormButton
//             children={
//               <LoopIcon /> // של מעיין מעגל של חצים mui על הכפתור יופיע עיצוב של
//             }
//             variant="outlined"
//             component="div" // כדי שלא יוכל לשלוח את הטופס
//             onClick={onReset}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormButton
//             children="Submit" // רק הכפתור הזה יוכל לשלוח את הטופס
//             onClick={onSubmit}
//             disabled={
//               !!onFormChange()
//               // Boolean(!!onFormChange()) // דרך נוספת לכתיבה
//               // (!!) - הופכים את הערך שיחזור מהפעלת המטודה לבוליאני ולפי הערך  שיחזור (אמת לא ישחרר את הכפתור וההפך) disable יוחלט מה יהיה עם
//             }
//             size="large"
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default React.memo(Form);
