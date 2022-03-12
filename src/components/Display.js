import axios from "axios";
import React, { useState, useEffect } from "react";

function Display() {
  const [comment, setComment] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://serverdatabasee.herokuapp.com/api/getComment",
    })
      .then((res) => setArray(res.data))
      .catch((err) => console.log(err));
  }, [comment]);

  return (
    <>
      <h1>Display</h1>
      {array.map((item) => (
        <h5 key={item.id}>{item.testcomment}</h5>
      ))}
    </>
  );
}

export default Display;
