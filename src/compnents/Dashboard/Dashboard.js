import React, { useEffect } from "react";
import Topbar from "./Topbar";
import Cards from "../Cards/Cards";
import CalendarCard from "../Cards/CalenderCard";
import ProprtyCard from "../Cards/ProprtyCard";
import CardLayout from "../Cards/CardLayout";
import { CardLayoutNew } from "../Cards/CardLayout";
import UsageCard from "../Cards/UsageCard";
import LeadCard from "../Cards/LeadCard";
import ProgressbarCard from "../Cards/ProgressbarCard";
import DatePickerCard from "../Cards/DatePickerCard";
import CheckboxesCard from "../Cards/CheckboxesCard";
import AsideBar from "./AsideBar";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      {/* Asidebar */}
      <AsideBar />
      <main className="w-[84%] ml-auto pt-[39px]  pr-[42px] text-[#606465]">
        {/* topbar */}
        <Topbar />
        {/* breadcrumb */}
        <nav class="flex mb-[12px]" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
          </ol>
        </nav>
        <div className="flex justify-between">
          {/* dashboard left side */}
          <div className="w-[60%] text-slate-600">
            {/* cards */}
            <div className="flex justify-betweens">
              <Cards />
            </div>
            {/* calender and property */}
            <div className="flex justify-between">
              {/* calender */}
              <CalendarCard />
              {/* property */}
              <div className="w-[50%] pt-[14px] pl-[21px] pb-[6px] border-2 border-zinc-300 rounded-md mr-[15px] pr-[16px]">
                {/* property card */}
                <h2 className="text-xs font-medium mb-[35px]">
                  Property Insights
                </h2>
                <ProprtyCard />
              </div>
            </div>
            {/* Usage */}
            <div className="flex justify-between ">
              <div className="mt-[-148px] w-[50%]">
                <UsageCard />
              </div>

              {/* Lead conversion  */}
              <div className="w-[50%] mt-[24px]">
                <LeadCard></LeadCard>
              </div>
            </div>
            <div className="flex justify-between">
              {/* Progress card */}
              <div className="mt-[-160px] w-[50%]">
                <ProgressbarCard />
              </div>
              {/* External lead */}
              <div className="w-[49%] pt-[14px] pl-[21px] pb-[6px] border-2 border-zinc-300 rounded-md pr-[16px] mr-[11px] mt-[15px]">
                <h2 className="text-xs font-medium mb-[35px]">
                  External Leads Performance
                </h2>
                <ProprtyCard />
              </div>
            </div>

            {/* Broadcast Performance */}
            <div className="w-[49%] pt-[14px] pl-[21px] pb-[6px] border-2 border-zinc-300 rounded-md pr-[16px] mt-[-328px]">
              <h2 className="text-xs font-medium mb-[35px]">
                Broadcast Performance
              </h2>
              <ProprtyCard />
            </div>
          </div>
          {/*dashboard right side */}
          <div className="w-[40%]">
            <DatePickerCard />
            <div className="">
              <CheckboxesCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
