import React from "react";
import "./actorcard.styles.scss";
import { Link } from "react-router-dom";
function ActorCard({ actor: { actor_id, first_name } }) {
  return (
    <Link to={`/actor/${actor_id}`}>
      <div className="actor-card">
        <div className="actor-image">
          <img
            src={`https://robohash.org/${actor_id}?set=set5&size=100x100`}
            alt={actor_id}
          ></img>
        </div>
        <div className="details">
          <span className="actor-name">{first_name}</span>
          <span>{actor_id}</span>
        </div>
      </div>
    </Link>
  );
}

export default ActorCard;
