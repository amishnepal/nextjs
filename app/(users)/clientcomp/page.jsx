"use client";

import { useState, useEffect } from "react";
import { Counter } from "./Counter";

const URL = "https://jsonplaceholder.typicode.com/posts";

export const ClientComp = () => {
  const [postData, setPostData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    console.log(data);
    setPostData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Client Comp</h1>

      <button
        onClick={() => alert("hii")}
        className="bg-amber-400 text-black p-5"
      >
        Click Me
      </button>
 
      <Counter/>
      <ul className="grid grid-cols-3 gap-5">
        {postData.map((curElem) => (
          <li key={curElem.id}>{curElem.body}</li>
        ))}
      </ul>
    </>
  );
};

export default ClientComp;