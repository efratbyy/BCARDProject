import React from "react";
import useName from "./useName";

const CustomName = () => {
  const { name, setName } = useName("");
  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 3 }}
      />
    </div>
  );
};

export default CustomName;
