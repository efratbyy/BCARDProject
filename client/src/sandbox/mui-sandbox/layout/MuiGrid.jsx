import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";

// הינו מיכל שבתוכו יש קומפוננטות ילדים grid
// item ולכל אחד מהגרידים שבתוכוכ נוסיף את המאפיין container הראשי את המאפיין grid-נוסיף ל
// שבתוך הגריד קובע את הרווח בין הגרידים הילדים spacing={1} המאפיין
//  קביעת המקום שכל גריד יתפוס במסך קטן מתוך 12 חלקים xs={3}

/********* basic Grid **********/
// const MuiGrid = () => {
//   return (
//     <Grid container spacing={1}>
//       <Grid item xs={3}>
//         <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
//       </Grid>
//       <Grid item xs={3}>
//         <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
//       </Grid>
//     </Grid>
//   );
// };

// ע״י הוספת מאפיינים המייצגים גדלי מסך שונים item - ניתן לקבוע אורך שונה לכל ילד

/********* Grid Responsive **********/
// const MuiGrid = () => {
//   return (
//     <Grid container spacing={1}>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "secondary.light" }}>Four</Box>
//       </Grid>
//     </Grid>
//   );
// };

// :במידה ומעוניינים ברווח בין האלמנטים אך שונה בין השורות לעומת הרווח בין העמודות
// זה הרווח בין שורה לשורה rowSpacing={4}
// זה הרווח בין האלמנטים שבאותה השורה columnSpacing={1}

/********* Grid spacing **********/
// const MuiGrid = () => {
//   return (
//     <Grid container rowSpacing={4} columnSpacing={1}>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "secondary.light" }}>Four</Box>
//       </Grid>
//     </Grid>
//   );
// };

// :הפיכת סדר הופעת האלמנטים - direction=""
// הערך הדיפולטיבי משמאל לימין - row
// מימין לשמאל - row-reverse
// סדר עולה של האלמנטים - column
// סדר יורד של האלמנטים - column-reverse

/********* Grid direction **********/
const MuiGrid = () => {
  return (
    <Grid container spacing={1} direction="row-reverse">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ p: 2, backgroundColor: "secondary.light" }}>Four</Box>
      </Grid>
    </Grid>
  );
};

// :סידור התוכן במיכל justifyContent=""
// מרכוז התוכן - center
// הצמדה של התוכן לשמאל flex-start
// הצמדה של התוכן לימין flex-end
// האלמנט הראשון מוצמד לשמאל, האחרון לימין וכל השאר עם רווחים שווים בניהם space-between
// רווחים שווים בין כל האלמנטים space-around
// רווחים שווים בין כל האלמנטים כולל מתחילת וסוף המסך space-evenly

/********* Grid spacing **********/
// const MuiGrid = () => {
//   return (
//     <Grid container justifyContent="space-between">
//       {/* <Grid container justifyContent="center"> */}
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
//       </Grid>
//     </Grid>
//   );
// };

// :סידור התוכן במיכל בצורה אנכית alignItems=""
// ימרכז את התוכן - center
// יצמיד למעלה - flex-start
// יצמיד למטה - flex-end
// ימתח את התוכן מלמעלה עד למטה - Strech
// יצמיד למעלה אבל יסדר אותם באופן ממורכז - Baseline

/********* Grid spacing **********/
// const MuiGrid = () => {
//   return (
//     <Container maxWidth="lg">
//       <Grid
//         container
//         alignItems="center"
//         justifyContent="center"
//         height={200}
//         sx={{ backgroundColor: "warning.light" }}
//       >
//         <Grid item xs={3}>
//           <Box sx={{ p: 2, backgroundColor: "success.light" }}>One</Box>
//         </Grid>
//         <Grid item xs={3}>
//           <Box sx={{ p: 2, backgroundColor: "primary.light" }}>Two</Box>
//         </Grid>
//         <Grid item xs={3}>
//           <Box sx={{ p: 2, backgroundColor: "error.light" }}>Three</Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

export default MuiGrid;
