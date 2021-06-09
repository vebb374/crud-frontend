import React from "react";
import "./pagination.styles.scss";
const Pagination = ({ actorsPerPage, totalactors, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalactors / actorsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-component">
      <div className="pagination">
        {pageNumbers.map((number) => (
          <span key={number} className="page-number">
            <span onClick={() => paginate(number)} className="page-link">
              {number}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
