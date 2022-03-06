import React from "react";
import { useState } from "react";
import "./Count.css";

const Counts = () => {
  const [parent, setParent] = useState(0);
  const [alod, setAlod] = useState(0);
  const [child, setChild] = useState(0);
  return (
    <div className="content-new-data">
      <div>
        <span>Parent</span>
        <i onClick={() => setParent(parent + 1)} class="fas fa-angle-left"></i>
        <span> {parent} </span>
        <i onClick={() => setParent(parent - 1)} class="fas fa-angle-right"></i>
      </div>
      <div>
        <span>Alod</span>
        <i onClick={() => setAlod(alod + 1)} class="fas fa-angle-left"></i>
        <span> {alod} </span>
        <i onClick={() => setAlod(alod - 1)} class="fas fa-angle-right"></i>
      </div>
      <div>
        <span>Child</span>
        <i onClick={() => setChild(child + 1)} class="fas fa-angle-left"></i>
        <span> {child} </span>
        <i onClick={() => setChild(child - 1)} class="fas fa-angle-right"></i>
      </div>
    </div>
  );
};

export default Counts;
