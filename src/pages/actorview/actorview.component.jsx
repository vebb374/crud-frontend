import React, { useState, useEffect } from "react";
import axios from "axios";
import "./actorview.styles.scss";
function ActorDetails({ match, history }) {
  const id = match.params.id;
  const [actor, setactor] = useState({
    actor_id: 0,
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9000/api/actors/searchid/${id}`
        );
        setactor(res.data[0]);
      } catch {
        alert("invalid id");
        history.push("/");
      }
    };
    fetchdata();
  }, [id, history]);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setactor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formsubmithandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://localhost:9000/api/actor/edit/${actor.actor_id}`, actor)
        .then((res) => res.data)
        .then((data) => alert(data.message));
    } catch {
      alert("operation failed");
    }
  };
  console.log(actor);

  const deletehandler = async (e) => {
    try {
      await axios
        .delete(`http://localhost:9000/api/actor/delete/${actor.actor_id}`)
        .then((res) => res.data)
        .then((data) => alert(data.message));
      history.push("/");
    } catch {
      alert("operation failed");
    }
  };

  return (
    <div className="Actor-details">
      <div className="actor-image">
        <img
          src={`https://robohash.org/${actor.actor_id}?set=set5&size=200x200`}
          alt={id}
        ></img>
      </div>
      <form className="actor-form" onSubmit={formsubmithandler}>
        <input
          className="first-name form-input"
          type="text"
          name="first_name"
          placeholder="First Name"
          value={actor.first_name}
          onChange={handlechange}
        ></input>
        <input
          className="last-name form-input"
          name="last_name"
          type="text"
          placeholder="Last Name"
          value={actor.last_name}
          onChange={handlechange}
        ></input>
        <input
          type="submit"
          className="update-button button"
          value="Update"
        ></input>
      </form>
      <button className="delete-button button" onClick={deletehandler}>
        Delete
      </button>
    </div>
  );
}

export default ActorDetails;
