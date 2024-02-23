import React from "react";

const ProprtyCard = () => {
  return (
    <div className="flex justify-between xl:pb-[30px] lg:pb-[2px]">
      <div className="w-[40%]">
        <h2 className="xl:text-[14px] lg:text-[11px] font-medium mb-[35px]">Property Title</h2>
        <h2 className="xl:text-[14px] lg:text-[8px] font-medium mb-[35px]">
          Beachfront Villas - Damac
        </h2>
        <h3 className="xl:text-[14px] lg:text-[8px]  font-medium mb-[35px]">
          Elite Towers - Abu Dhabi
        </h3>
        <h3 className="xl:text-[14px] lg:text-[8px]  font-medium mb-[35px]">
          Dubai Marina - Damac
        </h3>
      </div>

      <div className="w-[24%]">
        <h2 className="xl:text-[14px] lg:text-[11px] font-medium mb-[35px]">Lead Interaction</h2>
        <h2 className="text-[14px] font-medium mb-[35px]">422</h2>
        <h3 className="text-[14px] font-medium mb-[35px]">334</h3>
        <h3 className="text-[14px] font-medium mb-[35px]">233</h3>
      </div>

      <div className="w-[24%]">
        <h2 className="xl:text-[14px] lg:text-[11px] font-medium mb-[16px]">Viewing Rate</h2>
        <h2 className="text-[14px] font-medium mb-[16px]">
          <div className="flex justify-between mb-1">
            <span className="text-[14px] font-medium dark:text-white text-right w-full">
              76%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className=" dark:bg-gray-700 h-2.5 rounded-full bg-cyan-600"
              style={{ width: "76%" }}
            ></div>
          </div>
        </h2>
        <h3 className="text-[14px] font-medium mb-[16px]">
          <div className="flex justify-between mb-1">
            <span className="text-[14px] font-medium dark:text-white text-right w-full">
              53%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className=" dark:bg-gray-700 h-2.5 rounded-full bg-cyan-600"
              style={{ width: "53%" }}
            ></div>
          </div>
        </h3>
        <h3 className="text-[14px] font-medium mb-[16px]">
          <div className="flex justify-between mb-1">
            <span className="text-[14px] font-medium dark:text-white text-right w-full">
              88%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
            <div
              className=" dark:bg-gray-700 h-2.5 rounded-full bg-cyan-600"
              style={{ width: "88%" }}
            ></div>
          </div>
        </h3>
      </div>
    </div>
  );
};

export default ProprtyCard;
