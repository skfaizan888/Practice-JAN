import React, { useState, useEffect } from "react";
import axios from "axios";

const Apitask = () => {
  const [data, setData] = useState([]);
  const getApi = async () => {
    const alldata = await axios.get(
      "https://www.getpostman.com/collections/93d05dee07fc3e3e5091"
    );
    setData(alldata.data);
    // console.log(alldata);
  };
  //   useEffect(() => {
  //     getApi();
  //   });
  return (
    <div>
      <button onClick={getApi}>Shopping</button>
      {data.map((item) => {
        return (
          <div>
            <h2> {item.id} </h2>
            <h2> {item.name} </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Apitask;
