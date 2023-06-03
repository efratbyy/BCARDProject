import React, { useEffect, useState } from "react";
import { colorLog } from "./utils";

const UseEffectAsComponentWillUnmount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    colorLog("In useEffect", "#2d65ff");

    const int = setInterval(() => {
      // פונקציה א-סינכרונית שתפעל בלי סוף עד שאעצור אותה
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      // יקרה רגע לפני שהקומפוננטה מתחסלת return-כל מה שיקרה ב
      // האזנה לרגע שבו הפונקציה מתחסלת (מעבר לקומפוננטה אחרת) והפעלת פונקציה שתראה בקונסול את הרגע שבו התחסלה
      clearInterval(int); // setInterval עצירת הפונקציה
      colorLog("In useEffect return", "lightgreen");
    };
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      {colorLog("In component return", "red")}
      <p>useEffect as component will unmount</p>
    </div>
  );
};

export default UseEffectAsComponentWillUnmount;
