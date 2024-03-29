import React, { useEffect, useState } from "react";
import AsideBar from "./AsideBar";
import Topbar from "./Topbar";
import LeadPageCards from "../Cards/LeadPageCards";

const Lead = () => {
  // FORM
  const [formData, setFormData] = useState({
    levell: "",
    namee: "",
    depart: "",
    budgett: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.title = "Lead";
  }, []);
  return (
    <>
      {/* Asidebar */}
      <AsideBar />
      <main className="3xl:w-[84%] lg:w-[77%] ml-auto 3xl:pt-[39px] 2xl:pt-[36px] lg:pt-[34px] 3xl:pr-[42px] 2xl:pr-[38px] lg:pr-[18px] text-[#606465] ">
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
                Lead
              </a>
            </li>
          </ol>
        </nav>
        {/* lead cards section */}
        <div className="mt-[26px] flex flex-wrap justify-between lg:pr-[2px] 2xl:pr-[60px] ">
          <LeadPageCards />
        </div>
      </main>
    </>
  );
};

export default Lead;
