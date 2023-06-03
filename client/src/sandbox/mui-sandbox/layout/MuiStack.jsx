import { Divider, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

// הינו מיכל אשר יסדר את האלמנטים הילדים בתוכו בסדר אורכי או רוחבי stsck
// מסדר את האלמנטים אחד ליד השני ולא אחד מעל השני שזה הדיפולט direction="row"

/********* basic Stack **********/
// const MuiStack = () => {
//   return (
//     <Stack m={2} width={250} spacing={2} direction="row">
//       <Paper sx={{ p: 2 }}>One</Paper>
//       <Paper sx={{ p: 2 }}>Two</Paper>
//       <Paper sx={{ p: 2 }}>Three</Paper>
//     </Stack>
//   );
// };

// divider={<Divider orientation="vertical" flexItem />}
// זה יקבע שהאלמנטים יסודרו אחד ליד השני עם קו מפריד בין כל אחד מהם

/********* Stack Divider **********/
const MuiStack = () => {
  return (
    <Stack
      m={2}
      width={250}
      spacing={2}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box sx={{ p: 2 }}>One</Box>
      <Box sx={{ p: 2 }}>Two</Box>
      <Box sx={{ p: 2 }}>Three</Box>
    </Stack>
  );
};

export default MuiStack;
