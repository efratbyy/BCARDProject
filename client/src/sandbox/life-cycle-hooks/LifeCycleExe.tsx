import React, { useEffect, useState } from "react";
import { colorLog } from "./utils";

const LifeCycleExe = () => {
  const [count, setCount] = useState(() => {
    colorLog("1", "red");

    setTimeout(() => {
      colorLog("5", "blue");
    }, 1000);
    return 0;
  });

  useEffect(() => {
    colorLog("3", "grey");
    return () => {
      colorLog("6", "pink");
    };
  }, []);
  useEffect(() => {
    colorLog("4", "green");
  }, [count]);

  return (
    <div>
      {colorLog("2", "black")}
      <button
        style={{ padding: 2 }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        + count
      </button>
    </div>
  );
};

export default LifeCycleExe;
