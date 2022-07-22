import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",

        background: color,
        border: color,
      }}
    >
      <button onClick={() => setColor("skyblue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("solid black 5px")}>border</button>
      <button onClick={() => setColor("dotted black 5px")}>border1</button>
      <button onClick={() => setColor("double black 5px")}>border2</button>
      <button onClick={() => setColor("groove black 5px")}>border3</button>
      <h1>{color} </h1>
    </div>
  );
};

export default Color;
