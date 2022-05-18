import React from "react";

const Pagination = ({ coursesPerPage, totalCourses, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalCourses / coursesPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => {
                    return(
                        <li key={number} className="page-item">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a onClick={() => paginate(number)}  className="page-link">
                            {number}
                        </a>
                    </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default Pagination;