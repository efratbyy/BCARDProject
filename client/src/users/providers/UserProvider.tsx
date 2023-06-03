import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  SetStateAction,
  ReactNode,
} from "react";
import { getToken, getUser } from "../services/LocalStorageService";
import { TokenType } from "../models/types/userTypes";

type ContextArgs = {
  user: null | TokenType;
  setUser: (value: SetStateAction<null | TokenType>) => void;
  token: null | string;
  setToken: (value: SetStateAction<null | string>) => void;
};

const UserContext = React.createContext<null | ContextArgs>(null); // Context-יצירת אובייקט ה

type Props = {
  children: ReactNode; // או טקסט או קומפוננטה html יהיו מסוג של או children-קובע שה
};

export const UserProvider: React.FC<Props> = ({ children }) => {
  // Provider יצירת

  const [user, setUser] = useState<null | TokenType>(null);
  const [token, setToken] = useState<null | string>(getToken); // תופעל getToken בטעינה הראשונית של הקומפוננטה הפונקציה
  // לצורך זיהוי המשתמש LocalStorage-של המשתמש מה TOKEN-מביאה את ה getToken
  // token ואם יש בו ערך אז היא תיקח את הערך ותכניס אותו לתוך TOKEN היא תבדוק אם יש לי מפתח של
  // nall הערך הוא מחרוזת התווים המאוד מאוד מוצפנת שלי, טוקן מוצפן. במידה ואין ערך אז יהיה
  // מטודות אחרות יצטרכו להשתמש בטוקן הזה

  useEffect(() => {
    // כדי שבמידה ויתנתק אעדכן את כל האפליקציה user-עוקב אחרי ה
    if (!user) {
      // :התנתק אז user-במידה ואין יוזר / ה
      const userFromLocalStorage = getUser();
      // קיים user-בודקת האם הgetUser
      // user ותנסה להביא משם את localStorage-היא תלך ל
      setUser(userFromLocalStorage); //  (userFromLocalStorage) local Storage-שהביאה מה user-ב user מעדכנת את המשתנה
      // user במידה ואין null-החדש או ב user-ב user מעדכנת את המשתנה setUser מפעיל את מטודת
    }
  }, [user]); // local Storage-מה user-שוב ותביא את ה useEffect ובמידה והוא משתנה תפעיל את user-עוקבת אחרי כל שינוי ב

  const value = useMemo(() => {
    return { user, setUser, token, setToken };
    // value  מחזיר לי אובייקט עם משתנים ועם המטודות לשינוי הערך שלהם - זה בעצם
  }, [user, token]); // token או ב user נטען רק אם יש שינוי ב

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  // value אני מעבירה לו את  UserContext.Provider כשיקראו ל
};

export const useUser = () => {
  // Context מטודה שבעזרתה נוכל לצרוך את התוכן של
  // value אוכל לחלץ ממנו את כל הערכים של useUser כשאפעיל את
  const context = useContext(UserContext);
  // Context-מאפשרת את השימוש ב (Context-שהוא יצירת ה) UserContext עם useContext הפעלת מטודת
  // (שורה 5-Context שיוצרת את) UserContext עם הערך useContext הפעלת מטודת
  if (!context) throw new Error("useUser must be used within a UserProvider");
  // עוטף את המטודה שברצונה להשתמש בפרוביידר ובמידה ולא נחזיר את הודעת השגיאה שבסוגריים  UserProvider נבדוק שאכן
  return context; // UserProvider-את אפשרות השימוש ב-context אחרת נחזיר את
};

export default UserProvider;
