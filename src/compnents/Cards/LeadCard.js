import React from "react";
import CardLayout from "./CardLayout";

const LeadCard = () => {
  return (
    <CardLayout>
      <h2 className="text-xs font-medium mb-[30px]">Lead Conversion Rate</h2>
      <div className="flex justify-between pb-[40px]">
        <ul class="max-w-md space-y-3 list-disc list-inside dark:text-gray-400 w-[50%]">
          <li className="marker:text-teal-600 font-medium text-[14px]">
            Lead to Call <span className="ml-[30px]">16.9%</span>
          </li>
          <li className="marker:text-teal-600 font-medium text-[14px]">
            Lead to Meeting <span className="ml-[10px]">22.28%</span>
          </li>
        </ul>
        <ul class="max-w-md space-y-3 list-disc list-inside dark:text-gray-400 w-[50%]">
          <li className="marker:text-teal-600 font-medium text-[14px]">
            Lead to Viewing <span className="ml-[20px]">52.95%</span>
          </li>
          <li className="marker:text-teal-600 font-medium text-[14px]">
            Lead Unresponsive <span className="ml-[10px]">6.87%</span>
          </li>
        </ul>
      </div>
    </CardLayout>
  );
};

export default LeadCard;
