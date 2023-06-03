import axios from "axios";
import { useSnack } from "../provider/SnackbarProvider";
import { useUser } from "../users/providers/UserProvider";
import { useEffect } from "react";

const useAxiosInterceptors = () => {
  const snack = useSnack();
  const { token } = useUser();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;
    axios.interceptors.request.use((data) => {
      return Promise.resolve(data);
    }, null);

    axios.interceptors.response.use(null, (error: any) => {
      const expectedError = error.response && error.response.status >= 400;
      if (expectedError) snack("error", error.message);
      return Promise.reject(error);
    });
  }, [token, snack]);
};

export default useAxiosInterceptors;

// import axios from "axios";
// import { useSnack } from "../provider/SnackbarProvider";
// import { useUser } from "../users/providers/UserProvider";
// import { useEffect } from "react";

// // לשרת ומאפשרת לבצע שינויים באובייקטים הללו ו/או להפעיל לוגיקה בהתאם לערכיהם http לפני ואחרי שליחת בקשת response-ו request מאפשרת יירוט של axios.interceptors
// const useAxiosInterceptors = () => {
//   const snack = useSnack();
//   const { token } = useUser();

//   useEffect(() => {
//     axios.defaults.headers.common["x-auth-token"] = token;
//     // useUser-שחילצנו מ token-והערך הוא ה x-auth-token בשורה זו אנו מצרפים את הטוקן לאובייקט הבקשה לשרת. שם המפתח הוא
//     // useUser שחילצנו מהפעלת token-בתוך אובייקט הבקשה לשרת והשוואה שלו/קביעת הערך שלו ל x-auth-token ייצירת המפתח
//     // if (snack) {
//     // :עם איזושהי הודעת שגיאה אז snack-במידה ומוצג לי ה
//     axios.interceptors.request.use((data) => {
//       //
//       // x-auth-token :בשורה זו מיירטים את הבקשה לשרת כדי שנוכל להוסיף לאובייקט הבקשה את המפתח החדש שיצרנו
//       // זו המטודה שתופעל בהתאם למה שהמשתמש יעשה request-ה
//       // יהיו הכרטיסים data-וה getCards תהייה המטודה request-לדומא: אם ילחץ על דף הכרטיסים אז ה
//       return Promise.resolve(data);
//       // מעבירים את אובייקט הבקשה הלאה לשרת
//     }, null);
//     // זה החלק שבו אוסיף מה יקרה אם הבקשה לא תקינה והאינטרספטור יירט אותה null

//     axios.interceptors.response.use(null, (error: any) => {
//       // זה החלק שאומר שאם הבקשה תקינה אז אל תעשה שום דבר null
//       // :ואם היא לא תקינה אז
//       // תשובה שחוזרת מהשרת דרך אקסיוס
//       const expectedError = error.response && error.response.status >= 400; // ז400-500 זו בעיה בשליחה של הלקוח
//       if (expectedError) snack("error", error.message);
//       return Promise.reject(error); // יפעל רק אם יש שגיאה בתשובה, הסטטסוס קוד יהיה בין 400 ל-500 snack
//     });
//   }, [token, snack]);
// };

// export default useAxiosInterceptors;
