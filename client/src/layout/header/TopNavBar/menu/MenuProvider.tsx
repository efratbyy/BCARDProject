import React, { useState, useContext, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Menu from "./Menu";
import { useMediaQuery } from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
};

const MenuContext = React.createContext<null | Function>(null); // Context-יצירת ה

export const MenuProvider: React.FC<Props> = ({ children }) => {
  const theme = useMuiTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));

  const [isOpen, setOpen] = useState(true);
  const [anchorEL, setAnchor] = useState<null | HTMLElement>(null);
  const anchorRef = useRef(null!);

  useEffect(() => {
    setAnchor(anchorRef.current);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [screenSize]);

  return (
    <>
      <MenuContext.Provider value={setOpen}>{children}</MenuContext.Provider>

      <Box
        ref={anchorRef}
        component="span"
        position="fixed"
        top="70px"
        right="20px"
      ></Box>
      {anchorEL && (
        <Menu
          anchorEl={anchorEL}
          isOpen={!!isOpen}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within a MenuProvider");
  return context;
};

// import React, { useState, useContext, useRef, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Menu from "./Menu";
// import { useMediaQuery } from "@mui/material";
// import { useTheme as useMuiTheme } from "@mui/material/styles";

// type Props = {
//   children: React.ReactNode;
// };

// // :שזהו תפריט הניווט שנפתח מהאווטר menu-פרוביידר זה אחראי על ה
// // או לא menu-האם להראות/לפתוח את ה
// const MenuContext = React.createContext<null | Function>(null); // Context-יצירת ה

// // והשינויי שלו בגדליי מסך שונים menu-יצירת קומפוננטה שעוזרת בקביעת מיקום ה
// export const MenuProvider: React.FC<Props> = ({ children }) => {
//   // שאחראי על הנראות במסכים קטנים mui של provider יצירת
//   const theme = useMuiTheme();
//   // md-נקודת השבירה במסך ברגע שהמסך קטן מ
//   const screenSize = useMediaQuery(theme.breakpoints.up("md"));

//   const [isOpen, setOpen] = useState(true); // אחראי על האם התפריט פתוח או סגור
//   const [anchorEL, setAnchor] = useState<null | HTMLElement>(null);
//   // עליו ישב התפריט html-אחראי לתפוס את אלמנט ה
//   const anchorRef = useRef(null!); // get element by ID שמחליף את react של hook
//   // menu-אני צריכה לתפוס איזשהו אלמט ועליו אני יכולה לשים את ה

//   useEffect(() => {
//     // menu-פונקציה זו מספקת את האלמנט שעליו ישב ה
//     // עליו anchorRef-אחרי שנטענת הפונקציה היא תופסת את ה
//     // כי היא קודם צריכה להבין איזה אלמנט היא תופסת useEffect-הפונקציה חייבת להעטף ב
//     // איזה אלמנט היא setAnchor ורק אז אוכל לומר לה בעזרת ה html-ב
//     setAnchor(anchorRef.current);
//     // menu-והוא יתן לי את האלמנט שעליו אשים את ה useRef זהו מפתח של current
//   }, []); // ריקים אומרים לפונקציה לפעול פעם אחת בלבד בזמן הטעינה הראשונה של הקופמפוננטה []

//   useEffect(() => {
//     // בהתאם לגודל המסך menu-פונקציה זו קובעת האם לסגור את ה
//     setOpen(false); // בכל פעם שיהיה שינוי בגודל המסך שיסגור לי את התפריט
//   }, [screenSize]); // פונקציה זו תפעל בכל פעם שמשתנה גודל המסך

//   return (
//     <>
//       <MenuContext.Provider value={setOpen}>{children}</MenuContext.Provider>

//       <Box // כלום אז לא נראה אותו אך זהו המיקום שבו יפתח התפריט  box-אין בתוך ה
//         ref={anchorRef} // menu-תופס את האלמט עליו ישב ה
//         component="span" // יהיה anchorRef-ה html פה אני קובעת איזה אלמנט
//         position="fixed" // שאר האלמנטים קובעים את גודל התפריט שיפתח
//         top="70px"
//         right="20px"
//       ></Box>
//       {anchorEL && (
//         // עליו menu-ז״א יש לך אלמנט להיתפס עליו אז תתפוס את ה anchorEL אם יש לך
//         // menu-אם לא אז אל תראה לי בכלל את ה
//         <Menu
//           anchorEl={anchorEL}
//           isOpen={!!isOpen} // אחראי על פתיחת תפריט הניווט-הופך לערך בוליאני
//           onClose={() => setOpen(false)}
//           // ובכך סוגר את תפריט הניווט setOpen בעזרת המטודה false-ל isOpen הופך את
//           // התפריט יסגר בלחיצה על כל חלק במסך שמחוץ לתפריט וגם לאחר לחיצה על אחד השדות
//         />
//       )}
//     </>
//   );
// };

// export const useMenu = () => {
//   const context = useContext(MenuContext);
//   if (!context) throw new Error("useMenu must be used within a MenuProvider");
//   return context;
// };
