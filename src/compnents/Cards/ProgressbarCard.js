import React from "react";
import CardLayout from "./CardLayout";

const ProgressbarCard = () => {
  return (
    <>
      <CardLayout>
        <div className="flex justify-between items-center py-[16px]">
          <h2 className=" font-medium text-[16px] w-[55%] mb-[12px]">
            Total Conversion Rate
          </h2>

          <ul class="max-w-md list-disc dark:text-gray-400 w-[45%] flex justify-between ">
            <li className="marker:text-teal-600 font-medium text-[10px]">
              Completed
            </li>
            <li className="marker:text-teal-600 font-medium text-[10px]">
              Requested
            </li>
            <li className="marker:text-teal-600 font-medium text-[10px]">
              Unresponsive
            </li>
          </ul>
        </div>

        <div className="flex justify-evenly">
          <div className="w-[30%] text-center p-[10px] border-2 border-cyan-700 ">
            34
            <p>Meeting</p>
          </div>
          <div className="w-[30%] text-center p-[10px] border-2 border-cyan-700 ">
            34
            <p>Meeting</p>
          </div>
          <div className="w-[30%] text-center p-[10px] border-2 border-cyan-700 ">
            34
            <p>Meeting</p>
          </div>
        </div>
      </CardLayout>
    </>
  );
};

export default ProgressbarCard;
