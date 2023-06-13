import React from "react";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import MenuLink from "./MenuLink";
import { useUser } from "../../../../users/providers/UserProvider";
import useHandleUsers from "../../../../users/hooks/useHandleUsers";
import ROUTES from "../../../../routes/routesModel";

type Props = {
  isOpen: boolean;
  anchorEl: HTMLElement;
  onClose: () => void;
};

const Menu: React.FC<Props> = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useHandleUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <MenuLink
          label="about"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />

        {user && user.isAdmin && (
          <MenuLink
            label="sandbox"
            navigateTo={ROUTES.SANDBOX}
            onClick={onClose}
          />
        )}

        {!user && (
          <>
            <MenuLink
              label="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              label="signup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
        {user && (
          <>
            <MenuLink
              label="favorit cards"
              navigateTo={ROUTES.FAV_CARDS}
              onClick={onClose}
            />
            <MenuLink
              label="my cards"
              navigateTo={ROUTES.MY_CARDS}
              onClick={onClose}
            />
            <MenuLink
              label="edit account"
              navigateTo={ROUTES.EDIT_USER}
              onClick={onClose}
            />

            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;

// import React from "react";
// import MuiMenu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/material/Box";
// import MenuLink from "./MenuLink";
// import { useUser } from "../../../../users/providers/UserProvider";
// import useHandleUsers from "../../../../users/hooks/useHandleUsers";
// import ROUTES from "../../../../routes/routesModel";
// // import ROUTES from "../../../../routes/routesModel";

// type Props = {
//   isOpen: boolean;
//   anchorEl: HTMLElement;
//   onClose: () => void;
// };

// // MenuLink.jsx קומפוננטה שמשתמשת בקומפוננטה
// const Menu: React.FC<Props> = ({ isOpen, anchorEl, onClose }) => {
//   const { user } = useUser();
//   const { handleLogout } = useHandleUsers();

//   const onLogout = () => {
//     handleLogout(); // ומסירה ממנו את הטוקן nall-ל user מטודה שמעדכנת את
//     onClose(); // יסגור את תפריט הניווט
//   };

//   return (
//     <MuiMenu
//       open={isOpen} // פותח את תפריט הניווט
//       onClose={onClose} // סוגר את תפריט הניווט
//       anchorEl={anchorEl} // עליו יתפס תפריט הניווט html-סוג אלמנט ה
//       anchorOrigin={{
//         // המיקום בדף שבו יוצג תפריט הניווט
//         vertical: "top",
//         horizontal: "right",
//       }}
//       keepMounted // DOM-המשמעות היא שהתפריט יהיה קיים תמיד ב
//       transformOrigin={{
//         //(?) הנקוד שאליה יתחבר תפריט הניווט
//         vertical: "top",
//         horizontal: "right",
//       }}
//     >
//       <Box>
//         <MenuLink
//           label="about" // הוא העמוד היחיד שיראה גם כשאין משתמש מחובר about
//           navigateTo={ROUTES.ABOUT}
//           onClick={onClose}
//           styles={{ display: { xs: "block", md: "none" } }}
//         />

//         {!user && ( // יראו רק כשאין משתמש תחובר signup-ו login
//           <>
//             <MenuLink
//               label="login"
//               navigateTo={ROUTES.LOGIN}
//               onClick={onClose}
//               styles={{ display: { xs: "block", md: "none" } }}
//             />
//             <MenuLink
//               label="signup"
//               navigateTo={ROUTES.SIGNUP}
//               onClick={onClose}
//               styles={{ display: { xs: "block", md: "none" } }}
//             />
//           </>
//         )}
//         {user && ( // יראו רק במידה ויש משתמש מחובר - ז״א שתפריט הניווט יהיה זמין לשימוש edit account-ו profile
//           // פה נקבע אילו אפשרויות יופיעו בתפריט הניווט ולאיזה דף כל אפשרות תנווט
//           <>
//             <MenuLink
//               label="profile"
//               navigateTo={ROUTES.USER_PROFILE}
//               onClick={onClose} // בתפריט הניווט, התפריט ייסגר profile קובע שלאחר לחיצה על האפשרות
//             />

//             <MenuLink
//               label="edit account"
//               navigateTo={ROUTES.EDIT_USER}
//               onClick={onClose}
//             />

//             <MenuItem onClick={onLogout}>Logout</MenuItem>
//           </>
//         )}
//       </Box>
//     </MuiMenu>
//   );
// };

// export default Menu;
