import React from "react";

export const GrandChild = (props) => {
  return (
    <div className="Grand-child">
      <h1>This is GrandChild 1 </h1>
      <p>Data: {props.data}</p>
    </div>
  );
};
