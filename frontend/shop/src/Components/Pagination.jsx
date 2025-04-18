import React from 'react';
// import './Pagination.scss'; // 스타일은 따로

const Pagination = ({ pageInfo, onPageChange }) => {
  const { number, totalPages } = pageInfo;
  const currentPage = number + 1;

  const MAX_PAGES = 10;
  const startPage = Math.floor((currentPage - 1) / MAX_PAGES) * MAX_PAGES + 1;
  const endPage = Math.min(startPage + MAX_PAGES - 1, totalPages);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page - 1); // 서버는 0부터 시작하니까
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>PREV</button>
      {Array.from({ length: endPage - startPage + 1 }, (_, idx) => {
        const page = startPage + idx;
        return (
          <button
            key={page}
            className={page === currentPage ? 'active' : ''}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        );
      })}
      <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>NEXT</button>
    </div>
  );
};

export default Pagination;
