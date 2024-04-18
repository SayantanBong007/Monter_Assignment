import { reportsData } from "@/constants/reportsData";
import React from "react";
import { FileDown } from "lucide-react";

const ReportItem = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        {reportsData.map((report) => {
          <div className="w-[90%] h-full">
            <div className="flex flex-col gap-1">
              <h1>{report.date}</h1>
              <p>{report.time}</p>
            </div>
            <div className="">{report.reportName}</div>
            <FileDown />
          </div>;
        })}
      </div>
    </div>
  );
};

export default ReportItem;
