import React from "react";
import Child from "./Child";

const Parent1 = () => {
  return (
    <div>
      <h1>This is Parent Comp</h1>
      <Child item={"props Data"} />
    </div>
  );
};

export default Parent1;
