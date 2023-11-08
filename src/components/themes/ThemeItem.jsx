import React from "react";

export default function ThemeItem({ color, id, changeColor }) {
  return (
    // <img
    //   src={img}
    //   alt=""
    //   className="theme__img"
    //   onClick={() => changeColor(color)}
    // />
    <div className={`theme${id}`} onClick={() => changeColor(color)}></div>
  );
}
