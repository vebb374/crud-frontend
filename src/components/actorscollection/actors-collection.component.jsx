import React from "react";
import "./actors-collection.styles.scss";
import Actorcard from "../actor-card/actorcard.component";
const ActorsCollection = ({ actors, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="actors-view">
      {actors.map((actor) => (
        <div key={actor.actor_id} className="actor-card-view">
          <Actorcard actor={actor}></Actorcard>
        </div>
      ))}
    </div>
  );
};

export default ActorsCollection;
