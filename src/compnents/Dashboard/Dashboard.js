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
      <main className="w-[70%] 3xl:w-[84%] 2xl:w-[84%] lg:w-[77%] ml-auto 3xl:pt-[39px] 2xl:pt-[36px] lg:pt-[34px] 3xl:pr-[42px] 2xl:pr-[38px] lg:pr-[18px] text-[#606465]">
        {/* topbar */}
        <Topbar />
        {/* breadcrumb */}
        <nav className="flex mb-[12px]" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
          </ol>
        </nav>
        <div className="flex justify-between">
          {/* dashboard left side */}
          <div className="3xl:w-[60%] 2xl:w-[60%] xl:w-[60%] lg:w-[68%] text-slate-600">
            {/* cards */}
            <div className="flex flex-wrap justify-betweens">
              <Cards />
            </div>
            {/* calender and property */}
            <div className="flex justify-between">
              {/* calender */}
              <CalendarCard />
              {/* property */}
              <div className="w-[50%] pt-[14px] xl:pl-[21px] lg:pl-[13px] pb-[6px] border-2 border-zinc-300 rounded-md xl:mr-[15px] lg:mr-[6px] pr-[16px]">
                {/* property card */}
                <h2 className="text-xs font-medium xl:mb-[35px] lg:mb-[24px]">
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
          <div className="3xl:w-[40%] 2xl:w-[40%] xl:w-[40%] lg:w-[32%] ">
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
