import React, { useState, useCallback } from "react";
import ButtonComp from "./ButtonComp";

const UseCallback = () => {
  const [age, setAge] = useState(1);
  const [height, setHeight] = useState(0);

  // const incrementAge = () => setAge(prev => prev + 1);
  // const incrementHeight = () => setHeight(prev => prev + 1);

  // :useCallback
  // :הוא useCallback-ל useMemo ההבדל בין
  // useCallback returns a memoized callback function, while useMemo returns a memoized value
  // :useCallback-מתי נשתמש ב
  // בפונקציות שמועברות מאבא לבן אנו לא רוצים שבכל טעינה של קומפוננטת האב הוא ישלח לקומפוננטת הבן שוב ושוב את
  // שתבדוק האם הפונקציה כבר שמורה בזיכרון ורק אם לא או שהשתנתה useCallback-הפונקציות שצריך לקבל ממנו ולכן נשתמש ב
  // אז הוא ישלח אותה שוב לקומפוננטת הילד
  // מחזירה פונקציה - useCallback (מחזירה ערך-useMemo)
  // מקבלת 2 פרמטרים-פונקציה ומערך תלויות useCallback
  // היא גורמת לכך שריאקט שומרת אותה במקום בזיכרון ולא יוצרת אותה מחדש בכל רינדור אלא אם המשתנה שבמערך התלוית  השתנה
  // שלה state-או ב props-תיטען רק אם יהיה שינוי ב
  // מרנדרת את הקומפוננטה הספציפית שנרצה
  const incrementAge = useCallback(() => setAge((prev) => prev + 1), [age]);
  const incrementHeight = useCallback(() => setHeight((prev) => prev + 1), [
    height,
  ]);

  return (
    <>
      <p>age: {age}</p>
      <p>height: {height}</p>

      <ButtonComp onClick={incrementAge}>age</ButtonComp>
      <ButtonComp onClick={incrementHeight}>height</ButtonComp>
    </>
  );
};

export default UseCallback;
