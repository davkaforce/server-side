import React, { useState, useEffect } from "react";

export default function frontend() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getBackEndData() {
      try {
        const res = await fetch("http://localhost:4000/api/blogs");
        const article = await res.json();
        setData(article);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getBackEndData();
  }, []);

  return (
    <div>
      {data?.title}
      <p>hihi</p>
    </div>
  );
}
