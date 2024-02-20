import React, { useState } from "react";
import { LeadPageCardsdata } from "../Data";

const LeadPageCards = () => {
  const [showModal, setShowModalcard] = useState(false);
  return (
    <>
      {LeadPageCardsdata.map((data, id) => {
        return (
          <div
            className="pt-[13px] pl-[12px] pb-[4px] border-2 border-zinc-300 rounded-md pr-[6px] mb-[12px] w-[95%] sm:w-[48%] md:w-[49%] lg:w-[32%] xl:w-[23.4%] 2xl:w-[19.2%]"
            key={id}
          >
            <p className="text-end text-[12px] font-medium leading-[0px]">
              <span>
                <svg
                  className="w-[10px] h-[13px] inline-block mr-[4px]"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.08203 11.8206H7.91536M0.832031 2.79492L2.08203 9.56415H7.91536L9.16536 2.79492L6.66536 6.74364L4.9987 2.79492L3.33203 6.74364L0.832031 2.79492Z"
                    stroke="#DAC82F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {data.level}
            </p>
            <h2 className="capitalize text-[14px] font-normal leading-[0px] mb-[12px]">
              {data.name}
            </h2>
            <h3 className="capitalize text-[12px] font-normal mb-[20px]">
              {data.department}
            </h3>
            <div className="flex justify-between">
              <ul className="flex">
                <li className="capitalize text-[12px] font-medium mr-[4px]">
                  Status:
                </li>
                <li className="capitalize text-[12px] font-normal">
                  Meeting Request
                </li>
              </ul>
              <ul className="flex">
                <li className="capitalize text-[12px] font-medium mr-[4px]">
                  Budget:
                </li>
                <li className="capitalize text-[12px] font-normal">
                  {data.budget}{" "}
                </li>
              </ul>
            </div>
          </div>
        );
      })}

{/* MODAL ADD BUTTON */}
      <button
        className="block 0 focus:outline-none capitalize font-medium text-sm px-5 py-2.5 text-center w-[72px] h-[72px] bg-[#C7F4F4] rounded-full fixed right-2 bottom-1"
        type="button"
        onClick={() => setShowModalcard(true)}
      >
        +
      </button>


          {/* Modal to add new checkbox */}
          {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalcard(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalcard(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalcard(false)}
                  >
                    Add new checkbox
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default LeadPageCards;
