import React from "react";
import CardLayout from "./CardLayout";

const UsageCard = () => {
  return (
    <CardLayout>
      <h2 className="text-right font-medium text-[12px] text-cyan-500">
        Upgrade
      </h2>
      <h2 className="font-medium text-[16px] mb-[16px]">Subscription Usage</h2>
      <div className="flex justify-between mb-[7px]">
        <div className="flex w-[50%]">
          <p className=" font-medium text-[12p]">Consumed</p>
          <p className=" font-medium text-[12p]">821 / 1500</p>
        </div>
        <div className="flex w-[50%] justify-end">
          <p className=" font-medium text-[12p]">Remaining</p>
          <p className=" font-medium text-[12p]">1878 Available</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium dark:text-white text-right w-full">
            54%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-cyan-600 h-[10px] rounded-full"
            style={{ width: "54%" }}
          ></div>
        </div>
      </div>
    </CardLayout>
  );
};

export default UsageCard;
