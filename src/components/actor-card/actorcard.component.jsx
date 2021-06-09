import React from "react";
import "./actorcard.styles.scss";
function ActorCard({ actor: { actor_id, first_name } }) {
  return (
    <div className="actor-card">
      <div className="actor-image">
        <img
          src={`https://robohash.org/${actor_id}?set=set5&size=100x100`}
          alt={actor_id}
        ></img>
      </div>
      <div className="details">
        <span className="actor-name">{first_name}</span>
        <h2>{actor_id}</h2>
      </div>
    </div>
  );
}

export default ActorCard;
