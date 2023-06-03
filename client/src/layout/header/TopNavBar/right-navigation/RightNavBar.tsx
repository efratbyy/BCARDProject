import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchBar from "../search-bar/SearchBar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreButton from "./MoreButton";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../provider/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import { useMenu } from "../menu/MenuProvider";

const RightNavBar = () => {
  const setOpen = useMenu();
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && <NotLogged />}

        {user && <Logged />}
      </Box>

      <MoreButton onClick={() => setOpen(true)} />
    </>
  );
};

export default RightNavBar;

// import React from "react";
// import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Box";
// import SearchBar from "../search-bar/SearchBar";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import MoreButton from "./MoreButton";
// import Logged from "./Logged";
// import NotLogged from "./NotLogged";
// import { useTheme } from "../../../../provider/ThemeProvider";
// import { useUser } from "../../../../users/providers/UserProvider";
// import { useMenu } from "../menu/MenuProvider";

// // תפריט הניווט העליון הימני שיוצג רק במסכים בינוניים ומעלה
// const RightNavBar = () => {
//   const setOpen = useMenu();
//   const { user } = useUser();
//   const { isDark, toggleDarkMode } = useTheme();

//   return (
//     <>
//       <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
//         <SearchBar />

//         <IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
//           {isDark ? <LightModeIcon /> : <DarkModeIcon />}
//         </IconButton>

//         {!user && <NotLogged />
//         // אחראי על החיווי הויזואלי - התמונה של האיש בסרגל העליון בצד ימין - כאשר המשתמש מחובר
//         }

//         {user && <Logged />
//         // כאשר המשתמש לא מחובר - SIGNUP LOGIN - אחראי על החיווי הויזואלי
//         }
//       </Box>

//       <MoreButton onClick={() => setOpen(true)} />
//     </>
//   );
// };

// export default RightNavBar;
