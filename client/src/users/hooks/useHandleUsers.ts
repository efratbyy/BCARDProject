import { useState, useCallback, useMemo } from "react";
import {
  editUser,
  getUserFromServer,
  login,
  signup,
} from "../services/userApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/LocalStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import useAxiosInterceptors from "../../hooks/useAxiosInterceptors";
import UserType, {
  LoginType,
  RegisterType,
  TokenType,
  UserMapToModelType,
} from "../models/types/userTypes";
import normalizeEditUser from "../helpers/normalization/normalizeEditUser";
import { useSnack } from "../../provider/SnackbarProvider";
import UserInterface from "../models/interfaces/UserInterface";

type ErrorType = null | string;

const useHandleUsers = () => {
  // const [users, setUsers] = useState(null);
  const [error, setError] = useState<ErrorType>(null);
  const [isLoading, setLoading] = useState(false);
  const snack = useSnack();

  const { user, setUser, setToken } = useUser();

  useAxiosInterceptors();

  const navigate = useNavigate();

  const requestStatus = useCallback(
    (
      loading: boolean,
      errorMessage: ErrorType,
      user: null | TokenType | UserInterface = null
    ) => {
      setLoading(loading);
      setError(errorMessage);
      setUser(user);
    },
    [setUser]
  );

  const handleLogin = useCallback(
    async (user: LoginType) => {
      try {
        setLoading(true);

        const token = await login(user);

        setTokenInLocalStorage(token);
        setToken(token);

        const userFromLocalStorage = getUser();

        requestStatus(false, null, userFromLocalStorage);

        navigate(ROUTES.CARDS);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [setToken, navigate, requestStatus]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (user: RegisterType) => {
      try {
        setLoading(true);
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await handleLogin({
          email: user.email,
          password: user.password,
        });
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [handleLogin, requestStatus]
  );

  const handleGetUser = async (userId: string) => {
    try {
      const user = await getUserFromServer(userId);
      return user;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handelUpdateUser = useCallback(
    async (userFromClient: UserMapToModelType) => {
      try {
        setLoading(true);
        const normalizedUser = normalizeEditUser(userFromClient);
        const userFromServer = await editUser(normalizedUser);
        requestStatus(false, null, userFromServer);
        snack("success", "The user has been successfully updated");
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    []
  );

  const value = useMemo(() => {
    return { isLoading, error, user };
  }, [isLoading, error, user]);

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
    handelUpdateUser,
  };
};

export default useHandleUsers;

// import { useState, useCallback, useMemo } from "react";
// import { login, signup } from "../services/userApiService";
// import {
//   getUser,
//   removeToken,
//   setTokenInLocalStorage,
// } from "../services/LocalStorageService";
// import { useUser } from "../providers/UserProvider";
// import { useNavigate } from "react-router-dom";
// import ROUTES from "../../routes/routesModel";
// import normalizeUser from "../helpers/normalization/normalizeUser";
// import useAxiosInterceptors from "../../hooks/useAxiosInterceptors";
// import { LoginType, RegisterType, TokenType } from "../models/types/userTypes";

// type ErrorType = null | string;

// const useHandleUsers = () => {
//   // יצירת מאפיינים ומטודות שמשנות אותם
//   // const [users, setUsers] = useState(null);
//   const [error, setError] = useState<ErrorType>(null);
//   const [isLoading, setLoading] = useState(false);

//   const { user, setUser, setToken } = useUser(); // את המאפיינים שבסוגריים useUser מחלץ מהפרוביידר שיצרתי

//   useAxiosInterceptors();
//   // snackBar-ויופיע לי ה error במידה ואשלח משהו לשרת ואקבל סטטוס קוד של 400 ומעלה אז יופעל ה
//   // בצבע אדום עם הודעת השגיאה

//   const navigate = useNavigate(); // שקובע לאן להעביר את המשתמש useNavigate מפעיל את מטודת

//   const requestStatus = useCallback(
//     // פונקציה שכשאפעיל אותה היא תעדכן את כל המפתחות הרלוונטיים
//     (
//       loading: boolean,
//       errorMessage: ErrorType,
//       user: null | TokenType = null
//     ) => {
//       // !!משתנים שאני מעבירה לפונקציה - יש חשיבות לסדר של המשתנים
//       // nall-הוא יהיה שווה ל user-כל עוד לא משתמשים ב
//       setLoading(loading); // loading-עם מה שתקבל ב isLoading תעדכן את
//       setError(errorMessage); // errorMessage-עם מה שתקבל ב error תעדכן את
//       setUser(user); // user-עם מה שתקבל ב user תעדכן את
//       // setUsers(users); // users-עם מה שתקבל ב users תעדכן את
//     },
//     [setUser] // user/setUser-הפנוקציה תפעל בכל פעם שיהיה שינוי ב
//   );

//   // LoginPage.tsx-כדי לחבר את הפונקציה הזו לדף נלך ל
//   const handleLogin = useCallback(
//     // פונקציה שאחראית על ההתחברות
//     async (user: LoginType) => {
//       // password-ו meail מסוג של אובייקט עם user מקבלת את
//       try {
//         setLoading(true); // הפעלת הספינר

//         const token = await login(user); // זה מה שהמשתמש מילא בטופס user
//         // ושולחת לשרת password-ו meail מסוג של אובייקט עם user מקבלת את
//         // localStorage-מהשרת כדי שאשים אותו ב token-מחזירה לי את ה (userApiService.ts) login הפעלת המטודה
//         //  -id, idAdmin, isBusiness זה האובייקט שחוזר לי מהבקשה לשרת עם המפתחות token

//         setTokenInLocalStorage(token); // Local Storage-מעדכן את הטוקן ב
//         // Local Storage-אני אשים אותו ב token במידה ואין לי שגיאה וחזר ה
//         // גם אם יכבה וידליק את המחשב user-יישמר על המחשב של ה token-גורמת לכך שה setTokenInLocalStorage הפעלת

//         setToken(token); //מעדכן את הטוקן שבפרוביידר
//         // token-חדש ובעצם מכניסה ערך ל token / מעדכנת את הפרוביידר/את האפליקציה עם הטוקן כך שידע שיש לי משתמש חדש

//         const userFromLocalStorage = getUser();
//         // Local Storage-שקיבלתי מה user תתן לי את האובייקט של (LocalStorageService.ts-מה) getUser הפעלת המטודה
//         // { _id: string; isBusiness: boolean; isAdmin: boolean } :אלו המפתחות של היוזר שיוחזרו לי

//         requestStatus(false, null, userFromLocalStorage);
//         // user/userFromLocalStorage ועדכון כל המשתנים - מפסיק את הספינר, אין הודעת שגיאה, ויש requestStatus מפעילה את
//         // שהביא token-הוא האובייקט של הפיילווד-הוא מפצח את ה userFromLocalStorage
//         // _id, isAdmin, isBusiness ומחלץ ממנו את

//         navigate(ROUTES.CARDS); // CARDS כשיסיים יעביר את הגולש לעמוד של
//       } catch (error) {
//         if (typeof error === "string") requestStatus(false, error, null);
//         // מופעלת ומועברים בה המשתנים שאומרים שהספינר לא יטען, תישלח הודעת requestStatus במידה ויש שגיאה הפונקציה
//         // user שגיאה ושאין
//       }
//     },
//     [setToken, navigate, requestStatus]
//   );

//   const handleLogout = useCallback(() => {
//     // למשתמש logout מטודה שעושה
//     removeToken(); // localstorage-מה user-של ה token והיא מוחקת את ה LocalStorageService.ts-מטודה שנמצאת ב
//     setUser(null); // user ז״א שאין לי ,nall-ל user מעדכנת את הערך של (UserProvider.tsx) setUser מטודת
//   }, [setUser]);

//   const handleSignup = useCallback(
//     // למשתמש חדש signup מטודה שעושה
//     async (user: RegisterType) => {
//       try {
//         setLoading(true);
//         const normalizedUser = normalizeUser(user);
//         // (normalizeUser) תהליך של נירמול user העברת ה
//         await signup(normalizedUser);
//         // ביצוע רישום המשתמש החדש
//         await handleLogin({
//           // login במידה והמשתמש קיים הוא יעבור ל
//           email: user.email,
//           password: user.password,
//         });
//       } catch (error) {
//         if (typeof error === "string") requestStatus(false, error, null);
//       }
//     },
//     [handleLogin, requestStatus]
//   );

//   const handleGetUser = async (userId: string) => {
//     try {
//       const user = await getUser();
//       return user;
//     } catch (error) {
//       if (typeof error === "string") requestStatus(false, error, null);
//     }
//   };
//   const value = useMemo(() => {
//     return { isLoading, error, user };
//   }, [isLoading, error, user]);

//   return {
//     value,
//     handleLogin,
//     handleLogout,
//     handleSignup,
//   };
// };

// export default useHandleUsers;
