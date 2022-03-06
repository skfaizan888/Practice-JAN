import React from "react";
import ChildThree from "./ChildThree";

const ChildTwo = ({ test, value }) => {
  console.log("Child Two");
  return (
    <div>
      <h1>This is Child Two</h1>
      {/* <h2>{value}</h2> */}
      <ChildThree data={value} />
    </div>
  );
};

export default ChildTwo;
