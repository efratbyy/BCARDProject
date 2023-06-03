// זהו הצינור בין צד לקוח לצד שרת לשליחת בקשות
import axios from "axios";
import UserType, { LoginType, UserRegistered } from "../models/types/userTypes";

// קומפוננטה לייצור בקשות לשרת

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user: LoginType) => {
  // שזהו אובייקט עם שם משתמש וסיסמא user היא מקבלת את .login פונקציה שאחראית על ה
  try {
    const { data } = await axios.post<string>(`${apiUrl}/users/login`, user);
    // data שמכיל שם משתמש וסיסמא ומחלצת משם את user לכתובת שבסוגריים ביחד עם האובייקט של login שליחת בקשת
    return Promise.resolve(data); //  -id, idAdmin, isBusiness זה האובייקט שחוזר לי מהבקשה עם המפתחות data
  } catch (error) {
    // axios-במידה ולא מצליח להתחבר שולח את הודעת השגיאה שתגיע מ
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const signup = async (normalizedUser: UserType) => {
  // (normalizedUser) לאחר שעבר את תהליך הנרמול user היא מקבלת את signup-פונקציה שאחראית על ה
  // ושולחת אותו לשרת
  try {
    const { data } = await axios.post<UserRegistered>(
      `${apiUrl}/users`,
      normalizedUser
    ); // data המנורמל ומחלצת משם את user לכתובת שבסוגריים ביחד עם האובייקט של signup שליחת בקשת
    return Promise.resolve(data); // זה אובייקט התשובה שחוזר מהשרת data
    // :זה אובייקט התשובה שחוזר מהשרת והוא יראה כך data
    // name: { first: string; middle?: string; last: string; _id?: string; };email: string; _id: string;}
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
