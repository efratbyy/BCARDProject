import React from "react";
import B from "./B";
import NameProvider from "../NameProvider";

const A = () => {
  return (
    // useState-בכדי להעביר דרכה את ערכי ה NameProvider-עוטפים את הפומפוננטה ב
    <NameProvider>
      <p>in component A </p>
      <B />
    </NameProvider>
  );
};

export default A;
