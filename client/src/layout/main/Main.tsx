import React from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "../../provider/ThemeProvider";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Main: React.FC<Props> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: isDark ? "#333333" : "#e3f2fd",
      }}
    >
      {children}
    </Paper>
  );
};

export default Main;

// import React from "react";
// import Paper from "@mui/material/Paper";
// import { useTheme } from "../../provider/ThemeProvider";

// type Props = {
//   children: JSX.Element[] | JSX.Element;
// };
// // קיצור דרך שמייבאים מתוך ריאקט שמאפשר לנו להעביר סוגים שונים של ילדים כמו מערך, סטרינג, אובייקט וכו ReactNode

// // בין תגית פותחת לסוגרת children מילה שמורה-ניתן לשים children

// // קומפוננטה שאחראית על תצוגת התוכן
// const Main: React.FC<Props> = ({ children }) => {
//   const { isDark } = useTheme();

//   return (
//     <Paper
//       sx={{
//         minHeight: "90vh",
//         backgroundColor: isDark ? "#333333" : "#e3f2fd",
//       }}
//     >
//       {children}
//     </Paper>
//     // Layout דרך App.tsx-התקבל מ
//   );
// };

// export default Main;
