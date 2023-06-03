import React from "react";
import NavBarLink from "../../../components/NavBarLink";
import { makeFirstLetterCapital } from "./utils/algoMethods";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  label: string;
  navigateTo: string;
  onClick: () => void;
  styles?: object;
};

const MenuLink: React.FC<Props> = ({
  label,
  navigateTo,
  onClick,
  styles = {},
}) => {
  return (
    <NavBarLink to={navigateTo} color="black">
      <MenuItem sx={{ ...styles }} onClick={onClick}>
        {makeFirstLetterCapital(label)}
      </MenuItem>
    </NavBarLink>
  );
};

export default MenuLink;

// import React from "react";
// import NavBarLink from "../../../components/NavBarLink";
// import { makeFirstLetterCapital } from "./utils/algoMethods";
// import MenuItem from "@mui/material/MenuItem";

// type Props = {
//   label: string;
//   navigateTo: string;
//   onClick: () => void;
//   styles?: object;
// };

// // קמפוננטה שהופכת את תפריט הניווט ללינק
// const MenuLink: React.FC<Props> = ({
//   label,
//   navigateTo,
//   onClick,
//   styles = {},
// }) => {
//   return (
//     <NavBarLink // קומפוננטה שיצרנו וכל דבר שנעטוף בה יהפוך לקישור
//       to={navigateTo} // הדף שאליו יועבר המשתמש כשילחץ על כל אחד מהאפשרויות שיופיעו בתפריט הניווט
//       color="black"
//     >
//       <MenuItem // שמיוחדת בעיצוב שלה לתפריטי ניווט MUI קומפוננטה של
//         sx={{ ...styles }}
//         onClick={onClick}
//       >
//         {makeFirstLetterCapital(label) // מטודה שגורמת לכך שכל אחד מהשדות בתפריט הניווט יתחיל באות גדולה
//         // זה השם של האפשרות בתפריט הניווט label
//         }
//       </MenuItem>
//     </NavBarLink>
//   );
// };

// export default MenuLink;
