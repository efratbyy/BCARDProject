import React, { ElementType, FC, ReactNode } from "react";
import Button from "@mui/material/Button";

type Props = {
  variant?: "contained" | "outlined" | "text";
  component?: ElementType<any>;
  size?: "small" | "medium" | "large";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
};

const FormButton: FC<Props> = ({
  variant = "contained",
  component = "button",
  size = "medium",
  color = "primary",
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <Button
      variant={variant}
      component={component}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth
    >
      {children}
    </Button>
  );
};

export default React.memo(FormButton);

// import React, { ElementType, FC, ReactNode } from "react";
// import Button from "@mui/material/Button";

// // ותקבע אם יהיה ניתן ללחוץ על הכפתור או לא MUI של Button קומפוננטה שתמשתמש בעיצוב של הקומפוננט
// // בטופס onSubmit דבר שיכול להוביל לשליחת הטופס או הפעלת האירוע
// type Props = {
//   variant?: "contained" | "outlined" | "text";
//   component?: ElementType<any>; // html יכול לקבל את כל סוגי האלמנטים של
//   size?: "small" | "medium" | "large";
//   color?:
//     | "inherit"
//     | "primary"
//     | "secondary"
//     | "success"
//     | "error"
//     | "info"
//     | "warning";
//   onClick: () => void; // הטייפ הזה אומר שזו פונקציה שלא צריכה לקבל כלום ולא מחזירה כלום. כל הלוגיקה שקורת היא פנימית
//   disabled?: boolean;
//   children: ReactNode; // או סטרינג או קומפוננטה html יכול להיות אלמנט
// };

// const FormButton: FC<Props> = ({
//   // כל הערכים הראשוניים של הכפתור-ברירת המחדל שלו שתופיע במידה ולא יקבל ערכים שישנו אותו
//   variant = "contained", // ברירת המחדל של הכפתור הוא ״מלא״
//   component = "button", // הערך הדיפולטיבי של הכפתור הוא אכן כפתור עם כל הפונקציונליות שלו
//   size = "medium",
//   color = "primary",
//   onClick,
//   disabled = false, // הערך הראשוני הראשוני של הכפתור יהיה שלילי (אפשר ללחוץ על הכפתור)
//   children, // שיהוו את הכיתוב על הכפתור component או element מחרוזת תווים או
// }) => {
//   return (
//     <Button
//       variant={variant}
//       component={component}
//       size={size}
//       color={color}
//       onClick={onClick}
//       disabled={disabled}
//       fullWidth // קובע את אורך הכפתור (ברירת המחדל היא אורך הכיתוב שעל הכפתור יקבע את אורך הכפתור)
//     >
//       {children}
//     </Button>
//   );
// };

// export default React.memo(FormButton); // קובע שרק במידה ויש שינוי אז תטען מחדש את הפונקציה לכפתור-חוסף זמן טעינה
