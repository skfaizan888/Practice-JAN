import React, { useState } from "react";
import { Child } from "./Child";
import { Child1 } from "./Child1";

export const Parents = () => {
  const [data, setData] = useState("No Data");
  const HandleClick = (text) => {
    setData(text);
  };
  return (
    <div className="child2">
      <h1>Parent Component</h1>
      <p>
        Data C1: <h3>{data}</h3>{" "}
      </p>
      <Child HandleClick={HandleClick} data={data} />
      <Child1 data={data} />
    </div>
  );
};
