import React, { useState } from "react";
import CounterA from "./CounterA";
import CounterB from "./CounterB";

const CounterParent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CounterA setCounte={setCount} count={count} />
      <CounterB setCount={setCount} count={count} />
    </div>
  );
};

export default CounterParent;
