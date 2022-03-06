import React from "react";

function DisplayComp(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "20px",
        width: "250px",
        marginBottom: "20px",
        padding: "10px",
        margin: "60px",
        backgroundColor: "skyblue",

      }}
    >
      <div>
        <span style={{ fontSize: "24px" }}>
          {" "}
          {props.time.h >= 10 ? props.time.h : "0" + props.time.h}
        </span>{" "}
        &nbsp; : &nbsp;
        <span style={{ fontSize: "24px" }}>
          {" "}
          {props.time.m >= 10 ? props.time.m : "0" + props.time.m}
        </span>{" "}
        &nbsp; : &nbsp;
        <span style={{ fontSize: "24px" }}>
          {" "}
          {props.time.s >= 10 ? props.time.s : "0" + props.time.s}
        </span>{" "}

        &nbsp; &nbsp;
      </div>
    </div>
  );
}

export default DisplayComp;
