import React from "react";

const StringInterpolation = () => {
  const x = "Hallo";
  console.log("in the correct part of the component");

  return (
    <div>
      {x} world
      <br />
      {6 * 5}
    </div>
  );
};

export default StringInterpolation;
