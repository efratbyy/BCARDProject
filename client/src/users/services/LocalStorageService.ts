import React from "react";
import jwtDecode from "jwt-decode";
import { TokenType } from "../models/types/userTypes";

const TOKEN = "token";

// Local Storage-יצירת המפתח והערך של הטוקן המוצפן באובייקט ה
export const setTokenInLocalStorage = (encryptedToken: string) => {
  // זה הטוקן המוצפן שנקבל מהשרת encryptedToken
  // מקבל טוקן מוצפן מהשרת
  return localStorage.setItem(TOKEN, encryptedToken); // הערך של המפתח encryptedToken ,שם הפתח TOKEN
  // שיהווה את הערך encryptedToken-ו localStorage שיהווה את שם המפתח בתוך האובייקט TOKEN עם הארגיומנטים setItem הפעלת מטודת
  // (יש אפרות להכניס משהו אחר אך קודם נצטרך להפוך אותו לסטרינג) !!חייב לקבל מחרוזת תווים localStorage
};

// מפענחת אותו ומחזירה לי אובייקט localStorage-מטודה זו מביאה את הטוקן המוצפן מה
// { _id: string; isBusiness: boolean; isAdmin: boolean } :זה האובייקט שמטודה זו תחזיר לי
// (מה שמוחבא בתוך הטוקן-payload-זה ה) ומפענח אותו local Storage-מה TOKEN-מביא את ה
export const getUser = () => {
  //  TOKEN-ותנסה להביא משם את ה localStorage-פונקציה זו תלך ל
  // { _id: string; isBusiness: boolean; isAdmin: boolean }-מוצפנים ה TOKEN-בתוך ה
  const token = localStorage.getItem(TOKEN);
  if (!token) return null; // אז עוצר ולא מחזיר לי כלום token אם אין
  try {
    const user: TokenType = jwtDecode(token); // מפענח את ההצפנה של הטוקן
    //(במידה וקיים כמובן) שנמצא במחשב האישי של המשתמש localStorage-לאחר פענוח שיחזור מ TOKEN לערך של user משווה את
    return user; // { _id: string; isBusiness: boolean; isAdmin: boolean } :אלו המפתחות של היוזר שיוחזרו לי
  } catch (error) {
    return null;
    // לא יחזיר כלום/null אז יחזיר  localStorage-במידה ולא יצליח להביא את הטוקן מה
  }
};
// local Storage-מביאה את הטוקן המוצפן מה
export const getToken = () => localStorage.getItem(TOKEN);
// נשתמש בפונקציה זו כשהשרת ידרוש לדעת מי אנחנו (בדר״כ הכוונה היא להאקרים)

// TOKEN-בכדי לנתק את המשתמש נוציא לו את ה
export const removeToken = () => localStorage.removeItem(TOKEN);

//(11:18 שעה) פיילווד-האובייקט שמתחבר בתוך מחרוזת התווים המוצפנת
// _id: string; isBusiness: boolean; isAdmin: boolean :מה שיש בתוך הפיילווד זה(userType.ts)
