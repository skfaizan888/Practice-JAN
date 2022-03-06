import React, { useEffect, useState } from "react";
import "./ColorChang.css";

export const ColorChange = () => {
  const [clor, setClor] = useState("skyblue");
  const [time, setTime] = useState(0);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const speed = dist / time;
    speed < 40 && setClor("green");
    speed < 50 && speed > 40 && setClor("orange");
    speed > 50 && setClor("red");
  }, [dist, time]);
  return (
    <div>
      <br />

      <input type="number" onChange={(e) => setDist(e.target.value)} />
      <br />
      <br />
      <input type="number" onChange={(e) => setTime(e.target.value)} />
      <div className="signal" style={{ backgroundColor: clor }}>
        <p>Dist:{dist}</p>
        <p>Time:{time}</p>
      </div>
    </div>
  );
};
