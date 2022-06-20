import React from "react";
import "./pagination.css";
import left from "../Content/icons/ArrowLeft.svg";
import right from "../Content/icons/ArrowRight.svg";

const Pagination = () => {
  return (
    <div className="container__pagination">
      <div className="block__pagination">
        <img src={left} alt="pic" />
        <div>Prev</div>
      </div>
      <div>1 2 3</div>
      <div className="block__pagination">
        <div>Next</div>
        <img src={right} alt="pic" />
      </div>
    </div>
  );
};

export default Pagination;
