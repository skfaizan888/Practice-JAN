import React from "react";
import "./Times.css";
import { useState } from "react";

const Times = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  const [currentTime, setTime] = useState(time);

  const UpdateTime = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <div>
      <h2> {currentTime} </h2>
      {/* <h2> {date} </h2> */}
    </div>
  );
};

export default Times;
