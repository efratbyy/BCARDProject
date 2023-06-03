import React, { CSSProperties } from "react";
import "./styleModule.css";

const StyleTest = () => {
  const purple: CSSProperties = {
    backgroundColor: "purple",
    color: "red",
  };

  let isGreen = true;
  //   isGreen = false;

  return (
    <>
      <h1 style={{ backgroundColor: "yellow" }}>title</h1>
      <h2 style={purple}>subtitle</h2>
      <hr />
      <p className="paragraph">paragraph</p>
      <span
        style={{ backgroundColor: isGreen ? "blue" : "green", fontSize: 30 }}
      >
        Efrat Ben Yosef
      </span>
    </>
  );
};

export default StyleTest;
