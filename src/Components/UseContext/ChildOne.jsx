import React from "react";
import ChildTwo from "./ChildTwo";

const ChildOne = (props) => {
  console.log("Child One");
  return (
    <div>
      <h1>This is Child One</h1>
      <ChildTwo test={50} value={props.value} />
    </div>
  );
};

export default ChildOne;
