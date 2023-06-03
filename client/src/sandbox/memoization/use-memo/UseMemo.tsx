import { useState, useMemo } from "react";
import { colorLog } from "../../utils";

// const UseMemo = () => {
//   const [age, setAge] = useState(1);
//   const [height, setHeight] = useState(2);

//   const incrementAge = () => setAge(prev => prev + 1);
//   const incrementHeight = () => setHeight(prev => prev + 1);

//   const slowFunction = () => {
//     for (let i = 0; i < 3_000_000_000; i++) {}
//     colorLog("in slow function", "#4caf50");

//     return age * 2;
//   };

//   return (
//     <div style={{ position: "fixed", left: "50%", top: "50%" }}>
//       <p>Height: {height}</p>
//       <p>Age multiple: {slowFunction()}</p>

//       <button style={{ padding: 4 }} onClick={incrementAge}>
//         age
//       </button>
//       <button style={{ padding: 4 }} onClick={incrementHeight}>
//         height
//       </button>
//     </div>
//   );
// };

const UseMemo = () => {
  const [age, setAge] = useState(1);
  const [height, setHeight] = useState(2);

  const incrementAge = () => setAge((prev) => prev + 1);
  const incrementHeight = () => setHeight((prev) => prev + 1);

  // :useMemo
  // :הוא useCallback-ל useMemo ההבדל בין
  // useCallback returns a memoized callback function, while useMemo returns a memoized value
  // :useMemo-מתי נשתמש ב
  // useMemo-רק פונקציות כבדות נעטוף ב
  // מחזירה ערך - useMemo (מחזירה פונקציה-useCallback)
  // מאפשר לזכור פונקציות ״יקרות״ שמעמיסות על המערכת כדי שתוכל להימנע מקריאה להן בכל עיבוד
  // היא מקבלת 2 ארגיומנטים: פונקציה שאותה יזכור-פונקציה ״יקרה״ ומערך תלויות
  // יחשב מחדש את הערך שנשמר בזיכרון רק כאשר אחד האינפוטים השתנה useMemo
  // תטען מחדש רק כשאחד האינפוטים ישתנה. זוהי טכנולוגיה שמאפשרת לעשות אופטמיזציה לקוד  useMemo
  // תורם למהירות
  const slowFunction = useMemo(() => {
    for (let i = 0; i < 3_000_000_000; i++) {}
    colorLog("in slow function", "#4caf50");
    return age * 2;
  }, [age]); // שנמצא במערך התלויות age הפונקציה תיבנה מחדש רק כאשר יהיה שינוי במשתנה

  return (
    <div style={{ position: "fixed", left: "50%", top: "50%" }}>
      <p>Height: {height}</p>
      <p>Age multiple: {slowFunction}</p>

      <button style={{ padding: 4 }} onClick={incrementAge}>
        age
      </button>
      <button style={{ padding: 4 }} onClick={incrementHeight}>
        height
      </button>
    </div>
  );
};

export default UseMemo;
