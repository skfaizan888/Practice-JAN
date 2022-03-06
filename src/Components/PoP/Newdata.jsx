import React from "react";
import { useState } from "react";
import "./Newdata.css";

const Newdata = () => {
  const [data, setData] = useState(false);

  const toToggle = () => {
    const schroll = document.documentElement.scrollTop;
    if (schroll > 300) {
      setData(true);
    } else if (schroll < 300) {
      setData(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="Heading-01">
        <h1>Heading 01</h1>
      </div>
      <div className="Heading-02">
        <h1>Heading 02</h1>
      </div>
      <div className="Heading-03">
        <h1>Heading 03</h1>
      </div>
      <div className="Heading-04">
        <h1>Heading 04</h1>
        <i
          onClick={scrollTop}
          style={{ fontSize: "35px" }}
          class="fas fa-chevron-circle-up"
        ></i>
      </div>
    </div>
  );
};

export default Newdata;
