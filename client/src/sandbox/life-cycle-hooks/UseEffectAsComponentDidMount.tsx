import React, { useState, useEffect } from "react";
import { colorLog } from "./utils";

const UseEffectAsComponentDidMount = () => {
  const [count, setCount] = useState(0);

  // setTimeout מקבלת 2 ארגיומנים: 1.פונקציה שחייבת להיות סינכרונית ואי אפשר לשים עליה useEffect
  // event loop-הפונקציה היא בעצם א-סינכרונית ולכן נכנסת ל
  // מערך-מערך ריק אומר שתריץ את הקוד פעם אחת בלבד
  // לשם נכנסות כל הפונקציות הא-סינכרוניות שיבוצעו רק בהמשך - event loop
  useEffect(() => {
    colorLog("In useEffect", "#2d65ff");
    setCount((prev) => prev + 1);
  }, []);
  // count-גם אם יהיה שינוי ב
  // לא יטען שוב בגלל ששמנו לו סוגריים מרובעים ריקים שאומרים לו להיטען רק פעם אחת useEffect והקומפוננטה תטען מחדש

  return (
    <div>
      {colorLog("In component return", "red")}
      Counter: {count}
      <button
        style={{ padding: 4, margin: 2 }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};

export default UseEffectAsComponentDidMount;
