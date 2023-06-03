import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../menu/MenuProvider";

const Logged = () => {
  const setOpen = useMenu();

  return (
    <Tooltip title="Open settings">
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={() => setOpen(true)}
      >
        <Avatar alt="Bird" src="/assets/images/avatar.png" />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;

// import React from "react";
// import Tooltip from "@mui/material/Tooltip";
// import IconButton from "@mui/material/IconButton";
// import Avatar from "@mui/material/Avatar";
// import { useMenu } from "../menu/MenuProvider";

// const Logged = () => {
//   const setOpen = useMenu();
//   // useMenu-מ setOpen מחלצת את המטודה
//   // אין צורך בסוגריים מסולסלים כי זו היא פונקציה
//   // אני מאחסנת אותה בתוך משתנה ואז אוכל לקרוא לה
//   // setOpen שמחזירה לי פונקציה ואני קוראת לה useMenu אני מפעילה את

//   return (
//     <Tooltip title="Open settings">
//       <IconButton
//         sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
//         onClick={() => setOpen(true)} // בלחיצה על האווטר יפתח לי תפריט הניווט
//       >
//         <Avatar alt="Bird" src="/assets/images/avatar.png" />
//       </IconButton>
//     </Tooltip>
//   );
// };

// export default Logged;
