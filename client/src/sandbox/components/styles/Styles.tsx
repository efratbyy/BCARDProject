import React, { CSSProperties } from "react";

// const Styles = () => {
//   return <div style={{ backgroundColor: "#565656" }}>Styles</div>;
// };

const Styles = () => {
  const test: CSSProperties = {
    // עוזר ליצור השלמה של מאפייני עיצוב
    backgroundColor: "#989898",
    color: "white",
    fontSize: "bold",
  };

  return <div style={test}>Styles</div>;
};

export default Styles;
