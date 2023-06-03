import React, { FC } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

type Props = {
  onClick: () => void;
};

const MoreButton: FC<Props> = ({ onClick }) => {
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton
        onClick={onClick}
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

export default MoreButton;

// import React, { FC } from "react";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";

// type Props = {
//   onClick: () => void;
// };

// // קומפוננטה שאחראית על הצגת ה-3 נקודות שלחיצה עליהן תפתח תפריט. הנקודות יופיעו רק במסך קטן
// const MoreButton: FC<Props> = ({ onClick }) => {
//   return (
//     <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
//       <IconButton
//         onClick={onClick}
//         size="large"
//         color="inherit"
//         aria-label="menu"
//         sx={{ display: { xs: "inline-flex", md: "none" } }}
//       >
//         <MoreVertIcon // זה האייקון של השלוש נקודות שיופיעו בצד ימין של סרגל הכלים במסכים קטנים
//         />
//       </IconButton>
//     </Box>
//   );
// };

// export default MoreButton;
