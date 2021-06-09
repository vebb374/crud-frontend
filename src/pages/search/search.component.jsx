import React, { useState } from "react";
import "./search.styles.scss";
import Pagination from "../../components/pagination/pagination.component";
import ActorsCollection from "../../components/actorscollection/actors-collection.component";
import axios from "axios";

const Search = () => {
  const [actors, setactors] = useState([]);
  const [searchfield, setsearchfield] = useState("");
  const [mode, setmode] = useState("name");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [actorsPerPage] = useState(12);

  const formsubmithandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:9000/api/actors/search${mode}/${searchfield}`
      );
      setactors(res.data);
      setLoading(false);
    } catch {
      alert("no user found try again");
      setLoading(false);
      setactors([]);
    }
  };

  const HandleModeChange = (e) => {
    setmode(e.target.value);
  };
  const SearchFieldChange = (e) => {
    console.log(e.target.value);
    setsearchfield(e.target.value);
  };

  // Get current posts
  const indexOfLastactor = currentPage * actorsPerPage;
  const indexOfFirstactor = indexOfLastactor - actorsPerPage;
  const currentactors = actors.slice(indexOfFirstactor, indexOfLastactor);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Search-page">
      <div className="description">Enter actor name / id to search</div>
      <div className="search-feature">
        <form className="search-form" onSubmit={formsubmithandler}>
          <select
            className="mode-selection"
            name="mode-selection"
            value={mode}
            onChange={HandleModeChange}
          >
            <option className="mode-value" value="name">
              Name
            </option>
            <option className="mode-value" value="id">
              ID
            </option>
          </select>
          <input
            className="search-input"
            type="text"
            placeholder="Type here"
            value={searchfield}
            onChange={SearchFieldChange}
          ></input>
          <input type="submit" className="search-button" value="Submit"></input>
        </form>
      </div>
      <div className="actorscontainer">
        <ActorsCollection actors={currentactors} loading={loading} />
        <Pagination
          actorsPerPage={actorsPerPage}
          totalactors={actors.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Search;
