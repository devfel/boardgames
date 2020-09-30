import React from "react";

function Boardgame({ name, description_preview, average_user_rating, images }) {
  const setRatingClass = (rating) => {
    if (rating >= 80) {
      return "high";
    } else if (rating >= 60) {
      return "medium";
    } else {
      return "low";
    }
  };

  return (
    <div className="boardgame">
      <img src={images.medium} alt={name}></img>
      <div className="boardgame-info">
        <h3>{name}</h3>
        <span className={`tag ${setRatingClass(average_user_rating * 20)}`}>
          {(average_user_rating * 20).toFixed(0)}
        </span>
      </div>

      <div className="boardgame-desc">
        <h2>Description:</h2>
        <p>{description_preview}</p>
      </div>
    </div>
  );
}

export default Boardgame;
