import axios from "axios";
import React, { useEffect, useState } from "react";

const FackApi = () => {
  const [data, setData] = useState([]);

  const GetApi = async () => {
    const Results = await axios.get("https://fakestoreapi.com/products");
    setData(Results.data);
  };
  //   console.log(Result.data);
  useEffect(() => {
    GetApi();
  }, []);
  return (
    <div>
      <table border="">
        <tr style={{ border: "1px solid black" }}>
          <th>Title</th>
          <th>Decription</th>
          <th>Price</th>
        </tr>
        {data.map((item) => {
          return (
            <div>
              <tr>
                <td> {item.title.substr(0, 15) + "..."}</td>
                <td>{item.description.substr(0, 20) + "..."}</td>
                <td>{item.price}</td>
              </tr>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default FackApi;
