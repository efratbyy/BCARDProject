import React, { CSSProperties } from "react";

const Styles = () => {
  const test: CSSProperties = {
    backgroundColor: "#989898",
    color: "white",
    fontSize: "bold",
  };

  return <div style={test}>Styles</div>;
};

export default Styles;
