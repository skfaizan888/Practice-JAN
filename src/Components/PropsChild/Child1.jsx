import React from "react";

export const Child1 = (props) => {
  return (
    <div>
      <h1>This is Child 1</h1>
      <p>
        Data: <h3>{props.data}</h3>{" "}
      </p>
    </div>
  );
};
