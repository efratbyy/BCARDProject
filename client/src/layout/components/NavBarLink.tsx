import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
  color?: string;
};

const NavBarLink: React.FC<Props> = ({ to, children, color = "#fff" }) => {
  return (
    <Link to={to} style={{ color, textDecoration: "none" }}>
      {children}
    </Link>
  );
};

export default NavBarLink;

// import React, { ReactNode } from "react";
// import { Link } from "react-router-dom";

// type Props = {
//   to: string;
//   children: ReactNode;
//   color?: string;
// };

// const NavBarLink: React.FC<Props> = ({ to, children, color = "#fff" }) => {
//   // יקבע את צבע הכיתוב של האלמנט שנעטוף color
//   // to-המוגדרת ב url-תעטוף אלמנט כך שלחיצה עליו תעביר לכתובת ה NavBarLink הקומפוננטה
//   //  שבאותה הקומפוננטה to -תעביר אותנו לדף שנכוון אליו ב NavBarLink הקומפוננטה שנעטוף אותה בקומפוננטה
//   return (
//     //  אחראית על הכיתוב בשורת הכתובת. היא הופכת את מה שעוטפת ללינק Link הקומפוננטה
//     <Link to={to} style={{ color, textDecoration: "none" }}>
//       {children}
//     </Link>
//   );
// };

// export default NavBarLink;
