import React, { useState, useEffect } from "react";
import { colorLog } from "./utils";

const UseEffectNoDependencies = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    colorLog("In useEffect", "#2d65ff");
  }); // לא מערך תלויות אומר לפונקציה להאזין לכל שינוי בכל המשתנים בקומפוננטה useEffect
  //  !!!זה גורם לבאגים!!! לא לעשות זאת

  return (
    <div>
      {colorLog("In render", "red")}
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

export default UseEffectNoDependencies;
