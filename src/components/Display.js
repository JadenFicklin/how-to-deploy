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

  const handleClick = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://serverdatabasee.herokuapp.com/api/addComment",
      data: {
        comment: comment,
      },
    })
      .then((res) => setComment(""))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          placeholder="enter comment here"
          onChange={(e) => setComment(e.target.value)}
        />
        <button>add comment</button>
      </form>
      {array.map((item) => (
        <h5 key={item.id}>{item.testcomment}</h5>
      ))}
    </>
  );
}

export default Display;
