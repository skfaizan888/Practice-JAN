import React from "react";
// import ChildFour from "./ChildFour";

const ChildThree = ({ data }) => {
  console.log("Child Three");
  return (
    <div>
      <h1>This is Child Three</h1>
      <h2>Data Received from parent Comp : {data} </h2>
      {/* <ChildFour /> */}
    </div>
  );
};

export default ChildThree;
