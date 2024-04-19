"use client";
import React from "react";

const Footer = ({
  currentPage,
  totalPages,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <div className="flex justify-center items-center p-4 border-t border-gray-300 ">
      <div className="flex items-center font-semibold text-gray-400 pr-20">
        <button
          className="mr-2 px-2 py-1 rounded-md bg-white hover:bg-gray-100"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"< Prev"}
        </button>
        <div className="flex text-gray-400 font-semibold">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <div
                key={pageNumber}
                className={`mx-1 px-3 py-1 rounded-md shadow-md ${
                  pageNumber === currentPage
                    ? "bg-orange-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </div>
            )
          )}
        </div>
        <button
          className="ml-2 px-2 py-1 rounded-md  bg-white hover:bg-gray-100"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          {"Next >"}
        </button>
      </div>
      <div className="flex items-center pl-20">
        <span className="mr-2 text-gray-400 font-semibold">Rows per page:</span>
        <select
          onChange={(e) => onRowsPerPageChange(e)}
          defaultValue={10}
          className="outline outline-1 outline-gray-400 rounded-sm"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
