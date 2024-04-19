"use client";
import React, { useState } from "react";
import { Filter, SquareX } from "lucide-react";

import ReportTable from "@/components/ReportTable";
import ReportItem from "@/components/ReportItem";
import Footer from "@/components/Footer";
import { reportsData } from "@/constants/reportsData";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center p-2 w-full px-3">
      <div className="bg-white m-2 rounded-lg w-full flex justify-center items-center flex-col shadow-lg">
        <h1 className="font-bold text-2xl mt-2 mb-4 text-gray-600">
          Recently Generated Reports
        </h1>
        <div className="absolute top-0 right-0 m-5 flex justify-end gap-5 pt-3 pr-2 ">
          <Filter />
          <SquareX />
        </div>

        <div className="bg-gray-100 w-full ">
          <ReportTable />
        </div>
        <div className="w-full ">
          <ReportItem
            reportsData={reportsData}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
          />
        </div>
        <div className="w-full">
          <Footer
            reportsData={reportsData}
            currentPage={currentPage}
            totalPages={Math.ceil(reportsData.length / rowsPerPage)}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
