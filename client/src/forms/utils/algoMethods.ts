export const makeFirstLetterCapital = (string: string) => {
  const term = string.toLowerCase().trim();

  return term.charAt(0).toUpperCase() + term.slice(1);
};

// // פונקציה שהופכת את האות הראשונה לאות גדולה
// export const makeFirstLetterCapital = (string: string) => {
//   const term = string.toLowerCase().trim();
//   // מתודה שמקבלת מחרוזת תווים, הופכת את כולה לאותיות קטנות ומעלימה את הרווחים שבתחילת ובסוף המחרוזת

//   return term.charAt(0).toUpperCase() + term.slice(1);
//   //  מחזירה את האות שבמיקום של הסוגריים-האות הראשונה והופכת אותה לאות גדולה charAt
//   // יתר המילה-slice ואליה מתווסף הסטרינג שנחתך במיקום שבסוגריים של
// };
