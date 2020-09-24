import React from "react";

function Boardgame({ name, description_preview, average_user_rating, images }) {
  return (
    <div className="boardgame">
      <img src={images.medium} alt={name}></img>
      <div className="boardgame-info">
        <h3>{name}</h3>
        <span>{(average_user_rating * 20).toFixed(1)}</span>
      </div>
    </div>
  );
}

export default Boardgame;
