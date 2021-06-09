import React, { useState } from "react";
import axios from "axios";
import "./create.styles.scss";
function Createactor({ history }) {
  const [actor, setactor] = useState({
    actor_id: 0,
    first_name: "",
    last_name: "",
  });

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
      const data = await axios
        .post("http://localhost:9000/api/actor/add", actor)
        .then((res) => res.data);
      alert(data.message);
      history.push("/");
    } catch {
      alert("operation failed");
    }
  };

  return (
    <div className="Actor-details">
      <form className="actor-form" onSubmit={formsubmithandler}>
        <input
          className="actor-id form-input"
          type="text"
          name="actor_id"
          placeholder="ID"
          value={actor.actor_id}
          onChange={handlechange}
        ></input>
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
          className="create-button button"
          value="Create Actor"
        ></input>
      </form>
    </div>
  );
}

export default Createactor;
