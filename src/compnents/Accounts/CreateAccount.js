import React, { useEffect } from 'react';
import AccountsSidebar from "./AccountsSidebar";
import LeafLogo from "./LeafLogo";
import { Outlet, Link } from "react-router-dom";



const CreateAccount  = () => {
  useEffect(() => {
    document.title = 'Create Account';
  }, []);
  return (
    <>
      <AccountsSidebar />
    {/* main  */}
      <main className="w-[376px] m-auto ] pt-[99px]">
        <LeafLogo text="Create Account"/>
       {/* form and buttons */}
        <div className="w-[405px]  ">
          <form className="w-full max-w-sm ml-[-62px]">
            <div className=" border-b border-gray-300 py-1 mb-9 w-[404px]">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="First Name"
                aria-label="First Name"
              />
            </div>
            <div className=" border-b border-gray-300 py-1 mb-9 w-[404px]">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="First Name"
                aria-label="Last Name"
              />
            </div>
            <div className=" border-b border-gray-300 py-1 mb-9 w-[404px] ml-auto">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Email Address"
                aria-label="Last Name"
              />
            </div>
            <div className=" border-b border-gray-300 py-1 mb-9 w-[404px] ml-auto">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Whatsapp Business Number"
                aria-label="Last Name"
              />
            </div>
            <div className=" border-b border-gray-300 py-1 mb-9 w-[404px] ml-auto">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="Choose Password"
                aria-label="Last Name"
              />
            </div>
            <div className=" border-b border-gray-300 py-1 mb-9 w-[404px] ml-auto">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="Re-Enter Password"
                aria-label="Last Name"
              />
            </div>
          </form>

          <div className="w-full ml-[-43px]">
            <a
              className="px-[125px] py-[9px] mb-[21px] bg-sky-300 rounded-lg  inline-block font-bold text-lg text-white"
              href="#"
            >
              Create Account
            </a>
            <p className="text-base font-normal text-slate-400">
              Already have an account?
          <Link to="/login">
          <span className="inline-block ml-2 text-sky-400">Log in </span>
          </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateAccount;
