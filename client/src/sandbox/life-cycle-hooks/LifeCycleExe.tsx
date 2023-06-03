import React, { useEffect, useState } from "react";
import { colorLog } from "./utils";

const LifeCycleExe = () => {
  const [count, setCount] = useState(() => {
    colorLog("1", "red");

    setTimeout(() => {
      colorLog("5", "blue");
    }, 1000);
    return 0; // הוא 0 count הערך הראשוני של
  });

  useEffect(() => {
    colorLog("3", "grey");
    return () => {
      // חלק זה יופעל רק כשהפונקציה מתחסלת
      colorLog("6", "pink");
    };
  }, []); // אומרים שהקוד הזה יבוצע רק פעם אחת []

  useEffect(() => {
    colorLog("4", "green");
  }, [count]); // count -הפונקציה תפעל בכל פעם שיהיה שינוי ב

  return (
    <div>
      {colorLog("2", "black")}
      <button
        style={{ padding: 2 }}
        onClick={() => setCount((prev) => prev + 1)}
        // בעת לחיצה על הכפתור יופיעו בקונסול המספרים בסדר הבא: 1 2 3 4 5 2 4 6
      >
        + count
      </button>
    </div>
  );
};

export default LifeCycleExe;
