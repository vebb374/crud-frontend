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
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
