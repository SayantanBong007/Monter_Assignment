import { reportsData } from "@/constants/reportsData";
import React from "react";
import { FileDown } from "lucide-react";

const ReportItem = () => {
  return (
    <div className="flex flex-col gap-5 h-[55rem] w-full mt-2">
      {reportsData.map((report) => (
        <div className="flex flex-row  w-full gap-12" key={report.id}>
          <div className="flex flex-col gap-1  ml-5 flex-1 width-[10%] mr-10 ">
            <h1 className="font-semibold text-gray-600">{report.date}</h1>
            <p className="text-sm text-gray-500">{report.time}</p>
          </div>
          <div className=" flex-7 w-[70%] ml-3 font-semibold text-gray-700 ">
            {report.reportName}
          </div>
          <div className="ml-3 flex-1 w-[10%]">
            <FileDown />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportItem;
