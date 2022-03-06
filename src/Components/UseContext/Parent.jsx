import React from "react";
import ChildOne from "./ChildOne";

const Parent = () => {
  const name = "Jhon Wick";
  return (
    <div>
      <h1>This is Parent</h1>
      <ChildOne value={name} />
    </div>
  );
};

export default Parent;
