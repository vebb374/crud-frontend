import React from "react";

function ActorDetails({
  actor: { actor_id, first_name, last_name, last_updated },
}) {
  return (
    <div className="Actor-details">
      <div className="actor-image">
        <img src=""></img>
      </div>
    </div>
  );
}

export default ActorDetails;
