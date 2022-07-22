import React from "react";
const CounterB = ({ count, setCount }) => {
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Decreamnt</button>
    </div>
  );
};

export default CounterB;
