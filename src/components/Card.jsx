import React, { useState } from "react";
import "./Card.css";
const Card = (p) => {
  // useState
  const [likes, setLikes] = useState(0);
  const giveLikes = () => {
    setLikes(likes + 1);
  };
  return (
    <>
      <article className="card">
        {p.title}
        {p.children}
        <p>{likes}</p>
        <button onClick={giveLikes}>Like</button>
      </article>
    </>
  );
};

export default Card;
