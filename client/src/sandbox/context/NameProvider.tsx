import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  SetStateAction,
} from "react";

// :Contex-מתי נשתמש
// כאשר המידע הוא גלובלי כגון המשתמש המאומת הנוכחי, עיצוב, השפה המועדפת או מיקום
// ולשיתוף מידע יעיל בתוך שכבות האפליקציה האפליקציה State-הוא אוסף של מידע. הוא משמש לשמירה על ה Contex
// באופן גלובלי state זו דרך לנהל
// בקומפוננטות ילדים, נכדים וכדומה מבלי לעבור דרך ההורים, סבים state-כדי לשתף את ה useState ניתן להשתמש בקונטקסט יחד עם
// createContext בעזרת react-צריך לייבא אותו מ Contex כדי ליצור
// כדי לעטוף את עץ הקומפוננטות Context Provider נשים App.tsx-ב
// Provider הוא אובייקט עם 3 מפתחות שאחד מהם הוא Context

type ContextArgs = {
  // null-בהמשך. בהתחלה הגדרנו אותו כ setName-ו name של type-הגדרת ה
  name: string;
  setName: (value: SetStateAction<string>) => void;
  // useState-מ setName מאחר וחילצנו את state-זהו ג׳נריק מיוחד ל SetStateAction
};

const NameContext = React.createContext<null | ContextArgs>(null); // value-ל null והעברה של ערך ראשוני Context-יצירת ה
// ContextArgs ישנה צריך לקבוע את סוג המידע שיתקבל בהמשך ולכן שמנו גם null בגלל שבהמשך הערך של
// Consumer ובמפתח Provider הוא אובייקט עם 3 מפתחות. אנו נשתמש במפתח NameContext

type Props = {
  children: ReactNode;
};

export const NameProvider: React.FC<Props> = ({ children }) => {
  // !!!זו הקומפוננטה שלי
  // Provider-מייצרים ומייצאים את ה
  // צריכה לעטוף קוד אחר NameProvider זה אומר שהקומפוננטה הזו children props-בגלל שיש ב

  const [name, setName] = useState("");

  useEffect(() => {
    // עם מחרוזת התווים ״דויד״ name פעם אחת, בעזרת סוגריים מרובעים, והיא תתן ערך ראשוני ל useEffect מפעילים את מטודת
    // זוהי מטודה א-סינכרונית
    setName("david");
  }, []);

  return (
    <NameContext.Provider // NameContext של Provider-זהו ה
      // הוא אחד המפתחות באובייקט הזה Provider-הוא אובייקט ו NameContext
      // value היא קומפוננטה שריאקט יצרה והיא צריכה לקבל Provider
      // (null הוא value הערך הראשוני של)
      value={{ name, setName }}
      // נכניס את מה שאנו רוצים לשתף לקומפוננטות האחרות value-ב
      // props-של ריאקט מצפה לקבל באובייקט ה Provider זה מפתח שקומפוננטת value
    >
      {
        children
        // value וכך יקבל את children-אז בעצם הפכתי אותו ל(NameProvider - בקומפוננטה שלי) App.tsx שאעטפתי את
        // Consumer העברת המידע לקומפוננטת
        // props-של ריאקט מצפה לקבל באובייקט ה Provider זה מפתח נוסף שקומפוננטת children
      }
    </NameContext.Provider>
  );
};

export const useName = () => {
  // שממנו אצרוך את המידע hook-זה ה
  // useName ייצירה וייצוא של
  const context = useContext(NameContext);
  // setName-ו name שדרכו אפשר להגיע ולחלץ את Provider.value זה האובייקט NameContext
  // useContext עלינו להשתמש במטודה context-בכדי להשתמש ב
  // setName-ו name זה בעצם context
  if (!context) throw new Error("useName must be used within a NameProvider");
  // שבה יש את המידע אז תיזרק הודעת השגיאה NameProvider-במידה ולא עוטפים את התוכן בקומפוננטה
  // זו הקומפוננטה (שיצרתי בשורה 20) שבה אנו נמצאים ולכן איתה עוטפים את התוכן שאליו נרצה להעביר את המידע NameProvider
  // הוא פולסיבי היא תציג את השגיאה שבסוגריים context במידה והערך של
  return context;
  // value במאפיין NameContext.Provider-הוא חיובי היא תחזיר אותו. כלומר, תחזיר את האובייקט שהעברנו ב context במידה והערך של
};

// NameProvider-ב App.tsx במידה ונרצה להעביר את הערכים נעטוף את *

export default NameProvider;
