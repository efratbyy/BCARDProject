import React from "react";
import "./styleModule.css";

const StyleModule = () => {
  //עיצוב בעזרת שימוש בקובץ חיצוני (styleModule.css)
  return (
    <>
      <div className="red">StyleModule</div>
      <p className="blue">paragraph</p>
      <hr />
      <article>
        <h1 className="blue">title</h1>
      </article>
    </>
  );
};

export default StyleModule;
