import React from "react";

const ReportTable = () => {
  return (
    <div className=" flex flex-row p-2 font-semibold text-gray-500 ">
      <div className="ml-5 flex-1 width-[10%] mr-10">Date</div>
      <div className="flex-7 w-[70%] ml-8"> Report Name</div>
      <div className=" ml-10 flex-1 w-[10%]"> Download</div>
    </div>
  );
};

export default ReportTable;
