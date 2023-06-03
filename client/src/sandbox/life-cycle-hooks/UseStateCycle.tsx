import React, { useState } from "react";
import { colorLog } from "./utils";

const UseStateCycle = () => {
  const [count, setCount] = useState(() => {
    colorLog("In useState", "yellow");

    setTimeout(() => {
      // שפועלת בלי סוף עד שאעצור אותה setImterval-פונקציה שפועלת רק פעם אחת בניגוד ל
      setCount((prev) => prev + 1);
    }, 3000);

    return 0;
  });

  return (
    <div>
      <div>Count: {count}</div>
      {colorLog("In component return", "red")}
    </div>
  );
};

export default UseStateCycle;
