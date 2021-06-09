import React, { useState, useEffect } from "react";
import "./search.styles.scss";
import Pagination from "../../components/pagination/pagination.component";
import ActorsCollection from "../../components/actorscollection/actors-collection.component";
import axios from "axios";

const Search = () => {
  const [actors, setactors] = useState([]);
  const [searchfield, setsearchfield] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [actorsPerPage] = useState(10);

  useEffect(() => {
    const fetchactors = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:9000/api/actors");
      setactors(res.data);
      setLoading(false);
    };

    fetchactors();
  }, [searchfield]);

  // Get current posts
  const indexOfLastactor = currentPage * actorsPerPage;
  const indexOfFirstactor = indexOfLastactor - actorsPerPage;
  const currentactors = actors.slice(indexOfFirstactor, indexOfLastactor);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(actors.length);
  return (
    <div className="Search-page">
      <div className="description">Enter actor name to search</div>
      <div className="search-feature">
        <input
          className="search-input"
          type="text"
          placeholder="Type here"
        ></input>
        <button className="search-button">Search</button>
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
