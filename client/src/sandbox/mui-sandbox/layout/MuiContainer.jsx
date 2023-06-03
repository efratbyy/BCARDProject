import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const MuiContainer = () => {
  //Container - מיכל זה ממרכז את התוכן ומשתנה בהתאם לגודל המסך. מוסיף רווח מצידי האלמנט בגדלי מסך מסויימים
  return (
    <Container>
      <Box sx={{ backgroundColor: "red" }}>in container</Box>
    </Container>
  );
};

export default MuiContainer;
