import React, { useState, useEffect } from "react";
import { colorLog } from "./utils";

const UseEffectAsComponentDidUpdate = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   colorLog("In useEffect num", "purple");
  // }, [num]);

  useEffect(() => {
    colorLog("In useEffect", "#2d65ff");
  }, [count]);
  // כאשר יש משתנה בתוך הסוגריים המרובעים זה אומר שהפונקציה תפעל שוב בכל פעם שיהיה שינוי במשתנה
  // useEffect היא תפעיל שוב רק את

  return (
    <div>
      {colorLog("In component return", "red")}
      <p> Counter: {count}</p>
      <p>Num: {num}</p>
      <button
        style={{ padding: 2 }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        + count
      </button>
      <button style={{ padding: 2 }} onClick={() => setNum((prev) => prev + 1)}>
        + num
      </button>
    </div>
  );
};

export default UseEffectAsComponentDidUpdate;
