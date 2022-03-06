import React, { useEffect, useState } from "react";
// import { data } from "../../Service/data";
import { NewApiCard } from "./NewApiCard";
import axios from "axios";
import "./NewApi.css";

export const NewApi = () => {
  const [data, setData] = useState([]);
  const [prod, setProd] = useState(data);
  const [search, setSearch] = useState("");
  const handleclick = () => {
    const fildBike = data.filter((item) =>
      item.title.toUpperCase().includes(search.toUpperCase())
    );
    search !== "" ? setProd(fildBike) : setProd(data);
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // console.log(res);
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    handleclick();
  }, [search, data]);

  return (
    <div className="content-list">
      <div>
        <h2>
          <u> API Search Bar</u>
        </h2>
      </div>
      <div className="content-srch">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search "
          style={{ width: "500px" }}
        />

        <button onClick={handleclick}>Search</button>
      </div>
      <div className="content-cards">
        {prod.map((item, index) => (
          <NewApiCard item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
