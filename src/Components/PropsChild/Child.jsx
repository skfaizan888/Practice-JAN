import React, { useState } from "react";
import "./Child.css";
import { FormControl, Button } from "react-bootstrap";
import { GrandChild } from "./GrandChild";

export const Child = (props) => {
  const [text, setText] = useState("");
  return (
    <div className="child">
      <h1>This is Child</h1>
      <p>
        Data ID: <h3> {props.data} </h3>{" "}
      </p>
      <FormControl type="text" onChange={(e) => setText(e.target.value)} />
      <br />
      <Button onClick={() => props.HandleClick(text)}>Submit</Button>
      <GrandChild data={props.data} />
    </div>
  );
};
