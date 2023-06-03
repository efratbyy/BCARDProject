import React, { ReactNode } from "react";
import { colorLog } from "../../utils";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

const ButtonComp: React.FC<Props> = ({ onClick, children }) => {
  colorLog(`rendering button ${children}`, "#2d65ff");
  return (
    <button style={{ padding: 3 }} onClick={onClick}>
      {
        children // זה מה שיהיה כתוב על הכפתור children
      }
    </button>
  );
};

// export default ButtonComp;
export default React.memo(ButtonComp);
// !שמייעל את הקוד ומונע רינדורים מיותרים - memoization בדרך זו אנו מיצאים את הקומפוננט עם
// useCallback-חייב להוסיף חלק זה בכל קומפוננטות הילדים כאשר משתמשים ב
// אומר לריאקט לבדוק אם המטודה שהקומפוננטה קיבלה באובייקט הפרופס השתנתה בצורה כזאת שצריך memo()
// להעביר את הפונקציה מחדש לקומפוננטה
