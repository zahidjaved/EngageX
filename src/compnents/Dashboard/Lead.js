import React, { useEffect , useState } from "react";
import AsideBar from "./AsideBar";
import Topbar from "./Topbar";
import LeadPageCards from "../Cards/LeadPageCards";

const Lead = () => {

  useEffect(() => {
    document.title = "Lead";
  }, []);
  return (
    <>
      {/* Asidebar */}
      <AsideBar />
      <main className="w-[84%] ml-auto pt-[39px] pr-[42px] ">
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
                Lead
              </a>
            </li>
          </ol>
        </nav>
        {/* lead cards section */}
        <div className="mt-[26px] flex flex-wrap justify-between lg:pr-[2px] 2xl:pr-[60px] ">
          <h3>this change</h3>
          <LeadPageCards />
        </div>
      </main>
    </>
  );
};

export default Lead;
