import React from "react";
import { Filter, SquareX } from "lucide-react";
import { reportsData } from "@/constants/reportsData";
import ReportTable from "@/components/ReportTable";

const Page = () => {
  return (
    <div className="bg-gray-200 h-full flex flex-col items-center p-2 w-full">
      <div className="bg-white m-2 rounded-lg w-full flex justify-center items-center flex-col">
        <h1 className="font-bold text-2xl mt-2 mb-4 text-gray-700">
          Recently Generated Reports
        </h1>
        <div className="absolute top-0 right-0 m-5 flex justify-end gap-2 pt-3  ">
          <Filter />
          <SquareX />
        </div>

        <div className="bg-gray-100 w-full ">
          <ReportTable />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
